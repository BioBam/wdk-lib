import { CommandLineTool, ExpressionTool, Operation, Workflow } from 'cwl-ts-auto';
import { Conditional } from './Conditional';
import { Construct } from './Construct';
import { Input } from './Input';
import { IStep } from './IStep';
import { Output } from './Output';
import { Scatter } from './Scatter';
import { SynthFiles } from './SynthFiles';
import { StepClass } from './ToolClass';
import { ToolConfig } from './ToolConfig';

export abstract class StepConstruct extends Construct implements IStep {

  private _fileName: string = `${this.id}.cwl`;
  private _config: ToolConfig = ToolConfig.basic(this);
  stepClass: StepClass = StepClass.UNDEFINED;

  constructor(scope: StepConstruct, id: string) {
    super(scope, id);
  }

  abstract hasSteps(): boolean;
  abstract get steps(): IStep[];

  abstract serialize(dirPath: string): SynthFiles;
  /**
   * @internal
   */
  abstract _toCwlObject(): string | Workflow | CommandLineTool | ExpressionTool | Operation;

  get fileName(): string {
    return this._fileName;
  }

  set fileName(name: string) {
    this._fileName = name;
  }


  get inputs(): Input[] {
    return this._nodesOf(Input) as Input[];
  }

  get linkedInputs(): Input[] {
    const inputs = this._nodesOf(Input) as Input[];
    return inputs.filter(input => input.linked);
  }

  get outputs(): Output[] {
    return this._nodesOf(Output) as Output[];
  }

  get linkedOutputs(): Output[] {
    const nodes = this._nodesOf(Output) as Output[];
    return nodes.filter(node => node.referenced);
  }

  get label(): any {
    return this._config.label;
  }

  public get config(): ToolConfig {
    return this._config;
  }

  set config(value: ToolConfig) {
    this._config = value;
  }

  // Step-related methods
  get scatter(): Scatter | undefined {
    return this._nodeOf(Scatter) as Scatter;
  }

  get conditional(): Conditional | undefined {
    return this._nodeOf(Conditional) as Conditional;
  }


}