import { Input, Output, Requirement, Tool, ToolConfig } from '../lib';
import { Workflow } from '../lib/Workflow';

export class PathwayLoadSequencesTool extends Tool {
  public inputFile: Input;
  private outputProject: Input;
  public loadedProject: Output;

  constructor(scope: Workflow, id: string) {
    super(scope, id);
    ToolConfig.basic(this)
      .withLabel('OmicsBox Pathway Load Sequences Tool')
      .withBaseCommand(['java', '-Dapp.custom.vmoptions=/opt/app/custom.vmoptions', '-Dlucene_pathways_folder=/data/pathways_lucene', '-jar', '/opt/app/omicsbox.jar'])
      .withArguments(['pathway-load-sequences']);

    // Requirements
    Requirement.networkAccess(this);
    Requirement.docker(this, 'your-registry.example.com/omicsbox-pathways:latest');

    // Inputs
    this.inputFile = Input.file(this, 'input_file')
      .withPrefix('-inputFile')
      .withPosition(1);

    this.outputProject = Input.string(this, 'output_project')
      .withPrefix('-outputProject')
      .withDefaultValue('output.box')
      .withPosition(2);

    // Outputs
    this.loadedProject = Output.file(this, 'loaded_project')
      .globFromInputString(this.outputProject);
  }
}