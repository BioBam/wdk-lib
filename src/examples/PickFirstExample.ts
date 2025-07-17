import { Constructs } from '../lib/Constructs';
import { Input } from '../lib/Input';
import { FirstOrNullExpressionTool } from '../lib/l3/FirstOrNullExpressionTool';
import { PickValueMethod } from '../lib/LinkableConstruct';
import { Output } from '../lib/Output';
import { Tool } from '../lib/Tool';
import { ToolConfig } from '../lib/ToolConfig';
import { TypeIn } from '../lib/TypeIn';
import { Workflow } from '../lib/Workflow';

/**
 * Example demonstrating how to use FirstOrNullExpressionTool class
 * to merge multiple optional outputs into a single output.
 *
 * This example creates a workflow with:
 * 1. Two tools that may or may not produce output files
 * 2. A pick_first expression tool that selects the first available file
 * 3. A final processing tool that uses the selected file
 *
 * The new class provides direct access to input and output fields for easier linking.
 */
export class PickFirstExample extends Workflow {
  public tool1: Tool;
  public tool2: Tool;
  public pickFirst: FirstOrNullExpressionTool;
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

    // Create the pick_first expression tool using the new class
    // This provides direct access to .input and .output fields
    this.pickFirst = new FirstOrNullExpressionTool(
      this,
      'pick_first',
      TypeIn.file(),
      { inputId: 'files', outputId: 'first_file' },
    );

    // Link the outputs from tool1 and tool2 to the pick_first input
    // Notice how we can directly access pickFirst.input for linking
    this.pickFirst.input
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
    // Notice how we can directly access pickFirst.output for linking
    this.processTool.inputs[0].linkTo(this.pickFirst.output);
  }
}

/**
 * Example showing different data types supported by FirstOrNullExpressionTool
 * and demonstrating the benefits of direct field access
 */
export class PickFirstTypesExample extends Workflow {
  public pickFirstFile: FirstOrNullExpressionTool;
  public pickFirstString: FirstOrNullExpressionTool;
  public pickFirstInt: FirstOrNullExpressionTool;

  constructor(scope: Constructs, id: string) {
    super(scope, id);

    // Pick first file from an array - with direct field access
    this.pickFirstFile = new FirstOrNullExpressionTool(
      this,
      'pick_first_file',
      TypeIn.file(),
      { inputId: 'file_array', outputId: 'selected_file' },
    );

    // Pick first string from an array - with direct field access
    this.pickFirstString = new FirstOrNullExpressionTool(
      this,
      'pick_first_string',
      TypeIn.string(),
      { inputId: 'string_array', outputId: 'selected_string' },
    );

    // Pick first integer from an array - with direct field access
    this.pickFirstInt = new FirstOrNullExpressionTool(
      this,
      'pick_first_int',
      TypeIn.int(),
      { inputId: 'int_array', outputId: 'selected_int' },
    );

    // Example of linking using the exposed fields
    // this.pickFirstFile.input.linkTo(someFileOutput1).linkTo(someFileOutput2);
    // this.pickFirstString.input.linkTo(someStringOutput1).linkTo(someStringOutput2);
    // someOtherTool.inputField.linkTo(this.pickFirstFile.output);
  }
}

/**
 * Example comparing the old static method vs. new class approach
 */
export class ComparisonExample extends Workflow {
  public oldApproach: FirstOrNullExpressionTool;
  public newApproach: FirstOrNullExpressionTool;

  constructor(scope: Constructs, id: string) {
    super(scope, id);

    // Alternative approach using the dedicated class directly
    this.oldApproach = new FirstOrNullExpressionTool(
      this,
      'pick_old',
      TypeIn.file(),
      { inputId: 'files', outputId: 'first_file' },
    );

    // New approach using class with direct field access
    this.newApproach = new FirstOrNullExpressionTool(
      this,
      'pick_new',
      TypeIn.file(),
      { inputId: 'files', outputId: 'first_file' },
    );

    // Linking comparison:
    // Old approach - need to access via arrays:
    // this.oldApproach.inputs[0].linkTo(someOutput);
    // someInput.linkTo(this.oldApproach.outputs[0]);

    // New approach - direct field access:
    // this.newApproach.input.linkTo(someOutput);
    // someInput.linkTo(this.newApproach.output);
  }
}