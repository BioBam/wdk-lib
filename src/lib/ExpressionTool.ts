import * as cwl from 'cwl-ts-auto';
import * as yaml from 'js-yaml';
import { IMappable } from './IMappable';
import { Input } from './Input';
import { IStep } from './IStep';
import { IToolProps } from './IToolProps';
import { Output } from './Output';
import { Requirement } from './Requirement';
import { StepConstruct } from './StepConstruct';
import { SynthFiles } from './SynthFiles';
import { StepClass } from './ToolClass';
import { TypeIn } from './TypeIn';
import { WdkUtils } from './WdkUtils';
import { Workflow } from './Workflow';


export class ExpressionTool extends StepConstruct implements IMappable {

  /**
   * Create a CWL ExpressionTool that picks the first non-null element from an array input.
   * This is useful for merging multiple optional outputs into a single output where only the first available value is needed.
   * The output is always a File type that can be null.
   *
   * @param scope The workflow or parent construct within which this tool is defined
   * @param id The identifier for this expression tool
   * @param inputType The TypeIn object defining the type of array elements (e.g., TypeIn.file(), TypeIn.string(), etc.)
   * @param inputId The identifier for the array input parameter (defaults to 'items')
   * @param outputId The identifier for the output parameter (defaults to 'first')
   * @returns A configured ExpressionTool that picks the first element or returns null
   *
   * @example
   * // Create a tool that picks the first file from an array of files
   * const pickFirst = ExpressionTool.createPickFirstExpressionTool(workflow, 'pick_first', TypeIn.file());
   *
   * @example
   * // Create a tool that picks the first string from an array of strings with custom IDs
   * const pickFirstString = ExpressionTool.createPickFirstExpressionTool(
   *   workflow,
   *   'pick_first_string',
   *   TypeIn.string(),
   *   'string_array',
   *   'selected_string'
   * );
   */
  public static createPickFirstExpressionTool(
    scope: Workflow,
    id: string,
    inputType: TypeIn,
    inputId: string = 'items',
    outputId: string = 'first',
  ): ExpressionTool {
    const tool = new ExpressionTool(scope, id);

    // Add InlineJavascriptRequirement
    Requirement.inlineJavascript(tool);

    // Create input based on type
    Input.array(tool, inputId, inputType);

    // Create output - make it optional since it can return null
    Output.file(tool, outputId).makeOptional(true);


    // Set the JavaScript expression
    const expression = `\${
      return {
        "${outputId}": inputs.${inputId}.length > 0 ? inputs.${inputId}[0] : null
      };
    }`;

    tool.withExpression(expression);

    return tool;
  }

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
              params[key] = inputs[key].map(function(file) { return file.basename; });
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

  /**
     * Create a CWL expression script that generates a JSON file with the parameters of the tool. All parameters are converted to strings.
     * Example: call with makeParametersJsonExpressionAllStrings()
     *
     * @return string of the CWL expression script
     */
  public static makeParametersJsonExpressionAllStrings(): string {
    const expressionScript = `\${
      var params = {};
        for (var key in inputs) {
          if (inputs[key] !== undefined && inputs[key] !== null) { // Check if inputs[key] is set
            if (Array.isArray(inputs[key]) && inputs[key][0].class === 'File') {
              params[key] = inputs[key].map(function(file) { return file.basename; });
            } else if (typeof inputs[key] === 'object' && inputs[key].class === 'File') {
              params[key] = inputs[key].basename;
            } else {
              params[key] = inputs[key].toString();
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


  private _expression: string;
  props: IToolProps | undefined;

  public constructor(scope: Workflow, id: string, props?: IToolProps) {
    super(scope, id);
    this.stepClass = StepClass.EXPRESSION_TOOL;
    this._expression = '';
    this.props = props || {};


    // Check if scope is not null and instance of workflow
    if (scope && scope instanceof Workflow) {
      scope.addStep(this);
    }
  }

  // Expressions do not have steps.
  hasSteps(): boolean {
    return false;
  }

  get steps(): IStep[] {
    throw new Error('Illegal State. Expressions do not have steps. Check hasSteps() before calling this method.');
  }

  serialize(dirPath: string): SynthFiles {

    const shortClass = WdkUtils.getLowercaseInitials(this.stepClass);
    const cwlFile = WdkUtils.newFilePath(dirPath, `${this.id}.${shortClass}.cwl`);
    const synthInfo = SynthFiles.createWithMain(cwlFile);
    const data = this._toCwlObject().save();
    const yamlString = yaml.dump(data, { noRefs: true });
    WdkUtils.writeToFile(yamlString, cwlFile);
    return synthInfo;

    throw new Error(`Method not implemented. ${dirPath}`);
  }

  public get requirements(): Requirement[] {
    return this._nodesOf(Requirement) as Requirement[];
  }

  /**
   * Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool.
   * @returns
   */
  public toMap(): { [key: string]: any } {
    return this._toCwlObject().save();
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
  public get expression(): string {
    return this._expression;
  }

  /**
   *
   * @internal
   * @returns a CWL object representation of this ExpressionTool
   */
  public _toCwlObject(): cwl.ExpressionTool {
    const cwlETool = new cwl.ExpressionTool({
      id: this.id,
      cwlVersion: cwl.CWLVersion.V1_2,
      inputs: [],
      outputs: [],
      expression: this.expression,
    });

    // Add inputs
    this.inputs.forEach(input => {
      let inputCwl = input._toCwlObject();
      cwlETool.inputs.push(inputCwl);
    });

    // Add outputs
    this.outputs.forEach(output => {
      let outputCwl = output._toCwlObject();
      cwlETool.outputs.push(outputCwl);
    });

    // Add Requirements if any
    const requirements = this.requirements;
    if (requirements.length > 0) {
      cwlETool.requirements = [];
      for (const requirement of requirements) {
        cwlETool.requirements.push(requirement._toCwlObject());
      }
    }


    return cwlETool;
  }


}