import { IToolProps, Input, Output, Requirement } from '../lib';
import { ExpressionTool } from '../lib/ExpressionTool';
import { Workflow } from '../lib/Workflow';

export class CdHitServiceParametersExpressionTool extends ExpressionTool {
  public outputParametersFile: Output;
  public input: Input;
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

  constructor(scope: Workflow, id: string, props?: IToolProps) {
    super(scope, id, props);

    // Requirements
    Requirement.inlineJavascript(this);

    // Inputs
    this.input = Input.file(this, 'CdhitParameters.input');
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

    // Outputs
    this.outputParametersFile = Output.file(this, 'parameters_file');

    // Setting the expression for generating parameters JSON
    this.withExpression(ExpressionTool.makeParametersJsonExpression());
  }
}