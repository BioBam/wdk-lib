# Workflow Development Kit (wdk)

An open-source framework for defining [Common Workflow Language](https://www.commonwl.org/) (CWL) workflows using TypeScript and Java. wdk uses a construct-tree model inspired by the [AWS CDK](https://aws.amazon.com/cdk) to let you define workflows as code, then synthesize them into standard CWL files that run on any compliant engine.

## Quick Example

```typescript
import { App, Workflow, Tool, ToolConfig, Input, Output } from 'wdk-lib';

class Echo extends Tool {
  constructor(scope: Workflow) {
    super(scope, 'echo');
    ToolConfig.basic(this).withBaseCommand(['echo']).withArguments(['-n']);
    Input.string(this, 'message').withDoc('The message to echo');
    Output.string(this, 'echoed');
  }
}

const app = new App();
const workflow = new Workflow(app, 'hello-wdk');
new Echo(workflow);
app.synth();
```

Running this produces a CWL CommandLineTool file in the `dist/` directory, ready to execute with any CWL runner:

```bash
cwltool dist/hello-wdk/echo.clt.cwl --message "Hello, WDK!"
```

## Installation

**TypeScript / JavaScript**

```bash
npm install wdk-lib
```

**Java** (via JSII, published to GitHub Packages)

```xml
<dependency>
  <groupId>com.biobam</groupId>
  <artifactId>wdk-lib</artifactId>
</dependency>
```

Repository: `https://maven.pkg.github.com/biobam/wdk-lib`

## Key Concepts

wdk models workflows as a tree of constructs:

- **App** -- root of the tree, calls `synth()` to emit CWL files
- **Workflow** -- a CWL Workflow containing steps
- **Tool** -- a CWL CommandLineTool with typed inputs and outputs
- **Input / Output** -- typed ports that connect steps together
- **Requirement** -- Docker images, resource limits, environment variables

See [Concepts](./docs/concepts.md) for details and code examples.

## Documentation

- [Getting Started](./docs/getting-started.md) -- install, create your first workflow, run it
- [Concepts](./docs/concepts.md) -- the construct tree model and core abstractions
- [TypeScript API Reference](./API.md) -- auto-generated from source
- [Java API Reference](./API_JAVA.md) -- auto-generated from source

Additional guides in `docs/`:
- [FirstOrNullExpressionTool](./docs/FirstOrNullExpressionTool.md)
- [ToolOutputs](./docs/ToolOutputs.md)

## Examples

The [`src/examples/`](./src/examples/) directory contains working examples including:

- **CdHit workflow** -- a multi-step bioinformatics pipeline with parameter generation, service execution, and post-processing
- **Pathway analysis tools** -- tools for loading sequences and running pathway analysis
- **EggNOG Mapper workflow** -- a cloud service workflow with database mounting
- **PickFirst pattern** -- merging optional outputs using `FirstOrNullExpressionTool`

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to report issues, set up a development environment, and submit pull requests.

## Community

- Search [open issues](https://github.com/biobam/wdk-lib/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/wdk-lib): tag `wdk-lib`
- File a [new issue](https://github.com/biobam/wdk-lib/issues/new/choose)

## Tests

```bash
npx projen test
```

The test suite covers CWL generation, construct linking, snapshot validation, and user-guide examples. See the [`test/`](./test/) directory.

## License

[Apache License, Version 2.0](./LICENSE)
