import { Construct } from './Construct';
import { LinkableConstruct } from './LinkableConstruct';
import { Shortify } from './Shortify';
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
  static fromStepInput(scope: Construct, input: Input): Input {
    const newInput = new Input(scope, input.id, input.type);
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
  static bool(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.BOOLEAN);
    return input;
  }

  /**
   * Creates a double type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a double.
   */
  static double(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.DOUBLE);
    return input;
  }

  /**
   * Creates a float type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a float.
   */
  static float(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.FLOAT);
    return input;
  }

  /**
   * Creates a file type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a file.
   */
  static file(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.FILE);
    return input;
  }

  /**
   * Creates a file array type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a file array.
   */
  static fileArray(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.FILE_ARRAY);
    return input;
  }

  /**
   * Creates an integer type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as an integer.
   */
  static integer(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.INT);
    return input;
  }

  /**
   * Creates a string type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a string.
   */
  static string(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.STRING);
    return input;
  }

  /**
   * Creates a string array type input.
   *
   * @param scope The construct within which this input is defined.
   * @param id The identifier for this input.
   * @returns A new instance of Input configured as a string array.
   */
  static stringArray(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.STRING_ARRAY);
    return input;
  }

  /**
   * @internal
   */
  protected _type: Type;

  /**
   * @internal
   */
  protected _optional: boolean;


  private _prefix?: string;
  private _defaultValue?: any;
  private _position?: number;
  private _separate = false;
  private _separator: string | undefined;

  private _valueFrom: string | undefined;

  private _doc?: string;

  // Private constructor
  private constructor(scope: Construct, id: string, type: Type) {
    super(scope, id);
    this._optional = false;
    this._type = type;
  }

  // API Instance methods while building

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
   * Retrieves the type of the input.
   * @returns The type of the input.
   */
  get type(): Type {
    return this._type;
  }

  /**
   * Retrieves the expression from which the input's value is derived.
   * @returns The expression string, if set.
   */
  get valueFrom(): string | undefined {
    return this._valueFrom;
  }

  /**
   * Determines if a given type is considered as a basic type.
   * @param type The type to check.
   * @returns True if the type is one of the basic types; otherwise, false.
   */
  private isBasicType(type: Type): boolean {
    return (
      type === Type.BOOLEAN ||
      type === Type.INT ||
      type === Type.DOUBLE ||
      type === Type.FLOAT ||
      type === Type.STRING ||
      type === Type.FILE ||
      type === Type.DIRECTORY
    );
  }

  /**
   * Checks if the input is an array type.
   * @returns True if the type is either STRING_ARRAY or FILE_ARRAY; otherwise, false.
   */
  isArray() {
    return this._type === Type.STRING_ARRAY || this._type === Type.FILE_ARRAY;
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
   * @param short A flag indicating if the output should be shortened.
   * @returns A JSON object representing the input.
   */
  toMap(short: boolean = true): { [key: string]: any } {
    const inputMap: { [key: string]: any } = {};
    const inputBindingMap: { [key: string]: any } = {};

    if (this.isBasicType(this._type)) {
      inputMap.type = this._type.toString() + (this.optional ? '?' : '');

      if (this._prefix) {
        inputBindingMap.prefix = this._prefix;
      }
    } else if (this._type === Type.STRING_ARRAY || this._type === Type.FILE_ARRAY) {
      let typeMap: { [key: string]: any } | string = {
        type: 'array',
        items: this._type.toString().slice(0, -2),
      };

      if (this._separate || this._prefix || this._separator) {
        const innerInputBindingMap: { [key: string]: any } = {};

        if (this._separate) {
          innerInputBindingMap.separate = true;
        }

        if (this._prefix) {
          innerInputBindingMap.prefix = this._prefix;
        }

        if (this._separator) {
          innerInputBindingMap.itemSeparator = this._separator;
        }

        if (Object.keys(innerInputBindingMap).length > 0) {
          typeMap.inputBinding = innerInputBindingMap;
        }
      }

      if (short) {
        // check if inputmap only has type: 'array', items: 'string', then return 'string[]'
        typeMap = Shortify.input(typeMap);
      }

      if (this._optional) {
        inputMap.type = ['null', typeMap];
      } else {
        inputMap.type = typeMap;
      }


    } else {
      throw new Error(`Unsupported type: ${this._type.toString()}`);
    }

    if (this._defaultValue !== undefined) {
      inputMap.default = this._defaultValue;
    }

    if (this._position !== undefined) {
      inputBindingMap.position = this._position;
    }

    if (Object.keys(inputBindingMap).length > 0) {
      inputMap.inputBinding = inputBindingMap;
    }

    return inputMap;
  }

}
