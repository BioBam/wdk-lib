import * as cwl from 'cwl-ts-auto';
import * as yaml from 'js-yaml';
import { IMappable } from './IMappable';
import { IStep } from './IStep';
import { IToolProps } from './IToolProps';
import { Requirement } from './Requirement';
import { StepConstruct } from './StepConstruct';
import { SynthFiles } from './SynthFiles';
import { StepClass } from './ToolClass';
import { WdkUtils } from './WdkUtils';
import { Workflow } from './Workflow';


export class ExpressionTool extends StepConstruct implements IMappable {

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
    // const data = this.toMap();
    const yamlString = yaml.dump(data, { noRefs: true });
    WdkUtils.writeToFile(yamlString, cwlFile);
    return synthInfo;

    throw new Error(`Method not implemented. ${dirPath}`);
  }

  get requirementsMap(): { [key: string]: any } {
    const nodes = this._nodesOf(Requirement) as Requirement[];
    const reqMap: { [key: string]: any } = {};
    nodes.forEach(node => {
      reqMap[node.requirementType.toString()] = node.toMap();
    });
    return reqMap;
  }

  /**
   * Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool.
   * @returns
   */
  public toMap(): { [key: string]: any } {
    const map: { [key: string]: any } = {};
    map.class = this.stepClass.toString();
    // map.cwlVersion = this.config.cwlVersion;
    // map.id = this.id;

    map.requirements = this.requirementsMap;

    // Inputs section
    const inputs: { [key: string]: any } = {};
    this.inputs.forEach(input => {
      inputs[input.id] = input._type.toString() + (input.optional ? '?' : '');
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


    return cwlETool;
  }


}