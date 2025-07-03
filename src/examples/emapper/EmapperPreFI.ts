import { Input, Output, Requirement, Tool, ToolConfig, TypeOut, Workflow } from '../../lib';

export class EmapperPreFI extends Tool {
  // Inputs from EmapperPreFI.java
  public paramsDataFile: Input;
  public outputFile: Input;
  public fastqFiles: Input;

  // Outputs from EmapperPreFI.java
  public outputValues: Output;
  public sequences: Output;
  public zipFiles: Output;

  constructor(scope: Workflow, id: string) {
    super(scope, id);

    ToolConfig.basic(this)
      .withLabel('OmicsBox Emapper Pre Tool')
      .withBaseCommand(['java', '@/opt/app/custom.vmoptions', '-Dapp.custom.vmoptions=/opt/app/custom.vmoptions', '-jar', '/opt/app/omicsbox.jar'])
      .withArguments(['emapper-pre']);

    // Requirements
    Requirement.docker(this, 'biobam/omicsbox:latest');
    Requirement.inlineJavascript(this);
    Requirement.networkAccess(this);

    // Inputs
    this.paramsDataFile = Input.file(this, 'paramsDataFile')
      .withDoc('Serialized Parameters File')
      .withPrefix('--paramsDataFile');

    this.outputFile = Input.string(this, 'outputFile')
      .withDoc('Values Json File')
      .withPrefix('--outputFile');

    this.fastqFiles = Input.fileArray(this, 'fastqFiles')
      .withDoc('FastQ Files')
      .withPrefix('--fastqFiles');

    // Outputs
    this.outputValues = Output.file(this, 'output-wf-values')
      .globFromInputString(this.outputFile);

    this.sequences = Output.array(this, 'sequences', TypeOut.string().allowNull())
      .globFromInputString(this.outputFile)
      .loadContents()
      .outputEval('$(JSON.parse(self[0].contents)["sequences"])');

    this.zipFiles = Output.array(this, 'zipFiles', TypeOut.file().allowNull())
      .globFromInputString(this.outputFile)
      .loadContents()
      .outputEval('$(JSON.parse(self[0].contents)["zipFiles"])');
  }
}