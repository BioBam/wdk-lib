import * as cwl from 'cwl-ts-auto';
import { Construct } from './Construct';
import { ILinkable, InputType, InputTypeArray } from './ILinkable';
import { LinkableConstruct } from './LinkableConstruct';
import { StepConstruct } from './StepConstruct';
import { StepClass } from './ToolClass';
import { TypeIn } from './TypeIn';


/**
 * Represents an input parameter of a workflow or a tool.
 * @example
 * const root = Constructs.createRoot('root');
 * const input = Input.string(root, 'myInput')
 *                    .withDefaultValue('default')
 *                    .withDoc('This is my input');
 */
export class Input extends LinkableConstruct {

  /**
   * Copy the same input in the context of another scope.
   *
   * @param scope The construct within which this input is defined.
   * @param input The existing input to copy.
   * @returns A new instance of Input configured as the same input, in the context of the new scope.
   */
  static copyInContext(scope: StepConstruct, input: Input) {
    const newInput = new Input(scope, input.id, input._type);
    // copy all the properties
    newInput._optional = input.optional;
    newInput._defaultValue = input._defaultValue;
    newInput._doc = input._doc;
    newInput._prefix = input._prefix;
    newInput._position = input._position;
    newInput._separate = input._separate;
    newInput._separator = input._separator;
    newInput._valueFrom = input._valueFrom;
    return newInput;
  }

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
   * <pre>
   * Input.array(root, 'myArray', TypeIn.string())
   * </pre>
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @param itemsType The type of the array from the Type class. It can be BOOLEAN, INT, DOUBLE, FLOAT, STRING, FILE, DIRECTORY.
   * @returns A new instance of Input configured as a file array.
   */
  static array(scope: StepConstruct, id: string, itemsType: TypeIn): Input {
    const cwlItemsType = itemsType._toCwlObject();
    const input = new Input(scope, id,
      new cwl.CommandInputArraySchema({
        items: cwlItemsType,
        type: cwl.enum_d062602be0b4b8fd33e69e29a841317b6ab665bc.ARRAY,
      }),
    );
    return input;
  }


  /**
   * Creates a custom type input.
   *
   * <pre>
   * // Example creating an array of file arrays
   * Input.custom(root, 'myCustom', TypeIn.arrayOf(TypeIn.arrayOfTypeIn.int())))
   * </pre>
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @param typeIn The type of the input. Use the TypeIn class to create a custom input.
   * @returns A new instance of Input configured with the custom type.
   */
  static custom(scope: StepConstruct, id: string, typeIn: TypeIn): Input {
    const cwlType = typeIn._toCwlObject();
    const input = new Input(scope, id, cwlType);
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
  private _label?: string;

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
    return `${this.scope?.id}.${this.id}`;
  }

  // private isStepConstruct(obj: any): obj is StepConstruct {
  //   if (!obj) {
  //     return false;
  //   }
  //   return obj instanceof StepConstruct; // This check can be expanded
  // }

  /**
   * Get the linked input corresponding to the target scope.
   * If the target scope is the same as the current scope, return the current instance.
   * Note: The scope must be in one of the upper hierarchies of the current scope.
   * @param targetScope The target scope to find the linked input.
   * @returns The linked input corresponding to the target scope.
   */
  public inScope(targetScope: StepConstruct): Input {
    return this._createMatchingScopeUpper(targetScope);
  }

  /**
   * @internal
   */
  _findInUpperScope(targetScope: Construct): Input | undefined {
    if (this.scope === targetScope) {
      return this;
    }

    let upperName = this.getUpperName();
    let upperScope = this.scope?.scope as StepConstruct;
    let upperOutput = upperScope._tryFindChild(upperName) as Input;
    if (!upperOutput) {
      return undefined;
    }
    return upperOutput._findInUpperScope(targetScope);
  }

  /**
   * @internal
   */
  _createMatchingScopeUpper(targetScope: Construct): Input {
    if (this.scope === targetScope) {
      return this;
    }

    let upperName = this.getUpperName();
    let upperScope = this.scope?.scope as StepConstruct;
    let upperOutput = upperScope._tryFindChild(upperName) as Input;
    if (!upperOutput) {
      upperOutput = Input.fromStepInput(upperScope, this).as(upperName);
    }
    return upperOutput._createMatchingScopeUpper(targetScope);

    // throw new Error(`The Input create matching scope should not be needed. Target scope: ${targetScope.id}`);

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
   * Looks for a File or Directory type in the input type.
   * @param type The internal type to check.
   * @returns `true` if the input type is either a direct or container of File or Directory; otherwise, `false`.
   */
  private typeLinksFileOrDirectory(type: InputType | InputTypeArray): boolean {
    return type === 'File' || type === 'Directory' || (type instanceof cwl.CommandInputArraySchema && this.typeLinksFileOrDirectory(type.items))
      || (Array.isArray(type) && type.some(t => this.typeLinksFileOrDirectory(t)));
  }

  /**
   * Check if this input can link to at least a File or Directory.
   * @returns `true` if the input type is either a direct or container of File or Directory; otherwise, `false`.
   */
  public containsFileOrDirectory(): boolean {
    return this.typeLinksFileOrDirectory(this._type);
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
    // if the _type is a File or Directory, then the defaultValue should be an object with class and path
    if (typeof this._type === 'string' && ['File', 'Directory'].includes(this._type)) {
      this._defaultValue = {
        class: this._type,
        path: defaultValue,
      };
    } else {
      this._defaultValue = defaultValue;
    }
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

  /**
   * Sets a label for the input.
   * @param label The label to set.
   * @returns The current instance for chaining method calls.
   */
  withLabel(label: string): this {
    this._label = label;
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
   * Retrieves the prefix associated with the input.
   * @returns The prefix string, if available.
   */
  get prefix(): string | undefined {
    return this._prefix;
  }

  /**
   * Retrieves the label associated with the input.
   * @returns The label string, if available.
   */
  get label(): string | undefined {
    return this._label;
  }

  /**
   * Indicates whether the input is optional.
   * @returns A boolean representing the optionality of the input.
   */
  get optional(): boolean {
    return this._optional;
  }

  /**
   * Retrieves the default value of the input.
   * @returns The default value of the input, if set.
   */
  get defaultValue(): any | undefined {
    return this._defaultValue;
  }

  /**
   * Retrieves the type of the input as a string representation.
   * @returns A string representing the type of the input.
   */
  get type(): string {
    if (this._parameterType instanceof cwl.CommandInputArraySchema) {
      return `${this._parameterType.items}[]`;
    }
    if (Array.isArray(this._parameterType)) {
      return this._parameterType.join(' | ');
    }
    return this._parameterType.toString();
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
      label: this._label,
      doc: this._doc,
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
      label: this._label,
      doc: this._doc,
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

  // Override the toString method to throw an exception. We don't want it to be used like so.
  toString(): string {
    throw new Error('toString is not supported for an Input Object.');
  }

}

