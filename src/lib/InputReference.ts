import { IMappable } from './IMappable';
import { Type } from './Type';

export class InputReference implements IMappable {

  // Static factory method mimicking the Java static method
  static file(relativePath: string): InputReference {
    const inputReference = new InputReference();
    inputReference.type = Type.FILE.toString();
    inputReference._path = relativePath;
    return inputReference;
  }

  private type: string | undefined;
  private _path: string | undefined;

  get path(): string | undefined {
    return this._path;
  }


  // // Private method to set reference type
  // private setReferenceType(type: InputReferenceType): this {
  //     this.type = type;
  //     return this;
  // }

  // // Private method to set path
  // private setPath(relativePath: string): this {
  //     this.path = relativePath;
  //     return this;
  // }

  // Method to convert to a YAML map equivalent
  toMap(): { [key: string]: any } {
    let yamlMap: { [key: string]: any } = {};
    yamlMap.class = this.type;
    yamlMap.path = this._path;
    return yamlMap;
  }
}
