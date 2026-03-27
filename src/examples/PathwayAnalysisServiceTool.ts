import { Input, Output, Requirement, Tool, ToolConfig } from '../lib';
import { Workflow } from '../lib/Workflow';

export class PathwayAnalysisServiceTool extends Tool {
  public inputSequence: Input;
  public outputProject: Input;
  public reactomeEnable: Input;
  public grameneEnable: Input;
  public keggEnable: Input;
  public reactomeAnnotationLinking: Input;
  public grameneAnnotationLinking: Input;
  public keggAnnotationLinking: Input;
  public reactomeSequenceLinking: Input;
  public grameneSequenceLinking: Input;
  public keggSequenceLinking: Input;
  public reactomeMostSpecific: Input;
  public grameneMostSpecific: Input;
  public reactomePrioritizeSpecies: Input;
  public reactomePrioritySpecies: Input;
  public reactomePriorityTaxaId: Input;
  public gramenePrioritySpecies: Input;
  public gramenePriorityTaxaId: Input;
  public reactomeCategories: Input;
  public grameneCategories: Input;
  public keggCategories: Input;
  public outputProjectOut: Output;
  public gramenePrioritizeSpecies: Input;

  constructor(scope: Workflow, id: string) {
    super(scope, id);
    ToolConfig.basic(this)
      .withLabel('OmicsBox Pathway Analysis Service Tool')
      .withBaseCommand(['java', '-Dapp.custom.vmoptions=/tmp/custom.vmoptions', '-Dlucene_pathways_folder=/data/pathways_lucene', '-jar', '/opt/app/omicsbox.jar'])
      .withArguments(['pathway-analysis-service']);

    // Requirements
    Requirement.initialWorkDir(this)
      .addListing('input_file.box', '$(inputs.input_sequence)');
    Requirement.networkAccess(this);
    Requirement.docker(this, 'your-registry.example.com/omicsbox-pathways:latest');

    // Inputs
    this.inputSequence = Input.file(this, 'input_sequence')
      .withPrefix('-inputSequence');

    this.outputProject = Input.string(this, 'output_project_file_name')
      .withPrefix('-outputProject')
      .withDefaultValue('pathways_project.box');

    this.reactomeEnable = Input.bool(this, 'reactome_enable')
      .withPrefix('-reactomeEnable');

    this.grameneEnable = Input.bool(this, 'gramene_enable')
      .withPrefix('-grameneEnable');

    this.keggEnable = Input.bool(this, 'kegg_enable')
      .withPrefix('-keggEnable');

    this.reactomeAnnotationLinking = Input.bool(this, 'reactome_annotation_linking')
      .withPrefix('-reactomeAnnotationLinking');

    this.grameneAnnotationLinking = Input.bool(this, 'gramene_annotation_linking')
      .withPrefix('-grameneAnnotationLinking');

    this.keggAnnotationLinking = Input.bool(this, 'kegg_annotation_linking')
      .withPrefix('-keggAnnotationLinking');

    this.reactomeSequenceLinking = Input.bool(this, 'reactome_sequence_linking')
      .withPrefix('-reactomeSequenceLinking');

    this.grameneSequenceLinking = Input.bool(this, 'gramene_sequence_linking')
      .withPrefix('-grameneSequenceLinking');

    this.keggSequenceLinking = Input.bool(this, 'kegg_sequence_linking')
      .withPrefix('-keggSequenceLinking');

    this.reactomeMostSpecific = Input.bool(this, 'reactome_most_specific')
      .withPrefix('-reactomeMostSpecific');

    this.grameneMostSpecific = Input.bool(this, 'gramene_most_specific')
      .withPrefix('-grameneMostSpecific');

    this.reactomePrioritizeSpecies = Input.bool(this, 'reactome_prioritize_species')
      .withPrefix('-reactomePrioritizeSpecies');

    this.gramenePrioritizeSpecies = Input.bool(this, 'gramene_prioritize_species')
      .withPrefix('-gramenePrioritizeSpecies');

    this.reactomePrioritySpecies = Input.string(this, 'reactome_priority_species')
      .withPrefix('-reactomePrioritySpecies');

    this.reactomePriorityTaxaId = Input.integer(this, 'reactome_priority_taxa_id')
      .withPrefix('-reactomePriorityTaxaId');

    this.gramenePrioritySpecies = Input.string(this, 'gramene_priority_species')
      .withPrefix('-gramenePrioritySpecies');

    this.gramenePriorityTaxaId = Input.integer(this, 'gramene_priority_taxa_id')
      .withPrefix('-gramenePriorityTaxaId');

    this.reactomeCategories = Input.stringArray(this, 'reactome_categories')
      .withPrefix('-reactomeCategories')
      .makeSeparate(true)
      .withPosition(2);

    this.grameneCategories = Input.stringArray(this, 'gramene_categories')
      .withPrefix('-grameneCategories')
      .makeSeparate(true)
      .withPosition(3);

    this.keggCategories = Input.stringArray(this, 'kegg_categories')
      .withPrefix('-keggCategories')
      .makeSeparate(true)
      .withPosition(4);

    // Outputs
    this.outputProjectOut = Output.file(this, 'output_project')
      .globFromInputString(this.outputProject);
  }
}