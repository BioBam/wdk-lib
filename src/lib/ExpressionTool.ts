import { IMappable } from './IMappable';
import { IToolProps, Tool } from './Tool';
import { StepClass } from './ToolClass';
import { Workflow } from './Workflow';

export class ExpressionTool extends Tool implements IMappable {

  /**
     * Create a CWL expression script that generates a JSON file with the parameters of the tool.
     * Example: call with makeParametersJsonExpression()
     *
     * @return string of the CWL expression script
     */
  public static makeParametersJsonExpression(): string {
    const expressionScript = `\${
      var params = {};
        for (var key in inputs) {
          if (inputs[key] !== undefined && inputs[key] !== null) { // Check if inputs[key] is set
            if (Array.isArray(inputs[key]) && inputs[key][0].class === 'File') {
              params[key] = inputs[key].map(file => file.basename);
            } else if (typeof inputs[key] === 'object' && inputs[key].class === 'File') {
              params[key] = inputs[key].basename;
            } else {
              params[key] = inputs[key];
            }
          }
        }

        return {
          "parameters_file": {
            "class": "File",
            "basename": "parameters.txt",
            "contents": JSON.stringify(params, null, 2)
          }
        };
    }`;
    return expressionScript;
  }


  private _expression: string | undefined;

  public constructor(scope: Workflow, id: string, props?: IToolProps) {
    super(scope, id, props);
    this.stepClass = StepClass.EXPRESSION_TOOL;
  }

  /**
   * Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool.
   * @returns
   */
  public toMap(): { [key: string]: any } {
    const map: { [key: string]: any } = {};
    map.class = this.stepClass.toString();
    map.cwlVersion = this.config.cwlVersion;
    // map.id = this.id;

    map.requirements = this.requirementsMap;

    // Inputs section
    const inputs: { [key: string]: any } = {};
    this.inputs.forEach(input => {
      inputs[input.id] = input.type.toString() + (input.optional ? '?' : '');
    });
    map.inputs = inputs;

    // Outputs section
    const outputs: { [key: string]: any } = {};
    this.outputs.forEach(output => {
      const outputMap = output.toMap();
      if (Object.keys(outputMap).length === 1 && outputMap.type) {
        outputs[output.id] = outputMap.type;
      } else {
        outputs[output.id] = outputMap;
      }
    });

    if (Object.keys(outputs).length === 0) {
      map.outputs = [];
      // delete tData.outputs;
    } else {
      map.outputs = outputs;
    }

    // Expression section
    map.expression = this.expression;

    // if requirements is empty, remove it
    if (Object.keys(map.requirements).length === 0) {
      delete map.requirements;
    }

    return map;
  }

  /**
   * Specify a custom JavaScript expression for this ExpressionTool
   * @param expression
   * @returns
   */
  public withExpression(expression: string): this {
    this._expression = expression;
    return this;
  }

  /**
   * Get the custom JavaScript expression for this ExpressionTool
   */
  public get expression(): string | undefined {
    return this._expression;
  }


}