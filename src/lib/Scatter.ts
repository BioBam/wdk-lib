import * as cwl from 'cwl-ts-auto';
import { Construct } from './Construct';
import { Input } from './Input';
import { IStep } from './IStep';
import { Requirement } from './Requirement';
import { Workflow } from './Workflow';

// export enum Method {
//   DOT_PRODUCT = cwl.ScatterMethod.DOTPRODUCT,
//   NESTED_CROSS_PRODUCT = cwl.ScatterMethod.NESTED_CROSSPRODUCT,
//   FLAT_CROSS_PRODUCT = cwl.ScatterMethod.FLAT_CROSSPRODUCT,
// }

export class Scatter extends Construct {

  /**
   * A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements.
   * Each job making up a scatter operation is independent and may be executed concurrently.
   *
   * @param scope The Workflow to which the scatter belongs
   * @param step The step to scatter
   * @param input The input to scatter
   */
  static simple(scope: Workflow, step: IStep, input: Input) {
    this.workflowStepInputs(scope, step, [input]);
  }


  /**
   * A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements.
   * Each of the input arrays are aligned and one element taken from each array to construct each job.
   * It is an error if all input arrays are not the same length.
   *
   * @param scope
   * @param step
   * @param inputs
   */
  static dotProduct(scope: Workflow, step: IStep, inputs: Input[]) {
    this.workflowStepInputs(scope, step, inputs, cwl.ScatterMethod.DOTPRODUCT);
  }

  /**
   * A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements.
   * Cartesian product of the inputs, producing a job for every combination of the scattered inputs.
   * The output is nested arrays for each level of scattering, in the order that the input arrays are listed in the scatter field.
   *
   * @param scope
   * @param step
   * @param inputs
   */
  static nestedCrossProduct(scope: Workflow, step: IStep, inputs: Input[]) {
    this.workflowStepInputs(scope, step, inputs, cwl.ScatterMethod.NESTED_CROSSPRODUCT);
  }

  /**
   * A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements.
   * Cartesian product of the inputs, producing a job for every combination of the scattered inputs.
   * The output arrays are flattened to a single level, but otherwise listed in the order that the input arrays are listed in the scatter field.
   *
   * @param scope
   * @param step
   * @param inputs
   */
  static flatCrossProduct(scope: Workflow, step: IStep, inputs: Input[]) {
    this.workflowStepInputs(scope, step, inputs, cwl.ScatterMethod.FLAT_CROSSPRODUCT);
  }


  private static workflowStepInputs(scope: Workflow, step: IStep, input: Input[], method: cwl.ScatterMethod = cwl.ScatterMethod.DOTPRODUCT) {
    // Throw exception if input is not an array.. This does not apply as the scatter must be done on the tool inputs that are elements, not to the array that is scattered.
    // for (const i of input) {
    //   if (!i.isArray()) {
    //     throw new Error(`Input ${i.id} is not an array. Scatter can only be applied on array inputs.`);
    //   }
    // }

    // throw exception if step is not a Construct
    if (!(step instanceof Construct)) {
      throw new Error('Step must extend Construct, and implement IStep interface. Is it a Tool or a Workflow?');
    }

    // step.scatte
    Requirement.scatterFeature(scope);

    // create an array of input ids
    const inputIds = input.map(i => i.id);
    // step.scatter = inputIds;
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
