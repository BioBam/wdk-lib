import * as cwl from 'cwl-ts-auto';
import { Conditional } from './Conditional';
import { Input } from './Input';
import { Output } from './Output';
import { Scatter } from './Scatter';
import { StepInputsValue } from './StepInputsValue';
import { SynthFiles } from './SynthFiles';

/**
 * Represents a step in a workflow.
 */
export interface IStep {

  /**
   * The name of the step file. It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.
   */
  get fileName(): string;
  set fileName(newName: string);

  /**
   * Whether the step has sub
   * steps like in case of a workflow step.
   * */
  hasSteps(): boolean;

  /**
   * All steps nested within this step.
   */
  get steps(): IStep[];

  // get stepClass(): StepClass;

  /**
   * Serialize the step to a directory. If the step has substeps, they will be serialized recursively.
   */
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

  /**
   * Get the stepValueFrom object if the step is a stepValueFrom step.
   */
  get stepInputsValueFrom(): StepInputsValue | undefined;

  /**
   * Get the conditional object if the step is a scatter step.
   */
  get conditional(): Conditional | undefined;

  /**
   * @internal
   * Create the CWL object for the step.
   */
  _toCwlObject(): string | cwl.Workflow | cwl.CommandLineTool | cwl.ExpressionTool | cwl.Operation;

}