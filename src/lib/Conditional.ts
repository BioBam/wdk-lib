import { Construct } from './Construct';
import { Input } from './Input';
import { IStep } from './IStep';
import { Type } from './Type';

export class Conditional extends Construct {

  static step(step: IStep): Conditional {
    return new Conditional(step as unknown as Construct);
  }

  private __expression: string | undefined;

  private constructor(scope: Construct) {
    super(scope, '');
  }

  /**
   * @internal
   */
  get _expression(): string | undefined {
    return this.__expression;
  }

  /**
   * Set a conditional expression for this step.
   */
  public set expression(js: string | undefined) {
    this.__expression = js;
  }

  /**
   * Skip this step if the boolean input associated to this condition does not match the specified value.
   *
   * @param input A boolean step input parameter.
   * @param value <code>true</code> to run the step only if the input is true, <code>false</code> to run the step only if the input is false.
   */
  whenBooleanInputIs(input: Input, value: boolean) {
    // Only accept this method if the input is a boolean
    if (input._type != Type.BOOLEAN) {
      throw new Error(`Input ${input.id} is not a boolean. Conditional can only be applied on boolean inputs.`);
    }
    this.failIfInputDoesNotBelongToStep(input);
    this.__expression = `$(inputs.${input.id} == ${value})`;
  }

  /**
   * Check if the referenced input is part of the step.
   * @param input A Step input parameter.
   */
  private failIfInputDoesNotBelongToStep(input: Input) {
    //TODO: could accept linked workflow inputs by looking for the step input through the link.
    if (!this.scope?._nodesOf(Input).includes(input)) {
      throw new Error(`Input ${input.id} is not part of the step ${this.scope?.id} inputs.`);
    }
  }

  /**
   * Skip this step if the specified input is null.
   *
   * @param input One of the step input parameters. e.g. `step.inputFile`
   */
  whenInputNotNull(input: Input) {
    this.failIfInputDoesNotBelongToStep(input);
    this.__expression = `$(inputs.${input.id} !== null)`;
  }

}
