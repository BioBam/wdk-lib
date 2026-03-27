# Getting Started

This guide walks you through installing wdk-lib and creating your first CWL workflow.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)
- A CWL runner for executing workflows (e.g., [cwltool](https://github.com/common-workflow-language/cwltool))

## Install

```bash
npm install wdk-lib
```

For Java, add the Maven dependency (published to GitHub Packages):

```xml
<dependency>
  <groupId>com.biobam</groupId>
  <artifactId>wdk-lib</artifactId>
</dependency>
```

## Your First Workflow

Create a file called `my-app.ts`:

```typescript
import { App, Workflow, Tool, ToolConfig, Input } from 'wdk-lib';

class EchoTool extends Tool {
  constructor(scope: Workflow) {
    super(scope, 'echo');
    ToolConfig.basic(this).withBaseCommand(['echo']);
    Input.string(this, 'message').withPosition(1);
  }
}

const app = new App();
const workflow = new Workflow(app, 'my-first-workflow');
new EchoTool(workflow);
app.synth();
```

## Synthesize

Run the app to generate CWL:

```bash
npx ts-node my-app.ts
```

This creates CWL files under `dist/my-first-workflow/`. The tool definition will be in `echo.clt.cwl`:

```yaml
class: CommandLineTool
id: echo
baseCommand:
  - echo
inputs:
  - id: message
    type: string
    inputBinding:
      position: 1
outputs: []
```

## Run with cwltool

```bash
cwltool dist/my-first-workflow/echo.clt.cwl --message "Hello from WDK!"
```

## Next Steps

- Read [Concepts](./concepts.md) to understand the construct tree model
- Browse the [examples](../src/examples/) for real-world patterns
- Check the [TypeScript API Reference](../API.md) or [Java API Reference](../API_JAVA.md) for the full API
