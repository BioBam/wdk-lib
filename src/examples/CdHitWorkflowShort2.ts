import { Construct, Input, Output, Requirement, Workflow } from '../lib';
import { CdHitPostTool } from './CdHitPostTool';
import { CdHitServiceParametersExpressionTool } from './CdHitServiceParametersExpressionTool';
import { CdHitServiceTool } from './CdHitServiceTool';

export class CdHitWorkflow extends Workflow {

  constructor(scope: Construct, id: string) {
    super(scope, id, Workflow.basicProps());
    // Requirements
    Requirement.subworkflowFeature(this);
    Requirement.inlineJavascript(this);
    // Tools
    const propsGen = new CdHitServiceParametersExpressionTool(this, 'cdhit-service-parameters');
    const cdHit = new CdHitServiceTool(this, 'cdhit-service');

    const post = new CdHitPostTool(this, 'cdhit-post');
    // Inputs
    const inputFasta = Input.fromStepInput(this, propsGen.input).as('input_fasta');
    Input.fromStepInput(this, propsGen.lengthDifferenceCutoff);
    Input.fromStepInput(this, propsGen.bandWidth);
    Input.fromStepInput(this, propsGen.sequenceIdentityType);
    Input.fromStepInput(this, propsGen.sequenceIdentity);
    Input.fromStepInput(this, propsGen.maxUnmatchedPercentageLonger);
    Input.fromStepInput(this, propsGen.accurateMode);
    Input.fromStepInput(this, propsGen.alignmentCoverageShorter);
    Input.fromStepInput(this, propsGen.maxUnmatchedPercentageShorter);
    Input.fromStepInput(this, propsGen.alignmentPositionConstrains);
    Input.fromStepInput(this, propsGen.wordLength);
    Input.fromStepInput(this, propsGen.strand);
    Input.fromStepInput(this, propsGen.lengthCutoff);
    Input.fromStepInput(this, propsGen.alignmentCoverageLonger);
    cdHit.parametersFile.linkTo(propsGen.outputParametersFile);
    cdHit.inputFasta.linkTo(inputFasta);
    post.inputFasta.linkTo(cdHit.clusteredFasta);
    post.clusterPath.linkTo(cdHit.clusterFile);
    Output.fromStepOutput(this, propsGen.outputParametersFile).as('parameters_file');
    Output.fromStepOutput(this, cdHit.clusteredFasta).as('clustered_fasta_file');
    Output.fromStepOutput(this, cdHit.clusterFile).as('cluster_file');
    Output.fromStepOutput(this, post.outputChartFile).as('output_chart_file');
    Output.fromStepOutput(this, post.outputReportFile).as('output_report_file');
  }
}