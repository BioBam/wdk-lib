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

  get requirementsMap(): { [key: string]: any } {
    const nodes = this._nodesOf(Requirement) as Requirement[];
    const reqMap: { [key: string]: any } = {};
    nodes.forEach(node => {
      reqMap[node.requirementType.toString()] = node.toMap();
    });
    return reqMap;
  }

  /**
   * Create a map repsentation of the tool following the CWL specification.
   *
   * @returns
   */
  toMap(): { [key: string]: any } {

    const cwlTool = this._toCwlObject();
    const cwlDict = cwlTool.save();
    return cwlDict;


    // const tData: { [key: string]: any } = {
    //   // id: this.id,
    //   requirements: this.requirementsMap,
    // };


    // // Inputs section
    // this.inputs.forEach(input => {
    //   let inputMap = input.toMap();
    //   // if the input map only has the type key, then we can just use the type value
    //   if (Object.keys(inputMap).length === 1 && inputMap.type) {
    //     inputMap = inputMap.type;
    //   }
    //   inputs[input.id] = inputMap;
    // });
    // tData.inputs = inputs;

    // // Outputs section
    // const outputs: { [key: string]: any } = {};
    // this.outputs.forEach(output => {
    //   outputs[output.id] = output.yamlMap;
    // });
    // if (Object.keys(outputs).length === 0) {
    //   tData.outputs = [];
    //   // delete tData.outputs;
    // } else {
    //   tData.outputs = outputs;
    // }

    // // if requirements is empty, remove it
    // if (Object.keys(tData.requirements).length === 0) {
    //   delete tData.requirements;
    // }
    // // if basecommand is empty, remove it
    // if (tData.baseCommand.length === 0) {
    //   delete tData.baseCommand;
    // }

    // return tData;
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
    const data = this.toMap();
    const yamlString = yaml.dump(data, { noRefs: true });
    WdkUtils.writeToFile(yamlString, cwlFile);
    return synthInfo;
  }

  /**
   * @internal
   * @returns
   */
  _toCwlObject(): cwl.CommandLineTool | cwl.ExpressionTool | cwl.Operation {

    let tool = new cwl.CommandLineTool({
      cwlVersion: cwl.CWLVersion.V1_2,
      class_: cwl.CommandLineTool_class.COMMANDLINETOOL,
      inputs: [],
      outputs: [],
      // TODO: Add requirements.
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

    return tool;
  }
}
