# Core Concepts

wdk models CWL workflows as a tree of **constructs**. Each construct maps to a CWL entity. You define the tree in TypeScript (or Java), and `synth()` produces standard CWL files.

## App

The root of the construct tree. An `App` contains one or more workflows and handles synthesis.

```typescript
import { App } from 'wdk-lib';

const app = new App();
// ... define workflows ...
app.synth(); // writes CWL files to dist/
```

## Workflow

A CWL Workflow. It contains steps (tools, expression tools, or nested workflows) and defines top-level inputs and outputs.

```typescript
import { Workflow } from 'wdk-lib';

class MyPipeline extends Workflow {
  constructor(scope: App, id: string) {
    super(scope, id);
    // add tools, wire inputs/outputs
  }
}
```

Workflows can be nested. A `Workflow` used as a step inside another `Workflow` becomes a CWL sub-workflow.

## Tool

A CWL CommandLineTool. Configure it with `ToolConfig` to set the base command, arguments, and label.

```typescript
import { Tool, ToolConfig, Input, Output } from 'wdk-lib';

class GrepTool extends Tool {
  constructor(scope: Workflow) {
    super(scope, 'grep');
    ToolConfig.basic(this).withBaseCommand(['grep']);

    Input.string(this, 'pattern').withPosition(1);
    Input.file(this, 'input_file').withPosition(2);
    Output.stdout(this, 'matches');
  }
}
```

## ExpressionTool

A CWL ExpressionTool for inline JavaScript computations. Useful for transforming data between steps without running a command.

```typescript
import { ExpressionTool } from 'wdk-lib';

const expr = new ExpressionTool(workflow, 'transform');
expr.withExpression('${ return {"out": inputs.x + inputs.y}; }');
```

## Input and Output

Typed ports that connect steps. Inputs accept data, outputs produce it. Link them with `linkTo()` to wire steps together.

```typescript
// Define inputs and outputs on a tool
const fastaInput = Input.file(tool, 'input_fasta');
const resultOutput = Output.file(tool, 'result').withGlob('*.result');

// Wire steps: one tool's output feeds another's input
nextTool.inputs[0].linkTo(previousTool.outputs[0]);
```

Available types: `Input.file()`, `Input.string()`, `Input.integer()`, `Input.bool()`, `Input.float()`, `Input.directory()`, `Input.stringArray()`, `Input.fileArray()`, and corresponding `Output` methods.

Inputs support additional configuration:

- `.withPrefix('--flag')` -- adds a command-line prefix
- `.withPosition(n)` -- sets argument order
- `.withDefaultValue(v)` -- provides a default
- `.makeOptional(true)` -- marks as optional in the CWL schema
- `.withDoc('description')` -- adds documentation

## Requirement

Declares CWL requirements on a tool or workflow: Docker images, compute resources, environment variables, and more.

```typescript
import { Requirement } from 'wdk-lib';

Requirement.docker(tool, 'ubuntu:22.04');
Requirement.resource(tool, { coresMin: 4, ramMin: 8192 });
Requirement.networkAccess(tool);
Requirement.envVar(tool, { DB_HOST: 'localhost' });
Requirement.inlineJavascript(tool);
Requirement.initialWorkDir(tool)
  .addListing('staged.txt', '$(inputs.my_file)');
```

## Scatter

Run a step in parallel over an array input.

```typescript
import { Scatter } from 'wdk-lib';

Scatter.scatterInput(tool.inputs[0]);
```

## Construct Levels

wdk organizes constructs into levels of abstraction:

### L1 -- Core Primitives

`Tool`, `Workflow`, `ExpressionTool`, `Input`, `Output`, `Requirement`, `Scatter`, `Conditional`. These map directly to CWL entities.

### L2 -- Reusable Patterns

**BashTool** -- a convenience construct that wraps an inline bash script as a CWL CommandLineTool.

```typescript
import { BashTool } from 'wdk-lib';

new BashTool(workflow, 'my-script', {
  inlineScriptPath: './scripts/process.sh',
});
```

### L3 -- Specialized Tools

**FirstOrNullExpressionTool** -- picks the first non-null element from an array of optional outputs. See [FirstOrNullExpressionTool](./FirstOrNullExpressionTool.md).

```typescript
import { FirstOrNullExpressionTool, TypeIn } from 'wdk-lib';

const pickFirst = new FirstOrNullExpressionTool(workflow, 'pick', TypeIn.file());
pickFirst.input.linkTo(toolA.outputs[0]).linkTo(toolB.outputs[0]);
nextStep.inputs[0].linkTo(pickFirst.output);
```
