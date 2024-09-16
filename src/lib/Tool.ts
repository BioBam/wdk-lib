import * as yaml from 'js-yaml';
import { Constants } from './Constants';
import { Construct } from './Construct';
import { IMappable } from './IMappable';
import { Input } from './Input'; // Adjust imports as needed
import { IStep } from './IStep';
import { Output } from './Output';
import { Requirement } from './Requirement';
import { SynthFiles } from './SynthFiles';
import { StepClass } from './ToolClass';
import { ToolConfig } from './ToolConfig';
import { WdkUtils } from './WdkUtils';
import { Workflow } from './Workflow';


export interface IToolProps {
  readonly metadata?: IToolMetadata;
}

/**
 * Metadata that needs to be passed as a parameter from the instantiating workflow in some cases.
 */
export interface IToolMetadata {
  /**
   * The file name used when exporting a tool and referencing in a workflow. Default is the id + '.cwl'.
   */
  readonly fileName?: string;

  /**
   * Allow to customize the label in a tool.
   */
  readonly label?: string;
}


export class Tool extends Construct implements IMappable, IStep {
  private _config: ToolConfig = ToolConfig.basic(this);
  private _fileName: string = `${this.id}.cwl`;
  private _stepClass: StepClass = StepClass.COMMAND_LINE_TOOL;
  props: IToolProps;

  public constructor(scope: Workflow, id: string, props?: IToolProps) {
    super(scope, id);
    this.props = props || {};

    // If the metadata is provided, use it to set the label and fileName
    if (props?.metadata) {
      if (props.metadata.label) {
        this._config.label = props.metadata.label; // Set internal value to new label.
      }
      if (props.metadata.fileName) {
        this._fileName = props.metadata.fileName;
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

  get fileName(): string {
    return this._fileName;
  }

  hasSteps(): boolean {
    return false;
  }


  public get config(): ToolConfig {
    return this._config;
  }

  set config(value: ToolConfig) {
    this._config = value;

  }

  get steps(): IStep[] {
    return [];
  }


  get stepClass(): StepClass {
    return this._stepClass;
  }

  set stepClass(newClass: StepClass) {
    this._stepClass = newClass;
  }

  get inputs(): Input[] {
    return this.nodesOf(Input) as Input[];
  }

  get linkedInputs(): Input[] {
    const inputs = this.nodesOf(Input) as Input[];
    return inputs.filter(input => input.linked);
  }

  get outputs(): Output[] {
    return this.nodesOf(Output) as Output[];
  }

  get linkedOutputs(): Output[] {
    const nodes = this.nodesOf(Output) as Output[];
    return nodes.filter(node => node.referenced);
  }

  get label(): any {
    return this._config.label;
  }

  get requirementsMap(): { [key: string]: any } {
    const nodes = this.nodesOf(Requirement) as Requirement[];
    const reqMap: { [key: string]: any } = {};
    nodes.forEach(node => {
      reqMap[node.requirementType.toString()] = node.toMap();
    });
    return reqMap;
  }

  toMap(): { [key: string]: any } {
    const tData: { [key: string]: any } = {
      class: this.stepClass.toString(),
      cwlVersion: Constants.cwlVersion,
      // id: this.id,
      label: this.label,
      requirements: this.requirementsMap,
      baseCommand: this.config.baseCommand,
      inputs: {},
      outputs: {},
      arguments: this.config.arguments,
    };


    // Inputs section
    const inputs: { [key: string]: any } = {};
    this.inputs.forEach(input => {
      let inputMap = input.toMap();
      // if the input map only has the type key, then we can just use the type value
      if (Object.keys(inputMap).length === 1 && inputMap.type) {
        inputMap = inputMap.type;
      }
      inputs[input.id] = inputMap;
    });
    tData.inputs = inputs;

    // Outputs section
    const outputs: { [key: string]: any } = {};
    this.outputs.forEach(output => {
      outputs[output.id] = output.yamlMap;
    });
    if (Object.keys(outputs).length === 0) {
      tData.outputs = [];
      // delete tData.outputs;
    } else {
      tData.outputs = outputs;
    }

    // if requirements is empty, remove it
    if (Object.keys(tData.requirements).length === 0) {
      delete tData.requirements;
    }
    // if basecommand is empty, remove it
    if (tData.baseCommand.length === 0) {
      delete tData.baseCommand;
    }

    return tData;
  }


  serialize(dirPath: string): SynthFiles {
    const shortClass = WdkUtils.getLowercaseInitials(this.stepClass);
    const cwlFile = WdkUtils.newFilePath(dirPath, `${this.id}.${shortClass}.cwl`);
    const synthInfo = SynthFiles.createWithMain(cwlFile);
    const data = this.toMap();
    const yamlString = yaml.dump(data, { noRefs: true });
    WdkUtils.writeToFile(yamlString, cwlFile);
    return synthInfo;
  }
}
