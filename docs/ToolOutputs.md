# ToolOutputs

The `ToolOutputs` class provides a way to manage and generate CWL output files (`cwl.output.json`) for **CommandLineTool execution**. It mirrors the functionality of `WorkflowValues` but is specifically designed for handling outputs during tool runtime.

## Overview

**Important**: `ToolOutputs` is used **during tool execution** (runtime), not during tool definition (design time).

### Usage Pattern

1. **Design Time**: Define your tool using the `Tool` class with inputs and outputs
2. **Runtime**: During tool execution, use `ToolOutputs` to generate `cwl.output.json`
3. **CWL Runtime**: The CWL runtime reads `cwl.output.json` to populate tool outputs

### When to Use

- ✅ **Use during tool execution** to generate output files
- ❌ **Don't use during tool definition** (that's what the `Output` class is for)

When a CWL **CommandLineTool executes**, it needs to produce output files that conform to the CWL specification. The `ToolOutputs` class helps you:

1. **Define output values** for different output types (strings, files, arrays, etc.)
2. **Generate CWL-compliant output files** (`cwl.output.json`)
3. **Handle complex output structures** including nested arrays and mixed types
4. **Customize output file paths** for different use cases

## Basic Usage

### Creating ToolOutputs

```typescript
import { ToolOutputs, Output, OutputReference, Tool } from 'wdk-lib';

// During tool execution, create ToolOutputs from the tool instance
const toolOutputs = tool.createToolOutputs();
```

### Adding Outputs

```typescript
// String output
const stringOutput = Output.string(root, 'message');
toolOutputs.addOutput(stringOutput, 'Hello World');

// File output
const fileOutput = Output.file(root, 'result_file');
const fileRef = OutputReference.file('/path/to/output.txt');
toolOutputs.addOutput(fileOutput, fileRef);

// Array of strings
const arrayOutput = Output.string(root, 'string_list');
const stringArray = OutputReference.stringArray(['item1', 'item2', 'item3']);
toolOutputs.addOutput(arrayOutput, stringArray);

// Array of files
const fileArrayOutput = Output.file(root, 'file_list');
const fileArray = OutputReference.fileArray([
  '/path/to/file1.txt',
  '/path/to/file2.txt'
]);
toolOutputs.addOutput(fileArrayOutput, fileArray);
```

### Generating the Output File

```typescript
// Generate cwl.output.json in the current directory
const outputPath = toolOutputs.writeToFile();
console.log(`Generated output file at: ${outputPath}`);

// Or specify a custom path
toolOutputs.setOutputFilePath('/custom/path/output.json');
const customPath = toolOutputs.writeToFile();
```

## Output Types Supported

### Primitive Types

- **Strings**: Simple text values
- **Booleans**: True/false values
- **Integers**: Whole numbers
- **Floats**: Decimal numbers

### File Types

- **Files**: Individual file references
- **Directories**: Directory references
- **File Arrays**: Collections of files
- **Directory Arrays**: Collections of directories

### Complex Types

- **Arrays of primitives**: `['a', 'b', 'c']`
- **Arrays of files**: `[file1, file2, file3]`
- **Mixed arrays**: Combinations of different types
- **Nested structures**: Complex objects with multiple output types

## OutputReference Class

The `OutputReference` class provides static factory methods for creating different types of output references:

### File References

```typescript
// Local file
const localFile = OutputReference.file('/path/to/file.txt');

// S3 file
const s3File = OutputReference.s3File('s3://bucket/file.txt');

// Array of files
const fileArray = OutputReference.fileArray([
  '/path/to/file1.txt',
  '/path/to/file2.txt'
]);
```

### Directory References

```typescript
// Local directory
const localDir = OutputReference.directory('/path/to/directory');

// S3 directory
const s3Dir = OutputReference.s3Directory('s3://bucket/directory/');

// Array of directories
const dirArray = OutputReference.directoryArray([
  '/path/to/dir1',
  '/path/to/dir2'
]);
```

### Primitive References

```typescript
// String
const stringRef = OutputReference.string('hello');

// Boolean
const boolRef = OutputReference.boolean(true);

// Integer
const intRef = OutputReference.integer(42);

// Float
const floatRef = OutputReference.float(3.14);

// Arrays
const stringArray = OutputReference.stringArray(['a', 'b', 'c']);
```

## Advanced Features

### Custom Output File Paths

```typescript
toolOutputs.setOutputFilePath('/custom/path/my_outputs.json');
const path = toolOutputs.getOutputFilePath(); // Returns '/custom/path/my_outputs.json'
```

### File Path Extraction

```typescript
// Get all file paths from outputs
const filePaths = toolOutputs.filePaths;
console.log('File paths:', filePaths);

// Get local output references
const localRefs = toolOutputs.localOutputReferences;
console.log('Local references:', localRefs);
```

### Serialization

```typescript
// Convert to map representation
const outputMap = toolOutputs.toMap();
console.log('Output map:', outputMap);

// This is what gets written to the cwl.output.json file
```

## Example: Complete Tool Execution

Here's a complete example showing how to use `ToolOutputs` during tool execution:

```typescript
import { ToolOutputs, Output, OutputReference, Tool } from 'wdk-lib';

export class MyProcessingTool extends Tool {
  public messageOutput: Output;
  public resultFileOutput: Output;
  public statusOutput: Output;
  public countOutput: Output;
  public fileListOutput: Output;

  constructor(scope: Workflow, id: string) {
    super(scope, id);
    
    // Define outputs (this happens at design time)
    this.messageOutput = Output.string(this, 'message');
    this.resultFileOutput = Output.file(this, 'result_file');
    this.statusOutput = Output.bool(this, 'success');
    this.countOutput = Output.integer(this, 'count');
    this.fileListOutput = Output.file(this, 'file_list');
  }

  /**
   * This method is called during tool execution to generate the output file
   */
  generateOutputs(): void {
    // Create ToolOutputs for this tool during execution
    const toolOutputs = this.createToolOutputs();
    
    // Set the actual output values (this happens at execution time)
    toolOutputs
      .addOutput(this.messageOutput, 'Processing completed successfully')
      .addOutput(this.resultFileOutput, OutputReference.file('/tmp/result.txt'))
      .addOutput(this.statusOutput, true)
      .addOutput(this.countOutput, 100)
      .addOutput(this.fileListOutput, OutputReference.fileArray([
        '/tmp/output1.txt',
        '/tmp/output2.txt',
        '/tmp/output3.txt'
      ]));
    
    // Generate the cwl.output.json file
    const outputPath = toolOutputs.writeToFile();
    console.log(`Generated CWL output file at: ${outputPath}`);
  }
}
```

## Generated cwl.output.json

The above example would generate a `cwl.output.json` file that looks like:

```json
{
  "message": "Processing completed successfully",
  "result_file": {
    "class": "File",
    "path": "/tmp/result.txt"
  },
  "success": true,
  "count": 100,
  "file_list": [
    {
      "class": "File",
      "path": "/tmp/output1.txt"
    },
    {
      "class": "File",
      "path": "/tmp/output2.txt"
    },
    {
      "class": "File",
      "path": "/tmp/output3.txt"
    }
  ]
}
```

## Integration with CWL

The generated `cwl.output.json` file follows the CWL specification for output binding. When your CWL **CommandLineTool executes**, the CWL runtime reads this file to understand what outputs were produced and populates the tool's output parameters accordingly.

### CWL Tool Example

```yaml
class: CommandLineTool
cwlVersion: v1.2
inputs: []
outputs:
  message:
    type: string
  result_file:
    type: File
  success:
    type: boolean
  count:
    type: int
  file_list:
    type: File[]
arguments:
  - valueFrom: "node my-script.js && echo 'Outputs generated'"
    shellQuote: false
```

Your tool execution script would use `ToolOutputs` to generate the `cwl.output.json` file, which the CWL runtime would then read to populate the output parameters.

## Best Practices

1. **Use descriptive output names** that clearly indicate what each output represents
2. **Handle errors gracefully** by setting appropriate output values even when processing fails
3. **Use absolute paths** for file references to avoid path resolution issues
4. **Test your output generation** with various input scenarios
5. **Validate output structures** to ensure they match your CWL output definitions

## See Also

- [WorkflowValues](./WorkflowValues.md) - For handling workflow inputs
- [Output](./Output.md) - For defining output parameters
- [Tool](./Tool.md) - For defining CommandLineTools
- [CWL Output Binding Specification](https://www.commonwl.org/v1.0/CommandLineTool.html#Output_binding)
