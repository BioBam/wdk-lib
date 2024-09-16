import { Constants } from './Constants';
import { Construct } from './Construct';
import { Tool } from './Tool';

export class ToolConfig extends Construct {

  // Static factory method
  public static basic(scope: Tool): ToolConfig {
    let tp = new ToolConfig(scope, 'fromBasic');
    scope.config = tp;
    return tp;
  }


  /**
   * @internal
   */
  private _baseCommand: string[] = [];
  /**
   * @internal
   */
  private _arguments: string[] = [];

  // /**
  //  * @internal
  //  */
  // private _toolClass?: StepClass;

  /**
   * @internal
   */
  private _cwlVersion: string = Constants.cwlVersion;
  /**
   * @internal
   */
  private _label?: string;

  // Instance methods
  withLabel(label: string): ToolConfig {
    this._label = label;
    return this;
  }

  withBaseCommand(baseCommand: string[]): ToolConfig {
    this._baseCommand = baseCommand;
    return this;
  }

  withArguments(newArgs: string[]): ToolConfig {
    this._arguments = newArgs;
    return this;
  }

  public get cwlVersion(): string {
    return this._cwlVersion;
  }

  public get label(): string | undefined {
    return this._label;
  }

  public set label(label: string | undefined) {
    this._label = label;
  }

  public get baseCommand(): string[] {
    return this._baseCommand;
  }

  public get arguments(): string[] {
    return this._arguments;
  }
}
