import * as cwl from 'cwl-ts-auto';
import { OutputType, OutputTypeArray } from './ILinkable';
import { IMappable } from './IMappable';
import { Input } from './Input';
import { LinkableConstruct } from './LinkableConstruct';
import { StepConstruct } from './StepConstruct';
import { StepClass } from './ToolClass';

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
  static fromStepOutput(scope: StepConstruct, linkedOutput: Output): Output {
    const newOutput = new Output(scope, linkedOutput.id, linkedOutput._parameterType);
    newOutput.linkTo(linkedOutput);
    newOutput.makeOptional(linkedOutput._optional);
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
  static file(scope: StepConstruct, id: string): Output {
    const output = new Output(scope, id, cwl.CWLType.FILE);
    return output;
  }

  /**
   * Creates a string type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as a string.
   */
  static string(scope: StepConstruct, id: string): Output {
    const output = new Output(scope, id, cwl.PrimitiveType.STRING);
    return output;
  }

  /**
   * Creates a boolean type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as a boolean.
   */
  static bool(scope: StepConstruct, id: string): Output {
    const output = new Output(scope, id, cwl.PrimitiveType.BOOLEAN);
    return output;
  }

  /**
   * Creates an integer type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as an integer.
   */
  static integer(scope: StepConstruct, id: string): Output {
    const output = new Output(scope, id, cwl.PrimitiveType.INT);
    return output;
  }

  /**
   * Creates a string array type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as a string array.
   */
  static stringArray(scope: StepConstruct, id: string): Output {
    const output = new Output(scope, id,
      new cwl.CommandOutputArraySchema({ items: cwl.PrimitiveType.STRING, type: cwl.enum_d062602be0b4b8fd33e69e29a841317b6ab665bc.ARRAY }),
    );
    return output;
  }

  /**
   * Creates a file array type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as a file array.
   */
  static fileArray(scope: StepConstruct, id: string): Output {
    const output = new Output(scope, id,
      new cwl.CommandOutputArraySchema({ items: cwl.CWLType.FILE, type: cwl.enum_d062602be0b4b8fd33e69e29a841317b6ab665bc.ARRAY }),
    );
    return output;
  }

  /**
   * Creates a float type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as a float.
   */
  static float(scope: StepConstruct, id: string): Output {
    const output = new Output(scope, id, cwl.PrimitiveType.FLOAT);
    return output;
  }

  /**
   * @internal
   */
  protected _parameterType: OutputType | OutputTypeArray;
  private _psc: StepClass;

  private _glob: string | null = null;
  private _loadContents: boolean = false;
  private _outputEval: string | undefined;
  /**
   * @internal
   */
  protected _optional: boolean;

  private constructor(scope: StepConstruct, id: string, type: OutputType | OutputTypeArray) {
    super(scope, id);
    this._psc = scope.stepClass;
    this._parameterType = type;
    this._optional = false;
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
   * @internal
   * @returns The type of the output.
   */
  get _type(): OutputType | OutputTypeArray {
    return this._parameterType;
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
    return this._toCwlObject().save();
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
   * Sets the optionality of the output. In cwl this output will have the type 'null' besides the specified type.
   * @param optional A flag indicating if the input should be optional.
   * @returns The current instance for chaining method calls.
   */
  makeOptional(optional: boolean): this {
    this._optional = optional;
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
   * Sets a glob pattern based on an input string identifier.
   *
   * @param inputString An Input instance whose ID forms the basis of the glob pattern.
   * @returns The current instance for chaining method calls.
   */
  globFromInputString(inputString: Input): this {
    return this.withGlob(`\$(inputs.${inputString.id})`);
  }


  private createWorkflowOutputParameter(): cwl.WorkflowOutputParameter {

    let typeToAssign: OutputType | OutputTypeArray;
    if (this._optional) {
      if (Array.isArray(this._parameterType)) {
        typeToAssign = this._parameterType;
        typeToAssign.push('null');
      } else {
        typeToAssign = ['null', this._parameterType];
      }
    } else {
      typeToAssign = this._parameterType;
    }

    let wop = new cwl.WorkflowOutputParameter({
      id: this.id,
      type: typeToAssign,
    });


    // wop.
    return wop;
  }


  private createCommandOutputParameter(): cwl.CommandOutputParameter {
    let typeToAssign: OutputType | OutputTypeArray;
    if (this._optional) {
      if (Array.isArray(this._parameterType)) {
        typeToAssign = this._parameterType;
        typeToAssign.push('null');
      } else {
        typeToAssign = ['null', this._parameterType];
      }
    } else {
      typeToAssign = this._parameterType;
    }

    let cop = new cwl.CommandOutputParameter({
      id: this.id,
      type: typeToAssign,
    });

    if (this._glob !== null) {
      cop.outputBinding = new cwl.CommandOutputBinding({});
      cop.outputBinding.glob = this._glob;

      if (this._loadContents) {
        cop.outputBinding.loadContents = true;
      }
      if (this._outputEval) {
        cop.outputBinding.outputEval = this._outputEval;
      }
    }
    return cop;
  }

  private createExpressionToolOutputParameter(): cwl.ExpressionToolOutputParameter {
    let typeToAssign: OutputType | OutputTypeArray;
    if (this._optional) {
      if (Array.isArray(this._parameterType)) {
        typeToAssign = this._parameterType;
        typeToAssign.push('null');
      } else {
        typeToAssign = ['null', this._parameterType];
      }
    } else {
      typeToAssign = this._parameterType;
    }

    let etop = new cwl.ExpressionToolOutputParameter({
      id: this.id,
      type: typeToAssign,
    });
    console.debug(`Output ${this.id} has type ${typeToAssign}`);
    return etop;
  }

  /**
   * @internal
    */
  _toCwlObject(): cwl.WorkflowOutputParameter | cwl.CommandOutputParameter | cwl.ExpressionToolOutputParameter {
    if (this._psc === StepClass.WORKFLOW) {
      return this.createWorkflowOutputParameter();
    } else if (this._psc === StepClass.EXPRESSION_TOOL) {
      const output = this.createExpressionToolOutputParameter();
      return output;
    } else if (this._psc === StepClass.COMMAND_LINE_TOOL) {
      return this.createCommandOutputParameter();
    } else {
      throw new Error('Unknown scope type');
    }
  }


}
