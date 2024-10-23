import { Input } from './Input';
import { Output } from './Output';
import { Scatter } from './Scatter';
import { SynthFiles } from './SynthFiles';
import { StepClass } from './ToolClass';

/**
 * Represents a step in a workflow.
 */
export interface IStep {
  /**
   * The name of the step file. It defaults to the step id + '.cwl'. It can be set using the metadata.fileName property.
   */
  get fileName(): string;
  // set fileName(newName: string);
  /**
   * Whether the step has sub
   * steps (nested steps).
   * */
  hasSteps(): boolean;

  /**
   * All steps nested within this step.
   */
  get steps(): IStep[];

  get stepClass(): StepClass;
  set stepClass(newClass: StepClass);

  serialize(dirPath: string): SynthFiles;

  /**
   * Unique identifier for the step in the workflow.
   */
  get id(): string;

  set id(newID: string);

  /**
   * All inputs of the step.
   */
  get inputs(): Input[];

  /**
   * Inputs of the step that are actually being used (linked) in parent workflow.
   */
  get linkedInputs(): Input[];

  /**
   * All outputs of the step.
   */
  get outputs(): Output[];

  /**
   * Outputs of the step that are actually being used (linked) in parent workflow.
   */
  get linkedOutputs(): Output[];

  /**
   * Get the scatter object if the step is a scatter step.
   */
  get scatter(): Scatter | undefined;

}