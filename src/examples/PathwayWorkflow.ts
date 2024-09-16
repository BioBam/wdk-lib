import { PathwayAnalysisServiceTool } from './PathwayAnalysisServiceTool';
import { PathwayLoadExpressionTool } from './PathwayExpressionTool';
import { PathwayLoadSequencesTool } from './PathwayLoadSequencesTool';
import { Construct, Input, Output, Requirement } from '../lib';
import { Workflow } from '../lib/Workflow';

export class PathwayWorkflow extends Workflow {
  public inputFile: Input;
  public inputExpression: Input;
  public outputProject: Input;
  public outputReport: Input;
  public reactomeEnable: Input;
  public grameneEnable: Input;
  public keggEnable: Input;
  public reactomeAnnotationLinking: Input;
  public grameneAnnotationLinking: Input;
  public keggAnnotationLinking: Input;
  public reactomeSequenceLinking: Input;
  public grameneSequenceLinking: Input;
  public keggSequenceLinking: Input;
  public reactomeBlastEvalue: Input;
  public grameneBlastEvalue: Input;
  public reactomeMostSpecific: Input;
  public grameneMostSpecific: Input;
  public reactomePrioritizeSpecies: Input;
  public gramenePrioritizeSpecies: Input;
  public reactomePrioritySpecies: Input;
  public reactomePrioritySpeciesTax: Input;
  public gramenePrioritySpecies: Input;
  public gramenePrioritySpeciesTaxId: Input;
  public reactomeCategories: Input;
  public grameneCategories: Input;
  public keggCategories: Input;

  constructor(scope: Construct, id: string) {
    super(scope, id, Workflow.basicProps());

    // Requirements
    Requirement.inlineJavascript(this);
    Requirement.subworkflowFeature(this);

    // Inputs
    this.inputFile = Input.file(this, 'input_file');
    this.inputExpression = Input.file(this, 'input_expression').makeOptional(true);
    this.outputProject = Input.string(this, 'output_project');
    this.outputReport = Input.string(this, 'output_report').makeOptional(true);

    this.reactomeEnable = Input.bool(this, 'reactome_enable');
    this.grameneEnable = Input.bool(this, 'gramene_enable');
    this.keggEnable = Input.bool(this, 'kegg_enable');

    this.reactomeAnnotationLinking = Input.bool(this, 'reactome_annotation_linking');
    this.grameneAnnotationLinking = Input.bool(this, 'gramene_annotation_linking');
    this.keggAnnotationLinking = Input.bool(this, 'kegg_annotation_linking');

    this.reactomeSequenceLinking = Input.bool(this, 'reactome_sequence_linking');
    this.grameneSequenceLinking = Input.bool(this, 'gramene_sequence_linking');
    this.keggSequenceLinking = Input.bool(this, 'kegg_sequence_linking');

    this.reactomeBlastEvalue = Input.floatInput(this, 'reactome_blast_evalue');
    this.grameneBlastEvalue = Input.floatInput(this, 'gramene_blast_evalue');

    this.reactomeMostSpecific = Input.bool(this, 'reactome_most_specific');
    this.grameneMostSpecific = Input.bool(this, 'gramene_most_specific');

    this.reactomePrioritizeSpecies = Input.bool(this, 'reactome_prioritize_species');
    this.gramenePrioritizeSpecies = Input.bool(this, 'gramene_prioritize_species');

    this.reactomePrioritySpecies = Input.string(this, 'reactome_priority_species');
    this.reactomePrioritySpeciesTax = Input.integer(this, 'reactome_priority_species_taxid');

    this.gramenePrioritySpecies = Input.string(this, 'gramene_priority_species');
    this.gramenePrioritySpeciesTaxId = Input.integer(this, 'gramene_priority_species_taxid');

    this.reactomeCategories = Input.stringArray(this, 'reactome_categories');
    this.grameneCategories = Input.stringArray(this, 'gramene_categories');
    this.keggCategories = Input.stringArray(this, 'kegg_categories');

    // Tools
    const loadSequences = new PathwayLoadSequencesTool(this, 'pathway-analysis-pre');
    loadSequences.inputFile.linkTo(this.inputFile);

    const analysisService = new PathwayAnalysisServiceTool(this, 'pathway-analysis-service');
    analysisService.inputSequence.linkTo(loadSequences.loadedProject);
    analysisService.reactomeEnable.linkTo(this.reactomeEnable);
    analysisService.grameneEnable.linkTo(this.grameneEnable);
    analysisService.keggEnable.linkTo(this.keggEnable);
    analysisService.reactomeAnnotationLinking.linkTo(this.reactomeAnnotationLinking);
    analysisService.grameneAnnotationLinking.linkTo(this.grameneAnnotationLinking);
    analysisService.keggAnnotationLinking.linkTo(this.keggAnnotationLinking);
    analysisService.reactomeSequenceLinking.linkTo(this.reactomeSequenceLinking);
    analysisService.grameneSequenceLinking.linkTo(this.grameneSequenceLinking);
    analysisService.keggSequenceLinking.linkTo(this.keggSequenceLinking);
    analysisService.reactomeMostSpecific.linkTo(this.reactomeMostSpecific);
    analysisService.grameneMostSpecific.linkTo(this.grameneMostSpecific);
    analysisService.reactomePrioritizeSpecies.linkTo(this.reactomePrioritizeSpecies);
    analysisService.gramenePrioritizeSpecies.linkTo(this.gramenePrioritizeSpecies);
    analysisService.reactomePrioritySpecies.linkTo(this.reactomePrioritySpecies);
    analysisService.reactomePriorityTaxaId.linkTo(this.reactomePrioritySpeciesTax);
    analysisService.gramenePrioritySpecies.linkTo(this.gramenePrioritySpecies);
    analysisService.gramenePriorityTaxaId.linkTo(this.gramenePrioritySpeciesTaxId);
    analysisService.reactomeCategories.linkTo(this.reactomeCategories);
    analysisService.grameneCategories.linkTo(this.grameneCategories);
    analysisService.keggCategories.linkTo(this.keggCategories);

    const loadExpression = new PathwayLoadExpressionTool(this, 'pathway-analysis-post');
    loadExpression.inputProject.linkTo(analysisService.outputProjectOut);
    loadExpression.inputExpressionProject.linkTo(this.inputExpression);
    loadExpression.outputProjectFileName.linkTo(this.outputProject);

    // Outputs
    Output.file(this, 'pathways_project')
      .linkTo(analysisService.outputProjectOut);

    Output.file(this, 'output_project_file')
      .linkTo(loadExpression.outputFullProject);
  }
}
