import { Construct } from 'constructs';
import * as cwl from 'cwl-ts-auto';

export enum Type {
  FILE = cwl.CWLType.FILE,
  DIRECTORY = cwl.CWLType.DIRECTORY,
  STRING = cwl.PrimitiveType.STRING,
  BOOLEAN = cwl.PrimitiveType.BOOLEAN,
  INT = cwl.PrimitiveType.INT,
  DOUBLE = cwl.PrimitiveType.DOUBLE,
  STRING_ARRAY = 'string_array'
}

export interface InputBinding {
  prefix?: string;
  position?: number;
}
export interface OutputBinding {
  glob: string;
}


export interface InputProps {
  type: Type;
  inputBinding?: InputBinding;
}

export class Input extends Construct {
  type: Type;
  constructor(scope: Construct, id: string, props: InputProps) {
    super(scope, id);
    this.type = props.type;
  }
}



export interface ParameterProps {
  prefix?: string;
  position?: number;
}

export interface FileInputProps extends ParameterProps {
  default?: string;
}

export class FileInput extends Input {
  constructor(scope: Construct, id: string, props: FileInputProps) {
    super(scope, id, {
      type: Type.FILE,
      inputBinding: {
        prefix: props.prefix
      }
    });
  }
}

export interface StringInputProps extends ParameterProps {
}

export class StringInput extends Input {
  constructor(scope: Construct, id: string, props: StringInputProps) {
    super(scope, id, {
      type: Type.STRING,
      inputBinding: {
        prefix: props.prefix
      }
    });
  }
}

export interface IntInputProps extends ParameterProps {
}

export class IntInput extends Input {
  constructor(scope: Construct, id: string, props: IntInputProps) {
    super(scope, id, {
      type: Type.INT,
      inputBinding: {
        prefix: props.prefix
      }
    });
  }
}

export interface StringArrayInputProps extends ParameterProps {
  separate?: boolean;
}

export class StringArrayInput extends Input {
  constructor(scope: Construct, id: string, props: StringArrayInputProps) {
    super(scope, id, {
      type: Type.STRING_ARRAY,
      inputBinding: {
        prefix: props.prefix
      }
    });
  }
}

export interface BooleanInputProps extends ParameterProps {
  default?: boolean;
}

export class BooleanInput extends Input {
  default?: boolean;
  constructor(scope: Construct, id: string, props: BooleanInputProps) {
    super(scope, id, {
      type: Type.STRING,
      inputBinding: {
        prefix: props.prefix
      }
    });
    this.default = props.default;
  }
}

export interface OutputProps {
  type: Type;
  outputBinding: OutputBinding;
}

export class Output extends Construct {
  type: Type;
  constructor(scope: Construct, id: string, props: OutputProps) {
    super(scope, id);
    this.type = props.type;
  }
}

export interface FileOutputProps {
  glob: string;
}

export interface FileOutputProps {
  glob: string;
}

export class FileOutput extends Output {
  constructor(scope: Construct, id: string, props: FileOutputProps) {
    super(scope, id, {
      type: Type.FILE,
      outputBinding: {
        glob: props.glob
      }
    });
  }
}

export enum CWLVersion {
  V1_2 = 'v1.2'
}

export interface CWLComponentProperties {
  /**
   * The version of the CWL specification to which this document conforms. Default: CWLVersion.V1_2
   */
  cwlVersion?: CWLVersion;
}

export interface ToolProps extends CWLComponentProperties {
  private readonly id?: String;
  private readonly label?: String;
  private readonly description?: String;
  private readonly baseCommand?: String[];
  private readonly arguments?: String[];
  private readonly enableNetworkAccess?: boolean;
}

export class Tool extends Construct {
  props: ToolProps;
  constructor(scope: Construct, id: string, props: ToolProps) {
    super(scope, id);
    this.props = props;
  }

  public createToolJson() {
    let blastxTool = new cwl.CommandLineTool({
      class_: cwl.CommandLineTool_class.COMMANDLINETOOL,
      baseCommand: 'blastx',
      inputs: this.defineInputs(),
      outputs: this.defineOutputs(),
    });

    // Here you can set any other properties related to the command line tool.

    let json = JSON.stringify(blastxTool.save(), null, 2);
    console.log(json);
    return json;
  }

  private defineInputs(): cwl.CommandInputParameter[] {
    // Define all input parameters for blastx following the help documentation provided.
    // This function would create a long list of CommandInputParameter objects corresponding to each flag.
    // For example:

    let queryInput = new cwl.CommandInputParameter({
      id: "query",
      type: cwl.PrimitiveType.FILE,
      inputBinding: {
        prefix: "-query"
      }
    });

    let evalueInput = new cwl.CommandInputParameter({
      id: "evalue",
      type: cwl.PrimitiveType.DOUBLE,
      inputBinding: new cwl.InputBinding({
        prefix: "-evalue"
      });
    });

    // More input definitions would follow...

    // Here is an array of all inputs defined. It should include all of them like the examples above.
    return [queryInput, evalueInput /*, ... more inputs here */];

  }

  private defineOutputs(): cwl.CommandOutputParameter[] {
    // Define all output parameters for blastx.
    // As per the provided information, there doesn't seem to be different outputs necessary.
    // Usually BLAST tools generate a single output file specified by -out parameter.
    // An example might look like:

    let outputFile = new cwl.CommandOutputParameter({
      id: "output_file",
      type: cwl.PrimitiveType.FILE,
      outputBinding: {
        glob: "output.txt"
      }
    });

    return [outputFile];
  }

}