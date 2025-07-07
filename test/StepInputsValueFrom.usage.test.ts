import { Constructs } from '../src/lib/Constructs';
import { Input } from '../src/lib/Input';
import { Output } from '../src/lib/Output';
import { StepInputsValue } from '../src/lib/StepInputsValue';
import { Tool } from '../src/lib/Tool';
import { Workflow } from '../src/lib/Workflow';

describe('StepInputsValueFrom Usage Examples', () => {

  test('should demonstrate practical usage of StepInputsValueFrom', () => {
    // Create a workflow
    const root = Constructs.createRoot('root');
    const workflow = new Workflow(root, 'data-processing-workflow');

    // Create a tool step
    const preprocessTool = new Tool(workflow, 'preprocess');

    // Define tool inputs
    const inputFiles = Input.fileArray(preprocessTool, 'input_files');
    const outputFormat = Input.string(preprocessTool, 'output_format');
    const enableFiltering = Input.bool(preprocessTool, 'enable_filtering');

    // Define tool output
    const processedFiles = Output.fileArray(preprocessTool, 'processed_files');

    // Create StepInputsValueFrom to apply transformations
    const stepInputsValueFrom = StepInputsValue.for(workflow, preprocessTool);

    // Apply different transformations based on business logic:
    // 1. Convert single file to array if needed
    stepInputsValueFrom.valueToOneElementArray(inputFiles);

    // 2. Get first element or null for optional processing
    stepInputsValueFrom.firstElementOrNull(inputFiles);

    // 3. Apply custom transformation for output format
    stepInputsValueFrom.addCustomExpression(outputFormat, 'self.toLowerCase()');

    // 4. Chain multiple transformations fluently
    stepInputsValueFrom
      .valueToOneElementArray(inputFiles)
      .addCustomExpression(outputFormat, 'self.replace("-", "_")');

    // Create workflow inputs
    Input.fromStepInput(workflow, inputFiles);
    Input.fromStepInput(workflow, outputFormat);
    Input.fromStepInput(workflow, enableFiltering);

    // Create workflow outputs
    Output.fromStepOutput(workflow, processedFiles);

    // Assertions
    expect(stepInputsValueFrom).toBeDefined();
    expect(stepInputsValueFrom.hasExpressionForInput('input_files')).toBe(true);
    expect(stepInputsValueFrom.hasExpressionForInput('output_format')).toBe(true);
    expect(stepInputsValueFrom.hasExpressionForInput('enable_filtering')).toBe(false);

    // Verify the expressions are correctly stored
    expect(stepInputsValueFrom.getExpressionForInput('input_files')).toBe('$([self])');
    expect(stepInputsValueFrom.getExpressionForInput('output_format')).toBe('$(self.replace("-", "_"))');

    // Verify the step has the stepInputsValueFrom
    expect(preprocessTool.stepInputsValueFrom).toBeDefined();
    expect(preprocessTool.stepInputsValueFrom!.inputIdsWithExpressions()).toContain('input_files');
    expect(preprocessTool.stepInputsValueFrom!.inputIdsWithExpressions()).toContain('output_format');
  });

  test('should demonstrate complex workflow with multiple steps and transformations', () => {
    // Create a workflow
    const root = Constructs.createRoot('root');
    const workflow = new Workflow(root, 'multi-step-workflow');

    // Step 1: Data validation
    const validationTool = new Tool(workflow, 'validate');
    const validationInput = Input.fileArray(validationTool, 'files_to_validate');
    const validationOutput = Output.fileArray(validationTool, 'validated_files');

    // Step 2: Data transformation
    const transformTool = new Tool(workflow, 'transform');
    const transformInput = Input.fileArray(transformTool, 'input_files');
    const transformParams = Input.stringArray(transformTool, 'transform_params');
    const transformOutput = Output.fileArray(transformTool, 'transformed_files');

    // Step 3: Data aggregation
    const aggregationTool = new Tool(workflow, 'aggregate');
    const aggregationInput = Input.fileArray(aggregationTool, 'files_to_aggregate');
    const aggregationOutput = Output.file(aggregationTool, 'aggregated_result');

    // Apply valueFrom transformations to each step

    // Validation step: get first element or null
    const validationValueFrom = StepInputsValue.for(workflow, validationTool);
    validationValueFrom.firstElementOrNull(validationInput);

    // Transform step: convert single files to arrays and handle empty parameters
    const transformValueFrom = StepInputsValue.for(workflow, transformTool);
    transformValueFrom
      .valueToOneElementArray(transformInput)
      .firstElementOrNull(transformParams);

    // Aggregation step: custom expression for file handling
    const aggregationValueFrom = StepInputsValue.for(workflow, aggregationTool);
    aggregationValueFrom.addCustomExpression(aggregationInput, 'self.filter(f => f !== null)');

    // Link the steps together
    transformInput.linkTo(validationOutput);
    aggregationInput.linkTo(transformOutput);

    // Create workflow inputs and outputs
    Input.fromStepInput(workflow, validationInput);
    Input.fromStepInput(workflow, transformParams);
    Output.fromStepOutput(workflow, aggregationOutput);

    // Assertions
    expect(validationTool.stepInputsValueFrom).toBeDefined();
    expect(transformTool.stepInputsValueFrom).toBeDefined();
    expect(aggregationTool.stepInputsValueFrom).toBeDefined();

    // Verify each step has the correct expressions
    expect(validationTool.stepInputsValueFrom!.getExpressionForInput('files_to_validate')).toBe('$(self.length === 0 ? null : self[0])');
    expect(transformTool.stepInputsValueFrom!.getExpressionForInput('input_files')).toBe('$([self])');
    expect(transformTool.stepInputsValueFrom!.getExpressionForInput('transform_params')).toBe('$(self.length === 0 ? null : self[0])');
    expect(aggregationTool.stepInputsValueFrom!.getExpressionForInput('files_to_aggregate')).toBe('$(self.filter(f => f !== null))');

    // Verify the workflow structure
    expect(workflow.steps).toHaveLength(3);
    expect(workflow.inputs).toHaveLength(2);
    expect(workflow.outputs).toHaveLength(1);
  });
});