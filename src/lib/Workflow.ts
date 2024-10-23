import * as yaml from 'js-yaml';
import { Constants } from './Constants';
import { Construct } from './Construct';
import { IMappable } from './IMappable';
import { Input } from './Input';
import { IStep } from './IStep';
import { IWorkflowProps } from './IWorkflowProps';
import { Output } from './Output';
import { Requirement } from './Requirement';
import { Scatter } from './Scatter';
import { Shortify } from './Shortify';
import { SynthFiles } from './SynthFiles';
import { StepClass } from './ToolClass';
import { WdkUtils } from './WdkUtils';


export class Workflow extends Construct implements IStep, IMappable {

  public static basicProps(): IWorkflowProps {
    return {
      cwlVersion: Constants.cwlVersion,
    };
  }

  private _props: IWorkflowProps;
  private _steps: IStep[] = [];
  private _stepClass: StepClass = StepClass.WORKFLOW;


  constructor(scope: any, id: string, props?: IWorkflowProps) {
    super(scope, id);
    if (!props) {
      props = Workflow.basicProps();
    }
    this._props = props;
  }

  get fileName(): string {
    return `${this.id}.cwl`;
  }

  hasSteps(): boolean {
    return true;
  }

  get stepClass(): StepClass {
    return this._stepClass;
  }

  set stepClass(newClass: StepClass) {
    this._stepClass = newClass;
  }


  public get props(): IWorkflowProps {
    return this._props;
  }

  public get inputs(): Input[] {
    return this.nodesOf(Input) as Input[];
  }

  get scatter(): Scatter | undefined {
    return this.nodeOf(Scatter) as Scatter;
  }

  public get steps(): IStep[] {
    return this._steps;
  }

  public get linkedInputs(): Input[] {
    return this.inputs.filter(node => node.linked);
  }

  public get outputs(): Output[] {
    return this.nodesOf(Output) as Output[];
  }

  public get linkedOutputs(): Output[] {
    return this.outputs.filter(node => node.linked);
  }

  public get requirements(): Requirement[] {
    return this.nodesOf(Requirement) as Requirement[];
  }

  addStep(step: IStep) {
    this._steps.push(step);
  }

  toMap(): { [key: string]: any } {
    const wData: { [key: string]: any } = {
      class: this.stepClass.toString(),
      cwlVersion: this.props.cwlVersion ? this.props.cwlVersion : Constants.cwlVersion,
      inputs: {},
      outputs: [],
      requirements: {},
      steps: {},
    };

    // Adding requirements
    const requirements: { [key: string]: any } = {};
    for (const requirement of this.requirements) {
      requirements[requirement.requirementType] = requirement.toMap();
    }
    wData.requirements = requirements;

    // Adding inputs
    const inputs: { [key: string]: any } = {};
    for (const input of this.inputs) {
      let inputMap = input.toMap();
      inputs[input.id] = Shortify.input(inputMap);
    }
    wData.inputs = inputs;

    // Adding steps
    const steps: { [key: string]: any } = {};
    for (const step of this.steps) {
      const runName = step.fileName;
      const stepData = this.createWorkflowStepMap(step, runName);
      steps[step.id] = stepData;
    }

    wData.steps = steps;

    // Adding outputs
    const workflowOutputs: { [key: string]: any }[] = [];
    for (const output of this.outputs) {
      const outputData: { [key: string]: any } = {};
      outputData.id = output.id;
      outputData.type = output.type.toString();
      outputData.outputSource = output.link.idAsReference;
      workflowOutputs.push(outputData);
    }

    wData.outputs = workflowOutputs;

    return wData;
  }

  private createWorkflowStepMap(step: IStep, runName: string): { [key: string]: any } {
    const stepData: { [key: string]: any } = {};
    // creating in links
    const inLinks: { [key: string]: any } = {};
    for (const input of step.linkedInputs) {
      inLinks[input.id] = input.link.idAsReference;
    }
    stepData.in = inLinks;
    // creating out links
    const outLinks: string[] = [];
    for (const output of step.linkedOutputs) {
      outLinks.push(output.id);
    }
    stepData.out = outLinks;
    stepData.run = runName;

    if (step.scatter) {
      const scatter = step.scatter;
      if (scatter.ids.length == 1) {
        stepData.scatter = scatter.ids[0];
      } else {
        stepData.scatter = step.scatter.ids;
        stepData.method = step.scatter.method;
      }
    }
    return stepData;
  }


  serialize(dirPath: string): SynthFiles {
    const synthInfo = WdkUtils.createSynthInfo(this, dirPath);
    const wData: { [key: string]: any } = {};
    wData.class = this.stepClass.toString();
    wData.cwlVersion = this.props.cwlVersion;
    // Adding requirements
    const requirements: { [key: string]: any } = {};
    for (const requirement of this.requirements) {
      requirements[requirement.requirementType] = requirement.toMap();
    }
    wData.requirements = requirements;
    // Adding inputs
    const inputs: { [key: string]: any } = {};
    for (const input of this.inputs) {
      let type = input.type.toString();
      if (input.optional) {
        type += '?';
      }
      inputs[input.id] = type;
    }
    wData.inputs = inputs;
    // Adding steps
    const steps: { [key: string]: any } = {};
    for (const step of this.steps) {
      const sf: SynthFiles = step.serialize(dirPath);
      synthInfo.addAsAttachment(sf);
      const stepData = this.createWorkflowStepMap(step, WdkUtils.getFileBasename(sf.main));
      steps[step.id] = stepData;
    }
    wData.steps = steps;
    // Adding outputs
    const workflowOutputs: { [key: string]: any }[] = [];
    for (const output of this.outputs) {
      const outputData: { [key: string]: any } = {};
      outputData.id = output.id;
      outputData.type = output.type.toString();
      outputData.outputSource = output.link.idAsReference;
      workflowOutputs.push(outputData);
    }
    wData.outputs = workflowOutputs;
    const yamlString = yaml.dump(wData, { noRefs: true });
    WdkUtils.writeToFile(yamlString, synthInfo.main);
    return synthInfo;
  }

}
