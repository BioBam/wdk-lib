import * as cwl from 'cwl-ts-auto';
import { IMappable } from './IMappable';

export class OutputReference implements IMappable {

  /**
   * Create a local file reference.
   *
   * @param relativePath path to a local file like `/Users/username/file.txt`
   * @returns
   */
  static file(relativePath: string): OutputReference {
    const outputReference = new OutputReference();
    outputReference.type = cwl.CWLType.FILE.toString();
    outputReference._path = relativePath;
    return outputReference;
  }

  /**
   * Create a local directory reference.
   *
   * @param relativePath path to a local directory like `/Users/username/project/`
   * @returns
   */
  static directory(relativePath: string): OutputReference {
    const outputReference = new OutputReference();
    outputReference.type = cwl.CWLType.DIRECTORY.toString();
    outputReference._path = relativePath;
    return outputReference;
  }

  /**
   * Create a reference to a list of local files.
   *
   * @param relativePaths Array of file paths. Can contain null values which will be preserved in the output.
   *                     Examples: `["/home/file1.txt", null, "/home/file3.txt"]`
   * @returns Array of OutputReference objects with null values preserved for null inputs
   * @throws Error if relativePaths is not an array
   */
  static fileArray(relativePaths: any): OutputReference[] {
    return this.createArrayWithNulls(relativePaths, (filePath) => this.file(filePath));
  }

  /**
   * Create a reference to a list of local directories.
   *
   * @param relativePaths path to local directories like `["/home/proj1/", "/home/proj2/"]`
   * @returns
   */
  static directoryArray(relativePaths: any): OutputReference[] {
    return this.createArrayWithNulls(relativePaths, (filePath) => this.directory(filePath));
  }

  /**
   * Create a s3 file reference.
   *
   * @param s3FileReference Reference to an S3 file formatted like `s3://bucket-name/path/to/file`
   * @returns
   */
  static s3File(s3FileReference: string): OutputReference {
    const outputReference = new OutputReference();
    outputReference.type = cwl.CWLType.FILE.toString();
    outputReference._location = s3FileReference;
    return outputReference;
  }

  /**
   * Create a reference to a list of s3 files.
   *
   * @param s3FileReferences Reference to S3 files formatted like `["s3://bucket-name/path/to/file1", "s3://bucket-name/path/to/file2"]`
   * @returns
   */
  static s3FileArray(s3FileReferences: any): OutputReference[] {
    return this.createArrayWithNulls(s3FileReferences, (filePath) => this.s3File(filePath));
  }

  /**
   * Create a s3 directory reference.
   *
   * @param s3FileReference Reference to an S3 directory formatted like `s3://bucket-name/path/to/directory/`
   * @returns
   */
  static s3Directory(s3FileReference: string): OutputReference {
    const outputReference = new OutputReference();
    outputReference.type = cwl.CWLType.DIRECTORY.toString();
    outputReference._location = s3FileReference;
    return outputReference;
  }

  /**
   * Create a reference to a list of s3 directories.
   *
   * @param s3FileReferences Reference to S3 directories formatted like `["s3://bucket-name/path/to/dir1", "s3://bucket-name/dir2"]`
   * @returns
   */
  static s3DirectoryArray(s3FileReferences: any): OutputReference[] {
    return this.createArrayWithNulls(s3FileReferences, (filePath) => this.s3Directory(filePath));
  }

  /**
   * Create a string output reference.
   *
   * @param value The string value
   * @returns
   */
  static string(value: string): OutputReference {
    const outputReference = new OutputReference();
    outputReference.type = cwl.PrimitiveType.STRING.toString();
    outputReference._value = value;
    return outputReference;
  }

  /**
   * Create a reference to a list of strings.
   *
   * @param values Array of string values
   * @returns
   */
  static stringArray(values: any): OutputReference[] {
    return this.createArrayWithNulls(values, (value) => this.string(value));
  }

  /**
   * Create a boolean output reference.
   *
   * @param value The boolean value
   * @returns
   */
  static boolean(value: boolean): OutputReference {
    const outputReference = new OutputReference();
    outputReference.type = cwl.PrimitiveType.BOOLEAN.toString();
    outputReference._value = value;
    return outputReference;
  }

  /**
   * Create an integer output reference.
   *
   * @param value The integer value
   * @returns
   */
  static integer(value: number): OutputReference {
    const outputReference = new OutputReference();
    outputReference.type = cwl.PrimitiveType.INT.toString();
    outputReference._value = value;
    return outputReference;
  }

  /**
   * Create a float output reference.
   *
   * @param value The float value
   * @returns
   */
  static float(value: number): OutputReference {
    const outputReference = new OutputReference();
    outputReference.type = cwl.PrimitiveType.FLOAT.toString();
    outputReference._value = value;
    return outputReference;
  }

  /**
   * Helper method to create array references with null value handling.
   * @param items Array of items that can be null
   * @param createRef Function to create a reference for non-null items
   * @returns Array with references and null values preserved
   */
  private static createArrayWithNulls<T>(
    items: any,
    createRef: (item: any) => T,
  ): T[] {
    if (!Array.isArray(items)) {
      throw new Error(`Expected an array, got ${typeof items}: ${items}`);
    }

    const refArray: T[] = [];
    for (const item of items) {
      if (item != null && item !== undefined) {
        refArray.push(createRef(item));
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
  private _value: any;

  get path(): string | undefined {
    return this._path;
  }

  get location(): string | undefined {
    return this._location;
  }

  get value(): any {
    return this._value;
  }

  /**
   * Checks if the OutputReference is a directory.
   *
   * @returns True if it is a directory; false otherwise.
   */
  public isDirectory(): boolean {
    return this.type === cwl.CWLType.DIRECTORY.toString();
  }

  /**
   * Checks if the OutputReference is a file.
   *
   * @returns True if it is a file; false otherwise.
   */
  public isFile(): boolean {
    return this.type === cwl.CWLType.FILE.toString();
  }

  /**
   * Checks if the OutputReference is a primitive type (string, boolean, int, float).
   *
   * @returns True if it is a primitive type; false otherwise.
   */
  public isPrimitive(): boolean {
    return this._value !== undefined;
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

    if (this.isPrimitive()) {
      // For primitive types, just return the value
      return this._value;
    }

    yamlMap.class = this.type;

    if (this._path) {
      yamlMap.path = this._path;
    }

    if (this._location) {
      yamlMap.location = this._location;
    }

    return yamlMap;
  }
}
