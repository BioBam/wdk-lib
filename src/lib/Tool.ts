import * as cwl from 'cwl-ts-auto';
import * as yaml from 'js-yaml';
import { IMappable } from './IMappable';
import { IStep } from './IStep';
import { IToolProps } from './IToolProps';
import { Requirement } from './Requirement';
import { StepConstruct } from './StepConstruct';
import { SynthFiles } from './SynthFiles';
import { StepClass } from './ToolClass';
import { ToolOutputs } from './ToolOutputs';
import { WdkUtils } from './WdkUtils';
import { Workflow } from './Workflow';


export class Tool extends StepConstruct implements IMappable {
  props: IToolProps;

  public constructor(scope: Workflow, id: string, props?: IToolProps) {
    super(scope, id);
    this.stepClass = StepClass.COMMAND_LINE_TOOL;
    this.props = props || {};

    // If the metadata is provided, use it to set the label and fileName
    if (props?.metadata) {
      if (props.metadata.label) {
        this.config.label = props.metadata.label; // Set internal value to new label.
      }
      if (props.metadata.fileName) {
        this.fileName = props.metadata.fileName;
      }
    }

    // Check if scope is not null and instance of workflow
    if (scope && scope instanceof Workflow) {
      scope.addStep(this);
    }

    // this.cwlTool =
    //   new cwlTsAuto.CommandLineTool({
    //     class_: cwlTsAuto.CommandLineTool_class.COMMANDLINETOOL,
    //     inputs: [],
    //     outputs: []
    //   })
  }


  hasSteps(): boolean {
    return false;
  }

  get steps(): IStep[] {
    return [];
  }

  public get requirements(): Requirement[] {
    return this._nodesOf(Requirement) as Requirement[];
  }

  /**
   * Create a map repsentation of the tool following the CWL specification.
   *
   * @returns
   */
  toMap(): { [key: string]: any } {
    // ! Pass relativeUris=false to bypass cwl-ts-auto bug with path.relative() on Windows
    return this._toCwlObject().save(false, '', false);
  }


  /**
   *
   * Serialize the tool to a CWL file.
   *
   * @param dirPath
   * @returns
   */
  serialize(dirPath: string): SynthFiles {
    const shortClass = WdkUtils.getLowercaseInitials(this.stepClass);
    const cwlFile = WdkUtils.newFilePath(dirPath, `${this.id}.${shortClass}.cwl`);
    const synthInfo = SynthFiles.createWithMain(cwlFile);
    // ! Pass relativeUris=false to bypass cwl-ts-auto bug with path.relative() on Windows
    const data = this._toCwlObject().save(false, '', false);
    const yamlString = yaml.dump(data, { noRefs: true });
    WdkUtils.writeToFile(yamlString, cwlFile);
    return synthInfo;
  }

  /**
   * Creates a ToolOutputs instance for this tool.
   * This can be used during tool execution to generate cwl.output.json files.
   *
   * @returns A ToolOutputs instance configured for this tool
   */
  createToolOutputs(): ToolOutputs {
    return ToolOutputs.create();
  }

  /**
   * @internal
   * @returns
   */
  _toCwlObject(): cwl.CommandLineTool | cwl.ExpressionTool | cwl.Operation {

    let tool = new cwl.CommandLineTool({
      id: this.id,
      cwlVersion: cwl.CWLVersion.V1_2,
      class_: cwl.CommandLineTool_class.COMMANDLINETOOL,
      inputs: [],
      outputs: [],
    });

    // Only add base command if it is not empty
    if (this.config.baseCommand.length > 0) {
      tool.baseCommand = this.config.baseCommand;
    }
    // Only add arguments if it is not empty
    if (this.config.arguments.length > 0) {
      tool.arguments_ = this.config.arguments;
    }

    if (this.label) {
      tool.label = this.label;
    }

    // Add inputs
    this.inputs.forEach(input => {
      let inputCwl = input._toCwlObject();
      tool.inputs.push(inputCwl);
    });


    // Add outputs
    this.outputs.forEach(output => {
      let outputCwl = output._toCwlObject();
      tool.outputs.push(outputCwl);
    });

    // Add Requirements if any
    const requirements = this.requirements;
    if (requirements.length > 0) {
      tool.requirements = [];
      for (const requirement of requirements) {
        tool.requirements.push(requirement._toCwlObject());
      }
    }

    return tool;
  }
}
