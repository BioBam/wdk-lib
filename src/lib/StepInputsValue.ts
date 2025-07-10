import { Construct } from './Construct';
import { Input } from './Input';
import { IStep } from './IStep';
import { Requirement } from './Requirement';
import { Workflow } from './Workflow';

/**
 * A "stepInput" specifies that the associated workflow step should modify the input according to the stepInput.
 * This class manages multiple valueFrom expressions for different inputs on a single step.
 */
export class StepInputsValue extends Construct {

  /**
   * Create a new StepInputsValue instance for the given step.
   *
   * @param workflow The workflow in which to apply the requirements and customize step inputs.
   * @param step The step to create valueFrom expressions for.
   * @returns A new StepInputsValue instance.
   */
  public static for(workflow: Workflow, step: IStep): StepInputsValue {
    return new StepInputsValue(step as unknown as Construct, step, workflow);
  }

  /**
   * Map of input IDs to their valueFrom expressions
   * @internal
   */
  private readonly _inputExpressions: Map<string, string> = new Map();

  /**
   * The step this StepInputsValue belongs to
   * @internal
   */
  private readonly _step: IStep;

  /**
   * The workflow in which to apply requirements
   * @internal
   */
  private readonly _workflow: Workflow;

  private constructor(scope: Construct, step: IStep, workflow: Workflow) {
    super(scope, step.id + '_stepInputsValueFrom');
    this._step = step;
    this._workflow = workflow;
  }

  /**
   * Set the value of the input to an array with one element being the value passed to the step.
   *
   * @param input The input to modify.
   */
  public valueToOneElementArray(input: Input): this {
    const valueFromExpression = '$([self])';
    return this.addValueFromExpression(input, valueFromExpression);
  }

  /**
   * If the input is an empty array, set the value to null. Otherwise, return the first element of the array.
   * Also returns null if the input is null, undefined, or not an array.
   *
   * @param input The input to modify.
   */
  public firstElementOrNull(input: Input): this {
    const valueFromExpression = '$(self == null || !Array.isArray(self) || self.length === 0 ? null : self[0])';
    return this.addValueFromExpression(input, valueFromExpression);
  }

  /**
   * Add a custom valueFrom expression for a specific input.
   *
   * @param input The input to modify.
   * @param expression The JavaScript expression to use.
   */
  public addCustomExpression(input: Input, expression: string): this {
    const valueFromExpression = `$(${expression})`;
    return this.addValueFromExpression(input, valueFromExpression);
  }

  /**
   * Common method to add a valueFrom expression for an input.
   * @private
   */
  private addValueFromExpression(input: Input, valueFromExpression: string): this {
    // Ensure that the workflow supports inline javascript
    Requirement.inlineJavascript(this._workflow);

    // Get the correct input ID for this step's scope
    const inputId = input._createMatchingScopeUpper(this._step as unknown as Construct).id;

    // Store the expression for this input
    this._inputExpressions.set(inputId, valueFromExpression);

    return this;
  }

  /**
   * Get the valueFrom expression for a specific input ID.
   */
  public getExpressionForInput(inputId: string): string | undefined {
    return this._inputExpressions.get(inputId);
  }

  /**
   * Check if there's a valueFrom expression for a specific input ID.
   */
  public hasExpressionForInput(inputId: string): boolean {
    return this._inputExpressions.has(inputId);
  }

  /**
   * Get all input IDs that have valueFrom expressions.
   */
  public inputIdsWithExpressions(): string[] {
    return Array.from(this._inputExpressions.keys());
  }


}
