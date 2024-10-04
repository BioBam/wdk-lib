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
   * Create a local file reference.
   *
   * @param relativePaths path to local files like `["/home/file1.txt", "/home/file2.txt"]`
   * @returns
   */
  static fileArray(relativePaths: string[]): InputReference[] {
    const refArray: InputReference[] = []
    for (const path of relativePaths) {
      refArray.push(this.file(path));
    }
    return refArray;
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

  /**
   * Create a s3 file reference.
   *
   * @param s3FileReferences Reference to S3 files formatted like `["s3://bucket-name/path/to/file1", "s3://bucket-name/path/to/file2"]`
   * @returns
   */
  static s3FileArray(s3FileReferences: string[]): InputReference[] {
    const refArray: InputReference[] = []
    for (const path of s3FileReferences) {
      refArray.push(this.s3File(path));
    }
    return refArray;
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
