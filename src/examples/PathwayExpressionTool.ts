import { Output } from '../lib';
import { Input } from '../lib/Input';
import { Requirement } from '../lib/Requirement';
import { Tool } from '../lib/Tool';
import { ToolConfig } from '../lib/ToolConfig';
import { Workflow } from '../lib/Workflow';

export class PathwayLoadExpressionTool extends Tool {
  public inputProject: Input;
  public inputExpressionProject: Input; // Adjust according to the correct input type
  public outputProjectFileName: Input;
  public clearExpression: Input;
  public outputFullProject: Output;

  public constructor(scope: Workflow, id: string) {
    super(scope, id);
    ToolConfig.basic(this)
      .withLabel('OmicsBox Pathway Load Expression Tool')
      .withBaseCommand(['java', '-Dapp.custom.vmoptions=/opt/app/custom.vmoptions', '-jar', '/opt/app/omicsbox.jar'])
      .withArguments(['pathway-analysis-load-expression']).withArguments(['pathway-analysis-load-expression']);

    Requirement.initialWorkDir(this)
      .addListing('pathways_file.box', '$(inputs.input_project)')
      .addListing('expression_file.box', '$(inputs.input_expression)');

    Requirement.networkAccess(this);
    Requirement.docker(this, 'your-registry.example.com/omicsbox-pathways:latest');

    this.inputProject = Input.file(this, 'input_project')
      .withPrefix('-inputPathwayProject');

    this.inputExpressionProject = Input.file(this, 'input_expression')
      .withPrefix('-inputExpressionProject')
      .makeOptional(true);

    this.outputProjectFileName = Input.string(this, 'output_project_file_name')
      .withPrefix('-outputPathwayProject');

    this.clearExpression = Input.bool(this, 'clear_expression')
      .withPrefix('-clearExpression')
      .withDefaultValue(false);

    this.outputFullProject = Output.file(this, 'output_full_project')
      .withGlob('$(inputs.output_project)');
  }
}
