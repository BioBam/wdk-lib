import { ExpressionTool } from '../ExpressionTool';
import { Input } from '../Input';
import { IToolProps } from '../IToolProps';
import { Output } from '../Output';
import { Requirement } from '../Requirement';
import { TypeIn } from '../TypeIn';
import { Workflow } from '../Workflow';

/**
 * Properties for configuring the FirstOrNullExpressionTool
 */
export interface IFirstOrNullExpressionToolProps {
  /**
   * The identifier for the array input parameter (defaults to 'items')
   */
  inputId?: string;

  /**
   * The identifier for the output parameter (defaults to 'first')
   */
  outputId?: string;
}

/**
 * FirstOrNullExpressionTool picks the first non-null element from an array input.
 * This is useful for merging multiple optional outputs into a single output where only the first available value is needed.
 *
 * @example
 * // Basic usage with files
 * const pickFirst = new FirstOrNullExpressionTool(workflow, 'pick_first', TypeIn.file());
 *
 * @example
 * // Custom input and output IDs with different data type
 * const pickFirstString = new FirstOrNullExpressionTool(
 *   workflow,
 *   'pick_first_string',
 *   TypeIn.string(),
 *   { inputId: 'string_array', outputId: 'selected_string' }
 * );
 */
export class FirstOrNullExpressionTool extends ExpressionTool {
  public readonly input: Input;
  public readonly output: Output;

  public constructor(
    scope: Workflow,
    id: string,
    inputType: TypeIn,
    props?: IFirstOrNullExpressionToolProps,
  ) {
    super(scope, id, props as IToolProps);

    // Add InlineJavascriptRequirement
    Requirement.inlineJavascript(this);

    const inputId = props?.inputId || 'items';
    const outputId = props?.outputId || 'first';

    // Create input based on type
    this.input = Input.array(this, inputId, inputType);

    // Create output - make it optional since it can return null
    this.output = Output.file(this, outputId).makeOptional(true);

    // Set the JavaScript expression
    const expression = `\${
      return {
        "${outputId}": inputs.${inputId}.length > 0 ? inputs.${inputId}[0] : null
      };
    }`;

    this.withExpression(expression);
  }
}