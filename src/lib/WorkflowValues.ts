import { IMappable } from './IMappable';
import { Input } from './Input';
import { InputReference } from './InputReference';

type InputValue = string | boolean | number | string[] | Array<string> | InputReference | InputReference[];

export class WorkflowValues implements IMappable {

  // Static factory method
  static create(taskName?: string): WorkflowValues {
    const w = new WorkflowValues();
    w._taskName = taskName ? taskName : 'Task';
    return w;
  }

  private _taskName: string = 'Task';
  private _inputs: Map<string, InputValue>;

  // Constructor
  constructor() {
    this._inputs = new Map<string, InputValue>();
  }

  /**
   * Associate a value to an input object.
   *
   * @param input Input object to reference the value to
   * @param value Value associated to the input
   * @returns
   */
  public addInput(input: Input, value: InputValue): this {
    this._inputs.set(input.id, value);
    return this;
  }

  get taskName(): string {
    return this._taskName;
  }

  // Method to get input map
  public get inputs(): { [key: string]: InputValue } {
    const obj: { [key: string]: InputValue } = {};
    this._inputs.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }

  /**
   * Get the file paths for all the file inputs
   */
  public get filePaths(): string[] {
    const pathsList: string[] = [];
    this._inputs.forEach((value) => {
      if (value instanceof InputReference) {
        const onePath = (value as InputReference).path;
        if (onePath) {
          pathsList.push(onePath);
        }
      } else if (Array.isArray(value) && value.length > 0 && value[0] instanceof InputReference) {
        const paths = value as InputReference[];
        paths.forEach((path) => {
          const onePath = path.path;
          if (onePath) {
            pathsList.push(onePath);
          }
        });
      }
    });
    return pathsList;
  }

  // Method to convert the inputs map to an object for easier serialization
  toMap(): { [key: string]: any } {
    const obj: { [key: string]: any } = {};
    this._inputs.forEach((value, key) => {
      if (value instanceof InputReference) {
        obj[key] = (value as InputReference).toMap();
      } else if (Array.isArray(value) && value.length > 0 && value[0] instanceof InputReference) {
        const paths = value as InputReference[];
        obj[key] = paths.map(path => path.toMap());
      } else {
        obj[key] = value;
      }
    });
    return obj;
  }


}