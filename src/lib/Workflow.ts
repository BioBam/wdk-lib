import * as yaml from 'js-yaml';
import { Conditional } from './Conditional';
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
    return this._nodesOf(Input) as Input[];
  }

  get scatter(): Scatter | undefined {
    return this._nodeOf(Scatter) as Scatter;
  }

  public get steps(): IStep[] {
    return this._steps;
  }

  public get linkedInputs(): Input[] {
    return this.inputs.filter(node => node.linked);
  }

  public get outputs(): Output[] {
    return this._nodesOf(Output) as Output[];
  }

  public get linkedOutputs(): Output[] {
    return this.outputs.filter(node => node.linked);
  }

  public get requirements(): Requirement[] {
    return this._nodesOf(Requirement) as Requirement[];
  }

  get conditional(): Conditional | undefined {
    return this._nodeOf(Conditional) as Conditional;
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
      if (output.linked) {
        if (output.multiLinked) {
          outputData.outputSource = output.links.map(l => l.idAsReference);
        } else {
          outputData.outputSource = output.links[0].idAsReference;
        }
      }
      if (output.pickValueMethod) {
        outputData.pickValue = output.pickValueMethod.toString();
      }
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
      if (input.valueFrom) {
        const inDetail: { [key: string]: any } = {};
        inDetail.source = input.links[0].idAsReference;
        inDetail.valueFrom = input.valueFrom;
        inLinks[input.id] = inDetail;
      } else {
        if (input.multiLinked) {
          const inDetail: { [key: string]: any } = {};
          inDetail.source = input.links.map(l => l.idAsReference);
          if (input.pickValueMethod) {
            inDetail.pickValue = input.pickValueMethod.toString();
          }
          inLinks[input.id] = inDetail;
        } else {
          inLinks[input.id] = input.links[0].idAsReference;
        }
      }

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

    if (step.conditional && step.conditional._expression) {
      stepData.when = step.conditional._expression;
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

      if (output.linked) {
        if (output.multiLinked) {
          outputData.outputSource = output.links.map(l => l.idAsReference);
        } else {
          outputData.outputSource = output.links[0].idAsReference;
        }
      }
      if (output.pickValueMethod) {
        outputData.pickValue = output.pickValueMethod.toString();
      }
      workflowOutputs.push(outputData);
    }
    wData.outputs = workflowOutputs;
    const yamlString = yaml.dump(wData, { noRefs: true });
    WdkUtils.writeToFile(yamlString, synthInfo.main);
    return synthInfo;
  }

}
