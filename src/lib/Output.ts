import { Construct } from './Construct';
import { IMappable } from './IMappable';
import { Input } from './Input';
import { LinkableConstruct } from './LinkableConstruct';
import { Type } from './Type';

/**
 * Represents an output parameter of a workflow, tool, or step.
 *
 * @example
 * import { Output, Constructs } from 'wdk-lib';
 * const root = Constructs.createRoot('root');
 * const output = Output.file(root, 'myOutput')
 *                    .withGlob('*.txt')
 *                    .loadContents()
 *                    .outputEval('$(self[0].contents)');
 */
export class Output extends LinkableConstruct implements IMappable {

  /**
   * Creates an output from a step output, using the same ID and type.
   * It also links the existing output to the new one.
   *
   * @param scope The construct within which this output is defined.
   * @param linkedOutput The output to link and copy properties from.
   * @returns A new instance of Output linked to the provided output.
   */
  static fromStepOutput(scope: Construct, linkedOutput: Output): Output {
    const newOutput = new Output(scope, linkedOutput.id, linkedOutput.type);
    newOutput.linkTo(linkedOutput);
    return newOutput;
  }

  // Static factory methods

  /**
   * Creates a file type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as a file.
   */
  static file(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.FILE);
    return output;
  }

  /**
   * Creates a string type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as a string.
   */
  static string(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.STRING);
    return output;
  }

  /**
   * Creates a boolean type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as a boolean.
   */
  static bool(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.BOOLEAN);
    return output;
  }

  /**
   * Creates an integer type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as an integer.
   */
  static integer(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.INT);
    return output;
  }

  /**
   * Creates a string array type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as a string array.
   */
  static stringArray(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.STRING_ARRAY);
    return output;
  }

  /**
   * Creates a file array type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as a file array.
   */
  static fileArray(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.FILE_ARRAY);
    return output;
  }

  /**
   * Creates a float type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as a float.
   */
  static float(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.FLOAT);
    return output;
  }

  /**
   * @internal
   */
  protected _type: Type;

  private _glob: string | null = null;
  private _loadContents: boolean = false;
  private _outputEval: string | undefined;

  constructor(scope: Construct, id: string, type: Type) {
    super(scope, id);
    this._type = type;
  }

  /**
   * Sets a new identifier for this output.
   *
   * @param id The new identifier for this output.
   * @returns The current instance for chaining method calls.
   */
  as(id: string): this {
    this.id = id;
    return this;
  }

  /**
   * Gets the type of the output.
   *
   * @returns The type of the output.
   */
  get type(): Type {
    return this._type;
  }

  override get idAsReference(): string {
    if (this.scope === undefined) {
      throw new Error('Cannot get reference for root construct');
    }
    return `${this.scope.id}/${this.id}`;
  }

  /**
   * Converts the output's properties into a map format.
   *
   * @returns A map representation of the output.
   */
  toMap(): { [key: string]: any } {
    return {
      type: this.type.toString(),
    };
  }

  /**
   * Specifies a glob pattern to locate output files.
   *
   * @param glob The glob pattern.
   * @returns The current instance for chaining method calls.
   */
  withGlob(glob: string): this {
    this._glob = glob;
    return this;
  }

  /**
   * Enables loading contents of the output files.
   *
   * @returns The current instance for chaining method calls.
   */
  loadContents(): this {
    this._loadContents = true;
    return this;
  }

  /**
   * Specifies an expression to evaluate the output.
   *
   * @param expression The expression for evaluation.
   * @returns The current instance for chaining method calls.
   */
  outputEval(expression: string): this {
    this._outputEval = expression;
    return this;
  }

  /**
   * Generates a YAML map of the output's bindings and settings.
   *
   * @returns A YAML map of the output configuration.
   */
  get yamlMap(): { [key: string]: any } {
    const map: { [key: string]: any } = {
      type: this.type.toString(),
    };

    if (this._glob !== null) {
      map.outputBinding = {
        glob: this._glob,
      };
      if (this._loadContents) {
        map.outputBinding.loadContents = true;
      }
      if (this._outputEval) {
        map.outputBinding.outputEval = this._outputEval;
      }
    }

    return map;
  }

  /**
   * Sets a glob pattern based on an input string identifier.
   *
   * @param inputString An Input instance whose ID forms the basis of the glob pattern.
   * @returns The current instance for chaining method calls.
   */
  globFromInputString(inputString: Input): this {
    return this.withGlob(`\$(inputs.${inputString.id})`);
  }
}