import { IMappable } from './IMappable';
import { Input } from './Input';
import { InputReference } from './InputReference';
import { StepConstruct } from './StepConstruct';

type InputValue = string | boolean | number | string[] | InputReference | InputReference[];

/**
 * Represents the values associated with inputs of a workflow.
 *
 * This class allows for the management and retrieval of input values that are part of a workflow,
 * facilitating tasks such as mapping inputs to their values, extracting file paths, and converting
 * inputs to serializable formats.
 *
 * @example
 * import { WorkflowValues, Input, Constructs } from 'wdk-lib';
 * const root = Constructs.createRoot('root');
 * const input1 = Input.string(root, 'firstInput').withDefaultValue('defaultValue');
 * const input2 = Input.file(root, 'fileInput');
 * const workflowValues = WorkflowValues.create('MyTask')
 *                          .addInput(input1, 'customValue')
 *                          .addInput(input2, new InputReference('/path/to/file'));
 */
export class WorkflowValues implements IMappable {

  // Static factory method

  // /**
  //  * Creates a new instance of WorkflowValues with an optional task name.
  //  *
  //  * @param taskName An optional name for the workflow task. Defaults to "Task" if none is provided.
  //  * @returns A new instance of WorkflowValues configured with the specified task name.
  //  */
  // static create(taskName?: string): WorkflowValues {
  //   const w = new WorkflowValues();
  //   w._taskName = taskName ? taskName : 'Task';
  //   return w;
  // }

  /**
   * Creates a new instance of WorkflowValues with an optional task name.
   *
   * @param scope The scope where the values are applied. This can be a workflow or a Tool.
   * @returns A new instance of WorkflowValues where to set input values using #addInput.
   */
  static create(scope: StepConstruct): WorkflowValues {
    const w = new WorkflowValues(scope);
    return w;
  }

  private _taskName: string = 'Task'; 
  private _inputs: Map<string, InputValue>;
  private scope: StepConstruct;

  // Constructor

  /**
   * Initializes a new instance of WorkflowValues.
   */
  private constructor(scope: StepConstruct) {
    this.scope = scope;
    this._inputs = new Map<string, InputValue>();
  }

  /**
   * Associates a value with an input object.
   *
   * @param input The input object to reference the value to.
   * @param value The value to be associated with the input.
   * @returns This instance to allow method chaining.
   */
  public addInput(input: Input, value: any): this {
    // Bring the input to the workflow level if necessary
    let topInput = input._createMatchingScopeUpper(this.scope);
    this._inputs.set(topInput.id, value);
    return this;
  }

  /**
   * Retrieves the task name associated with these workflow values.
   *
   * @returns The name of the task.
   */
  get taskName(): string {
    return this._taskName;
  }

  // Method to get input map

  /**
   * Returns a map of input IDs to their associated values.
   *
   * @returns An object where keys are input IDs and values are the associated input values.
   */
  public get inputs(): { [key: string]: InputValue } {
    const obj: { [key: string]: InputValue } = {};
    this._inputs.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }

  /**
   * Retrieves the file paths for all inputs that are files.
   *
   * @returns An array of file paths.
   */
  public get filePaths(): string[] {
    const pathsList: string[] = [];
    this._inputs.forEach((value) => {
      if (value instanceof InputReference) {
        const onePath = (value as InputReference).path;
        if (onePath) {
          pathsList.push(onePath);
        }
      } else if (Array.isArray(value) && value.length > 0) {
        const paths = value as InputReference[];
        paths.forEach((path) => {
          if (path && path instanceof InputReference) {
            const onePath = path.path;
            if (onePath) {
              pathsList.push(onePath);
            }
          }
        });
      }
    });
    return pathsList;
  }

  // Method to convert the inputs map to an object for easier serialization

  /**
   * Converts the internal map of inputs to an object for easier serialization.
   *
   * Each input's value is mapped either directly or through its `toMap` method
   * if it is an instance of `InputReference`.
   *
   * @returns An object representation of the inputs suitable for serialization.
   */
  toMap(): { [key: string]: any } {
    const obj: { [key: string]: any } = {};

    // Assuming `this._inputs` is a Map or similar structure
    this._inputs.forEach((value, key) => {

      // Check if the individual value is an instance of InputReference
      if (value instanceof InputReference) {
        obj[key] = value.toMap();
      } else if (Array.isArray(value) && value.length > 0) {
        // If it's an array, check each item inside the array
        obj[key] = value.map(item => {
          if (item instanceof InputReference) {
            return item.toMap();
          }
          return item; // In case the item is not an InputReference
        });
      } else {
        // Directly assign value if it's neither an InputReference nor an array of them
        obj[key] = value;
      }
    });

    return obj;
  }
}
