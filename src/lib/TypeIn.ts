import * as cwl from 'cwl-ts-auto';
import { Saveable } from 'cwl-ts-auto/dist/util/Saveable';
import { InputType, InputTypeArray } from './ILinkable';


export interface InputBinding {
  readonly shellQuote?: boolean;
  readonly position?: string | number;
  readonly prefix?: string;
  readonly separate?: boolean;
  readonly itemSeparator?: string;
}

export interface InputProps {
  readonly inputBinding?: InputBinding;
  readonly doc?: string;
  readonly label?: string;
  readonly name?: string;
}

export type InputTypes = InputType | InputTypeArray;

export class TypeIn {

  ///////////// BASIC TYPES /////////////

  /**
 * Creates a new `TypeIn` instance representing a File type.
 *
 * @returns A new `TypeIn` object for File type.
 */
  static file(): TypeIn {
    return new TypeIn(cwl.CWLType.FILE);
  }

  /**
   * Creates a new `TypeIn` instance representing a Directory type.
   *
   * @returns A new `TypeIn` object for Directory type.
   */
  static directory(): TypeIn {
    return new TypeIn(cwl.CWLType.DIRECTORY);
  }

  /**
   * Creates a new `TypeIn` instance representing a Boolean type.
   *
   * @returns A new `TypeIn` object for Boolean type.
   */
  static boolean(): TypeIn {
    return new TypeIn(cwl.PrimitiveType.BOOLEAN);
  }

  /**
   * Creates a new `TypeIn` instance representing a String type.
   *
   * @returns A new `TypeIn` object for String type.
   */
  static string(): TypeIn {
    return new TypeIn(cwl.PrimitiveType.STRING);
  }

  /**
   * Creates a new `TypeIn` instance representing an Integer type.
   *
   * @returns A new `TypeIn` object for Integer type.
   */
  static int(): TypeIn {
    return new TypeIn(cwl.PrimitiveType.INT);
  }

  /**
   * Creates a new `TypeIn` instance representing a Double type.
   *
   * @returns A new `TypeIn` object for Double type.
   */
  static double(): TypeIn {
    return new TypeIn(cwl.PrimitiveType.DOUBLE);
  }

  /**
   * Creates a new `TypeIn` instance representing a Float type.
   *
   * @returns A new `TypeIn` object for Float type.
   */
  static float(): TypeIn {
    return new TypeIn(cwl.PrimitiveType.FLOAT);
  }

  /**
   * Creates a new `TypeIn` instance representing input from Stdin.
   *
   * @returns A new `TypeIn` object for Stdin input.
   */
  static stdin(): TypeIn {
    return new TypeIn(cwl.stdin.STDIN);
  }

  ///////////// COMPLEX TYPES /////////////

  /**
   * Specify the type array with elements of the given custom type.
   *
   * @param contentType The type of the elements in the array.
   * @returns
   */
  static arrayOf(contentType: TypeIn, props?: InputProps): TypeIn {
    const cwlContentType = contentType._toCwlObject();
    const type = new cwl.CommandInputArraySchema({
      items: cwlContentType,
      type: cwl.enum_d062602be0b4b8fd33e69e29a841317b6ab665bc.ARRAY,
    });
    if (props) {
      type.doc = props.doc;
      type.label = props.label;
      type.name = props.name;
      if (props.inputBinding) {
        type.inputBinding = this.createInputBinding(props.inputBinding);
      }
    }
    return new TypeIn(type);
  }

  /**
   * Creates a CWL CommandLineBinding object based on the provided input binding properties.
   *
   * @param inputBinding The input binding properties to convert.
   * @returns A CWL CommandLineBinding object if the path property is provided, otherwise undefined.
   */
  private static createInputBinding(bindingProps: InputBinding): cwl.CommandLineBinding | undefined {
    return new cwl.CommandLineBinding({
      prefix: bindingProps.prefix,
      separate: bindingProps.separate,
      itemSeparator: bindingProps.itemSeparator,
      position: bindingProps.position,
      shellQuote: bindingProps.shellQuote,
    });
    return undefined;
  }

  private cwlType: InputTypes;

  private constructor(type: InputTypes) {
    this.cwlType = type;
  }

  /**
   * Converts the input to a CWL-compatible object.
   * @returns A CWL object representing the input type.
   * @internal
   */
  _toCwlObject(): InputTypes {
    return this.cwlType;
  }

  /**
   * Helper function to check if an object is saveable.
   * @param object The object to check.
   * @returns True if the object has a save function, false otherwise.
   */
  private isSaveable(object: any): object is Saveable {
    return typeof object.save === 'function';
  }

  /**
   * Converts the input to a CWL-compatible JSON object.
   * @returns A JSON object representing the input.
   */
  toMap(): { [key: string]: any } {
    if (this.isSaveable(this.cwlType)) {
      return this.cwlType.save();
    } else {
      return { type: this.cwlType };
    }
  }
}


