import { CdHitPostTool } from './CdHitPostTool';
import { CdHitServiceParametersExpressionTool } from './CdHitServiceParametersExpressionTool';
import { CdHitServiceTool } from './CdHitServiceTool';
import { Construct, Input, Output, Requirement, Workflow } from '../lib';

export class CdHitWorkflow extends Workflow {
  public lengthDifferenceCutoff: Input;
  public bandWidth: Input;
  public sequenceIdentityType: Input;
  public sequenceIdentity: Input;
  public maxUnmatchedPercentageLonger: Input;
  public accurateMode: Input;
  public alignmentCoverageShorter: Input;
  public maxUnmatchedPercentageShorter: Input;
  public alignmentPositionConstrains: Input;
  public wordLength: Input;
  public strand: Input;
  public lengthCutoff: Input;
  public alignmentCoverageLonger: Input;
  public inputFasta: Input;

  constructor(scope: Construct, id: string) {
    super(scope, id, {});
    // Requirements
    Requirement.subworkflowFeature(this);
    Requirement.inlineJavascript(this);
    // Tools
    const propsGen = new CdHitServiceParametersExpressionTool(this, 'cdhit-service-parameters');
    const cdHit = new CdHitServiceTool(this, 'cdhit-service');
    const post = new CdHitPostTool(this, 'cdhit-post');
    // Inputs
    this.inputFasta = Input.fromStepInput(this, propsGen.input).as('input_fasta');
    this.lengthDifferenceCutoff = Input.fromStepInput(this, propsGen.lengthDifferenceCutoff);
    this.bandWidth = Input.fromStepInput(this, propsGen.bandWidth);
    this.sequenceIdentityType = Input.fromStepInput(this, propsGen.sequenceIdentityType);
    this.sequenceIdentity = Input.fromStepInput(this, propsGen.sequenceIdentity);
    this.maxUnmatchedPercentageLonger = Input.fromStepInput(this, propsGen.maxUnmatchedPercentageLonger);
    this.accurateMode = Input.fromStepInput(this, propsGen.accurateMode);
    this.alignmentCoverageShorter = Input.fromStepInput(this, propsGen.alignmentCoverageShorter);
    this.maxUnmatchedPercentageShorter = Input.fromStepInput(this, propsGen.maxUnmatchedPercentageShorter);
    this.alignmentPositionConstrains = Input.fromStepInput(this, propsGen.alignmentPositionConstrains);
    this.wordLength = Input.fromStepInput(this, propsGen.wordLength);
    this.strand = Input.fromStepInput(this, propsGen.strand);
    this.lengthCutoff = Input.fromStepInput(this, propsGen.lengthCutoff);
    this.alignmentCoverageLonger = Input.fromStepInput(this, propsGen.alignmentCoverageLonger);
    cdHit.parametersFile.linkTo(propsGen.outputParametersFile);
    cdHit.inputFasta.linkTo(this.inputFasta);
    post.inputFasta.linkTo(cdHit.clusteredFasta);
    post.clusterPath.linkTo(cdHit.clusterFile);
    Output.fromStepOutput(this, propsGen.outputParametersFile).as('parameters_file');
    Output.fromStepOutput(this, cdHit.clusteredFasta).as('clustered_fasta_file');
    Output.fromStepOutput(this, cdHit.clusterFile).as('cluster_file');
    Output.fromStepOutput(this, post.outputChartFile).as('output_chart_file');
    Output.fromStepOutput(this, post.outputReportFile).as('output_report_file');
  }
}