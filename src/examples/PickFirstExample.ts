import { Constructs } from '../lib/Constructs';
import { ExpressionTool } from '../lib/ExpressionTool';
import { Input } from '../lib/Input';
import { PickValueMethod } from '../lib/LinkableConstruct';
import { Output } from '../lib/Output';
import { Tool } from '../lib/Tool';
import { ToolConfig } from '../lib/ToolConfig';
import { TypeIn } from '../lib/TypeIn';
import { Workflow } from '../lib/Workflow';

/**
 * Example demonstrating how to use ExpressionTool.createPickFirstExpressionTool()
 * to merge multiple optional outputs into a single output.
 *
 * This example creates a workflow with:
 * 1. Two tools that may or may not produce output files
 * 2. A pick_first expression tool that selects the first available file
 * 3. A final processing tool that uses the selected file
 */
export class PickFirstExample extends Workflow {
  public tool1: Tool;
  public tool2: Tool;
  public pickFirst: ExpressionTool;
  public processTool: Tool;

  constructor(scope: Constructs, id: string) {
    super(scope, id);

    // Create two tools that might produce optional outputs
    this.tool1 = new Tool(this, 'optional_tool_1');
    ToolConfig.basic(this.tool1)
      .withBaseCommand(['echo', 'Creating file 1']);

    Output.file(this.tool1, 'output')
      .withGlob('file1.txt')
      .makeOptional(true);

    this.tool2 = new Tool(this, 'optional_tool_2');
    ToolConfig.basic(this.tool2)
      .withBaseCommand(['echo', 'Creating file 2']);

    Output.file(this.tool2, 'output')
      .withGlob('file2.txt')
      .makeOptional(true);

    // Create the pick_first expression tool
    // This will take an array of files and return the first non-null one
    this.pickFirst = ExpressionTool.createPickFirstExpressionTool(
      this,
      'pick_first',
      TypeIn.file(),
      'files', // input parameter name
      'first_file', // output parameter name
    );

    // Link the outputs from tool1 and tool2 to the pick_first input
    // The pickValue: ALL_NON_NULL will filter out any null values
    this.pickFirst.inputs[0]
      .linkTo(this.tool1.outputs[0])
      .linkTo(this.tool2.outputs[0])
      .pickValue(PickValueMethod.ALL_NON_NULL);

    // Create a final processing tool that uses the picked file
    this.processTool = new Tool(this, 'process_file');
    ToolConfig.basic(this.processTool)
      .withBaseCommand(['wc', '-l']);

    Input.file(this.processTool, 'input_file');
    Output.file(this.processTool, 'result').withGlob('result.txt');

    // Link the output from pick_first to the processing tool
    this.processTool.inputs[0].linkTo(this.pickFirst.outputs[0]);
  }
}

/**
 * Example showing different data types supported by createPickFirstExpressionTool
 */
export class PickFirstTypesExample extends Workflow {
  public pickFirstFile: ExpressionTool;
  public pickFirstString: ExpressionTool;
  public pickFirstInt: ExpressionTool;

  constructor(scope: Constructs, id: string) {
    super(scope, id);

    // Pick first file from an array
    this.pickFirstFile = ExpressionTool.createPickFirstExpressionTool(
      this,
      'pick_first_file',
      TypeIn.file(),
      'file_array',
      'selected_file',
    );

    // Pick first string from an array
    this.pickFirstString = ExpressionTool.createPickFirstExpressionTool(
      this,
      'pick_first_string',
      TypeIn.string(),
      'string_array',
      'selected_string',
    );

    // Pick first integer from an array
    this.pickFirstInt = ExpressionTool.createPickFirstExpressionTool(
      this,
      'pick_first_int',
      TypeIn.int(),
      'int_array',
      'selected_int',
    );
  }
}