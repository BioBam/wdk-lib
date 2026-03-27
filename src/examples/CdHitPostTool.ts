import { Input, Output, Requirement, Tool, ToolConfig, Workflow } from '../lib';

export class CdHitPostTool extends Tool {
  public clusterPath: Input;
  public inputFasta: Input;
  public extraInput: Input;
  public outputChart: Input;
  public outputReport: Input;
  public outputChartFile: Output;
  public outputReportFile: Output;

  constructor(scope: Workflow, id: string) {
    super(scope, id);
    ToolConfig.basic(this).withLabel('OmicsBox CD-HIT-Post Tool').withBaseCommand([
      'java',
      '-Dapp.custom.vmoptions=/opt/app/custom.vmoptions',
      '-jar',
      '/opt/app/omicsbox.jar',
    ]).withArguments(['cdhitpost']);

    // Requirement to use Docker
    Requirement.docker(this, 'your-registry.example.com/omicsbox');

    // Inputs
    this.clusterPath = Input.file(this, 'cluster_path')
      .withPrefix('-clusterPath')
      .withPosition(1);

    this.inputFasta = Input.file(this, 'input_fasta')
      .withPrefix('-inputFasta')
      .withPosition(2);

    this.extraInput = Input.file(this, 'extra_input')
      .withPrefix('-extraInput')
      .withPosition(2);

    this.outputChart = Input.string(this, 'output_chart')
      .withPrefix('-outputChart')
      .withDefaultValue('chart.box')
      .withPosition(3);

    this.outputReport = Input.string(this, 'output_report')
      .withPrefix('-outputReport')
      .withDefaultValue('report.box');

    // Outputs
    this.outputChartFile = Output.file(this, 'output_chart_file')
      .globFromInputString(this.outputChart);

    this.outputReportFile = Output.file(this, 'output_report_file')
      .globFromInputString(this.outputReport);
  }
}