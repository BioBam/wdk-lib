import { Input, Output, Requirement, TypeIn, Workflow } from '../../lib';
import { Construct } from '../../lib/Construct';
// TODO: Create these classes based on Java implementations
// import { EmapperService } from "./EmapperService";
// import { EmapperReportWdkFI } from "./EmapperReportWdkFI";
// import { LoadEmapper5AnnotationsFI } from "./LoadEmapper5AnnotationsFI";

export class EmapperWorkflow extends Workflow {

  public enabled: Input;
  public sequences: Input;
  public zipFiles: Input;
  public eggnogAnnotations: Output;
  public eggnogReport: Output;

  // TODO: Add service and report tools when they are created
  // public service: EmapperService;
  // public report: EmapperReportWdkFI;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Requirements
    Requirement.subworkflowFeature(this);
    Requirement.inlineJavascript(this);
    Requirement.stepInputExpression(this);

    this.enabled = Input.bool(this, 'input_conditional_enabled')
      .withDefaultValue(true);

    this.sequences = Input.array(this, 'sequences', TypeIn.string())
      .allowNullElements();

    this.zipFiles = Input.fileArray(this, 'zipFiles')
      .allowNullElements();

    // TODO: Implement service and workflow steps when EmapperService and other tools are created
    // this.service = new EmapperService(this, "emapper-service");
    // this.report = new EmapperReportWdkFI(this, "emapper-report");

    // Temporary outputs for now
    this.eggnogAnnotations = Output.file(this, 'eggnogAnnotations');
    this.eggnogReport = Output.file(this, 'eggnogReport');
  }
}