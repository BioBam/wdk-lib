import * as cwl from 'cwl-ts-auto';
import * as yaml from 'js-yaml';
import { IWorkflow } from './BasicT';
import { Conditional } from './Conditional';
import { Constants } from './Constants';
import { Construct } from './Construct';
import { IMappable } from './IMappable';
import { Input } from './Input';
import { IStep } from './IStep';
import { IWorkflowProps } from './IWorkflowProps';
import { Output } from './Output';
import { Requirement } from './Requirement';
import { StepConstruct } from './StepConstruct';
import { SynthFiles } from './SynthFiles';
import { StepClass } from './ToolClass';
import { WdkUtils } from './WdkUtils';

export class Workflow extends StepConstruct implements IMappable, IWorkflow {

  /**
   * Create a standalone workflow without an explicit App or parent scope.
   * Useful for quick scripts and single-workflow programs.
   */
  public static create(id: string): Workflow {
    const root = new Construct(null as any, 'root');
    return new Workflow(root, id);
  }

  public static basicProps(): IWorkflowProps {
    return {
      cwlVersion: Constants.cwlVersion,
    };
  }

  private initialized: boolean = false;

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
    // ! Pass relativeUris=false to bypass cwl-ts-auto bug with path.relative() on Windows
    return this._toCwlObject().save(false, '', false);
  }

  serialize(dirPath: string): SynthFiles {
    const synthInfo = WdkUtils.createSynthInfo(this, dirPath);
    // ! Pass relativeUris=false to bypass cwl-ts-auto bug with path.relative() on Windows
    const yamlString = yaml.dump(this._toCwlObject().save(false, '', false), { quotingType: '\"' });
    WdkUtils.writeToFile(yamlString, synthInfo.main);
    return synthInfo;
  }

  /**
   * Initialize the construct, where needed.
   */
  protected initialize(): void {
    this.initialized = true;
  }

  /**
   *
   * @@internal
   * @returns A CWL Workflow object
   */
  _toCwlObject(): cwl.Workflow {
    if (!this.initialized) {
      this.initialize();
    }
    let w = new cwl.Workflow({
      id: this.id,
      inputs: [],
      outputs: [],
      steps: [],
    });

    if (this.label) {
      w.label = this.label;
    }

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
        id: step.id,
        in_: [],
        out: [],
        run: step._toCwlObject(),
      });

      // step inputs
      for (const stepInput of step.inputs) {
        if (!stepInput.linked && !stepInput.valueFrom) {
          continue;
        }

        let cwlStepInput = new cwl.WorkflowStepInput({
          id: stepInput.id,
        });
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
            if (stepInput.pickValueMethod) {
              // set the pickValueMethod to the parameter in the parent step.
              let upperInput;
              while (stepInput.scope?.scope) {
                upperInput = stepInput._findInUpperScope(stepInput.scope?.scope!);
                if (!upperInput) {
                  break;
                }
                if (upperInput.multiLinked) {
                  upperInput.pickValue(stepInput.pickValueMethod);
                  break;
                }
              }
            }
          }
        }
        cwlStepInput.linkMerge;
        if (step.stepInputsValueFrom && step.stepInputsValueFrom.hasExpressionForInput(stepInput.id)) {
          cwlStepInput.valueFrom = step.stepInputsValueFrom.getExpressionForInput(stepInput.id);
        }
        wStep.in_.push(cwlStepInput);
      }

      // step outputs

      for (const linkedOutput of step.linkedOutputs) {
        // const wsOutput = new cwl.WorkflowStepOutput({});
        // wsOutput.id = `${linkedOutput.id}`;
        // wStep.out.push(wsOutput);
        wStep.out.push(linkedOutput.id);
      }

      // Other step properties
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

    // Add Requirements if any
    const requirements = this.requirements;
    if (requirements.length > 0) {
      w.requirements = [];
      for (const requirement of requirements) {
        w.requirements.push(requirement._toCwlObject());
      }
    }

    return w;
  }


}
