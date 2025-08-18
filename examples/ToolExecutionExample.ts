import { Tool, Output, OutputReference, Workflow } from '../src/lib';

/**
 * Example demonstrating how to use ToolOutputs during tool execution.
 * 
 * This shows the typical pattern:
 * 1. Define a tool with its inputs and outputs
 * 2. During execution, create WorkflowOutputs to generate cwl.output.json
 * 3. The CWL runtime reads this file to populate the tool's outputs
 */

// Example 1: A simple file processing tool
export class FileProcessingTool extends Tool {
  public inputFile: any; // Input type would be defined here
  public processedFile: any; // Output type would be defined here
  public status: any; // Output type would be defined here

  constructor(scope: Workflow, id: string) {
    super(scope, id);
    
    // Configure the tool
    this.config.baseCommand = ['python3', 'process_file.py'];
    
    // Define inputs and outputs (this happens at design time)
    // this.inputFile = Input.file(this, 'input_file');
    // this.processedFile = Output.file(this, 'processed_file');
    // this.status = Output.string(this, 'status');
  }

  /**
   * This method would be called during tool execution to generate the output file.
   * In a real scenario, this might be called from a Python script or other execution environment.
   */
  generateOutputs(): void {
    // Create a ToolOutputs instance for this tool
    const toolOutputs = this.createToolOutputs();
    
    // Add the actual output values (this happens at execution time)
    toolOutputs
      .addOutput(this.processedFile, OutputReference.file('/tmp/processed_output.txt'))
      .addOutput(this.status, 'Processing completed successfully');
    
    // Generate the cwl.output.json file
    const outputPath = toolOutputs.writeToFile();
    console.log(`Generated CWL output file at: ${outputPath}`);
  }
}

// Example 2: A tool that produces multiple outputs including arrays
export class MultiOutputTool extends Tool {
  public inputData: any;
  public resultFiles: any;
  public summary: any;
  public metadata: any;

  constructor(scope: Workflow, id: string) {
    super(scope, id);
    
    this.config.baseCommand = ['python3', 'multi_output_processor.py'];
    
    // Define outputs (design time)
    // this.inputData = Input.file(this, 'input_data');
    // this.resultFiles = Output.file(this, 'result_files');
    // this.summary = Output.string(this, 'summary');
    // this.metadata = Output.string(this, 'metadata');
  }

  /**
   * Example of generating complex outputs during execution
   */
  generateComplexOutputs(): void {
    const toolOutputs = this.createToolOutputs();
    
    // Multiple files
    const fileArray = OutputReference.fileArray([
      '/tmp/result_1.txt',
      '/tmp/result_2.txt',
      '/tmp/result_3.txt'
    ]);
    
    // Complex metadata structure
    const metadata = {
      processing_date: new Date().toISOString(),
      input_size: 1024,
      algorithm_version: '1.2.3',
      quality_score: 0.95
    };
    
    toolOutputs
      .addOutput(this.resultFiles, fileArray)
      .addOutput(this.summary, 'Successfully processed 3 files')
      .addOutput(this.metadata, JSON.stringify(metadata));
    
    // Generate the output file
    const outputPath = toolOutputs.writeToFile();
    console.log(`Generated complex CWL output file at: ${outputPath}`);
  }
}

// Example 3: A tool that generates outputs based on runtime conditions
export class ConditionalOutputTool extends Tool {
  public inputFile: any;
  public primaryOutput: any;
  public optionalOutput: any;
  public logFile: any;

  constructor(scope: Workflow, id: string) {
    super(scope, id);
    
    this.config.baseCommand = ['python3', 'conditional_processor.py'];
    
    // Define outputs (design time)
    // this.inputFile = Input.file(this, 'input_file');
    // this.primaryOutput = Output.file(this, 'primary_output');
    // this.optionalOutput = Output.file(this, 'optional_output');
    // this.logFile = Output.file(this, 'log_file');
  }

  /**
   * Example of generating outputs based on processing results
   */
  generateConditionalOutputs(processingSuccessful: boolean, hasWarnings: boolean): void {
    const toolOutputs = this.createToolOutputs();
    
    // Always generate primary output
    toolOutputs.addOutput(this.primaryOutput, OutputReference.file('/tmp/primary_result.txt'));
    
    // Always generate log file
    toolOutputs.addOutput(this.logFile, OutputReference.file('/tmp/processing.log'));
    
    // Conditionally generate optional output
    if (processingSuccessful && hasWarnings) {
      toolOutputs.addOutput(this.optionalOutput, OutputReference.file('/tmp/warnings.txt'));
    }
    
    // Generate the output file
    const outputPath = toolOutputs.writeToFile();
    console.log(`Generated conditional CWL output file at: ${outputPath}`);
  }
}

// Example 4: A tool that uses custom output paths
export class CustomPathTool extends Tool {
  public outputFile: any;
  public reportFile: any;

  constructor(scope: Workflow, id: string) {
    super(scope, id);
    
    this.config.baseCommand = ['python3', 'custom_path_processor.py'];
    
    // Define outputs (design time)
    // this.outputFile = Output.file(this, 'output_file');
    // this.reportFile = Output.file(this, 'report_file');
  }

  /**
   * Example of using custom output file paths
   */
  generateOutputsWithCustomPath(): void {
    const toolOutputs = this.createToolOutputs();
    
    // Set a custom output file path
    toolOutputs.setOutputFilePath('/custom/path/my_tool_outputs.json');
    
    toolOutputs
      .addOutput(this.outputFile, OutputReference.file('/tmp/processed_data.txt'))
      .addOutput(this.reportFile, OutputReference.file('/tmp/analysis_report.txt'));
    
    // Generate the output file at the custom path
    const outputPath = toolOutputs.writeToFile();
    console.log(`Generated CWL output file at custom path: ${outputPath}`);
  }
}

/**
 * Example of how this would be used in a real execution scenario
 */
export function demonstrateToolExecution() {
  console.log('=== Tool Execution Examples ===\n');
  
  // In a real scenario, these would be created by the workflow system
  // For demonstration, we'll create mock instances
  
  // Example 1: Simple file processing
  console.log('1. Simple File Processing Tool:');
  const fileTool = new FileProcessingTool({} as any, 'file_processor');
  // fileTool.generateOutputs(); // This would be called during execution
  
  // Example 2: Multi-output tool
  console.log('2. Multi-Output Tool:');
  const multiTool = new MultiOutputTool({} as any, 'multi_processor');
  // multiTool.generateComplexOutputs(); // This would be called during execution
  
  // Example 3: Conditional outputs
  console.log('3. Conditional Output Tool:');
  const conditionalTool = new ConditionalOutputTool({} as any, 'conditional_processor');
  // conditionalTool.generateConditionalOutputs(true, true); // This would be called during execution
  
  // Example 4: Custom path tool
  console.log('4. Custom Path Tool:');
  const customPathTool = new CustomPathTool({} as any, 'custom_path_processor');
  // customPathTool.generateOutputsWithCustomPath(); // This would be called during execution
  
  console.log('\nNote: In real usage, these methods would be called during tool execution');
  console.log('to generate the actual cwl.output.json files that the CWL runtime reads.');
}

// Run the example if this file is executed directly
if (require.main === module) {
  demonstrateToolExecution();
}
