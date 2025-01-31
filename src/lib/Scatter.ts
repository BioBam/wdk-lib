import * as cwl from 'cwl-ts-auto';
import { Construct } from './Construct';
import { Input } from './Input';
import { IStep } from './IStep';
import { Requirement } from './Requirement';
import { Workflow } from './Workflow';

/**
 * A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements.
 */
export class Scatter extends Construct {

  /**
   * Each element of the array linked to the input makes a separate job, independent from the others, and which may be executed concurrently.
   *
   * @param scope A `Workflow` instance representing the workflow to which the scatter belongs. This defines the context and boundaries within which the scatter operation will occur.
   * @param step An `IStep` instance representing the specific step to scatter. This can be either a Tool or a Workflow that needs to be processed in parallel over the provided inputs.
   * @param input An `Input` instance that belongs to the step. This must be linked to an array whose elements are of the same type. It identifies the input variable to be scattered over.
   */
  static simple(scope: Workflow, step: IStep, input: Input) {
    this.workflowStepInputs(scope, step, [input]);
  }


  /**
   * Each of the input arrays is aligned, and one element is taken from each array to construct each job. It is an error if all input arrays do not have the same length.
   *
   * @param scope A `Workflow` instance representing the workflow to which the scatter belongs.
   * @param step An `IStep` instance representing the specific step to scatter.
   * @param inputs An array of `Input` instances. These represent multiple input variables belonging to the scattered step, each linked to an array. All arrays must be of equal length.
   */
  static dotProduct(scope: Workflow, step: IStep, inputs: Input[]) {
    this.workflowStepInputs(scope, step, inputs, cwl.ScatterMethod.DOTPRODUCT);
  }

  /**
   * This method performs a Cartesian product of the inputs, producing a job for every combination of the scattered inputs. The output consists of nested arrays for each level of scattering, ordered according to how the input arrays are listed.
   *
   * @param scope A `Workflow` instance representing the workflow to which the scatter belongs.
   * @param step An `IStep` instance representing the specific step to scatter.
   * @param inputs An array of `Input` instances representing multiple input variables belonging to the scattered step, each linked to an array. All possible combinations of these inputs are executed.
   */
  static nestedCrossProduct(scope: Workflow, step: IStep, inputs: Input[]) {
    this.workflowStepInputs(scope, step, inputs, cwl.ScatterMethod.NESTED_CROSSPRODUCT);
  }

  /**
   * This method performs a Cartesian product of the inputs, producing a job for every combination of the scattered inputs. Unlike nested cross-product, the output arrays are flattened to a single level but maintain the order of the input arrays.
   *
   * @param scope A `Workflow` instance representing the workflow to which the scatter belongs.
   * @param step An `IStep` instance representing the specific step to scatter.
   * @param inputs An array of `Input` instances representing multiple input variables belonging to the scattered step, each linked to an array. All combinations of these inputs are flattened and executed.
   */
  static flatCrossProduct(scope: Workflow, step: IStep, inputs: Input[]) {
    this.workflowStepInputs(scope, step, inputs, cwl.ScatterMethod.FLAT_CROSSPRODUCT);
  }


  private static workflowStepInputs(scope: Workflow, step: IStep, input: Input[], method: cwl.ScatterMethod = cwl.ScatterMethod.DOTPRODUCT) {
    // Validate that the step is a construct and implements the IStep interface
    if (!(step instanceof Construct)) {
      throw new Error('Step must extend Construct, and implement IStep interface. Is it a Tool or a Workflow?');
    }

    // Ensure that the workflow supports scatter features
    Requirement.scatterFeature(scope);

    // Create an array of input IDs for identification and processing
    const inputIds = input.map(i => i.id);

    // Return a new Scatter operation
    return new Scatter((step as unknown as Construct), inputIds, method);
  }

  /**
   * @internal
   */
  readonly _method: cwl.ScatterMethod;
  readonly ids: string[];

  private constructor(scope: Construct, ids: string[], method: cwl.ScatterMethod) {
    super(scope, '');
    this.ids = ids;
    this._method = method;
  }

}
