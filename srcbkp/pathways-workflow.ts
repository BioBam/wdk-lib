import { Construct } from 'constructs';
import { PathwayLoadExpressionTool } from './pathway-load-expression-tool';
import { PathwayLoadSequencesTool } from './pathway-load-sequences-tool';
import { Workflow } from './workflow';

export class PathwaysWorkflow extends Workflow {

  constructor(scope: Construct, id: string) {
    super(scope, id);


    const loadSequences = new PathwayLoadSequencesTool(this, 'pathway_load_sequences', {
    });
    const loadExpression = new PathwayLoadExpressionTool(this, 'pathway_load_expression', {});


  }

}