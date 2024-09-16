import { Construct } from './Construct';
import { LinkableConstruct } from './LinkableConstruct';
import { Shortify } from './Shortify';
import { Type } from './Type';

export class Input extends LinkableConstruct {

  /** Create an input from a step input, using the same ID and type. */
  static fromStepInput(scope: Construct, input: Input): Input {
    const newInput = new Input(scope, input.id, input.type);
    input.linkTo(newInput);
    return newInput;
  }


  // Static factory methods
  static file(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.FILE);
    return input;
  }

  static string(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.STRING);
    return input;
  }

  static bool(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.BOOLEAN);
    return input;
  }

  static integer(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.INT);
    return input;
  }

  static doubleInput(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.DOUBLE);
    return input;
  }

  static stringArray(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.STRING_ARRAY);
    return input;
  }

  static floatInput(scope: Construct, id: string): Input {
    const input = new Input(scope, id, Type.FLOAT);
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
  private _doc?: string;


  protected constructor(scope: Construct, id: string, type: Type) {
    super(scope, id);
    this._optional = false;
    this._type = type;
  }

  as(newId: string): Input {
    this.id = newId;
    return this;
  }


  // Instance methods
  get type(): Type {
    return this._type;
  }

  makeOptional(optional: boolean): this {
    this._optional = optional;
    return this;
  }

  get optional(): boolean {
    return this._optional;
  }


  // Instance methods
  withPrefix(prefix: string): this {
    this._prefix = prefix;
    return this;
  }

  withDefaultValue(defaultValue: any): this {
    this._defaultValue = defaultValue;
    // this.makeOptional(true);
    return this;
  }

  withPosition(position: number): this {
    this._position = position;
    return this;
  }

  makeSeparate(separate: boolean): this {
    this._separate = separate;
    return this;
  }

  withDoc(doc: string): this {
    this._doc = doc;
    return this;
  }

  get doc(): string | undefined {
    return this._doc;
  }

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

  toMap(): { [key: string]: any } {
    const inputMap: { [key: string]: any } = {};
    const inputBindingMap: { [key: string]: any } = {};

    if (this.isBasicType(this._type)) {
      inputMap.type = this._type.toString() + (this.optional ? '?' : '');

      if (this._prefix) {
        inputBindingMap.prefix = this._prefix;
      }
    } else if (this._type === Type.STRING_ARRAY) {
      let typeMap: { [key: string]: any } | string = {
        type: 'array',
        items: 'string',
      };

      if (this._separate || this._prefix) {
        const innerInputBindingMap: { [key: string]: any } = {};

        if (this._separate) {
          innerInputBindingMap.separate = true;
        }

        if (this._prefix) {
          innerInputBindingMap.prefix = this._prefix;
        }

        if (Object.keys(innerInputBindingMap).length > 0) {
          typeMap.inputBinding = innerInputBindingMap;
        }
      }

      // check if inputmap only has type: 'array', items: 'string', then return 'string[]'
      typeMap = Shortify.input(typeMap);

      inputMap.type = typeMap;
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
