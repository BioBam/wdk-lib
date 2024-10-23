import { Construct } from './Construct';
import { Input } from './Input';
import { IStep } from './IStep';
import { Type } from './Type';

export class Conditional extends Construct {

  static step(step: IStep): Conditional {
    return new Conditional(step as unknown as Construct);
  }

  private _expression: string | undefined;

  private constructor(scope: Construct) {
    super(scope, '');
  }

  get expression(): string | undefined {
    return this._expression;
  }

  set expression(js: string | undefined) {
    this._expression = js;
  }

  whenBooleanInputIs(input: Input, value: boolean) {
    // Only accept this method if the input is a boolean
    if (input.type != Type.BOOLEAN) {
      throw new Error(`Input ${input.id} is not a boolean. Conditional can only be applied on boolean inputs.`);
    }
    this._expression = '$(inputs.' + input.id + ' == ' + value + ')';
  }

}
