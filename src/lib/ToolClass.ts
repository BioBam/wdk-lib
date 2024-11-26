import * as cwl from 'cwl-ts-auto';

export enum StepClass {
  COMMAND_LINE_TOOL = cwl.CommandLineTool_class.COMMANDLINETOOL,
  EXPRESSION_TOOL = cwl.ExpressionTool_class.EXPRESSIONTOOL,
  WORKFLOW = cwl.Workflow_class.WORKFLOW,
  UNDEFINED = 'UNDEFINED',
}
;
