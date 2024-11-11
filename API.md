# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### RequirementProps <a name="RequirementProps" id="wdk-lib.RequirementProps"></a>

#### Initializer <a name="Initializer" id="wdk-lib.RequirementProps.Initializer"></a>

```typescript
import { RequirementProps } from 'wdk-lib'

const requirementProps: RequirementProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.RequirementProps.property.coresMax">coresMax</a></code> | <code>number</code> | Maximum reserved number of CPU cores. |
| <code><a href="#wdk-lib.RequirementProps.property.coresMin">coresMin</a></code> | <code>number</code> | Minimum reserved number of CPU cores. |
| <code><a href="#wdk-lib.RequirementProps.property.outdirMax">outdirMax</a></code> | <code>number</code> | Maximum reserved filesystem based storage for the designated output directory, in mebibytes (2**20). |
| <code><a href="#wdk-lib.RequirementProps.property.outdirMin">outdirMin</a></code> | <code>number</code> | Minimum reserved filesystem based storage for the designated output directory, in mebibytes (2**20). |
| <code><a href="#wdk-lib.RequirementProps.property.ramMax">ramMax</a></code> | <code>number</code> | Maximum reserved RAM in mebibytes (2**20). |
| <code><a href="#wdk-lib.RequirementProps.property.ramMin">ramMin</a></code> | <code>number</code> | Minimum reserved RAM in mebibytes (2**20). |
| <code><a href="#wdk-lib.RequirementProps.property.tmpdirMax">tmpdirMax</a></code> | <code>number</code> | Maximum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20). |
| <code><a href="#wdk-lib.RequirementProps.property.tmpdirMin">tmpdirMin</a></code> | <code>number</code> | Minimum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20). |

---

##### `coresMax`<sup>Optional</sup> <a name="coresMax" id="wdk-lib.RequirementProps.property.coresMax"></a>

```typescript
public readonly coresMax: number;
```

- *Type:* number

Maximum reserved number of CPU cores.

---

##### `coresMin`<sup>Optional</sup> <a name="coresMin" id="wdk-lib.RequirementProps.property.coresMin"></a>

```typescript
public readonly coresMin: number;
```

- *Type:* number

Minimum reserved number of CPU cores.

---

##### `outdirMax`<sup>Optional</sup> <a name="outdirMax" id="wdk-lib.RequirementProps.property.outdirMax"></a>

```typescript
public readonly outdirMax: number;
```

- *Type:* number

Maximum reserved filesystem based storage for the designated output directory, in mebibytes (2**20).

---

##### `outdirMin`<sup>Optional</sup> <a name="outdirMin" id="wdk-lib.RequirementProps.property.outdirMin"></a>

```typescript
public readonly outdirMin: number;
```

- *Type:* number

Minimum reserved filesystem based storage for the designated output directory, in mebibytes (2**20).

---

##### `ramMax`<sup>Optional</sup> <a name="ramMax" id="wdk-lib.RequirementProps.property.ramMax"></a>

```typescript
public readonly ramMax: number;
```

- *Type:* number

Maximum reserved RAM in mebibytes (2**20).

---

##### `ramMin`<sup>Optional</sup> <a name="ramMin" id="wdk-lib.RequirementProps.property.ramMin"></a>

```typescript
public readonly ramMin: number;
```

- *Type:* number

Minimum reserved RAM in mebibytes (2**20).

---

##### `tmpdirMax`<sup>Optional</sup> <a name="tmpdirMax" id="wdk-lib.RequirementProps.property.tmpdirMax"></a>

```typescript
public readonly tmpdirMax: number;
```

- *Type:* number

Maximum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20).

---

##### `tmpdirMin`<sup>Optional</sup> <a name="tmpdirMin" id="wdk-lib.RequirementProps.property.tmpdirMin"></a>

```typescript
public readonly tmpdirMin: number;
```

- *Type:* number

Minimum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20).

---

## Classes <a name="Classes" id="Classes"></a>

### App <a name="App" id="wdk-lib.App"></a>

#### Initializers <a name="Initializers" id="wdk-lib.App.Initializer"></a>

```typescript
import { App } from 'wdk-lib'

new App()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.App.synth">synth</a></code> | *No description.* |

---

##### `synth` <a name="synth" id="wdk-lib.App.synth"></a>

```typescript
public synth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.App.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.App.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.App.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.App.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---


### BashTool <a name="BashTool" id="wdk-lib.BashTool"></a>

#### Initializers <a name="Initializers" id="wdk-lib.BashTool.Initializer"></a>

```typescript
import { BashTool } from 'wdk-lib'

new BashTool(scope: any, id: string, props: IBashToolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.BashTool.Initializer.parameter.scope">scope</a></code> | <code>any</code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.BashTool.Initializer.parameter.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.BashTool.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.IBashToolProps">IBashToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.BashTool.Initializer.parameter.scope"></a>

- *Type:* any

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.BashTool.Initializer.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.BashTool.Initializer.parameter.props"></a>

- *Type:* <a href="#wdk-lib.IBashToolProps">IBashToolProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.BashTool.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.BashTool.serialize">serialize</a></code> | Serialize the tool to a CWL file. |
| <code><a href="#wdk-lib.BashTool.toMap">toMap</a></code> | Create a map repsentation of the tool following the CWL specification. |

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.BashTool.hasSteps"></a>

```typescript
public hasSteps(): boolean
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.BashTool.serialize"></a>

```typescript
public serialize(dirPath: string): SynthFiles
```

Serialize the tool to a CWL file.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.BashTool.serialize.parameter.dirPath"></a>

- *Type:* string

---

##### `toMap` <a name="toMap" id="wdk-lib.BashTool.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Create a map repsentation of the tool following the CWL specification.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.BashTool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.BashTool.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.BashTool.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.BashTool.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.BashTool.property.label">label</a></code> | <code>any</code> | *No description.* |
| <code><a href="#wdk-lib.BashTool.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.BashTool.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.BashTool.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.BashTool.property.requirementsMap">requirementsMap</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#wdk-lib.BashTool.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.BashTool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.BashTool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.BashTool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.BashTool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.BashTool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.BashTool.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.BashTool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.BashTool.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.BashTool.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.BashTool.property.label"></a>

```typescript
public readonly label: any;
```

- *Type:* any

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.BashTool.property.linkedInputs"></a>

```typescript
public readonly linkedInputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.BashTool.property.linkedOutputs"></a>

```typescript
public readonly linkedOutputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.BashTool.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

All outputs of the step.

---

##### `requirementsMap`<sup>Required</sup> <a name="requirementsMap" id="wdk-lib.BashTool.property.requirementsMap"></a>

```typescript
public readonly requirementsMap: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.BashTool.property.steps"></a>

```typescript
public readonly steps: IStep[];
```

- *Type:* <a href="#wdk-lib.IStep">IStep</a>[]

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.BashTool.property.conditional"></a>

```typescript
public readonly conditional: Conditional;
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.BashTool.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.BashTool.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.BashTool.property.props"></a>

```typescript
public readonly props: IToolProps;
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.BashTool.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---


### CheckFileNameTool <a name="CheckFileNameTool" id="wdk-lib.CheckFileNameTool"></a>

#### Initializers <a name="Initializers" id="wdk-lib.CheckFileNameTool.Initializer"></a>

```typescript
import { CheckFileNameTool } from 'wdk-lib'

new CheckFileNameTool(scope: any, id: string, props?: IToolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.CheckFileNameTool.Initializer.parameter.scope">scope</a></code> | <code>any</code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.CheckFileNameTool.Initializer.parameter.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.CheckFileNameTool.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.CheckFileNameTool.Initializer.parameter.scope"></a>

- *Type:* any

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.CheckFileNameTool.Initializer.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `props`<sup>Optional</sup> <a name="props" id="wdk-lib.CheckFileNameTool.Initializer.parameter.props"></a>

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.CheckFileNameTool.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.CheckFileNameTool.serialize">serialize</a></code> | Serialize the tool to a CWL file. |
| <code><a href="#wdk-lib.CheckFileNameTool.toMap">toMap</a></code> | Create a map repsentation of the tool following the CWL specification. |

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.CheckFileNameTool.hasSteps"></a>

```typescript
public hasSteps(): boolean
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.CheckFileNameTool.serialize"></a>

```typescript
public serialize(dirPath: string): SynthFiles
```

Serialize the tool to a CWL file.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.CheckFileNameTool.serialize.parameter.dirPath"></a>

- *Type:* string

---

##### `toMap` <a name="toMap" id="wdk-lib.CheckFileNameTool.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Create a map repsentation of the tool following the CWL specification.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.CheckFileNameTool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.label">label</a></code> | <code>any</code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.requirementsMap">requirementsMap</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.checkname">checkname</a></code> | <code><a href="#wdk-lib.Input">Input</a></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.f1">f1</a></code> | <code><a href="#wdk-lib.Input">Input</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.CheckFileNameTool.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.CheckFileNameTool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.CheckFileNameTool.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.CheckFileNameTool.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.CheckFileNameTool.property.label"></a>

```typescript
public readonly label: any;
```

- *Type:* any

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.CheckFileNameTool.property.linkedInputs"></a>

```typescript
public readonly linkedInputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.CheckFileNameTool.property.linkedOutputs"></a>

```typescript
public readonly linkedOutputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.CheckFileNameTool.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

All outputs of the step.

---

##### `requirementsMap`<sup>Required</sup> <a name="requirementsMap" id="wdk-lib.CheckFileNameTool.property.requirementsMap"></a>

```typescript
public readonly requirementsMap: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.CheckFileNameTool.property.steps"></a>

```typescript
public readonly steps: IStep[];
```

- *Type:* <a href="#wdk-lib.IStep">IStep</a>[]

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.CheckFileNameTool.property.conditional"></a>

```typescript
public readonly conditional: Conditional;
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.CheckFileNameTool.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.CheckFileNameTool.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.CheckFileNameTool.property.props"></a>

```typescript
public readonly props: IToolProps;
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.CheckFileNameTool.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `checkname`<sup>Required</sup> <a name="checkname" id="wdk-lib.CheckFileNameTool.property.checkname"></a>

```typescript
public readonly checkname: Input;
```

- *Type:* <a href="#wdk-lib.Input">Input</a>

---

##### `f1`<sup>Required</sup> <a name="f1" id="wdk-lib.CheckFileNameTool.property.f1"></a>

```typescript
public readonly f1: Input;
```

- *Type:* <a href="#wdk-lib.Input">Input</a>

---


### Conditional <a name="Conditional" id="wdk-lib.Conditional"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Conditional.whenBooleanInputIs">whenBooleanInputIs</a></code> | Skip this step if the boolean input associated to this condition does not match the specified value. |
| <code><a href="#wdk-lib.Conditional.whenInputNotNull">whenInputNotNull</a></code> | Skip this step if the specified input is null. |

---

##### `whenBooleanInputIs` <a name="whenBooleanInputIs" id="wdk-lib.Conditional.whenBooleanInputIs"></a>

```typescript
public whenBooleanInputIs(input: Input, value: boolean): void
```

Skip this step if the boolean input associated to this condition does not match the specified value.

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.Conditional.whenBooleanInputIs.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

A boolean step input parameter.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Conditional.whenBooleanInputIs.parameter.value"></a>

- *Type:* boolean

<code>true</code> to run the step only if the input is true, <code>false</code> to run the step only if the input is false.

---

##### `whenInputNotNull` <a name="whenInputNotNull" id="wdk-lib.Conditional.whenInputNotNull"></a>

```typescript
public whenInputNotNull(input: Input): void
```

Skip this step if the specified input is null.

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.Conditional.whenInputNotNull.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

One of the step input parameters.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Conditional.step">step</a></code> | *No description.* |

---

##### `step` <a name="step" id="wdk-lib.Conditional.step"></a>

```typescript
import { Conditional } from 'wdk-lib'

Conditional.step(step: IStep)
```

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Conditional.step.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Conditional.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Conditional.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Conditional.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Conditional.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---


### Construct <a name="Construct" id="wdk-lib.Construct"></a>

#### Initializers <a name="Initializers" id="wdk-lib.Construct.Initializer"></a>

```typescript
import { Construct } from 'wdk-lib'

new Construct(id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Construct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Construct.Initializer.parameter.id"></a>

- *Type:* string

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Construct.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Construct.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Construct.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Construct.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---


### Constructs <a name="Constructs" id="wdk-lib.Constructs"></a>

A utility class for Constructs.

#### Initializers <a name="Initializers" id="wdk-lib.Constructs.Initializer"></a>

```typescript
import { Constructs } from 'wdk-lib'

new Constructs()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Constructs.createRoot">createRoot</a></code> | Create a construct that does not need to extend another construct. |
| <code><a href="#wdk-lib.Constructs.rootWorkflow">rootWorkflow</a></code> | Utility to create a root Workflow and use in tests. |

---

##### `createRoot` <a name="createRoot" id="wdk-lib.Constructs.createRoot"></a>

```typescript
import { Constructs } from 'wdk-lib'

Constructs.createRoot(id: string)
```

Create a construct that does not need to extend another construct.

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Constructs.createRoot.parameter.id"></a>

- *Type:* string

Identifier for the construct.

---

##### `rootWorkflow` <a name="rootWorkflow" id="wdk-lib.Constructs.rootWorkflow"></a>

```typescript
import { Constructs } from 'wdk-lib'

Constructs.rootWorkflow()
```

Utility to create a root Workflow and use in tests.



### ExpressionTool <a name="ExpressionTool" id="wdk-lib.ExpressionTool"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>

#### Initializers <a name="Initializers" id="wdk-lib.ExpressionTool.Initializer"></a>

```typescript
import { ExpressionTool } from 'wdk-lib'

new ExpressionTool(scope: Workflow, id: string, props?: IToolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ExpressionTool.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.Workflow">Workflow</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.ExpressionTool.Initializer.parameter.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.ExpressionTool.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.ExpressionTool.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.ExpressionTool.Initializer.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `props`<sup>Optional</sup> <a name="props" id="wdk-lib.ExpressionTool.Initializer.parameter.props"></a>

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.ExpressionTool.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.ExpressionTool.serialize">serialize</a></code> | Serialize the tool to a CWL file. |
| <code><a href="#wdk-lib.ExpressionTool.toMap">toMap</a></code> | Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool. |
| <code><a href="#wdk-lib.ExpressionTool.withExpression">withExpression</a></code> | Specify a custom JavaScript expression for this ExpressionTool. |

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.ExpressionTool.hasSteps"></a>

```typescript
public hasSteps(): boolean
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.ExpressionTool.serialize"></a>

```typescript
public serialize(dirPath: string): SynthFiles
```

Serialize the tool to a CWL file.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.ExpressionTool.serialize.parameter.dirPath"></a>

- *Type:* string

---

##### `toMap` <a name="toMap" id="wdk-lib.ExpressionTool.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool.

##### `withExpression` <a name="withExpression" id="wdk-lib.ExpressionTool.withExpression"></a>

```typescript
public withExpression(expression: string): ExpressionTool
```

Specify a custom JavaScript expression for this ExpressionTool.

###### `expression`<sup>Required</sup> <a name="expression" id="wdk-lib.ExpressionTool.withExpression.parameter.expression"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.ExpressionTool.makeParametersJsonExpression">makeParametersJsonExpression</a></code> | Create a CWL expression script that generates a JSON file with the parameters of the tool. |

---

##### `makeParametersJsonExpression` <a name="makeParametersJsonExpression" id="wdk-lib.ExpressionTool.makeParametersJsonExpression"></a>

```typescript
import { ExpressionTool } from 'wdk-lib'

ExpressionTool.makeParametersJsonExpression()
```

Create a CWL expression script that generates a JSON file with the parameters of the tool.

Example: call with makeParametersJsonExpression()

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ExpressionTool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.ExpressionTool.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.ExpressionTool.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.ExpressionTool.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.ExpressionTool.property.label">label</a></code> | <code>any</code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.ExpressionTool.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.ExpressionTool.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.ExpressionTool.property.requirementsMap">requirementsMap</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.ExpressionTool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.ExpressionTool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.ExpressionTool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.expression">expression</a></code> | <code>string</code> | Get the custom JavaScript expression for this ExpressionTool. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.ExpressionTool.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.ExpressionTool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.ExpressionTool.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.ExpressionTool.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.ExpressionTool.property.label"></a>

```typescript
public readonly label: any;
```

- *Type:* any

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.ExpressionTool.property.linkedInputs"></a>

```typescript
public readonly linkedInputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.ExpressionTool.property.linkedOutputs"></a>

```typescript
public readonly linkedOutputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.ExpressionTool.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

All outputs of the step.

---

##### `requirementsMap`<sup>Required</sup> <a name="requirementsMap" id="wdk-lib.ExpressionTool.property.requirementsMap"></a>

```typescript
public readonly requirementsMap: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.ExpressionTool.property.steps"></a>

```typescript
public readonly steps: IStep[];
```

- *Type:* <a href="#wdk-lib.IStep">IStep</a>[]

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.ExpressionTool.property.conditional"></a>

```typescript
public readonly conditional: Conditional;
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.ExpressionTool.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.ExpressionTool.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.ExpressionTool.property.props"></a>

```typescript
public readonly props: IToolProps;
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.ExpressionTool.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `expression`<sup>Optional</sup> <a name="expression" id="wdk-lib.ExpressionTool.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Get the custom JavaScript expression for this ExpressionTool.

---


### FileUtils <a name="FileUtils" id="wdk-lib.FileUtils"></a>

#### Initializers <a name="Initializers" id="wdk-lib.FileUtils.Initializer"></a>

```typescript
import { FileUtils } from 'wdk-lib'

new FileUtils()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.FileUtils.readFileContent">readFileContent</a></code> | Utility function to read the content of a file. |
| <code><a href="#wdk-lib.FileUtils.writeFileContent">writeFileContent</a></code> | Utility to write (or overwrite) the YAML content into the file. |

---

##### `readFileContent` <a name="readFileContent" id="wdk-lib.FileUtils.readFileContent"></a>

```typescript
import { FileUtils } from 'wdk-lib'

FileUtils.readFileContent(filePath: string)
```

Utility function to read the content of a file.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wdk-lib.FileUtils.readFileContent.parameter.filePath"></a>

- *Type:* string

---

##### `writeFileContent` <a name="writeFileContent" id="wdk-lib.FileUtils.writeFileContent"></a>

```typescript
import { FileUtils } from 'wdk-lib'

FileUtils.writeFileContent(outputFile: string, yamlOutput: string)
```

Utility to write (or overwrite) the YAML content into the file.

###### `outputFile`<sup>Required</sup> <a name="outputFile" id="wdk-lib.FileUtils.writeFileContent.parameter.outputFile"></a>

- *Type:* string

---

###### `yamlOutput`<sup>Required</sup> <a name="yamlOutput" id="wdk-lib.FileUtils.writeFileContent.parameter.yamlOutput"></a>

- *Type:* string

---



### Input <a name="Input" id="wdk-lib.Input"></a>

Represents an input parameter of a workflow or a tool.

*Example*

```typescript
import { Input, Construct } from 'wdk-lib';
const root = Constructs.createRoot('root');
const input = Input.string(root, 'myInput')
                   .withDefaultValue('default')
                   .withDoc('This is my input');
```


#### Initializers <a name="Initializers" id="wdk-lib.Input.Initializer"></a>

```typescript
import { Input } from 'wdk-lib'

new Input(scope: Construct, id: string, type: Type)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Input.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Input.Initializer.parameter.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Input.Initializer.parameter.type">type</a></code> | <code><a href="#wdk-lib.Type">Type</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.Initializer.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `type`<sup>Required</sup> <a name="type" id="wdk-lib.Input.Initializer.parameter.type"></a>

- *Type:* <a href="#wdk-lib.Type">Type</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Input.linkTo">linkTo</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.pickValue">pickValue</a></code> | Set the PickValueMethod for this linkable if there are multiple sources linked to it. |
| <code><a href="#wdk-lib.Input.as">as</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.isArray">isArray</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.makeOptional">makeOptional</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.makeSeparate">makeSeparate</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.toMap">toMap</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.withDefaultValue">withDefaultValue</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.withDoc">withDoc</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.withItemSeparator">withItemSeparator</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.withPosition">withPosition</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.withPrefix">withPrefix</a></code> | *No description.* |

---

##### `linkTo` <a name="linkTo" id="wdk-lib.Input.linkTo"></a>

```typescript
public linkTo(linkInput: ILinkable): ILinkable
```

###### `linkInput`<sup>Required</sup> <a name="linkInput" id="wdk-lib.Input.linkTo.parameter.linkInput"></a>

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>

---

##### `pickValue` <a name="pickValue" id="wdk-lib.Input.pickValue"></a>

```typescript
public pickValue(method: PickValueMethod): ILinkable
```

Set the PickValueMethod for this linkable if there are multiple sources linked to it.

###### `method`<sup>Required</sup> <a name="method" id="wdk-lib.Input.pickValue.parameter.method"></a>

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---

##### `as` <a name="as" id="wdk-lib.Input.as"></a>

```typescript
public as(newId: string): Input
```

###### `newId`<sup>Required</sup> <a name="newId" id="wdk-lib.Input.as.parameter.newId"></a>

- *Type:* string

---

##### `isArray` <a name="isArray" id="wdk-lib.Input.isArray"></a>

```typescript
public isArray(): boolean
```

##### `makeOptional` <a name="makeOptional" id="wdk-lib.Input.makeOptional"></a>

```typescript
public makeOptional(optional: boolean): Input
```

###### `optional`<sup>Required</sup> <a name="optional" id="wdk-lib.Input.makeOptional.parameter.optional"></a>

- *Type:* boolean

---

##### `makeSeparate` <a name="makeSeparate" id="wdk-lib.Input.makeSeparate"></a>

```typescript
public makeSeparate(separate: boolean): Input
```

###### `separate`<sup>Required</sup> <a name="separate" id="wdk-lib.Input.makeSeparate.parameter.separate"></a>

- *Type:* boolean

---

##### `toMap` <a name="toMap" id="wdk-lib.Input.toMap"></a>

```typescript
public toMap(short?: boolean): {[ key: string ]: any}
```

###### `short`<sup>Optional</sup> <a name="short" id="wdk-lib.Input.toMap.parameter.short"></a>

- *Type:* boolean

---

##### `withDefaultValue` <a name="withDefaultValue" id="wdk-lib.Input.withDefaultValue"></a>

```typescript
public withDefaultValue(defaultValue: any): Input
```

###### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="wdk-lib.Input.withDefaultValue.parameter.defaultValue"></a>

- *Type:* any

---

##### `withDoc` <a name="withDoc" id="wdk-lib.Input.withDoc"></a>

```typescript
public withDoc(doc: string): Input
```

###### `doc`<sup>Required</sup> <a name="doc" id="wdk-lib.Input.withDoc.parameter.doc"></a>

- *Type:* string

---

##### `withItemSeparator` <a name="withItemSeparator" id="wdk-lib.Input.withItemSeparator"></a>

```typescript
public withItemSeparator(separator: string): Input
```

###### `separator`<sup>Required</sup> <a name="separator" id="wdk-lib.Input.withItemSeparator.parameter.separator"></a>

- *Type:* string

---

##### `withPosition` <a name="withPosition" id="wdk-lib.Input.withPosition"></a>

```typescript
public withPosition(position: number): Input
```

###### `position`<sup>Required</sup> <a name="position" id="wdk-lib.Input.withPosition.parameter.position"></a>

- *Type:* number

---

##### `withPrefix` <a name="withPrefix" id="wdk-lib.Input.withPrefix"></a>

```typescript
public withPrefix(prefix: string): Input
```

###### `prefix`<sup>Required</sup> <a name="prefix" id="wdk-lib.Input.withPrefix.parameter.prefix"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Input.bool">bool</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.double">double</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.file">file</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.fileArray">fileArray</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.float">float</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.fromStepInput">fromStepInput</a></code> | Create an input from a step input, using the same ID and type. |
| <code><a href="#wdk-lib.Input.integer">integer</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.string">string</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.stringArray">stringArray</a></code> | *No description.* |

---

##### `bool` <a name="bool" id="wdk-lib.Input.bool"></a>

```typescript
import { Input } from 'wdk-lib'

Input.bool(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.bool.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.bool.parameter.id"></a>

- *Type:* string

---

##### `double` <a name="double" id="wdk-lib.Input.double"></a>

```typescript
import { Input } from 'wdk-lib'

Input.double(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.double.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.double.parameter.id"></a>

- *Type:* string

---

##### `file` <a name="file" id="wdk-lib.Input.file"></a>

```typescript
import { Input } from 'wdk-lib'

Input.file(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.file.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.file.parameter.id"></a>

- *Type:* string

---

##### `fileArray` <a name="fileArray" id="wdk-lib.Input.fileArray"></a>

```typescript
import { Input } from 'wdk-lib'

Input.fileArray(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.fileArray.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.fileArray.parameter.id"></a>

- *Type:* string

---

##### `float` <a name="float" id="wdk-lib.Input.float"></a>

```typescript
import { Input } from 'wdk-lib'

Input.float(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.float.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.float.parameter.id"></a>

- *Type:* string

---

##### `fromStepInput` <a name="fromStepInput" id="wdk-lib.Input.fromStepInput"></a>

```typescript
import { Input } from 'wdk-lib'

Input.fromStepInput(scope: Construct, input: Input)
```

Create an input from a step input, using the same ID and type.

It also copies the default value, the optional flag, and the doc.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.fromStepInput.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.Input.fromStepInput.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

---

##### `integer` <a name="integer" id="wdk-lib.Input.integer"></a>

```typescript
import { Input } from 'wdk-lib'

Input.integer(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.integer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.integer.parameter.id"></a>

- *Type:* string

---

##### `string` <a name="string" id="wdk-lib.Input.string"></a>

```typescript
import { Input } from 'wdk-lib'

Input.string(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.string.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.string.parameter.id"></a>

- *Type:* string

---

##### `stringArray` <a name="stringArray" id="wdk-lib.Input.stringArray"></a>

```typescript
import { Input } from 'wdk-lib'

Input.stringArray(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.stringArray.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.stringArray.parameter.id"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Input.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Input.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Input.property.idAsReference">idAsReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.linked">linked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.links">links</a></code> | <code><a href="#wdk-lib.ILinkable">ILinkable</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.multiLinked">multiLinked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.referenced">referenced</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.type">type</a></code> | <code><a href="#wdk-lib.Type">Type</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.pickValueMethod">pickValueMethod</a></code> | <code><a href="#wdk-lib.PickValueMethod">PickValueMethod</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.optional">optional</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.doc">doc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.valueFrom">valueFrom</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Input.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `idAsReference`<sup>Required</sup> <a name="idAsReference" id="wdk-lib.Input.property.idAsReference"></a>

```typescript
public readonly idAsReference: string;
```

- *Type:* string

---

##### `linked`<sup>Required</sup> <a name="linked" id="wdk-lib.Input.property.linked"></a>

```typescript
public readonly linked: boolean;
```

- *Type:* boolean

---

##### `links`<sup>Required</sup> <a name="links" id="wdk-lib.Input.property.links"></a>

```typescript
public readonly links: ILinkable[];
```

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>[]

---

##### `multiLinked`<sup>Required</sup> <a name="multiLinked" id="wdk-lib.Input.property.multiLinked"></a>

```typescript
public readonly multiLinked: boolean;
```

- *Type:* boolean

---

##### `referenced`<sup>Required</sup> <a name="referenced" id="wdk-lib.Input.property.referenced"></a>

```typescript
public readonly referenced: boolean;
```

- *Type:* boolean

---

##### `type`<sup>Required</sup> <a name="type" id="wdk-lib.Input.property.type"></a>

```typescript
public readonly type: Type;
```

- *Type:* <a href="#wdk-lib.Type">Type</a>

---

##### `pickValueMethod`<sup>Optional</sup> <a name="pickValueMethod" id="wdk-lib.Input.property.pickValueMethod"></a>

```typescript
public readonly pickValueMethod: PickValueMethod;
```

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---

##### `optional`<sup>Required</sup> <a name="optional" id="wdk-lib.Input.property.optional"></a>

```typescript
public readonly optional: boolean;
```

- *Type:* boolean

---

##### `doc`<sup>Optional</sup> <a name="doc" id="wdk-lib.Input.property.doc"></a>

```typescript
public readonly doc: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="wdk-lib.Input.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

---


### InputReference <a name="InputReference" id="wdk-lib.InputReference"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>

#### Initializers <a name="Initializers" id="wdk-lib.InputReference.Initializer"></a>

```typescript
import { InputReference } from 'wdk-lib'

new InputReference()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.InputReference.toMap">toMap</a></code> | Convert the object to a map representation following the CWL specification. |

---

##### `toMap` <a name="toMap" id="wdk-lib.InputReference.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Convert the object to a map representation following the CWL specification.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.InputReference.file">file</a></code> | Create a local file reference. |
| <code><a href="#wdk-lib.InputReference.fileArray">fileArray</a></code> | Create a reference to a list of local files. |
| <code><a href="#wdk-lib.InputReference.s3File">s3File</a></code> | Create a s3 file reference. |
| <code><a href="#wdk-lib.InputReference.s3FileArray">s3FileArray</a></code> | Create a reference to a list of s3 files. |

---

##### `file` <a name="file" id="wdk-lib.InputReference.file"></a>

```typescript
import { InputReference } from 'wdk-lib'

InputReference.file(relativePath: string)
```

Create a local file reference.

###### `relativePath`<sup>Required</sup> <a name="relativePath" id="wdk-lib.InputReference.file.parameter.relativePath"></a>

- *Type:* string

path to a local file like `/Users/username/file.txt`.

---

##### `fileArray` <a name="fileArray" id="wdk-lib.InputReference.fileArray"></a>

```typescript
import { InputReference } from 'wdk-lib'

InputReference.fileArray(relativePaths: string[])
```

Create a reference to a list of local files.

###### `relativePaths`<sup>Required</sup> <a name="relativePaths" id="wdk-lib.InputReference.fileArray.parameter.relativePaths"></a>

- *Type:* string[]

path to local files like `["/home/file1.txt", "/home/file2.txt"]`.

---

##### `s3File` <a name="s3File" id="wdk-lib.InputReference.s3File"></a>

```typescript
import { InputReference } from 'wdk-lib'

InputReference.s3File(s3FileReference: string)
```

Create a s3 file reference.

###### `s3FileReference`<sup>Required</sup> <a name="s3FileReference" id="wdk-lib.InputReference.s3File.parameter.s3FileReference"></a>

- *Type:* string

Reference to an S3 file formatted like `s3://bucket-name/path/to/file`.

---

##### `s3FileArray` <a name="s3FileArray" id="wdk-lib.InputReference.s3FileArray"></a>

```typescript
import { InputReference } from 'wdk-lib'

InputReference.s3FileArray(s3FileReferences: string[])
```

Create a reference to a list of s3 files.

###### `s3FileReferences`<sup>Required</sup> <a name="s3FileReferences" id="wdk-lib.InputReference.s3FileArray.parameter.s3FileReferences"></a>

- *Type:* string[]

Reference to S3 files formatted like `["s3://bucket-name/path/to/file1", "s3://bucket-name/path/to/file2"]`.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.InputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.InputReference.property.path">path</a></code> | <code>string</code> | *No description.* |

---

##### `location`<sup>Optional</sup> <a name="location" id="wdk-lib.InputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `path`<sup>Optional</sup> <a name="path" id="wdk-lib.InputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---


### LinkableConstruct <a name="LinkableConstruct" id="wdk-lib.LinkableConstruct"></a>

- *Implements:* <a href="#wdk-lib.ILinkable">ILinkable</a>

#### Initializers <a name="Initializers" id="wdk-lib.LinkableConstruct.Initializer"></a>

```typescript
import { LinkableConstruct } from 'wdk-lib'

new LinkableConstruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.LinkableConstruct.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.LinkableConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.LinkableConstruct.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.LinkableConstruct.Initializer.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.LinkableConstruct.linkTo">linkTo</a></code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.pickValue">pickValue</a></code> | Set the PickValueMethod for this linkable if there are multiple sources linked to it. |

---

##### `linkTo` <a name="linkTo" id="wdk-lib.LinkableConstruct.linkTo"></a>

```typescript
public linkTo(linkInput: ILinkable): ILinkable
```

###### `linkInput`<sup>Required</sup> <a name="linkInput" id="wdk-lib.LinkableConstruct.linkTo.parameter.linkInput"></a>

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>

---

##### `pickValue` <a name="pickValue" id="wdk-lib.LinkableConstruct.pickValue"></a>

```typescript
public pickValue(method: PickValueMethod): ILinkable
```

Set the PickValueMethod for this linkable if there are multiple sources linked to it.

###### `method`<sup>Required</sup> <a name="method" id="wdk-lib.LinkableConstruct.pickValue.parameter.method"></a>

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.LinkableConstruct.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.LinkableConstruct.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.LinkableConstruct.property.idAsReference">idAsReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.linked">linked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.links">links</a></code> | <code><a href="#wdk-lib.ILinkable">ILinkable</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.multiLinked">multiLinked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.referenced">referenced</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.type">type</a></code> | <code><a href="#wdk-lib.Type">Type</a></code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.pickValueMethod">pickValueMethod</a></code> | <code><a href="#wdk-lib.PickValueMethod">PickValueMethod</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.LinkableConstruct.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.LinkableConstruct.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `idAsReference`<sup>Required</sup> <a name="idAsReference" id="wdk-lib.LinkableConstruct.property.idAsReference"></a>

```typescript
public readonly idAsReference: string;
```

- *Type:* string

---

##### `linked`<sup>Required</sup> <a name="linked" id="wdk-lib.LinkableConstruct.property.linked"></a>

```typescript
public readonly linked: boolean;
```

- *Type:* boolean

---

##### `links`<sup>Required</sup> <a name="links" id="wdk-lib.LinkableConstruct.property.links"></a>

```typescript
public readonly links: ILinkable[];
```

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>[]

---

##### `multiLinked`<sup>Required</sup> <a name="multiLinked" id="wdk-lib.LinkableConstruct.property.multiLinked"></a>

```typescript
public readonly multiLinked: boolean;
```

- *Type:* boolean

---

##### `referenced`<sup>Required</sup> <a name="referenced" id="wdk-lib.LinkableConstruct.property.referenced"></a>

```typescript
public readonly referenced: boolean;
```

- *Type:* boolean

---

##### `type`<sup>Required</sup> <a name="type" id="wdk-lib.LinkableConstruct.property.type"></a>

```typescript
public readonly type: Type;
```

- *Type:* <a href="#wdk-lib.Type">Type</a>

---

##### `pickValueMethod`<sup>Optional</sup> <a name="pickValueMethod" id="wdk-lib.LinkableConstruct.property.pickValueMethod"></a>

```typescript
public readonly pickValueMethod: PickValueMethod;
```

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---


### Output <a name="Output" id="wdk-lib.Output"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>

#### Initializers <a name="Initializers" id="wdk-lib.Output.Initializer"></a>

```typescript
import { Output } from 'wdk-lib'

new Output(scope: Construct, id: string, type: Type)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Output.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Output.Initializer.parameter.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Output.Initializer.parameter.type">type</a></code> | <code><a href="#wdk-lib.Type">Type</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.Initializer.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `type`<sup>Required</sup> <a name="type" id="wdk-lib.Output.Initializer.parameter.type"></a>

- *Type:* <a href="#wdk-lib.Type">Type</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Output.linkTo">linkTo</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.pickValue">pickValue</a></code> | Set the PickValueMethod for this linkable if there are multiple sources linked to it. |
| <code><a href="#wdk-lib.Output.as">as</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.globFromInputString">globFromInputString</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.loadContents">loadContents</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.outputEval">outputEval</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.toMap">toMap</a></code> | Convert the object to a map representation following the CWL specification. |
| <code><a href="#wdk-lib.Output.withGlob">withGlob</a></code> | *No description.* |

---

##### `linkTo` <a name="linkTo" id="wdk-lib.Output.linkTo"></a>

```typescript
public linkTo(linkInput: ILinkable): ILinkable
```

###### `linkInput`<sup>Required</sup> <a name="linkInput" id="wdk-lib.Output.linkTo.parameter.linkInput"></a>

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>

---

##### `pickValue` <a name="pickValue" id="wdk-lib.Output.pickValue"></a>

```typescript
public pickValue(method: PickValueMethod): ILinkable
```

Set the PickValueMethod for this linkable if there are multiple sources linked to it.

###### `method`<sup>Required</sup> <a name="method" id="wdk-lib.Output.pickValue.parameter.method"></a>

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---

##### `as` <a name="as" id="wdk-lib.Output.as"></a>

```typescript
public as(id: string): Output
```

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.as.parameter.id"></a>

- *Type:* string

---

##### `globFromInputString` <a name="globFromInputString" id="wdk-lib.Output.globFromInputString"></a>

```typescript
public globFromInputString(inputString: Input): Output
```

###### `inputString`<sup>Required</sup> <a name="inputString" id="wdk-lib.Output.globFromInputString.parameter.inputString"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

---

##### `loadContents` <a name="loadContents" id="wdk-lib.Output.loadContents"></a>

```typescript
public loadContents(): Output
```

##### `outputEval` <a name="outputEval" id="wdk-lib.Output.outputEval"></a>

```typescript
public outputEval(expression: string): Output
```

###### `expression`<sup>Required</sup> <a name="expression" id="wdk-lib.Output.outputEval.parameter.expression"></a>

- *Type:* string

---

##### `toMap` <a name="toMap" id="wdk-lib.Output.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Convert the object to a map representation following the CWL specification.

##### `withGlob` <a name="withGlob" id="wdk-lib.Output.withGlob"></a>

```typescript
public withGlob(glob: string): Output
```

###### `glob`<sup>Required</sup> <a name="glob" id="wdk-lib.Output.withGlob.parameter.glob"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Output.bool">bool</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.file">file</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.fileArray">fileArray</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.float">float</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.fromStepOutput">fromStepOutput</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.integer">integer</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.string">string</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.stringArray">stringArray</a></code> | *No description.* |

---

##### `bool` <a name="bool" id="wdk-lib.Output.bool"></a>

```typescript
import { Output } from 'wdk-lib'

Output.bool(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.bool.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.bool.parameter.id"></a>

- *Type:* string

---

##### `file` <a name="file" id="wdk-lib.Output.file"></a>

```typescript
import { Output } from 'wdk-lib'

Output.file(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.file.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.file.parameter.id"></a>

- *Type:* string

---

##### `fileArray` <a name="fileArray" id="wdk-lib.Output.fileArray"></a>

```typescript
import { Output } from 'wdk-lib'

Output.fileArray(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.fileArray.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.fileArray.parameter.id"></a>

- *Type:* string

---

##### `float` <a name="float" id="wdk-lib.Output.float"></a>

```typescript
import { Output } from 'wdk-lib'

Output.float(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.float.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.float.parameter.id"></a>

- *Type:* string

---

##### `fromStepOutput` <a name="fromStepOutput" id="wdk-lib.Output.fromStepOutput"></a>

```typescript
import { Output } from 'wdk-lib'

Output.fromStepOutput(scope: Construct, linkedOutput: Output)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.fromStepOutput.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `linkedOutput`<sup>Required</sup> <a name="linkedOutput" id="wdk-lib.Output.fromStepOutput.parameter.linkedOutput"></a>

- *Type:* <a href="#wdk-lib.Output">Output</a>

---

##### `integer` <a name="integer" id="wdk-lib.Output.integer"></a>

```typescript
import { Output } from 'wdk-lib'

Output.integer(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.integer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.integer.parameter.id"></a>

- *Type:* string

---

##### `string` <a name="string" id="wdk-lib.Output.string"></a>

```typescript
import { Output } from 'wdk-lib'

Output.string(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.string.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.string.parameter.id"></a>

- *Type:* string

---

##### `stringArray` <a name="stringArray" id="wdk-lib.Output.stringArray"></a>

```typescript
import { Output } from 'wdk-lib'

Output.stringArray(scope: Construct, id: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.stringArray.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.stringArray.parameter.id"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Output.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Output.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Output.property.idAsReference">idAsReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.linked">linked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.links">links</a></code> | <code><a href="#wdk-lib.ILinkable">ILinkable</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.multiLinked">multiLinked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.referenced">referenced</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.type">type</a></code> | <code><a href="#wdk-lib.Type">Type</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.pickValueMethod">pickValueMethod</a></code> | <code><a href="#wdk-lib.PickValueMethod">PickValueMethod</a></code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.yamlMap">yamlMap</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Output.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `idAsReference`<sup>Required</sup> <a name="idAsReference" id="wdk-lib.Output.property.idAsReference"></a>

```typescript
public readonly idAsReference: string;
```

- *Type:* string

---

##### `linked`<sup>Required</sup> <a name="linked" id="wdk-lib.Output.property.linked"></a>

```typescript
public readonly linked: boolean;
```

- *Type:* boolean

---

##### `links`<sup>Required</sup> <a name="links" id="wdk-lib.Output.property.links"></a>

```typescript
public readonly links: ILinkable[];
```

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>[]

---

##### `multiLinked`<sup>Required</sup> <a name="multiLinked" id="wdk-lib.Output.property.multiLinked"></a>

```typescript
public readonly multiLinked: boolean;
```

- *Type:* boolean

---

##### `referenced`<sup>Required</sup> <a name="referenced" id="wdk-lib.Output.property.referenced"></a>

```typescript
public readonly referenced: boolean;
```

- *Type:* boolean

---

##### `type`<sup>Required</sup> <a name="type" id="wdk-lib.Output.property.type"></a>

```typescript
public readonly type: Type;
```

- *Type:* <a href="#wdk-lib.Type">Type</a>

---

##### `pickValueMethod`<sup>Optional</sup> <a name="pickValueMethod" id="wdk-lib.Output.property.pickValueMethod"></a>

```typescript
public readonly pickValueMethod: PickValueMethod;
```

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---

##### `yamlMap`<sup>Required</sup> <a name="yamlMap" id="wdk-lib.Output.property.yamlMap"></a>

```typescript
public readonly yamlMap: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---


### RenameExpressionTool <a name="RenameExpressionTool" id="wdk-lib.RenameExpressionTool"></a>

#### Initializers <a name="Initializers" id="wdk-lib.RenameExpressionTool.Initializer"></a>

```typescript
import { RenameExpressionTool } from 'wdk-lib'

new RenameExpressionTool(scope: Workflow, id: string, props?: IRenameExpressionToolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.RenameExpressionTool.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.Workflow">Workflow</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.RenameExpressionTool.Initializer.parameter.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.RenameExpressionTool.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.IRenameExpressionToolProps">IRenameExpressionToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.RenameExpressionTool.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.RenameExpressionTool.Initializer.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `props`<sup>Optional</sup> <a name="props" id="wdk-lib.RenameExpressionTool.Initializer.parameter.props"></a>

- *Type:* <a href="#wdk-lib.IRenameExpressionToolProps">IRenameExpressionToolProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.RenameExpressionTool.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.RenameExpressionTool.serialize">serialize</a></code> | Serialize the tool to a CWL file. |
| <code><a href="#wdk-lib.RenameExpressionTool.toMap">toMap</a></code> | Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool. |
| <code><a href="#wdk-lib.RenameExpressionTool.withExpression">withExpression</a></code> | Specify a custom JavaScript expression for this ExpressionTool. |

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.RenameExpressionTool.hasSteps"></a>

```typescript
public hasSteps(): boolean
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.RenameExpressionTool.serialize"></a>

```typescript
public serialize(dirPath: string): SynthFiles
```

Serialize the tool to a CWL file.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.RenameExpressionTool.serialize.parameter.dirPath"></a>

- *Type:* string

---

##### `toMap` <a name="toMap" id="wdk-lib.RenameExpressionTool.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool.

##### `withExpression` <a name="withExpression" id="wdk-lib.RenameExpressionTool.withExpression"></a>

```typescript
public withExpression(expression: string): ExpressionTool
```

Specify a custom JavaScript expression for this ExpressionTool.

###### `expression`<sup>Required</sup> <a name="expression" id="wdk-lib.RenameExpressionTool.withExpression.parameter.expression"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.RenameExpressionTool.makeParametersJsonExpression">makeParametersJsonExpression</a></code> | Create a CWL expression script that generates a JSON file with the parameters of the tool. |

---

##### `makeParametersJsonExpression` <a name="makeParametersJsonExpression" id="wdk-lib.RenameExpressionTool.makeParametersJsonExpression"></a>

```typescript
import { RenameExpressionTool } from 'wdk-lib'

RenameExpressionTool.makeParametersJsonExpression()
```

Create a CWL expression script that generates a JSON file with the parameters of the tool.

Example: call with makeParametersJsonExpression()

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.RenameExpressionTool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.label">label</a></code> | <code>any</code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.requirementsMap">requirementsMap</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.expression">expression</a></code> | <code>string</code> | Get the custom JavaScript expression for this ExpressionTool. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.f1">f1</a></code> | <code><a href="#wdk-lib.Input">Input</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.newname">newname</a></code> | <code><a href="#wdk-lib.Input">Input</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.out">out</a></code> | <code><a href="#wdk-lib.Output">Output</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.RenameExpressionTool.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.RenameExpressionTool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.RenameExpressionTool.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.RenameExpressionTool.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.RenameExpressionTool.property.label"></a>

```typescript
public readonly label: any;
```

- *Type:* any

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.RenameExpressionTool.property.linkedInputs"></a>

```typescript
public readonly linkedInputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.RenameExpressionTool.property.linkedOutputs"></a>

```typescript
public readonly linkedOutputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.RenameExpressionTool.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

All outputs of the step.

---

##### `requirementsMap`<sup>Required</sup> <a name="requirementsMap" id="wdk-lib.RenameExpressionTool.property.requirementsMap"></a>

```typescript
public readonly requirementsMap: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.RenameExpressionTool.property.steps"></a>

```typescript
public readonly steps: IStep[];
```

- *Type:* <a href="#wdk-lib.IStep">IStep</a>[]

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.RenameExpressionTool.property.conditional"></a>

```typescript
public readonly conditional: Conditional;
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.RenameExpressionTool.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.RenameExpressionTool.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.RenameExpressionTool.property.props"></a>

```typescript
public readonly props: IToolProps;
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.RenameExpressionTool.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `expression`<sup>Optional</sup> <a name="expression" id="wdk-lib.RenameExpressionTool.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Get the custom JavaScript expression for this ExpressionTool.

---

##### `f1`<sup>Required</sup> <a name="f1" id="wdk-lib.RenameExpressionTool.property.f1"></a>

```typescript
public readonly f1: Input;
```

- *Type:* <a href="#wdk-lib.Input">Input</a>

---

##### `newname`<sup>Required</sup> <a name="newname" id="wdk-lib.RenameExpressionTool.property.newname"></a>

```typescript
public readonly newname: Input;
```

- *Type:* <a href="#wdk-lib.Input">Input</a>

---

##### `out`<sup>Required</sup> <a name="out" id="wdk-lib.RenameExpressionTool.property.out"></a>

```typescript
public readonly out: Output;
```

- *Type:* <a href="#wdk-lib.Output">Output</a>

---


### Requirement <a name="Requirement" id="wdk-lib.Requirement"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Requirement.addListing">addListing</a></code> | *No description.* |
| <code><a href="#wdk-lib.Requirement.toMap">toMap</a></code> | *No description.* |

---

##### `addListing` <a name="addListing" id="wdk-lib.Requirement.addListing"></a>

```typescript
public addListing(entryName: string, entry: string): Requirement
```

###### `entryName`<sup>Required</sup> <a name="entryName" id="wdk-lib.Requirement.addListing.parameter.entryName"></a>

- *Type:* string

---

###### `entry`<sup>Required</sup> <a name="entry" id="wdk-lib.Requirement.addListing.parameter.entry"></a>

- *Type:* string

---

##### `toMap` <a name="toMap" id="wdk-lib.Requirement.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Requirement.docker">docker</a></code> | *No description.* |
| <code><a href="#wdk-lib.Requirement.envVar">envVar</a></code> | *No description.* |
| <code><a href="#wdk-lib.Requirement.initialWorkDir">initialWorkDir</a></code> | *No description.* |
| <code><a href="#wdk-lib.Requirement.inlineJavascript">inlineJavascript</a></code> | *No description.* |
| <code><a href="#wdk-lib.Requirement.multipleInputFeature">multipleInputFeature</a></code> | *No description.* |
| <code><a href="#wdk-lib.Requirement.networkAccess">networkAccess</a></code> | *No description.* |
| <code><a href="#wdk-lib.Requirement.resource">resource</a></code> | *No description.* |
| <code><a href="#wdk-lib.Requirement.scatterFeature">scatterFeature</a></code> | *No description.* |
| <code><a href="#wdk-lib.Requirement.stepInputExpression">stepInputExpression</a></code> | *No description.* |
| <code><a href="#wdk-lib.Requirement.subworkflowFeature">subworkflowFeature</a></code> | *No description.* |

---

##### `docker` <a name="docker" id="wdk-lib.Requirement.docker"></a>

```typescript
import { Requirement } from 'wdk-lib'

Requirement.docker(scope: Construct, dockerImage: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.docker.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `dockerImage`<sup>Required</sup> <a name="dockerImage" id="wdk-lib.Requirement.docker.parameter.dockerImage"></a>

- *Type:* string

---

##### `envVar` <a name="envVar" id="wdk-lib.Requirement.envVar"></a>

```typescript
import { Requirement } from 'wdk-lib'

Requirement.envVar(scope: Construct, envDef: {[ key: string ]: string})
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.envVar.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `envDef`<sup>Required</sup> <a name="envDef" id="wdk-lib.Requirement.envVar.parameter.envDef"></a>

- *Type:* {[ key: string ]: string}

---

##### `initialWorkDir` <a name="initialWorkDir" id="wdk-lib.Requirement.initialWorkDir"></a>

```typescript
import { Requirement } from 'wdk-lib'

Requirement.initialWorkDir(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.initialWorkDir.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `inlineJavascript` <a name="inlineJavascript" id="wdk-lib.Requirement.inlineJavascript"></a>

```typescript
import { Requirement } from 'wdk-lib'

Requirement.inlineJavascript(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.inlineJavascript.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `multipleInputFeature` <a name="multipleInputFeature" id="wdk-lib.Requirement.multipleInputFeature"></a>

```typescript
import { Requirement } from 'wdk-lib'

Requirement.multipleInputFeature(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.multipleInputFeature.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `networkAccess` <a name="networkAccess" id="wdk-lib.Requirement.networkAccess"></a>

```typescript
import { Requirement } from 'wdk-lib'

Requirement.networkAccess(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.networkAccess.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `resource` <a name="resource" id="wdk-lib.Requirement.resource"></a>

```typescript
import { Requirement } from 'wdk-lib'

Requirement.resource(scope: Construct, props: RequirementProps)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.resource.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `props`<sup>Required</sup> <a name="props" id="wdk-lib.Requirement.resource.parameter.props"></a>

- *Type:* <a href="#wdk-lib.RequirementProps">RequirementProps</a>

---

##### `scatterFeature` <a name="scatterFeature" id="wdk-lib.Requirement.scatterFeature"></a>

```typescript
import { Requirement } from 'wdk-lib'

Requirement.scatterFeature(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.scatterFeature.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `stepInputExpression` <a name="stepInputExpression" id="wdk-lib.Requirement.stepInputExpression"></a>

```typescript
import { Requirement } from 'wdk-lib'

Requirement.stepInputExpression(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.stepInputExpression.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `subworkflowFeature` <a name="subworkflowFeature" id="wdk-lib.Requirement.subworkflowFeature"></a>

```typescript
import { Requirement } from 'wdk-lib'

Requirement.subworkflowFeature(scope: Construct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.subworkflowFeature.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Requirement.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Requirement.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Requirement.property.requirementType">requirementType</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Requirement.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Requirement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `requirementType`<sup>Required</sup> <a name="requirementType" id="wdk-lib.Requirement.property.requirementType"></a>

```typescript
public readonly requirementType: string;
```

- *Type:* string

---


### Scatter <a name="Scatter" id="wdk-lib.Scatter"></a>


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Scatter.dotProduct">dotProduct</a></code> | A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements. |
| <code><a href="#wdk-lib.Scatter.flatCrossProduct">flatCrossProduct</a></code> | A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements. |
| <code><a href="#wdk-lib.Scatter.nestedCrossProduct">nestedCrossProduct</a></code> | A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements. |
| <code><a href="#wdk-lib.Scatter.simple">simple</a></code> | A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements. |

---

##### `dotProduct` <a name="dotProduct" id="wdk-lib.Scatter.dotProduct"></a>

```typescript
import { Scatter } from 'wdk-lib'

Scatter.dotProduct(scope: Workflow, step: IStep, inputs: Input[])
```

A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements.

Each of the input arrays are aligned and one element taken from each array to construct each job.
It is an error if all input arrays are not the same length.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Scatter.dotProduct.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

---

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Scatter.dotProduct.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

---

###### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Scatter.dotProduct.parameter.inputs"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

---

##### `flatCrossProduct` <a name="flatCrossProduct" id="wdk-lib.Scatter.flatCrossProduct"></a>

```typescript
import { Scatter } from 'wdk-lib'

Scatter.flatCrossProduct(scope: Workflow, step: IStep, inputs: Input[])
```

A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements.

Cartesian product of the inputs, producing a job for every combination of the scattered inputs.
The output arrays are flattened to a single level, but otherwise listed in the order that the input arrays are listed in the scatter field.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Scatter.flatCrossProduct.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

---

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Scatter.flatCrossProduct.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

---

###### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Scatter.flatCrossProduct.parameter.inputs"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

---

##### `nestedCrossProduct` <a name="nestedCrossProduct" id="wdk-lib.Scatter.nestedCrossProduct"></a>

```typescript
import { Scatter } from 'wdk-lib'

Scatter.nestedCrossProduct(scope: Workflow, step: IStep, inputs: Input[])
```

A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements.

Cartesian product of the inputs, producing a job for every combination of the scattered inputs.
The output is nested arrays for each level of scattering, in the order that the input arrays are listed in the scatter field.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Scatter.nestedCrossProduct.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

---

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Scatter.nestedCrossProduct.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

---

###### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Scatter.nestedCrossProduct.parameter.inputs"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

---

##### `simple` <a name="simple" id="wdk-lib.Scatter.simple"></a>

```typescript
import { Scatter } from 'wdk-lib'

Scatter.simple(scope: Workflow, step: IStep, input: Input)
```

A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements.

Each job making up a scatter operation is independent and may be executed concurrently.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Scatter.simple.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

The Workflow to which the scatter belongs.

---

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Scatter.simple.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

The step to scatter.

---

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.Scatter.simple.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

The input to scatter.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Scatter.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Scatter.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Scatter.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wdk-lib.Scatter.property.method">method</a></code> | <code><a href="#wdk-lib.ScatterMethod">ScatterMethod</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Scatter.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Scatter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `ids`<sup>Required</sup> <a name="ids" id="wdk-lib.Scatter.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `method`<sup>Required</sup> <a name="method" id="wdk-lib.Scatter.property.method"></a>

```typescript
public readonly method: ScatterMethod;
```

- *Type:* <a href="#wdk-lib.ScatterMethod">ScatterMethod</a>

---


### SynthFiles <a name="SynthFiles" id="wdk-lib.SynthFiles"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.SynthFiles.addAsAttachment">addAsAttachment</a></code> | *No description.* |
| <code><a href="#wdk-lib.SynthFiles.addAttached">addAttached</a></code> | *No description.* |
| <code><a href="#wdk-lib.SynthFiles.withMain">withMain</a></code> | *No description.* |

---

##### `addAsAttachment` <a name="addAsAttachment" id="wdk-lib.SynthFiles.addAsAttachment"></a>

```typescript
public addAsAttachment(stepSynthInfo: SynthFiles): void
```

###### `stepSynthInfo`<sup>Required</sup> <a name="stepSynthInfo" id="wdk-lib.SynthFiles.addAsAttachment.parameter.stepSynthInfo"></a>

- *Type:* <a href="#wdk-lib.SynthFiles">SynthFiles</a>

---

##### `addAttached` <a name="addAttached" id="wdk-lib.SynthFiles.addAttached"></a>

```typescript
public addAttached(file: string): SynthFiles
```

###### `file`<sup>Required</sup> <a name="file" id="wdk-lib.SynthFiles.addAttached.parameter.file"></a>

- *Type:* string

---

##### `withMain` <a name="withMain" id="wdk-lib.SynthFiles.withMain"></a>

```typescript
public withMain(main: string): SynthFiles
```

###### `main`<sup>Required</sup> <a name="main" id="wdk-lib.SynthFiles.withMain.parameter.main"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.SynthFiles.createWithMain">createWithMain</a></code> | *No description.* |

---

##### `createWithMain` <a name="createWithMain" id="wdk-lib.SynthFiles.createWithMain"></a>

```typescript
import { SynthFiles } from 'wdk-lib'

SynthFiles.createWithMain(cwlFile: string)
```

###### `cwlFile`<sup>Required</sup> <a name="cwlFile" id="wdk-lib.SynthFiles.createWithMain.parameter.cwlFile"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.SynthFiles.property.attachedFiles">attachedFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wdk-lib.SynthFiles.property.main">main</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.SynthFiles.property.attached">attached</a></code> | <code>string[]</code> | *No description.* |

---

##### `attachedFiles`<sup>Required</sup> <a name="attachedFiles" id="wdk-lib.SynthFiles.property.attachedFiles"></a>

```typescript
public readonly attachedFiles: string[];
```

- *Type:* string[]

---

##### `main`<sup>Required</sup> <a name="main" id="wdk-lib.SynthFiles.property.main"></a>

```typescript
public readonly main: string;
```

- *Type:* string

---

##### `attached`<sup>Required</sup> <a name="attached" id="wdk-lib.SynthFiles.property.attached"></a>

```typescript
public readonly attached: string[];
```

- *Type:* string[]

---


### Tool <a name="Tool" id="wdk-lib.Tool"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>, <a href="#wdk-lib.IStep">IStep</a>

#### Initializers <a name="Initializers" id="wdk-lib.Tool.Initializer"></a>

```typescript
import { Tool } from 'wdk-lib'

new Tool(scope: Workflow, id: string, props?: IToolProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Tool.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.Workflow">Workflow</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Tool.Initializer.parameter.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Tool.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Tool.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Tool.Initializer.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `props`<sup>Optional</sup> <a name="props" id="wdk-lib.Tool.Initializer.parameter.props"></a>

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Tool.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.Tool.serialize">serialize</a></code> | Serialize the tool to a CWL file. |
| <code><a href="#wdk-lib.Tool.toMap">toMap</a></code> | Create a map repsentation of the tool following the CWL specification. |

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.Tool.hasSteps"></a>

```typescript
public hasSteps(): boolean
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.Tool.serialize"></a>

```typescript
public serialize(dirPath: string): SynthFiles
```

Serialize the tool to a CWL file.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.Tool.serialize.parameter.dirPath"></a>

- *Type:* string

---

##### `toMap` <a name="toMap" id="wdk-lib.Tool.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Create a map repsentation of the tool following the CWL specification.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Tool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Tool.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Tool.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.Tool.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.Tool.property.label">label</a></code> | <code>any</code> | *No description.* |
| <code><a href="#wdk-lib.Tool.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.Tool.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.Tool.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.Tool.property.requirementsMap">requirementsMap</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#wdk-lib.Tool.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.Tool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.Tool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.Tool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.Tool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.Tool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Tool.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Tool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.Tool.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Tool.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.Tool.property.label"></a>

```typescript
public readonly label: any;
```

- *Type:* any

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.Tool.property.linkedInputs"></a>

```typescript
public readonly linkedInputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.Tool.property.linkedOutputs"></a>

```typescript
public readonly linkedOutputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.Tool.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

All outputs of the step.

---

##### `requirementsMap`<sup>Required</sup> <a name="requirementsMap" id="wdk-lib.Tool.property.requirementsMap"></a>

```typescript
public readonly requirementsMap: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.Tool.property.steps"></a>

```typescript
public readonly steps: IStep[];
```

- *Type:* <a href="#wdk-lib.IStep">IStep</a>[]

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.Tool.property.conditional"></a>

```typescript
public readonly conditional: Conditional;
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.Tool.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.Tool.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.Tool.property.props"></a>

```typescript
public readonly props: IToolProps;
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.Tool.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---


### ToolConfig <a name="ToolConfig" id="wdk-lib.ToolConfig"></a>

#### Initializers <a name="Initializers" id="wdk-lib.ToolConfig.Initializer"></a>

```typescript
import { ToolConfig } from 'wdk-lib'

new ToolConfig(id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ToolConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.ToolConfig.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.ToolConfig.withArguments">withArguments</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.withBaseCommand">withBaseCommand</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.withLabel">withLabel</a></code> | *No description.* |

---

##### `withArguments` <a name="withArguments" id="wdk-lib.ToolConfig.withArguments"></a>

```typescript
public withArguments(newArgs: string[]): ToolConfig
```

###### `newArgs`<sup>Required</sup> <a name="newArgs" id="wdk-lib.ToolConfig.withArguments.parameter.newArgs"></a>

- *Type:* string[]

---

##### `withBaseCommand` <a name="withBaseCommand" id="wdk-lib.ToolConfig.withBaseCommand"></a>

```typescript
public withBaseCommand(baseCommand: string[]): ToolConfig
```

###### `baseCommand`<sup>Required</sup> <a name="baseCommand" id="wdk-lib.ToolConfig.withBaseCommand.parameter.baseCommand"></a>

- *Type:* string[]

---

##### `withLabel` <a name="withLabel" id="wdk-lib.ToolConfig.withLabel"></a>

```typescript
public withLabel(label: string): ToolConfig
```

###### `label`<sup>Required</sup> <a name="label" id="wdk-lib.ToolConfig.withLabel.parameter.label"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.ToolConfig.basic">basic</a></code> | *No description.* |

---

##### `basic` <a name="basic" id="wdk-lib.ToolConfig.basic"></a>

```typescript
import { ToolConfig } from 'wdk-lib'

ToolConfig.basic(scope: Tool)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.ToolConfig.basic.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Tool">Tool</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ToolConfig.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.ToolConfig.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.ToolConfig.property.arguments">arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.property.baseCommand">baseCommand</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.property.cwlVersion">cwlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.property.label">label</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.ToolConfig.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.ToolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="wdk-lib.ToolConfig.property.arguments"></a>

```typescript
public readonly arguments: string[];
```

- *Type:* string[]

---

##### `baseCommand`<sup>Required</sup> <a name="baseCommand" id="wdk-lib.ToolConfig.property.baseCommand"></a>

```typescript
public readonly baseCommand: string[];
```

- *Type:* string[]

---

##### `cwlVersion`<sup>Required</sup> <a name="cwlVersion" id="wdk-lib.ToolConfig.property.cwlVersion"></a>

```typescript
public readonly cwlVersion: string;
```

- *Type:* string

---

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.ToolConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---


### WdkUtils <a name="WdkUtils" id="wdk-lib.WdkUtils"></a>

#### Initializers <a name="Initializers" id="wdk-lib.WdkUtils.Initializer"></a>

```typescript
import { WdkUtils } from 'wdk-lib'

new WdkUtils()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.WdkUtils.createSynthInfo">createSynthInfo</a></code> | *No description.* |
| <code><a href="#wdk-lib.WdkUtils.getFileBasename">getFileBasename</a></code> | *No description.* |
| <code><a href="#wdk-lib.WdkUtils.getLowercaseInitials">getLowercaseInitials</a></code> | Extracts the capital initials from a given camel case string and converts them to lowercase. |
| <code><a href="#wdk-lib.WdkUtils.mapToJsonString">mapToJsonString</a></code> | *No description.* |
| <code><a href="#wdk-lib.WdkUtils.mapToYamlString">mapToYamlString</a></code> | *No description.* |
| <code><a href="#wdk-lib.WdkUtils.newFilePath">newFilePath</a></code> | *No description.* |
| <code><a href="#wdk-lib.WdkUtils.writeToFile">writeToFile</a></code> | TODO: Take care of await correctly. |

---

##### `createSynthInfo` <a name="createSynthInfo" id="wdk-lib.WdkUtils.createSynthInfo"></a>

```typescript
import { WdkUtils } from 'wdk-lib'

WdkUtils.createSynthInfo(step: IStep, workflowDirectory: string)
```

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.WdkUtils.createSynthInfo.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

---

###### `workflowDirectory`<sup>Required</sup> <a name="workflowDirectory" id="wdk-lib.WdkUtils.createSynthInfo.parameter.workflowDirectory"></a>

- *Type:* string

---

##### `getFileBasename` <a name="getFileBasename" id="wdk-lib.WdkUtils.getFileBasename"></a>

```typescript
import { WdkUtils } from 'wdk-lib'

WdkUtils.getFileBasename(filePath: string)
```

###### `filePath`<sup>Required</sup> <a name="filePath" id="wdk-lib.WdkUtils.getFileBasename.parameter.filePath"></a>

- *Type:* string

---

##### `getLowercaseInitials` <a name="getLowercaseInitials" id="wdk-lib.WdkUtils.getLowercaseInitials"></a>

```typescript
import { WdkUtils } from 'wdk-lib'

WdkUtils.getLowercaseInitials(str: string)
```

Extracts the capital initials from a given camel case string and converts them to lowercase.

###### `str`<sup>Required</sup> <a name="str" id="wdk-lib.WdkUtils.getLowercaseInitials.parameter.str"></a>

- *Type:* string

The input camel case string.

---

##### `mapToJsonString` <a name="mapToJsonString" id="wdk-lib.WdkUtils.mapToJsonString"></a>

```typescript
import { WdkUtils } from 'wdk-lib'

WdkUtils.mapToJsonString(data: {[ key: string ]: any})
```

###### `data`<sup>Required</sup> <a name="data" id="wdk-lib.WdkUtils.mapToJsonString.parameter.data"></a>

- *Type:* {[ key: string ]: any}

---

##### `mapToYamlString` <a name="mapToYamlString" id="wdk-lib.WdkUtils.mapToYamlString"></a>

```typescript
import { WdkUtils } from 'wdk-lib'

WdkUtils.mapToYamlString(data: {[ key: string ]: any})
```

###### `data`<sup>Required</sup> <a name="data" id="wdk-lib.WdkUtils.mapToYamlString.parameter.data"></a>

- *Type:* {[ key: string ]: any}

---

##### `newFilePath` <a name="newFilePath" id="wdk-lib.WdkUtils.newFilePath"></a>

```typescript
import { WdkUtils } from 'wdk-lib'

WdkUtils.newFilePath(workflowDirectory: string, fileName: string)
```

###### `workflowDirectory`<sup>Required</sup> <a name="workflowDirectory" id="wdk-lib.WdkUtils.newFilePath.parameter.workflowDirectory"></a>

- *Type:* string

---

###### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.WdkUtils.newFilePath.parameter.fileName"></a>

- *Type:* string

---

##### `writeToFile` <a name="writeToFile" id="wdk-lib.WdkUtils.writeToFile"></a>

```typescript
import { WdkUtils } from 'wdk-lib'

WdkUtils.writeToFile(content: string, filePath: string)
```

TODO: Take care of await correctly.

###### `content`<sup>Required</sup> <a name="content" id="wdk-lib.WdkUtils.writeToFile.parameter.content"></a>

- *Type:* string

---

###### `filePath`<sup>Required</sup> <a name="filePath" id="wdk-lib.WdkUtils.writeToFile.parameter.filePath"></a>

- *Type:* string

---



### Workflow <a name="Workflow" id="wdk-lib.Workflow"></a>

- *Implements:* <a href="#wdk-lib.IStep">IStep</a>, <a href="#wdk-lib.IMappable">IMappable</a>

#### Initializers <a name="Initializers" id="wdk-lib.Workflow.Initializer"></a>

```typescript
import { Workflow } from 'wdk-lib'

new Workflow(scope: any, id: string, props?: IWorkflowProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Workflow.Initializer.parameter.scope">scope</a></code> | <code>any</code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Workflow.Initializer.parameter.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Workflow.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Workflow.Initializer.parameter.scope"></a>

- *Type:* any

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Workflow.Initializer.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `props`<sup>Optional</sup> <a name="props" id="wdk-lib.Workflow.Initializer.parameter.props"></a>

- *Type:* <a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Workflow.addStep">addStep</a></code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.Workflow.serialize">serialize</a></code> | Serialize the step to a directory. |
| <code><a href="#wdk-lib.Workflow.toMap">toMap</a></code> | Convert the object to a map representation following the CWL specification. |

---

##### `addStep` <a name="addStep" id="wdk-lib.Workflow.addStep"></a>

```typescript
public addStep(step: IStep): void
```

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Workflow.addStep.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.Workflow.hasSteps"></a>

```typescript
public hasSteps(): boolean
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.Workflow.serialize"></a>

```typescript
public serialize(dirPath: string): SynthFiles
```

Serialize the step to a directory.

If the step has substeps, they will be serialized recursively.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.Workflow.serialize.parameter.dirPath"></a>

- *Type:* string

---

##### `toMap` <a name="toMap" id="wdk-lib.Workflow.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Convert the object to a map representation following the CWL specification.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Workflow.basicProps">basicProps</a></code> | *No description.* |

---

##### `basicProps` <a name="basicProps" id="wdk-lib.Workflow.basicProps"></a>

```typescript
import { Workflow } from 'wdk-lib'

Workflow.basicProps()
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Workflow.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Workflow.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Workflow.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.Workflow.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.Workflow.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.Workflow.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.Workflow.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.Workflow.property.props">props</a></code> | <code><a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.property.requirements">requirements</a></code> | <code><a href="#wdk-lib.Requirement">Requirement</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.Workflow.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.Workflow.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.Workflow.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Workflow.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Workflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.Workflow.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Workflow.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.Workflow.property.linkedInputs"></a>

```typescript
public readonly linkedInputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.Workflow.property.linkedOutputs"></a>

```typescript
public readonly linkedOutputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.Workflow.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

All outputs of the step.

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.Workflow.property.props"></a>

```typescript
public readonly props: IWorkflowProps;
```

- *Type:* <a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a>

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.Workflow.property.requirements"></a>

```typescript
public readonly requirements: Requirement[];
```

- *Type:* <a href="#wdk-lib.Requirement">Requirement</a>[]

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.Workflow.property.steps"></a>

```typescript
public readonly steps: IStep[];
```

- *Type:* <a href="#wdk-lib.IStep">IStep</a>[]

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.Workflow.property.conditional"></a>

```typescript
public readonly conditional: Conditional;
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.Workflow.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.Workflow.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---


### WorkflowValues <a name="WorkflowValues" id="wdk-lib.WorkflowValues"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>

#### Initializers <a name="Initializers" id="wdk-lib.WorkflowValues.Initializer"></a>

```typescript
import { WorkflowValues } from 'wdk-lib'

new WorkflowValues()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.WorkflowValues.addInput">addInput</a></code> | Associate a value to an input object. |
| <code><a href="#wdk-lib.WorkflowValues.toMap">toMap</a></code> | Convert the object to a map representation following the CWL specification. |

---

##### `addInput` <a name="addInput" id="wdk-lib.WorkflowValues.addInput"></a>

```typescript
public addInput(input: Input, value: any): WorkflowValues
```

Associate a value to an input object.

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.WorkflowValues.addInput.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

Input object to reference the value to.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.WorkflowValues.addInput.parameter.value"></a>

- *Type:* any

Value associated to the input.

---

##### `toMap` <a name="toMap" id="wdk-lib.WorkflowValues.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Convert the object to a map representation following the CWL specification.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.WorkflowValues.create">create</a></code> | *No description.* |

---

##### `create` <a name="create" id="wdk-lib.WorkflowValues.create"></a>

```typescript
import { WorkflowValues } from 'wdk-lib'

WorkflowValues.create(taskName?: string)
```

###### `taskName`<sup>Optional</sup> <a name="taskName" id="wdk-lib.WorkflowValues.create.parameter.taskName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.WorkflowValues.property.filePaths">filePaths</a></code> | <code>string[]</code> | Get the file paths for all the file inputs. |
| <code><a href="#wdk-lib.WorkflowValues.property.inputs">inputs</a></code> | <code>{[ key: string ]: string \| number \| boolean \| string[] \| <a href="#wdk-lib.InputReference">InputReference</a> \| <a href="#wdk-lib.InputReference">InputReference</a>[]}</code> | *No description.* |
| <code><a href="#wdk-lib.WorkflowValues.property.taskName">taskName</a></code> | <code>string</code> | *No description.* |

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="wdk-lib.WorkflowValues.property.filePaths"></a>

```typescript
public readonly filePaths: string[];
```

- *Type:* string[]

Get the file paths for all the file inputs.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.WorkflowValues.property.inputs"></a>

```typescript
public readonly inputs: {[ key: string ]: string | number | boolean | string[] | InputReference | InputReference[]};
```

- *Type:* {[ key: string ]: string | number | boolean | string[] | <a href="#wdk-lib.InputReference">InputReference</a> | <a href="#wdk-lib.InputReference">InputReference</a>[]}

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="wdk-lib.WorkflowValues.property.taskName"></a>

```typescript
public readonly taskName: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IBashToolProps <a name="IBashToolProps" id="wdk-lib.IBashToolProps"></a>

- *Extends:* <a href="#wdk-lib.IToolProps">IToolProps</a>

- *Implemented By:* <a href="#wdk-lib.IBashToolProps">IBashToolProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.IBashToolProps.property.metadata">metadata</a></code> | <code><a href="#wdk-lib.IToolMetadata">IToolMetadata</a></code> | *No description.* |
| <code><a href="#wdk-lib.IBashToolProps.property.inlineScript">inlineScript</a></code> | <code>string</code> | The inline script content. |
| <code><a href="#wdk-lib.IBashToolProps.property.inlineScriptPath">inlineScriptPath</a></code> | <code>string</code> | The path to the inline script file. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="wdk-lib.IBashToolProps.property.metadata"></a>

```typescript
public readonly metadata: IToolMetadata;
```

- *Type:* <a href="#wdk-lib.IToolMetadata">IToolMetadata</a>

---

##### `inlineScript`<sup>Optional</sup> <a name="inlineScript" id="wdk-lib.IBashToolProps.property.inlineScript"></a>

```typescript
public readonly inlineScript: string;
```

- *Type:* string

The inline script content.

Provide either this or `inlineScriptPath`.

---

##### `inlineScriptPath`<sup>Optional</sup> <a name="inlineScriptPath" id="wdk-lib.IBashToolProps.property.inlineScriptPath"></a>

```typescript
public readonly inlineScriptPath: string;
```

- *Type:* string

The path to the inline script file.

Provide either this or `inlineScript`.

---

### ILinkable <a name="ILinkable" id="wdk-lib.ILinkable"></a>

- *Implemented By:* <a href="#wdk-lib.Input">Input</a>, <a href="#wdk-lib.LinkableConstruct">LinkableConstruct</a>, <a href="#wdk-lib.Output">Output</a>, <a href="#wdk-lib.ILinkable">ILinkable</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.ILinkable.linkTo">linkTo</a></code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.pickValue">pickValue</a></code> | Set the PickValueMethod for this linkable if there are multiple sources linked to it. |

---

##### `linkTo` <a name="linkTo" id="wdk-lib.ILinkable.linkTo"></a>

```typescript
public linkTo(link: ILinkable): ILinkable
```

###### `link`<sup>Required</sup> <a name="link" id="wdk-lib.ILinkable.linkTo.parameter.link"></a>

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>

---

##### `pickValue` <a name="pickValue" id="wdk-lib.ILinkable.pickValue"></a>

```typescript
public pickValue(method: PickValueMethod): ILinkable
```

Set the PickValueMethod for this linkable if there are multiple sources linked to it.

*Example*

```typescript
myStepTool.input
          .linkTo(cdHit.clusterFile)
          .linkTo(inputFasta)
          .pickValue(PickValueMethod.FIRST_NON_NULL);
```


###### `method`<sup>Required</sup> <a name="method" id="wdk-lib.ILinkable.pickValue.parameter.method"></a>

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ILinkable.property.idAsReference">idAsReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.linked">linked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.links">links</a></code> | <code><a href="#wdk-lib.ILinkable">ILinkable</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.multiLinked">multiLinked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.referenced">referenced</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.type">type</a></code> | <code><a href="#wdk-lib.Type">Type</a></code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `idAsReference`<sup>Required</sup> <a name="idAsReference" id="wdk-lib.ILinkable.property.idAsReference"></a>

```typescript
public readonly idAsReference: string;
```

- *Type:* string

---

##### `linked`<sup>Required</sup> <a name="linked" id="wdk-lib.ILinkable.property.linked"></a>

```typescript
public readonly linked: boolean;
```

- *Type:* boolean

---

##### `links`<sup>Required</sup> <a name="links" id="wdk-lib.ILinkable.property.links"></a>

```typescript
public readonly links: ILinkable[];
```

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>[]

---

##### `multiLinked`<sup>Required</sup> <a name="multiLinked" id="wdk-lib.ILinkable.property.multiLinked"></a>

```typescript
public readonly multiLinked: boolean;
```

- *Type:* boolean

---

##### `referenced`<sup>Required</sup> <a name="referenced" id="wdk-lib.ILinkable.property.referenced"></a>

```typescript
public readonly referenced: boolean;
```

- *Type:* boolean

---

##### `type`<sup>Required</sup> <a name="type" id="wdk-lib.ILinkable.property.type"></a>

```typescript
public readonly type: Type;
```

- *Type:* <a href="#wdk-lib.Type">Type</a>

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.ILinkable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

### IMappable <a name="IMappable" id="wdk-lib.IMappable"></a>

- *Implemented By:* <a href="#wdk-lib.BashTool">BashTool</a>, <a href="#wdk-lib.CheckFileNameTool">CheckFileNameTool</a>, <a href="#wdk-lib.ExpressionTool">ExpressionTool</a>, <a href="#wdk-lib.InputReference">InputReference</a>, <a href="#wdk-lib.Output">Output</a>, <a href="#wdk-lib.RenameExpressionTool">RenameExpressionTool</a>, <a href="#wdk-lib.Tool">Tool</a>, <a href="#wdk-lib.Workflow">Workflow</a>, <a href="#wdk-lib.WorkflowValues">WorkflowValues</a>, <a href="#wdk-lib.IMappable">IMappable</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.IMappable.toMap">toMap</a></code> | Convert the object to a map representation following the CWL specification. |

---

##### `toMap` <a name="toMap" id="wdk-lib.IMappable.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Convert the object to a map representation following the CWL specification.


### IRenameExpressionToolProps <a name="IRenameExpressionToolProps" id="wdk-lib.IRenameExpressionToolProps"></a>

- *Extends:* <a href="#wdk-lib.IToolProps">IToolProps</a>

- *Implemented By:* <a href="#wdk-lib.IRenameExpressionToolProps">IRenameExpressionToolProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.IRenameExpressionToolProps.property.metadata">metadata</a></code> | <code><a href="#wdk-lib.IToolMetadata">IToolMetadata</a></code> | *No description.* |
| <code><a href="#wdk-lib.IRenameExpressionToolProps.property.inFilePropId">inFilePropId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.IRenameExpressionToolProps.property.newNamePropId">newNamePropId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.IRenameExpressionToolProps.property.outFilePropId">outFilePropId</a></code> | <code>string</code> | *No description.* |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="wdk-lib.IRenameExpressionToolProps.property.metadata"></a>

```typescript
public readonly metadata: IToolMetadata;
```

- *Type:* <a href="#wdk-lib.IToolMetadata">IToolMetadata</a>

---

##### `inFilePropId`<sup>Optional</sup> <a name="inFilePropId" id="wdk-lib.IRenameExpressionToolProps.property.inFilePropId"></a>

```typescript
public readonly inFilePropId: string;
```

- *Type:* string

---

##### `newNamePropId`<sup>Optional</sup> <a name="newNamePropId" id="wdk-lib.IRenameExpressionToolProps.property.newNamePropId"></a>

```typescript
public readonly newNamePropId: string;
```

- *Type:* string

---

##### `outFilePropId`<sup>Optional</sup> <a name="outFilePropId" id="wdk-lib.IRenameExpressionToolProps.property.outFilePropId"></a>

```typescript
public readonly outFilePropId: string;
```

- *Type:* string

---

### IStep <a name="IStep" id="wdk-lib.IStep"></a>

- *Implemented By:* <a href="#wdk-lib.BashTool">BashTool</a>, <a href="#wdk-lib.CheckFileNameTool">CheckFileNameTool</a>, <a href="#wdk-lib.ExpressionTool">ExpressionTool</a>, <a href="#wdk-lib.RenameExpressionTool">RenameExpressionTool</a>, <a href="#wdk-lib.Tool">Tool</a>, <a href="#wdk-lib.Workflow">Workflow</a>, <a href="#wdk-lib.IStep">IStep</a>

Represents a step in a workflow.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.IStep.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.IStep.serialize">serialize</a></code> | Serialize the step to a directory. |

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.IStep.hasSteps"></a>

```typescript
public hasSteps(): boolean
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.IStep.serialize"></a>

```typescript
public serialize(dirPath: string): SynthFiles
```

Serialize the step to a directory.

If the step has substeps, they will be serialized recursively.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.IStep.serialize.parameter.dirPath"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.IStep.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.IStep.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.IStep.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.IStep.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.IStep.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.IStep.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.IStep.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.IStep.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.IStep.property.id">id</a></code> | <code>string</code> | Unique identifier for the step in the workflow. |
| <code><a href="#wdk-lib.IStep.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.IStep.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.IStep.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.IStep.property.linkedInputs"></a>

```typescript
public readonly linkedInputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.IStep.property.linkedOutputs"></a>

```typescript
public readonly linkedOutputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.IStep.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

All outputs of the step.

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.IStep.property.steps"></a>

```typescript
public readonly steps: IStep[];
```

- *Type:* <a href="#wdk-lib.IStep">IStep</a>[]

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.IStep.property.conditional"></a>

```typescript
public readonly conditional: Conditional;
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.IStep.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.IStep.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the step in the workflow.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.IStep.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

### IToolMetadata <a name="IToolMetadata" id="wdk-lib.IToolMetadata"></a>

- *Implemented By:* <a href="#wdk-lib.IToolMetadata">IToolMetadata</a>

Metadata that needs to be passed as a parameter from the instantiating workflow in some cases.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.IToolMetadata.property.fileName">fileName</a></code> | <code>string</code> | The file name used when exporting a tool and referencing in a workflow. |
| <code><a href="#wdk-lib.IToolMetadata.property.label">label</a></code> | <code>string</code> | Allow to customize the label in a tool. |

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="wdk-lib.IToolMetadata.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The file name used when exporting a tool and referencing in a workflow.

Default is the id + '.cwl'.

---

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.IToolMetadata.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Allow to customize the label in a tool.

---

### IToolProps <a name="IToolProps" id="wdk-lib.IToolProps"></a>

- *Implemented By:* <a href="#wdk-lib.IBashToolProps">IBashToolProps</a>, <a href="#wdk-lib.IRenameExpressionToolProps">IRenameExpressionToolProps</a>, <a href="#wdk-lib.IToolProps">IToolProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.IToolProps.property.metadata">metadata</a></code> | <code><a href="#wdk-lib.IToolMetadata">IToolMetadata</a></code> | *No description.* |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="wdk-lib.IToolProps.property.metadata"></a>

```typescript
public readonly metadata: IToolMetadata;
```

- *Type:* <a href="#wdk-lib.IToolMetadata">IToolMetadata</a>

---

### IWorkflowProps <a name="IWorkflowProps" id="wdk-lib.IWorkflowProps"></a>

- *Implemented By:* <a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.IWorkflowProps.property.cwlVersion">cwlVersion</a></code> | <code>string</code> | *No description.* |

---

##### `cwlVersion`<sup>Optional</sup> <a name="cwlVersion" id="wdk-lib.IWorkflowProps.property.cwlVersion"></a>

```typescript
public readonly cwlVersion: string;
```

- *Type:* string

---

## Enums <a name="Enums" id="Enums"></a>

### PickValueMethod <a name="PickValueMethod" id="wdk-lib.PickValueMethod"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.PickValueMethod.FIRST_NON_NULL">FIRST_NON_NULL</a></code> | For the first level of a list input, pick the first non-null element. |
| <code><a href="#wdk-lib.PickValueMethod.THE_ONLY_NON_NULL">THE_ONLY_NON_NULL</a></code> | For the first level of a list input, pick the single non-null element. |
| <code><a href="#wdk-lib.PickValueMethod.ALL_NON_NULL">ALL_NON_NULL</a></code> | For the first level of a list input, pick all non-null values. |

---

##### `FIRST_NON_NULL` <a name="FIRST_NON_NULL" id="wdk-lib.PickValueMethod.FIRST_NON_NULL"></a>

For the first level of a list input, pick the first non-null element.

The result is a scalar. It is an error if there is no non-null element.
Examples:
 - [null, x, null, y] -> x
 - [null, [null], null, y] -> [null]
 - [null, null, null] -> Runtime Error

 Intended use case: If-else pattern where the value comes either from a conditional step or from a default or fallback value. The conditional step(s) should be placed first in the list.

---


##### `THE_ONLY_NON_NULL` <a name="THE_ONLY_NON_NULL" id="wdk-lib.PickValueMethod.THE_ONLY_NON_NULL"></a>

For the first level of a list input, pick the single non-null element.

The result is a scalar. It is an error if there is more than one non-null element.
Examples:
- [null, x, null] -> x
- [null, x, null, y] -> Runtime Error
- [null, [null], null] -> [null]
- [null, null, null] -> Runtime Error

Intended use case: Switch type patterns where developer considers more than one active code path as a workflow error (possibly indicating an error in writing when condition expressions).

---


##### `ALL_NON_NULL` <a name="ALL_NON_NULL" id="wdk-lib.PickValueMethod.ALL_NON_NULL"></a>

For the first level of a list input, pick all non-null values.

The result is a list, which may be empty.
Examples:
- [null, x, null] -> [x]
- [x, null, y] -> [x, y]
- [null, [x], [null]] -> [[x], [null]]
- [null, null, null] -> []

Intended use case: It is valid to have more than one source, but sources are conditional, so null sources (from skipped steps) should be filtered out.

---


### ScatterMethod <a name="ScatterMethod" id="wdk-lib.ScatterMethod"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.ScatterMethod.DOT_PRODUCT">DOT_PRODUCT</a></code> | *No description.* |
| <code><a href="#wdk-lib.ScatterMethod.NESTED_CROSS_PRODUCT">NESTED_CROSS_PRODUCT</a></code> | *No description.* |
| <code><a href="#wdk-lib.ScatterMethod.FLAT_CROSS_PRODUCT">FLAT_CROSS_PRODUCT</a></code> | *No description.* |

---

##### `DOT_PRODUCT` <a name="DOT_PRODUCT" id="wdk-lib.ScatterMethod.DOT_PRODUCT"></a>

---


##### `NESTED_CROSS_PRODUCT` <a name="NESTED_CROSS_PRODUCT" id="wdk-lib.ScatterMethod.NESTED_CROSS_PRODUCT"></a>

---


##### `FLAT_CROSS_PRODUCT` <a name="FLAT_CROSS_PRODUCT" id="wdk-lib.ScatterMethod.FLAT_CROSS_PRODUCT"></a>

---


### StepClass <a name="StepClass" id="wdk-lib.StepClass"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.StepClass.COMMAND_LINE_TOOL">COMMAND_LINE_TOOL</a></code> | *No description.* |
| <code><a href="#wdk-lib.StepClass.EXPRESSION_TOOL">EXPRESSION_TOOL</a></code> | *No description.* |
| <code><a href="#wdk-lib.StepClass.WORKFLOW">WORKFLOW</a></code> | *No description.* |

---

##### `COMMAND_LINE_TOOL` <a name="COMMAND_LINE_TOOL" id="wdk-lib.StepClass.COMMAND_LINE_TOOL"></a>

---


##### `EXPRESSION_TOOL` <a name="EXPRESSION_TOOL" id="wdk-lib.StepClass.EXPRESSION_TOOL"></a>

---


##### `WORKFLOW` <a name="WORKFLOW" id="wdk-lib.StepClass.WORKFLOW"></a>

---


### ToolRequirementType <a name="ToolRequirementType" id="wdk-lib.ToolRequirementType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.ToolRequirementType.INITIAL_WORK_DIR">INITIAL_WORK_DIR</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolRequirementType.INLINE_JAVASCRIPT">INLINE_JAVASCRIPT</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolRequirementType.SUBWORKFLOW_FEATURE">SUBWORKFLOW_FEATURE</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolRequirementType.NETWORK_ACCESS">NETWORK_ACCESS</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolRequirementType.DOCKER">DOCKER</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolRequirementType.ENV_VAR">ENV_VAR</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolRequirementType.STEP_INPUT_EXPRESSION">STEP_INPUT_EXPRESSION</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolRequirementType.RESOURCE_REQUIREMENT">RESOURCE_REQUIREMENT</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolRequirementType.SCATTER_FEATURE">SCATTER_FEATURE</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolRequirementType.MULTIPLE_INPUT_FEATURE">MULTIPLE_INPUT_FEATURE</a></code> | *No description.* |

---

##### `INITIAL_WORK_DIR` <a name="INITIAL_WORK_DIR" id="wdk-lib.ToolRequirementType.INITIAL_WORK_DIR"></a>

---


##### `INLINE_JAVASCRIPT` <a name="INLINE_JAVASCRIPT" id="wdk-lib.ToolRequirementType.INLINE_JAVASCRIPT"></a>

---


##### `SUBWORKFLOW_FEATURE` <a name="SUBWORKFLOW_FEATURE" id="wdk-lib.ToolRequirementType.SUBWORKFLOW_FEATURE"></a>

---


##### `NETWORK_ACCESS` <a name="NETWORK_ACCESS" id="wdk-lib.ToolRequirementType.NETWORK_ACCESS"></a>

---


##### `DOCKER` <a name="DOCKER" id="wdk-lib.ToolRequirementType.DOCKER"></a>

---


##### `ENV_VAR` <a name="ENV_VAR" id="wdk-lib.ToolRequirementType.ENV_VAR"></a>

---


##### `STEP_INPUT_EXPRESSION` <a name="STEP_INPUT_EXPRESSION" id="wdk-lib.ToolRequirementType.STEP_INPUT_EXPRESSION"></a>

---


##### `RESOURCE_REQUIREMENT` <a name="RESOURCE_REQUIREMENT" id="wdk-lib.ToolRequirementType.RESOURCE_REQUIREMENT"></a>

---


##### `SCATTER_FEATURE` <a name="SCATTER_FEATURE" id="wdk-lib.ToolRequirementType.SCATTER_FEATURE"></a>

---


##### `MULTIPLE_INPUT_FEATURE` <a name="MULTIPLE_INPUT_FEATURE" id="wdk-lib.ToolRequirementType.MULTIPLE_INPUT_FEATURE"></a>

---


### Type <a name="Type" id="wdk-lib.Type"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Type.FILE">FILE</a></code> | *No description.* |
| <code><a href="#wdk-lib.Type.DIRECTORY">DIRECTORY</a></code> | *No description.* |
| <code><a href="#wdk-lib.Type.STRING">STRING</a></code> | *No description.* |
| <code><a href="#wdk-lib.Type.BOOLEAN">BOOLEAN</a></code> | *No description.* |
| <code><a href="#wdk-lib.Type.INT">INT</a></code> | *No description.* |
| <code><a href="#wdk-lib.Type.DOUBLE">DOUBLE</a></code> | *No description.* |
| <code><a href="#wdk-lib.Type.STRING_ARRAY">STRING_ARRAY</a></code> | *No description.* |
| <code><a href="#wdk-lib.Type.FLOAT">FLOAT</a></code> | *No description.* |
| <code><a href="#wdk-lib.Type.STDERR">STDERR</a></code> | *No description.* |
| <code><a href="#wdk-lib.Type.STDOUT">STDOUT</a></code> | *No description.* |
| <code><a href="#wdk-lib.Type.FILE_ARRAY">FILE_ARRAY</a></code> | *No description.* |

---

##### `FILE` <a name="FILE" id="wdk-lib.Type.FILE"></a>

---


##### `DIRECTORY` <a name="DIRECTORY" id="wdk-lib.Type.DIRECTORY"></a>

---


##### `STRING` <a name="STRING" id="wdk-lib.Type.STRING"></a>

---


##### `BOOLEAN` <a name="BOOLEAN" id="wdk-lib.Type.BOOLEAN"></a>

---


##### `INT` <a name="INT" id="wdk-lib.Type.INT"></a>

---


##### `DOUBLE` <a name="DOUBLE" id="wdk-lib.Type.DOUBLE"></a>

---


##### `STRING_ARRAY` <a name="STRING_ARRAY" id="wdk-lib.Type.STRING_ARRAY"></a>

---


##### `FLOAT` <a name="FLOAT" id="wdk-lib.Type.FLOAT"></a>

---


##### `STDERR` <a name="STDERR" id="wdk-lib.Type.STDERR"></a>

---


##### `STDOUT` <a name="STDOUT" id="wdk-lib.Type.STDOUT"></a>

---


##### `FILE_ARRAY` <a name="FILE_ARRAY" id="wdk-lib.Type.FILE_ARRAY"></a>

---

