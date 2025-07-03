import { EmapperPreFI } from './EmapperPreFI';
import { EmapperWorkflow } from './EmapperWorkflow';
import { Input, Output, Requirement, ToolConfig, Workflow } from '../../lib';
import { Construct } from '../../lib/Construct';

export class EmapperWorkflowCloud extends Workflow {

  public fastqFiles: Input;
  public paramsDataFile: Input;
  public destinationFolderUnpaired: Output;
  public destinationFolder: Output;
  public reportFile: Output;
  public eggnogAnnotations: Output;

  public workflow: EmapperWorkflow;
  public preWorkflow: EmapperPreFI;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    Requirement.subworkflowFeature(this);
    Requirement.inlineJavascript(this);

    ToolConfig.basic(this)
      .withLabel('Functional Annotation with EggNOG Mapper');

    this.workflow = new EmapperWorkflow(this, 'emapper-workflow');
    this.preWorkflow = new EmapperPreFI(this, 'emapper-pre-workflow');

    this.fastqFiles = Input.fromStepInput(this, this.preWorkflow.fastqFiles);
    this.paramsDataFile = Input.fromStepInput(this, this.preWorkflow.paramsDataFile);

    // Link workflow inputs to preWorkflow outputs
    this.workflow.zipFiles.linkTo(this.preWorkflow.zipFiles);
    this.workflow.sequences.linkTo(this.preWorkflow.sequences);

    // TODO: Set up report links when EmapperReportWdkFI is implemented
    // this.workflow.report.paramsDataFile.linkTo(this.paramsDataFile);
    // this.workflow.report.fastqFiles.linkTo(this.fastqFiles);

    // Set up outputs
    this.eggnogAnnotations = Output.fromStepOutput(this, this.workflow.eggnogAnnotations);
    this.reportFile = Output.fromStepOutput(this, this.workflow.eggnogReport);

    // TODO: Set up destination folder outputs when post-processing tools are implemented
    // For now, create placeholder outputs
    this.destinationFolder = Output.directory(this, 'destinationFolder');
    this.destinationFolderUnpaired = Output.directory(this, 'destinationFolderUnpaired');
  }
}

