import * as path from 'path';
import * as cwl from 'cwl-ts-auto';
import { IMappable } from './IMappable';

export class InputReference implements IMappable {

  /**
   * Create a local file reference.
   *
   * @param relativePath path to a local file like `/Users/username/file.txt`
   * @returns
   */
  static file(relativePath: string): InputReference {
    const inputReference = new InputReference();
    inputReference.type = cwl.CWLType.FILE.toString();
    inputReference._path = relativePath;
    return inputReference;
  }


  /**
   * Create a local directory reference.
   *
   * @param relativePath path to a local directory like `/Users/username/project/`
   * @returns
   */
  static directory(relativePath: string): InputReference {
    const inputReference = new InputReference();
    inputReference.type = cwl.CWLType.DIRECTORY.toString();
    inputReference._path = relativePath;
    return inputReference;
  }

  /**
   * Create a reference to a list of local files.
   *
   * @param relativePaths path to local files like `["/home/file1.txt", "/home/file2.txt"]`
   * @returns
   */
  static fileArray(relativePaths: any): InputReference[] {
    const refArray: InputReference[] = [];
    for (const filePath of relativePaths) {
      if (filePath != null && filePath !== undefined) {
        refArray.push(this.file(filePath));
      } else {
        // Return null to preserve array structure and CWL compatibility
        refArray.push(null as any);
      }
    }
    return refArray;
  }

  /**
   * Create a reference to a list of local directories.
   *
   * @param relativePaths path to local directories like `["/home/proj1/", "/home/proj2/"]`
   * @returns
   */
  static directoryArray(relativePaths: any): InputReference[] {
    const refArray: InputReference[] = [];
    for (const filePath of relativePaths) {
      if (filePath != null && filePath !== undefined) {
        refArray.push(this.directory(filePath));
      } else {
        // Return null to preserve array structure and CWL compatibility
        refArray.push(null as any);
      }
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
    inputReference.type = cwl.CWLType.FILE.toString();
    inputReference._location = s3FileReference;
    return inputReference;
  }

  /**
   * Create a reference to a list of s3 files.
   *
   * @param s3FileReferences Reference to S3 files formatted like `["s3://bucket-name/path/to/file1", "s3://bucket-name/path/to/file2"]`
   * @returns
   */
  static s3FileArray(s3FileReferences: any): InputReference[] {
    const refArray: InputReference[] = [];
    for (const filePath of s3FileReferences) {
      if (filePath != null && filePath !== undefined) {
        refArray.push(this.s3File(filePath));
      } else {
        // Return null to preserve array structure and CWL compatibility
        refArray.push(null as any);
      }
    }
    return refArray;
  }

  /**
   * Create a s3 directory reference.
   *
   * @param s3FileReference Reference to an S3 directory formatted like `s3://bucket-name/path/to/directory/`
   * @returns
   */
  static s3Directory(s3FileReference: string): InputReference {
    const inputReference = new InputReference();
    inputReference.type = cwl.CWLType.DIRECTORY.toString();
    inputReference._location = s3FileReference;
    return inputReference;
  }

  /**
   * Create a reference to a list of s3 directories.
   *
   * @param s3FileReferences Reference to S3 directories formatted like `["s3://bucket-name/path/to/dir1", "s3://bucket-name/dir2"]`
   * @returns
   */
  static s3DirectoryArray(s3FileReferences: any): InputReference[] {
    const refArray: InputReference[] = [];
    for (const filePath of s3FileReferences) {
      if (filePath != null && filePath !== undefined) {
        refArray.push(this.s3Directory(filePath));
      } else {
        // Return null to preserve array structure and CWL compatibility
        refArray.push(null as any);
      }
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

  /**
   * Checks if the InputReference is a directory.
   *
   * @returns True if it is a directory; false otherwise.
   */
  public isDirectory(): boolean {
    return this.type === cwl.CWLType.DIRECTORY.toString();
  }


  /**
   * Convert the local path reference to an S3 reference.
   *
   * @param s3UriLocation The S3 URI location to convert to.
   */
  convertToS3Reference(s3UriLocation: string): void {
    if (this._path) {
      this._location = s3UriLocation;
      this._path = undefined; // Remove local path reference after conversion
    }
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
