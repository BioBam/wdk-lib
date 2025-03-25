import * as cwl from 'cwl-ts-auto';
import { Saveable } from 'cwl-ts-auto/dist/util/Saveable';
import { OutputType, OutputTypeArray } from './ILinkable';


export type OutputTypes = OutputType | OutputTypeArray;

export class TypeOut {

  ///////////// BASIC TYPES /////////////

  /**
   * Creates a new `TypeOut` instance representing a File type.
   * @returns A new `TypeOut` object for File type.
   */
  static file(): TypeOut {
    return new TypeOut(cwl.CWLType.FILE);
  }

  /**
   * Creates a new `TypeOut` instance representing a Directory type.
   * @returns A new `TypeOut` object for Directory type.
   */
  static directory(): TypeOut {
    return new TypeOut(cwl.CWLType.DIRECTORY);
  }

  /**
   * Creates a new `TypeOut` instance representing a Boolean type.
   * @returns A new `TypeOut` object for Boolean type.
   */
  static boolean(): TypeOut {
    return new TypeOut(cwl.PrimitiveType.BOOLEAN);
  }

  /**
   * Creates a new `TypeOut` instance representing a String type.
   * @returns A new `TypeOut` object for String type.
   */
  static string(): TypeOut {
    return new TypeOut(cwl.PrimitiveType.STRING);
  }

  /**
   * Creates a new `TypeOut` instance representing an Integer type.
   * @returns A new `TypeOut` object for Integer type.
   */
  static int(): TypeOut {
    return new TypeOut(cwl.PrimitiveType.INT);
  }

  /**
   * Creates a new `TypeOut` instance representing a Double type.
   * @returns A new `TypeOut` object for Double type.
   */
  static double(): TypeOut {
    return new TypeOut(cwl.PrimitiveType.DOUBLE);
  }

  /**
   * Creates a new `TypeOut` instance representing a Float type.
   * @returns A new `TypeOut` object for Float type.
   */
  static float(): TypeOut {
    return new TypeOut(cwl.PrimitiveType.FLOAT);
  }

  /**
   * Creates a new `TypeOut` instance representing standard output (stdout).
   * @returns A new `TypeOut` object for stdout.
   */
  static stdout(): TypeOut {
    return new TypeOut(cwl.stdout.STDOUT);
  }

  /**
   * Creates a new `TypeOut` instance representing standard error (stderr).
   * @returns A new `TypeOut` object for stderr.
   */
  static stderr(): TypeOut {
    return new TypeOut(cwl.stderr.STDERR);
  }


  ///////////// COMPLEX TYPES /////////////

  /**
   * Specify the type array with elements of the given custom type.
   * @param contentType The type of the elements in the array.
   * @returns A new `TypeOut` object that represents an array of the specified custom type.
   */
  static arrayOf(contentType: TypeOut): TypeOut {
    const cwlContentType = contentType._toCwlObject();
    const type = new cwl.CommandOutputArraySchema({ items: cwlContentType, type: cwl.enum_d062602be0b4b8fd33e69e29a841317b6ab665bc.ARRAY });
    return new TypeOut(type);
  }

  // Private property to store the CWL type.
  private cwlType: OutputTypes;

  /**
  * Private constructor to initialize the TypeOut instance.
  * @param type The CWL type.
  */
  private constructor(type: OutputTypes) {
    this.cwlType = type;
  }

  allowNull(): TypeOut {
    if (this.cwlType instanceof Array) {
      this.cwlType.push(cwl.PrimitiveType.NULL);
    } else {
      this.cwlType = [this.cwlType, cwl.PrimitiveType.NULL];
    }
    return this;
  }

  combineWith(type: TypeOut): TypeOut {
    if (this.cwlType instanceof Array) {
      if (type.cwlType instanceof Array) {
        this.cwlType.push(...type.cwlType);
      } else {
        this.cwlType.push(type.cwlType);
      }
    } else {
      if (type.cwlType instanceof Array) {
        this.cwlType = [this.cwlType, ...type.cwlType];
      } else {
        this.cwlType = [this.cwlType, type.cwlType];
      }
    }
    return this;
  }

  /**
   * Converts the input to a CWL-compatible object.
   * @returns A CWL object representing the output type.
   * @internal
   */
  _toCwlObject(): OutputTypes {
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
