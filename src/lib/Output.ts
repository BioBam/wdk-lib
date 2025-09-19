import * as cwl from 'cwl-ts-auto';
import { ILinkable, OutputType, OutputTypeArray } from './ILinkable';
import { IMappable } from './IMappable';
import { Input } from './Input';
import { LinkableConstruct } from './LinkableConstruct';
import { StepConstruct } from './StepConstruct';
import { StepClass } from './ToolClass';
import { TypeOut } from './TypeOut';

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
 *
 * // * Also supports multiple glob patterns:
 * const outputFiles = Output.fileArray(root, 'outputFiles')
 *                           .withGlob(['*.txt', '*.log'])
 *                           .loadContents();
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
   * Creates a directory type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @returns A new instance of Output configured as a directory.
   */
  static directory(scope: StepConstruct, id: string): Output {
    const output = new Output(scope, id, cwl.CWLType.DIRECTORY);
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
   * Creates an array output of a type specified by a parameter.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @param itemsType The type of the output. Use one of the basic types from the Type class: BOOLEAN, INT, DOUBLE, FLOAT, STRING, FILE, DIRECTORY.
   * @returns A new instance of Output configured as a file array.
   */
  static array(scope: StepConstruct, id: string, itemsType: TypeOut): Output {
    const cwlItemsType = itemsType._toCwlObject();
    const output = new Output(scope, id,
      new cwl.CommandOutputArraySchema({
        items: cwlItemsType,
        type: cwl.enum_d062602be0b4b8fd33e69e29a841317b6ab665bc.ARRAY,
      }),
    );
    return output;
  }

  /**
   * Creates a custom type output.
   *
   * @param scope The construct within which this output is defined.
   * @param id The identifier for this output.
   * @param type The type of the output. Use the TypeOut to create a custom type.
   * @returns A new instance of Output configured with the custom type.
    */
  static custom(scope: StepConstruct, id: string, type: TypeOut): Output {
    const cwlType = type._toCwlObject();
    const output = new Output(scope, id, cwlType);
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

  private _glob: string | string[] | null = null;
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

  private getUpperName(): string {
    return `${this.scope?.id}.${this.id}`;
  }


  /**
   *  Get the linked output corresponding to the target scope.
   * If the target scope is the same as the current scope, return the current instance.
   * Note: The scope must be in one of the upper hierarchies of the current scope.
   * @param targetScope The target scope to find the linked output.
   * @returns The linked parameter corresponding to the target scope.
   */
  public inScope(targetScope: StepConstruct): ILinkable {
    return this._createMatchingScopeUpper(targetScope);
  }

  /**
   * @internal
   */
  _createMatchingScopeUpper(targetScope: StepConstruct): ILinkable {
    if (this.scope === targetScope) {
      return this;
    }

    let upperName = this.getUpperName();
    let upperScope = this.scope?.scope as StepConstruct;
    let upperOutput = upperScope._tryFindChild(upperName) as Output;
    if (!upperOutput) {
      upperOutput = Output.fromStepOutput(upperScope, this).as(upperName);
    }
    return upperOutput._createMatchingScopeUpper(targetScope);
  }

  /**
   * Links this output to another output.
   *
   * @param linkable The output to link to.
   * @returns The current instance for chaining method calls.
   */
  public linkTo(linkable: ILinkable): ILinkable {
    let currentScope = this.scope;

    // Check if linking with a one-scope-away Output
    if (currentScope === linkable.scope?.scope) {
      return super.linkTo(linkable);
    }

    // Traverse through linkInput's scope chain to find a match with currentScope
    for (let otherScope = linkable.scope; otherScope; otherScope = otherScope.scope) {
      if (currentScope === otherScope.scope) {
        const matchingScopeLinkable = linkable._createMatchingScopeUpper(otherScope);
        super.linkTo(matchingScopeLinkable);
        return this;
      }
    }
    return this;
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
   * @param glob The glob pattern(s). Can be a single string or an array of strings for multiple patterns.
   * @returns The current instance for chaining method calls.
   */
  withGlob(glob: string | string[]): this {
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


    // If multilinked, we need to create an array of output sources and set a pickValue.
    let outputSource: string[] | string | undefined;
    if (this.linked) {
      outputSource = this.links.map(link => link.idAsReference);
    }
    // If only one element is linked, we can just get the idAsReference.
    if (this.links.length === 1) {
      outputSource = this.links[0].idAsReference;
    }

    let wop = new cwl.WorkflowOutputParameter({
      id: this.id,
      type: typeToAssign,
      outputSource: outputSource,
    });

    if (this.multiLinked) {
      let pvm = this.pickValueMethod;
      if (pvm) {
        wop.pickValue = pvm;
      } else {
        throw new Error('Multiple links found, but no pickValueMethod set.');
      }
    }

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
