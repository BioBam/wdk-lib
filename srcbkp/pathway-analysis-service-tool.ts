import { Construct } from 'constructs';
import { BooleanInput, FileInput, FileOutput, IntInput, StringArrayInput, StringInput, Tool, ToolProps } from './tool';

export class PathwayAnalysisServiceTool extends Tool {

  constructor(scope: Construct, id: string, props: ToolProps) {
    super(scope, id, props);

    new FileInput(this, 'input_sequence', {
      prefix: '-inputSequence',
    });
    new FileInput(this, 'output_project', {
      prefix: '-outputProject',
      default: 'pathways_project.box',
    });
    new BooleanInput(this, 'reactome_enable', {
      prefix: '-reactomeEnable',
    });
    new BooleanInput(this, 'gramene_enable', {
      prefix: '-grameneEnable',
    });
    new BooleanInput(this, 'kegg_enable', {
      prefix: '-keggEnable',
    });
    new BooleanInput(this, 'reactome_annotation_linking', {
      prefix: '-reactomeAnnotationLinking',
    });
    new BooleanInput(this, 'gramene_annotation_linking', {
      prefix: '-grameneAnnotationLinking',
    });
    new BooleanInput(this, 'kegg_annotation_linking', {
      prefix: '-keggAnnotationLinking',
    });
    new BooleanInput(this, 'reactome_sequence_linking', {
      prefix: '-reactomeSequenceLinking',
    });
    new BooleanInput(this, 'gramene_sequence_linking', {
      prefix: '-grameneSequenceLinking',
    });
    new BooleanInput(this, 'kegg_sequence_linking', {
      prefix: '-keggSequenceLinking',
    });
    new BooleanInput(this, 'reactome_most_specific', {
      prefix: '-reactomeMostSpecific',
    });
    new BooleanInput(this, 'gramene_most_specific', {
      prefix: '-grameneMostSpecific',
    });
    new BooleanInput(this, 'reactome_prioritize_species', {
      prefix: '-reactomePrioritizeSpecies',
    });
    new StringInput(this, 'reactome_priority_species', {
      prefix: '-reactomePrioritySpecies',
    });
    new IntInput(this, 'reactome_priority_taxa_id', {
      prefix: '-reactomePriorityTaxaId',
    });
    new StringInput(this, 'gramene_priority_species', {
      prefix: '-gramenePrioritySpecies',
    });
    new IntInput(this, 'gramene_priority_taxa_id', {
      prefix: '-gramenePriorityTaxaId',
    });
    new StringArrayInput(this, 'reactome_categories', {
      prefix: '-reactomeCategories',
      separate: true,
      position: 2,
    });
    new StringArrayInput(this, 'gramene_categories', {
      prefix: '-grameneCategories',
      separate: true,
      position: 3,
    });
    new StringArrayInput(this, 'kegg_categories', {
      prefix: '-keggCategories',
      separate: true,
      position: 4,
    });


    new FileOutput(this, 'output_project', {
      glob: '$(inputs.output_project)',
    });

  }
}
