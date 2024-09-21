import { IMappable } from './IMappable';
import { Input } from './Input';
import { InputReference } from './InputReference';

type InputValue = string | boolean | number | string[] | Array<string> | InputReference;

export class WorkflowValues implements IMappable {
  // Static factory method
  static create(taskName?: string): WorkflowValues {
    const w = new WorkflowValues();
    w._taskName = taskName ? taskName : 'Task';
    return w;
  }

  private _taskName: string = 'Task';
  private _inputs: Map<string, any>;

  // Constructor
  constructor() {
    this._inputs = new Map<string, InputValue>();
  }

  // Method to add input with InputReference value
  public addInput(input: Input, value: InputReference | InputValue): this {
    if (value instanceof InputReference) {
      this._inputs.set(input.id, value);
    } else {
      this._inputs.set(input.id, value);
    }
    return this;
  }

  // // Method to add input with string value
  // addInput(input: Input, value: InputValue): this {
  //     this.inputs.set(input.id, value);
  //     return this;
  // }

  //   // Method to add input with string value
  //   addInput(input: Input, value: string): this {
  //     this.inputs.set(input.id, value);
  //     return this;
  //   }

  //   // Method to add input with boolean value
  //   addInput(input: Input, value: boolean): this {
  //     this.inputs.set(input.id, value);
  //     return this;
  //   }

  //   // Method to add input with double value
  //   addInput(input: Input, value: number): this {
  //     this.inputs.set(input.id, value);
  //     return this;
  //   }

  //   // Overloaded method to add input with string array value
  //   addInput(input: Input, values: string[]): this {
  //     this.inputs.set(input.id, values);
  //     return this;
  //   }

  //   // Overloaded method to add input with list of strings value
  //   addInput(input: Input, values: Array<string>): this {
  //     this.inputs.set(input.id, values);
  //     return this;
  //   }

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

  // Method to get input Files paths
  public get filePaths(): { [key: string]: string } {
    const obj: { [key: string]: string } = {};
    this._inputs.forEach((value, key) => {
      if (value instanceof InputReference) {
        const path = (value as InputReference).path;
        if (path) {
          obj[key] = path;
        }
      }
    });
    return obj;
  }

  // Method to convert the inputs map to an object for easier serialization
  toMap(): { [key: string]: any } {
    const obj: { [key: string]: any } = {};
    this._inputs.forEach((value, key) => {
      if (value instanceof InputReference) {
        obj[key] = (value as InputReference).toMap();
      } else {
        obj[key] = value;
      }
    });
    return obj;
  }


}