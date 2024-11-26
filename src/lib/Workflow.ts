import * as cwl from 'cwl-ts-auto';
import * as yaml from 'js-yaml';
import { IWorkflow } from './BasicT';
import { Conditional } from './Conditional';
import { Constants } from './Constants';
import { IMappable } from './IMappable';
import { Input } from './Input';
import { IStep } from './IStep';
import { IWorkflowProps } from './IWorkflowProps';
import { Output } from './Output';
import { Requirement } from './Requirement';
import { Scatter } from './Scatter';
import { Shortify } from './Shortify';
import { StepConstruct } from './StepConstruct';
import { SynthFiles } from './SynthFiles';
import { StepClass } from './ToolClass';
import { WdkUtils } from './WdkUtils';

export class Workflow extends StepConstruct implements IMappable, IWorkflow {

  public static basicProps(): IWorkflowProps {
    return {
      cwlVersion: Constants.cwlVersion,
    };
  }

  private _props: IWorkflowProps;
  private _steps: IStep[] = [];


  constructor(scope: any, id: string, props?: IWorkflowProps) {
    super(scope, id);
    this.stepClass = StepClass.WORKFLOW;
    if (!props) {
      props = Workflow.basicProps();
    }
    this._props = props;

    // Check if scope is not null and instance of workflow
    if (scope && scope instanceof Workflow) {
      scope.addStep(this);
    }

  }

  hasSteps(): boolean {
    return true;
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
      outputData.type = output._type.toString();
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
    for (const input of step.inputs) {
      if (!input.linked && !input.valueFrom) {
        continue;
      }

      if (input.valueFrom) {
        const inDetail: { [key: string]: any } = {};
        inDetail.source = input.links[0]?.idAsReference;
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
        stepData.method = step.scatter._method;
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
      let type = input._type.toString();
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
      outputData.type = output._type.toString();

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

  /**
   *
   * @@internal
   * @returns A CWL Workflow object
   */
  _toCwlObject(): cwl.Workflow {
    let w = new cwl.Workflow({
      inputs: [],
      outputs: [],
      steps: [],
    });

    // Adding inputs
    for (const input of this.inputs) {
      let inputObject = input._toCwlObject();
      w.inputs.push(inputObject);
    }

    // Adding outputs
    for (const output of this.outputs) {
      let outputObject = output._toCwlObject();
      w.outputs.push(outputObject);
    }

    // Adding steps
    for (const step of this.steps) {
      let wStep = new cwl.WorkflowStep({
        in_: [],
        out: [],
        run: step._toCwlObject(),
      });

      // step inputs
      for (const stepInput of step.inputs) {
        if (!stepInput.linked && !stepInput.valueFrom) {
          continue;
        }

        let cwlStepInput = new cwl.WorkflowStepInput({});
        if (stepInput.valueFrom) {
          cwlStepInput.source = stepInput.links[0]?.idAsReference;
          cwlStepInput.valueFrom = stepInput.valueFrom;
        } else {
          if (stepInput.multiLinked) {
            cwlStepInput.source = stepInput.links.map(l => l.idAsReference);
            if (stepInput.pickValueMethod) {
              cwlStepInput.pickValue = stepInput.pickValueMethod;
            }
          } else {
            cwlStepInput.source = stepInput.links[0].idAsReference;
          }
        }
        wStep.in_.push(cwlStepInput);
      }

      // step outputs

      for (const output of step.linkedOutputs) {
        const wsOutput = new cwl.WorkflowStepOutput({
          id: output.id,
        });
        wStep.out.push(wsOutput);
      }

      // Other step properties

      w.id = this.id;
      w.cwlVersion = Constants.cwlVersion;

      if (step.scatter) {
        const scatter = step.scatter;
        if (scatter.ids.length == 1) {
          wStep.scatter = scatter.ids[0];
        } else {
          wStep.scatter = scatter.ids;
          wStep.scatterMethod = scatter._method;
        }
      }

      if (step.conditional && step.conditional._expression) {
        wStep.when = step.conditional._expression;
      }

      w.steps.push(wStep);
    }

    return w;
  }


}
