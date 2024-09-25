import * as path from 'path';
import { IMappable } from './IMappable';
import { Type } from './Type';

export class InputReference implements IMappable {

  /**
   * Create a local file reference.
   *
   * @param relativePath path to a local file like `/Users/username/file.txt`
   * @returns
   */
  static file(relativePath: string): InputReference {
    const inputReference = new InputReference();
    inputReference.type = Type.FILE.toString();
    inputReference._path = relativePath;
    return inputReference;
  }


  /**
   * Create a s3 file reference.
   *
   * @param s3FileReference Reference to an S3 file formatted like `s3://bucket-name/path/to/file`
   * @returns
   */
  static s3File(s3FileReference: string): InputReference {
    const inputReference = new InputReference();
    inputReference.type = Type.FILE.toString();
    inputReference._location = s3FileReference;
    return inputReference;
  }

  private type: string | undefined;
  private _path: string | undefined;
  private _location: string | undefined;

  get path(): string | undefined {
    return this._path;
  }

  get location(): string | undefined {
    return this._location;
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
    if (this._path) {
      yamlMap.path = path.basename(this._path); // Extracting the filename
    }
    if (this._location) {
      yamlMap.location = this._location;
    }
    return yamlMap;
  }
}
