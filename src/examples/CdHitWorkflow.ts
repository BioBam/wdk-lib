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
    // Inputs
    this.inputFasta = Input.file(this, 'input_fasta');
    this.lengthDifferenceCutoff = Input.string(this, 'CdhitParameters.lengthDifferenceCutoff');
    this.bandWidth = Input.string(this, 'CdhitParameters.bandWidth');
    this.sequenceIdentityType = Input.string(this, 'CdhitParameters.sequenceIdentityType');
    this.sequenceIdentity = Input.string(this, 'CdhitParameters.sequenceIdentity');
    this.maxUnmatchedPercentageLonger = Input.string(this, 'CdhitParameters.maxUnmatchedPercentageLonger');
    this.accurateMode = Input.string(this, 'CdhitParameters.accurateMode');
    this.alignmentCoverageShorter = Input.string(this, 'CdhitParameters.alignmentCoverageShorter');
    this.maxUnmatchedPercentageShorter = Input.string(this, 'CdhitParameters.maxUnmatchedPercentageShorter');
    this.alignmentPositionConstrains = Input.string(this, 'CdhitParameters.alignmentPositionConstrains');
    this.wordLength = Input.string(this, 'CdhitParameters.wordLength');
    this.strand = Input.string(this, 'CdhitParameters.strand');
    this.lengthCutoff = Input.string(this, 'CdhitParameters.lengthCutoff');
    this.alignmentCoverageLonger = Input.string(this, 'CdhitParameters.alignmentCoverageLonger');
    // Tools
    const propsGen = new CdHitServiceParametersExpressionTool(this, 'cdhit-service-parameters');
    propsGen.input.linkTo(this.inputFasta);
    propsGen.lengthDifferenceCutoff.linkTo(this.lengthDifferenceCutoff);
    propsGen.bandWidth.linkTo(this.bandWidth);
    propsGen.sequenceIdentityType.linkTo(this.sequenceIdentityType);
    propsGen.sequenceIdentity.linkTo(this.sequenceIdentity);
    propsGen.maxUnmatchedPercentageLonger.linkTo(this.maxUnmatchedPercentageLonger);
    propsGen.accurateMode.linkTo(this.accurateMode);
    propsGen.alignmentCoverageShorter.linkTo(this.alignmentCoverageShorter);
    propsGen.maxUnmatchedPercentageShorter.linkTo(this.maxUnmatchedPercentageShorter);
    propsGen.alignmentPositionConstrains.linkTo(this.alignmentPositionConstrains);
    propsGen.wordLength.linkTo(this.wordLength);
    propsGen.strand.linkTo(this.strand);
    propsGen.lengthCutoff.linkTo(this.lengthCutoff);
    propsGen.alignmentCoverageLonger.linkTo(this.alignmentCoverageLonger);
    const cdHit = new CdHitServiceTool(this, 'cdhit-service');
    cdHit.parametersFile.linkTo(propsGen.outputParametersFile);
    cdHit.inputFasta.linkTo(this.inputFasta);
    const post = new CdHitPostTool(this, 'cdhit-post');
    post.inputFasta.linkTo(cdHit.clusteredFasta);
    post.clusterPath.linkTo(cdHit.clusterFile);
    // Outputs
    Output.file(this, 'parameters_file').linkTo(propsGen.outputParametersFile);
    Output.file(this, 'clustered_fasta_file').linkTo(cdHit.clusteredFasta);
    Output.file(this, 'cluster_file').linkTo(cdHit.clusterFile);
    Output.file(this, 'output_chart_file').linkTo(post.outputChartFile);
    Output.file(this, 'output_report_file').linkTo(post.outputReportFile);
  }
}