# FirstOrNullExpressionTool

A specialized ExpressionTool that picks the first non-null element from an array input. This is useful for merging multiple optional outputs into a single output where only the first available value is needed.

The class provides direct access to `input` and `output` fields, making it easier to link with other workflow steps compared to accessing through array indices.

## Basic Usage

```typescript
import { FirstOrNullExpressionTool, TypeIn, PickValueMethod } from 'wdk-lib';

// Create a tool that picks the first file from an array
const pickFirst = new FirstOrNullExpressionTool(
  workflow,
  'pick_first',
  TypeIn.file()
);

// Link multiple outputs to the input
pickFirst.input
  .linkTo(tool1.outputs[0])
  .linkTo(tool2.outputs[0])
  .pickValue(PickValueMethod.ALL_NON_NULL);

// Use the output in another tool
someOtherTool.inputs[0].linkTo(pickFirst.output);
```

## Custom Input/Output Names

```typescript
const pickFirst = new FirstOrNullExpressionTool(
  workflow,
  'pick_first',
  TypeIn.file(),
  { inputId: 'files', outputId: 'first_file' }
);
```

## Different Data Types

```typescript
// Pick first string from an array
const pickString = new FirstOrNullExpressionTool(
  workflow, 
  'pick_string', 
  TypeIn.string()
);

// Pick first integer from an array  
const pickInt = new FirstOrNullExpressionTool(
  workflow,
  'pick_int', 
  TypeIn.int()
);

// Pick first from complex types
const pickNested = new FirstOrNullExpressionTool(
  workflow,
  'pick_nested',
  TypeIn.arrayOf(TypeIn.file())
);
```

## Generated CWL

The tool generates standard CWL ExpressionTool definitions:

```yaml
id: pick_first
cwlVersion: v1.2
class: ExpressionTool
requirements:
  - class: InlineJavascriptRequirement
inputs:
  - id: items
    type:
      type: array
      items: File
outputs:
  - id: first
    type: ["null", File]
expression: |
  ${
    return {
      "first": inputs.items.length > 0 ? inputs.items[0] : null
    };
  }
```

## Benefits Over Static Method

The `FirstOrNullExpressionTool` class provides several advantages:

### Direct Field Access
```typescript
// Clean, direct access
pickFirst.input.linkTo(someOutput);
someInput.linkTo(pickFirst.output);

// vs. array-based access
pickFirst.inputs[0].linkTo(someOutput);
someInput.linkTo(pickFirst.outputs[0]);
```

### Better IDE Support
- Autocomplete for `.input` and `.output`
- Type safety for field access
- IntelliSense documentation

### Cleaner Code
More readable and maintainable workflow definitions.

## Migration Guide

If you were using the old static method, migration is straightforward:

```typescript
// Old approach (deprecated)
const oldTool = ExpressionTool.createPickFirstExpressionTool(
  workflow, 'pick_first', TypeIn.file(), 'files', 'first_file'
);

// New approach
const newTool = new FirstOrNullExpressionTool(
  workflow,
  'pick_first', 
  TypeIn.file(),
  { inputId: 'files', outputId: 'first_file' }
);
```

## Constructor Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `scope` | `Workflow` | ✅ | - | The workflow containing this tool |
| `id` | `string` | ✅ | - | Unique identifier for the tool |
| `inputType` | `TypeIn` | ✅ | - | Type of array elements |
| `props` | `IFirstOrNullExpressionToolProps` | ❌ | `{}` | Configuration options |

### Props Interface

```typescript
interface IFirstOrNullExpressionToolProps {
  inputId?: string;  // defaults to 'items'
  outputId?: string; // defaults to 'first'
}
```

## Public Fields

- `input: Input` - The array input that accepts multiple values
- `output: Output` - The output containing the first non-null value or null

Both fields are directly accessible for linking with other workflow steps. 