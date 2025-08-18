import * as fs from 'fs';
import * as path from 'path';
import { IMappable } from './IMappable';
import { Output } from './Output';
import { OutputReference } from './OutputReference';


type OutputValue = string | boolean | number | string[] | OutputReference | OutputReference[] | any;

/**
 * Represents the values associated with outputs of a workflow or tool step.
 *
 * This class allows for the management and retrieval of output values that are part of a workflow,
 * facilitating tasks such as mapping outputs to their values, extracting file paths, and converting
 * outputs to serializable formats for cwl.output.json generation.
 *
 * @example
 * import { ToolOutputs, Output, Constructs } from 'wdk-lib';
 * const root = Constructs.createRoot('root');
 * const output1 = Output.string(root, 'firstOutput');
 * const output2 = Output.file(root, 'fileOutput');
 * const toolOutputs = ToolOutputs.create('MyTask')
 *                          .addOutput(output1, 'outputValue')
 *                          .addOutput(output2, new OutputReference('/path/to/output/file'));
 * toolOutputs.writeToFile(); // Generates cwl.output.json
 */
export class ToolOutputs implements IMappable {

  /**
   * Creates a new instance of ToolOutputs.
   *
   * @returns A new instance of ToolOutputs where to set output values using #addOutput.
   */
  static create(): ToolOutputs {
    const w = new ToolOutputs();
    return w;
  }

  private _taskName: string = 'Task';
  private _outputs: Map<string, OutputValue>;
  private _outputFilePath: string = 'cwl.output.json';

  /**
   * Initializes a new instance of ToolOutputs.
   */
  private constructor() {
    this._outputs = new Map<string, OutputValue>();
  }

  /**
   * Associates a value with an output object.
   *
   * @param output The output object to reference the value to.
   * @param value The value to be associated with the output.
   * @returns This instance to allow method chaining.
   */
  public addOutput(output: Output, value: any): this {
    // Bring the output to the workflow level if necessary
    // let topOutput = output._createMatchingScopeUpper(this.scope);
    this._outputs.set(output.id, value);
    return this;
  }

  /**
   * Sets the output file path for the cwl.output.json file.
   *
   * @param filePath The path where the cwl.output.json file should be written.
   * @returns This instance to allow method chaining.
   */
  public withOutputFilePath(filePath: string): this {
    this._outputFilePath = filePath;
    return this;
  }

  /**
   * Retrieves the task name associated with these workflow outputs.
   *
   * @returns The name of the task.
   */
  get taskName(): string {
    return this._taskName;
  }

  /**
   * Returns a map of output IDs to their associated values.
   *
   * @returns An object where keys are output IDs and values are the associated output values.
   */
  public get outputs(): { [key: string]: OutputValue } {
    const obj: { [key: string]: OutputValue } = {};
    this._outputs.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }

  /**
   * Retrieves the file paths for all outputs that are files.
   *
   * @returns An array of file paths.
   */
  public get filePaths(): string[] {
    const pathsList: string[] = [];
    this._outputs.forEach((value) => {
      if (value instanceof OutputReference) {
        const onePath = (value as OutputReference).path;
        if (onePath) {
          pathsList.push(onePath);
        }
      } else if (Array.isArray(value) && value.length > 0) {
        const paths = value as OutputReference[];
        paths.forEach((pathRef) => {
          if (pathRef && pathRef instanceof OutputReference) {
            const onePath = pathRef.path;
            if (onePath) {
              pathsList.push(onePath);
            }
          }
        });
      }
    });
    return pathsList;
  }

  /**
   * Retrieves all local OutputReferences that have a path defined.
   *
   * @returns An array of OutputReference objects with a defined local path.
   */
  public get localOutputReferences(): OutputReference[] {
    const references: OutputReference[] = [];
    this._outputs.forEach((value) => {
      if (value instanceof OutputReference && value.path) {
        references.push(value);
      } else if (Array.isArray(value)) {
        value.forEach(item => {
          if (item instanceof OutputReference && item.path) {
            references.push(item);
          }
        });
      }
    });
    return references;
  }

  /**
   * Converts the internal map of outputs to an object for easier serialization.
   *
   * Each output's value is mapped either directly or through its `toMap` method
   * if it is an instance of `OutputReference`.
   *
   * @returns An object representation of the outputs suitable for serialization.
   */
  toMap(): { [key: string]: any } {
    const obj: { [key: string]: any } = {};

    this._outputs.forEach((value, key) => {
      obj[key] = this.processValue(value);
    });

    return obj;
  }

  /**
   * Recursively processes a value to convert it to a serializable format.
   *
   * @param value The value to process
   * @returns The processed value
   */
  private processValue(value: any): any {
    // Check if the individual value is an instance of OutputReference
    if (value instanceof OutputReference) {
      return value.toMap();
    } else if (Array.isArray(value) && value.length > 0) {
      // If it's an array, recursively process each item
      return value.map(item => this.processValue(item));
    } else {
      // Directly return value if it's neither an OutputReference nor an array
      return value;
    }
  }

  /**
   * Writes the output values to a cwl.output.json file.
   *
   * @param filePath Optional custom file path. If not provided, uses the default path.
   * @returns The path where the file was written.
   */
  public writeToFile(filePath?: string): string {
    const targetPath = filePath || this._outputFilePath;
    const outputData = this.toMap();

    // Ensure the directory exists
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write the JSON file
    fs.writeFileSync(targetPath, JSON.stringify(outputData, null, 2));

    return targetPath;
  }

  /**
   * Gets the current output file path.
   *
   * @returns The current output file path.
   */
  public outputFilePath(): string {
    return this._outputFilePath;
  }
}
