import * as cwl from 'cwl-ts-auto';
import { Construct } from './Construct';
import { ILinkable, InputType, InputTypeArray } from './ILinkable';
import { LinkableConstruct } from './LinkableConstruct';
import { StepConstruct } from './StepConstruct';
import { StepClass } from './ToolClass';
import { Type } from './Type';


/**
 * Represents an input parameter of a workflow or a tool.
 * @example
 * import { Input, Constructs } from 'wdk-lib';
 * const root = Constructs.createRoot('root');
 * const input = Input.string(root, 'myInput')
 *                    .withDefaultValue('default')
 *                    .withDoc('This is my input');
 */
export class Input extends LinkableConstruct {

  /**
   * Create an input from a step input, using the same ID and type.
   * It also copies the default value, the optional flag, and the doc.
   */
  static fromStepInput(scope: StepConstruct, input: Input): Input {
    const newInput = new Input(scope, input.id, input._type);
    newInput._optional = input.optional;
    newInput._defaultValue = input._defaultValue;
    newInput._doc = input._doc;
    input.linkTo(newInput);
    return newInput;
  }


  // Static factory methods

  /**
   * Creates a boolean type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a boolean.
   */
  static bool(scope: StepConstruct, id: string): Input {
    const input = new Input(scope, id, cwl.PrimitiveType.BOOLEAN);
    return input;
  }

  /**
   * Creates a double type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a double.
   */
  static double(scope: StepConstruct, id: string): Input {
    const input = new Input(scope, id, cwl.PrimitiveType.DOUBLE);
    return input;
  }

  /**
   * Creates a float type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a float.
   */
  static float(scope: StepConstruct, id: string): Input {
    const input = new Input(scope, id, cwl.PrimitiveType.FLOAT);
    return input;
  }

  /**
   * Creates a file type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a file.
   */
  static file(scope: StepConstruct, id: string): Input {
    const input = new Input(scope, id, cwl.CWLType.FILE);
    return input;
  }

  /**
   * Creates a directory type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a Directory.
   */
  static directory(scope: StepConstruct, id: string): Input {
    const input = new Input(scope, id, cwl.CWLType.DIRECTORY);
    return input;
  }

  /**
   * Creates a file array type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a file array.
   */
  static fileArray(scope: StepConstruct, id: string): Input {
    const input = new Input(scope, id,
      new cwl.CommandInputArraySchema({ items: cwl.CWLType.FILE, type: cwl.enum_d062602be0b4b8fd33e69e29a841317b6ab665bc.ARRAY }),
    );
    return input;
  }

  /**
   * Creates an array input of a type passed by parameter.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @param type The type of the array from the Type class. It can be BOOLEAN, INT, DOUBLE, FLOAT, STRING, FILE, DIRECTORY.
   * @returns A new instance of Input configured as a file array.
   */
  static array(scope: StepConstruct, id: string, type: Type): Input {
    let typeObject;
    switch (type) {
      case Type.BOOLEAN:
        typeObject = cwl.PrimitiveType.BOOLEAN;
        break;
      case Type.INT:
        typeObject = cwl.PrimitiveType.INT;
        break;
      case Type.DOUBLE:
        typeObject = cwl.PrimitiveType.DOUBLE;
        break;
      case Type.FLOAT:
        typeObject = cwl.PrimitiveType.FLOAT;
        break;
      case Type.STRING:
        typeObject = cwl.PrimitiveType.STRING;
        break;
      case Type.FILE:
        typeObject = cwl.CWLType.FILE;
        break;
      case Type.DIRECTORY:
        typeObject = cwl.CWLType.DIRECTORY;
        break;
      default:
        throw new Error(`Unknown type: ${type}. Please use one of the basic types from the Type class: BOOLEAN, INT, DOUBLE, FLOAT, STRING, FILE, DIRECTORY`);
    }
    const input = new Input(scope, id,
      new cwl.CommandInputArraySchema({ items: typeObject, type: cwl.enum_d062602be0b4b8fd33e69e29a841317b6ab665bc.ARRAY }),
    );
    return input;
  }


  /**
   * Creates an integer type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as an integer.
   */
  static integer(scope: StepConstruct, id: string): Input {
    const input = new Input(scope, id, cwl.PrimitiveType.INT);
    return input;
  }

  /**
   * Creates a string type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a string.
   */
  static string(scope: StepConstruct, id: string): Input {
    const input = new Input(scope, id, cwl.PrimitiveType.STRING);
    return input;
  }

  /**
   * Creates a string array type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a string array.
   */
  static stringArray(scope: StepConstruct, id: string): Input {
    const input = new Input(scope, id,
      new cwl.CommandInputArraySchema({ items: cwl.PrimitiveType.STRING, type: cwl.enum_d062602be0b4b8fd33e69e29a841317b6ab665bc.ARRAY }),
    );
    return input;
  }

  /**
   * @internal
   */
  private _psc: StepClass;

  /**
   * @internal
   */
  protected _parameterType: InputType | InputTypeArray;

  /**
   * @internal
   */
  protected _optional: boolean;


  private _prefix?: string;
  private _defaultValue?: any;
  private _position?: number;
  private _separate = true;
  private _separator: string | undefined;

  private _valueFrom: string | undefined;

  private _doc?: string;

  // Private constructor
  private constructor(scope: StepConstruct, id: string,
    type: InputType | InputTypeArray) {
    super(scope, id);
    this._psc = scope.stepClass;
    this._optional = false;
    this._parameterType = type;
  }

  // API Instance methods while building

  private getUpperName(): string {
    return `${this.scope?.id}${this.id}`;
  }

  // private isStepConstruct(obj: any): obj is StepConstruct {
  //   if (!obj) {
  //     return false;
  //   }
  //   return obj instanceof StepConstruct; // This check can be expanded
  // }

  /**
   * @internal
   */
  _createMatchingScopeUpper(targetScope: Construct): Input {
    throw new Error(`The Input create matching scope should not be needed. Target scope: ${targetScope.id}`);
    // if (this.scope === targetScope) {
    //   return this;
    // }
    // let upperName = this.getUpperName();
    // console.log(`createMatchingScopeUpper ${upperName} in ${targetScope.id}`);
    // let upperScope = this.scope?.scope as StepConstruct;
    // if (this.isStepConstruct(upperScope)) {
    //   let upperInput = upperScope._tryFindChild(upperName) as Input;
    //   if (!upperInput) {
    //     upperInput = Input.fromStepInput(upperScope, this).as(upperName);
    //   }
    //   return upperInput._createMatchingScopeUpper(targetScope);
    // }
    // return this;
  }

  /**
   * Links the input to another input or output.
   *
   * @param linkable The input or output to link to.
   * @returns The current instance for chaining method calls.
   */
  public linkTo(linkable: ILinkable): ILinkable {
    let currentScope = this.scope?.scope;

    // Check direct one-scope-away relationship
    if (currentScope === linkable.scope || currentScope === linkable.scope?.scope) {
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

    // Create upper parameter and retry linking recursively
    // for when this parameter is deeper than the linkable or in another branch.
    const upperScope = this.scope?.scope as StepConstruct;
    if (!upperScope) {
      throw new Error(`Upper scope not found for ${this.id}`);
    }
    const upperName = this.getUpperName();
    let upperInput = upperScope._tryFindChild(upperName) as Input;
    if (!upperInput) {
      upperInput = Input.fromStepInput(upperScope, this).as(upperName);
    }
    upperInput.linkTo(linkable);
    return this;
  }


  /**
   * Changes the ID of the input and returns the modified input instance.
   * @param newId The new identifier for this input.
   * @returns The current instance for chaining method calls.
   */
  as(newId: string): this {
    this.id = newId;
    return this;
  }


  /**
   * Sets the optionality of the input.
   * @param optional A flag indicating if the input should be optional.
   * @returns The current instance for chaining method calls.
   */
  makeOptional(optional: boolean): this {
    this._optional = optional;
    return this;
  }

  /**
   * Sets the type of the input elements of an array to be nullable.
   * @returns The current instance for chaining method calls.
   */
  allowNullElements(): this {
    if (this.isArray()) {
      (this._type as cwl.CommandInputArraySchema).items = ['null', (this._type as cwl.CommandInputArraySchema).items as string | cwl.CommandInputRecordSchema | cwl.CommandInputEnumSchema | cwl.CommandInputArraySchema];
    } else {
      throw new Error('allowNullElements() can only be used on array types');
    }
    return this;
  }

  /**
   * Sets whether the input items should be separated.
   * @param separate A flag indicating separation status.
   * @returns The current instance for chaining method calls.
   */
  makeSeparate(separate: boolean): this {
    this._separate = separate;
    return this;
  }


  /**
   * Assigns a default value to the input.
   * @param defaultValue The default value to assign.
   * @returns The current instance for chaining method calls.
   */
  withDefaultValue(defaultValue: any): this {
    this._defaultValue = defaultValue;
    // this.makeOptional(true);
    return this;
  }

  /**
   * Adds documentation to the input.
   * @param doc The documentation string to add.
   * @returns The current instance for chaining method calls.
   */
  withDoc(doc: string): this {
    this._doc = doc;
    return this;
  }

  /**
   * Sets an item separator for array inputs.
   * @param separator The separator string to set.
   * @returns The current instance for chaining method calls.
   */
  withItemSeparator(separator: string): this {
    this._separator = separator;
    return this;
  }

  /**
   * Specifies a position for the input.
   * @param position The position index to set.
   * @returns The current instance for chaining method calls.
   */
  withPosition(position: number): this {
    this._position = position;
    return this;
  }

  /**
   * Sets a prefix for the input.
   * @param prefix The prefix to set.
   * @returns The current instance for chaining method calls.
   */
  withPrefix(prefix: string): this {
    this._prefix = prefix;
    return this;
  }


  // Other getters and setters


  /**
   * Retrieves the documentation associated with the input.
   * @returns The documentation string, if available.
   */
  get doc(): string | undefined {
    return this._doc;
  }

  /**
   * Indicates whether the input is optional.
   * @returns A boolean representing the optionality of the input.
   */
  get optional(): boolean {
    return this._optional;
  }

  /**
   * @internal
   * Retrieves the type of the input.
   * @returns The type of the input.
   */
  get _type(): InputType | InputTypeArray {
    return this._parameterType;
  }

  /**
   * Retrieves the expression from which the input's value is derived.
   * @returns The expression string, if set.
   */
  get valueFrom(): string | undefined {
    return this._valueFrom;
  }

  // /**
  //  * Determines if a given type is considered as a basic type.
  //  * @param type The type to check.
  //  * @returns True if the type is one of the basic types; otherwise, false.
  //  */
  // private isBasicType(type: InputType): boolean {
  //   return type instanceof String;
  //   // return (
  //   //   type === Type.BOOLEAN ||
  //   //   type === Type.INT ||
  //   //   type === Type.DOUBLE ||
  //   //   type === Type.FLOAT ||
  //   //   type === Type.STRING ||
  //   //   type === Type.FILE ||
  //   //   type === Type.DIRECTORY
  //   // );
  // }


  /**
   * Checks if the input is an array type.
   * @returns True if the type is either STRING_ARRAY or FILE_ARRAY; otherwise, false.
   */
  isArray() {
    return this._type instanceof cwl.CommandInputArraySchema;
    // return this._type === Type.STRING_ARRAY || this._type === Type.FILE_ARRAY;
  }

  /**
   * Sets the expression from which the input's value is derived. Use this in the workflows to set a value of a step input from some other value.
   * @param expression The expression to reference.
   * @example
   * tool.message.valueFrom = 'Hello World!'; // This will set the value of the step input to 'Hello World!'
   * tool.width.valueFrom = Value.double(3.14); // This will set the value of the step input to 3.14
   * tool.height.valueFrom = Value.expression("inputs.my_input * 2"); // This will set the value of the step input to the value of the input 'my_input' multiplied by 2
   */
  set valueFrom(expression: string | undefined) {
    this._valueFrom = expression;
  }

  /**
   * Converts the input to a CWL-compatible JSON object.
   * @returns A JSON object representing the input.
   */
  toMap(): { [key: string]: any } {
    return this._toCwlObject().save();
  }

  private createWorkflowInputParameter(): cwl.WorkflowInputParameter {

    // Prepare the type to assign to the input parameter
    // if optional is true, then the type should be an array of the type(s) and 'null'
    let typeToAssign: InputType | InputTypeArray;
    if (this.optional) {
      if (Array.isArray(this._parameterType)) {
        typeToAssign = this._parameterType;
        typeToAssign.push('null');
      } else {
        typeToAssign = ['null', this._parameterType];
      }
    } else {
      typeToAssign = this._parameterType;
    }

    let wip = new cwl.WorkflowInputParameter({
      type: typeToAssign,
      id: this.id,
    });

    if (this._defaultValue !== undefined) {
      wip.default_ = this._defaultValue;
    }

    return wip;
  }

  private createCommandInputParameter(): cwl.CommandInputParameter {
    // Prepare the type to assign to the input parameter
    // if optional is true, then the type should be an array of the type(s) and 'null'
    let typeToAssign: InputType | InputTypeArray;
    if (this.optional) {
      if (Array.isArray(this._parameterType)) {
        typeToAssign = this._parameterType;
        typeToAssign.push('null');
      } else {
        typeToAssign = ['null', this._parameterType];
      }
    } else {
      typeToAssign = this._parameterType;
    }

    let cip = new cwl.CommandInputParameter({
      type: typeToAssign,
      id: this.id,
    });

    if (this._prefix !== undefined || this._position !== undefined) {
      cip.inputBinding = new cwl.CommandLineBinding({
        prefix: this._prefix, // if missing, not set anyway.
      });
      cip.inputBinding!.position = this._position;
    }
    if (this._defaultValue !== undefined) {
      cip.default_ = this._defaultValue;
    }

    if (this.isArray()) {
      if (!this._separate || this._separator) {
        if (cip.inputBinding === undefined) {
          cip.inputBinding = new cwl.CommandLineBinding({});
        }
        cip.inputBinding.itemSeparator = this._separator;
        cip.inputBinding.separate = this._separate;
      }

    }

    return cip;
  }

  /**
   * @internal
   * Converts the input to a CWL-compatible k-v object.
   * @param short A flag indicating if the output should be shortened.
   * @returns A JSON object representing
   */
  _toCwlObject(): cwl.WorkflowInputParameter | cwl.CommandInputParameter {
    if (this._psc === StepClass.WORKFLOW || this._psc === StepClass.EXPRESSION_TOOL) {
      return this.createWorkflowInputParameter();
    } else if (this._psc === StepClass.COMMAND_LINE_TOOL) {
      return this.createCommandInputParameter();
    } else {
      throw new Error('Unknown scope type: ' + this._psc);
    }
  }

}

