# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### InputBinding <a name="InputBinding" id="wdk-lib.InputBinding"></a>

#### Initializer <a name="Initializer" id="wdk-lib.InputBinding.Initializer"></a>

```typescript
import { InputBinding } from 'wdk-lib'

const inputBinding: InputBinding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.InputBinding.property.itemSeparator">itemSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.InputBinding.property.position">position</a></code> | <code>string \| number</code> | *No description.* |
| <code><a href="#wdk-lib.InputBinding.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.InputBinding.property.separate">separate</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.InputBinding.property.shellQuote">shellQuote</a></code> | <code>boolean</code> | *No description.* |

---

##### `itemSeparator`<sup>Optional</sup> <a name="itemSeparator" id="wdk-lib.InputBinding.property.itemSeparator"></a>

```typescript
public readonly itemSeparator: string;
```

- *Type:* string

---

##### `position`<sup>Optional</sup> <a name="position" id="wdk-lib.InputBinding.property.position"></a>

```typescript
public readonly position: string | number;
```

- *Type:* string | number

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="wdk-lib.InputBinding.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `separate`<sup>Optional</sup> <a name="separate" id="wdk-lib.InputBinding.property.separate"></a>

```typescript
public readonly separate: boolean;
```

- *Type:* boolean

---

##### `shellQuote`<sup>Optional</sup> <a name="shellQuote" id="wdk-lib.InputBinding.property.shellQuote"></a>

```typescript
public readonly shellQuote: boolean;
```

- *Type:* boolean

---

### InputProps <a name="InputProps" id="wdk-lib.InputProps"></a>

#### Initializer <a name="Initializer" id="wdk-lib.InputProps.Initializer"></a>

```typescript
import { InputProps } from 'wdk-lib'

const inputProps: InputProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.InputProps.property.doc">doc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.InputProps.property.inputBinding">inputBinding</a></code> | <code><a href="#wdk-lib.InputBinding">InputBinding</a></code> | *No description.* |
| <code><a href="#wdk-lib.InputProps.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.InputProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `doc`<sup>Optional</sup> <a name="doc" id="wdk-lib.InputProps.property.doc"></a>

```typescript
public readonly doc: string;
```

- *Type:* string

---

##### `inputBinding`<sup>Optional</sup> <a name="inputBinding" id="wdk-lib.InputProps.property.inputBinding"></a>

```typescript
public readonly inputBinding: InputBinding;
```

- *Type:* <a href="#wdk-lib.InputBinding">InputBinding</a>

---

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.InputProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="wdk-lib.InputProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

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

### ServiceProps <a name="ServiceProps" id="wdk-lib.ServiceProps"></a>

Interface defining the properties of a Service, including attributes such as label, ID, and resources.

#### Initializer <a name="Initializer" id="wdk-lib.ServiceProps.Initializer"></a>

```typescript
import { ServiceProps } from 'wdk-lib'

const serviceProps: ServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ServiceProps.property.label">label</a></code> | <code>string</code> | A descriptive label for the service. |
| <code><a href="#wdk-lib.ServiceProps.property.serviceId">serviceId</a></code> | <code>string</code> | Unique identifier for the service. |
| <code><a href="#wdk-lib.ServiceProps.property.serviceVersion">serviceVersion</a></code> | <code>string</code> | Version number of the service. |
| <code><a href="#wdk-lib.ServiceProps.property.assignedCores">assignedCores</a></code> | <code>number</code> | Optional: Number of CPU cores assigned to the service. |
| <code><a href="#wdk-lib.ServiceProps.property.assignedMemoryMb">assignedMemoryMb</a></code> | <code>number</code> | Optional: Amount of memory in MB assigned to the service. |
| <code><a href="#wdk-lib.ServiceProps.property.assignedTempDirMb">assignedTempDirMb</a></code> | <code>number</code> | Optional: Size of the temporary directory in MB. |
| <code><a href="#wdk-lib.ServiceProps.property.containerRepository">containerRepository</a></code> | <code>string</code> | Optional: Repository where the container image is stored. |
| <code><a href="#wdk-lib.ServiceProps.property.mountPoint">mountPoint</a></code> | <code>string</code> | Optional: Mount point for the database. |
| <code><a href="#wdk-lib.ServiceProps.property.parameterValuesAsStrings">parameterValuesAsStrings</a></code> | <code>boolean</code> | Optional: Whether to create all parameter values as strings. |
| <code><a href="#wdk-lib.ServiceProps.property.serviceDatabasePath">serviceDatabasePath</a></code> | <code>string</code> | Optional: Path to the service's database. |

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.ServiceProps.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

A descriptive label for the service.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="wdk-lib.ServiceProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

Unique identifier for the service.

---

##### `serviceVersion`<sup>Required</sup> <a name="serviceVersion" id="wdk-lib.ServiceProps.property.serviceVersion"></a>

```typescript
public readonly serviceVersion: string;
```

- *Type:* string

Version number of the service.

---

##### `assignedCores`<sup>Optional</sup> <a name="assignedCores" id="wdk-lib.ServiceProps.property.assignedCores"></a>

```typescript
public readonly assignedCores: number;
```

- *Type:* number

Optional: Number of CPU cores assigned to the service.

Defaults to 1 if not specified.

---

##### `assignedMemoryMb`<sup>Optional</sup> <a name="assignedMemoryMb" id="wdk-lib.ServiceProps.property.assignedMemoryMb"></a>

```typescript
public readonly assignedMemoryMb: number;
```

- *Type:* number

Optional: Amount of memory in MB assigned to the service.

Defaults to 2048 MB if not specified.

---

##### `assignedTempDirMb`<sup>Optional</sup> <a name="assignedTempDirMb" id="wdk-lib.ServiceProps.property.assignedTempDirMb"></a>

```typescript
public readonly assignedTempDirMb: number;
```

- *Type:* number

Optional: Size of the temporary directory in MB.

Defaults to 2048 MB if not specified.

---

##### `containerRepository`<sup>Optional</sup> <a name="containerRepository" id="wdk-lib.ServiceProps.property.containerRepository"></a>

```typescript
public readonly containerRepository: string;
```

- *Type:* string

Optional: Repository where the container image is stored.

This is only the base repository, not the full image path.

---

##### `mountPoint`<sup>Optional</sup> <a name="mountPoint" id="wdk-lib.ServiceProps.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Optional: Mount point for the database.

---

##### `parameterValuesAsStrings`<sup>Optional</sup> <a name="parameterValuesAsStrings" id="wdk-lib.ServiceProps.property.parameterValuesAsStrings"></a>

```typescript
public readonly parameterValuesAsStrings: boolean;
```

- *Type:* boolean

Optional: Whether to create all parameter values as strings.

Look at how they are used currently.

---

##### `serviceDatabasePath`<sup>Optional</sup> <a name="serviceDatabasePath" id="wdk-lib.ServiceProps.property.serviceDatabasePath"></a>

```typescript
public readonly serviceDatabasePath: string;
```

- *Type:* string

Optional: Path to the service's database.

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
| <code><a href="#wdk-lib.App.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.App.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.App.synth">synth</a></code> | *No description.* |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.App.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.App.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.App.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.App.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.App.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.App.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

---

##### `synth` <a name="synth" id="wdk-lib.App.synth"></a>

```typescript
public synth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.App.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.App.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.App.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.App.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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
| <code><a href="#wdk-lib.BashTool.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.BashTool.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.BashTool.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.BashTool.serialize">serialize</a></code> | Serialize the tool to a CWL file. |
| <code><a href="#wdk-lib.BashTool.toMap">toMap</a></code> | Create a map repsentation of the tool following the CWL specification. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.BashTool.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.BashTool.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.BashTool.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.BashTool.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.BashTool.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.BashTool.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

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
| <code><a href="#wdk-lib.BashTool.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.BashTool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.BashTool.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.BashTool.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.BashTool.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.BashTool.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.BashTool.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.BashTool.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.BashTool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.BashTool.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.BashTool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.BashTool.property.stepInputsValueFrom">stepInputsValueFrom</a></code> | <code><a href="#wdk-lib.StepInputsValue">StepInputsValue</a></code> | Get the stepValueFrom object if the step is a stepValueFrom step. |
| <code><a href="#wdk-lib.BashTool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.BashTool.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.BashTool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.BashTool.property.requirements">requirements</a></code> | <code><a href="#wdk-lib.Requirement">Requirement</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.BashTool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.BashTool.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.BashTool.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

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

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.BashTool.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.BashTool.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `stepInputsValueFrom`<sup>Optional</sup> <a name="stepInputsValueFrom" id="wdk-lib.BashTool.property.stepInputsValueFrom"></a>

```typescript
public readonly stepInputsValueFrom: StepInputsValue;
```

- *Type:* <a href="#wdk-lib.StepInputsValue">StepInputsValue</a>

Get the stepValueFrom object if the step is a stepValueFrom step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.BashTool.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.BashTool.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.BashTool.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.BashTool.property.requirements"></a>

```typescript
public readonly requirements: Requirement[];
```

- *Type:* <a href="#wdk-lib.Requirement">Requirement</a>[]

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.BashTool.property.props"></a>

```typescript
public readonly props: IToolProps;
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

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
| <code><a href="#wdk-lib.CheckFileNameTool.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.CheckFileNameTool.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.CheckFileNameTool.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.CheckFileNameTool.serialize">serialize</a></code> | Serialize the tool to a CWL file. |
| <code><a href="#wdk-lib.CheckFileNameTool.toMap">toMap</a></code> | Create a map repsentation of the tool following the CWL specification. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.CheckFileNameTool.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.CheckFileNameTool.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.CheckFileNameTool.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.CheckFileNameTool.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.CheckFileNameTool.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.CheckFileNameTool.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

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
| <code><a href="#wdk-lib.CheckFileNameTool.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.stepInputsValueFrom">stepInputsValueFrom</a></code> | <code><a href="#wdk-lib.StepInputsValue">StepInputsValue</a></code> | Get the stepValueFrom object if the step is a stepValueFrom step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.requirements">requirements</a></code> | <code><a href="#wdk-lib.Requirement">Requirement</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.checkname">checkname</a></code> | <code><a href="#wdk-lib.Input">Input</a></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.f1">f1</a></code> | <code><a href="#wdk-lib.Input">Input</a></code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.CheckFileNameTool.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.CheckFileNameTool.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

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

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.CheckFileNameTool.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.CheckFileNameTool.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `stepInputsValueFrom`<sup>Optional</sup> <a name="stepInputsValueFrom" id="wdk-lib.CheckFileNameTool.property.stepInputsValueFrom"></a>

```typescript
public readonly stepInputsValueFrom: StepInputsValue;
```

- *Type:* <a href="#wdk-lib.StepInputsValue">StepInputsValue</a>

Get the stepValueFrom object if the step is a stepValueFrom step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.CheckFileNameTool.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.CheckFileNameTool.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.CheckFileNameTool.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.CheckFileNameTool.property.requirements"></a>

```typescript
public readonly requirements: Requirement[];
```

- *Type:* <a href="#wdk-lib.Requirement">Requirement</a>[]

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.CheckFileNameTool.property.props"></a>

```typescript
public readonly props: IToolProps;
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

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


### CloudService <a name="CloudService" id="wdk-lib.CloudService"></a>

Class representing a Cloud Service, which is a type of Workflow with two steps, one that creates the parameters and one the service.

Everything should already be linked correctly internally between the two.
<br>
Note: Add the inputs to the parameters and outputs to the service. Inputs must have a prefix. e.g.:
<pre><code>
Input.file(this.parameters, 'fastaFile').withPrefix('--fastaFile');
Output.file(this.service, 'trimmedFasta').withGlob('*.trimmed.fasta');
</code></pre>

#### Initializers <a name="Initializers" id="wdk-lib.CloudService.Initializer"></a>

```typescript
import { CloudService } from 'wdk-lib'

new CloudService(scope: Workflow, id: string, props: ServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.Workflow">Workflow</a></code> | - The workflow this service belongs to. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.id">id</a></code> | <code>string</code> | - A unique identifier for the service within its workflow. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.ServiceProps">ServiceProps</a></code> | - Configuration properties for the service. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.CloudService.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

The workflow this service belongs to.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.CloudService.Initializer.parameter.id"></a>

- *Type:* string

A unique identifier for the service within its workflow.

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.CloudService.Initializer.parameter.props"></a>

- *Type:* <a href="#wdk-lib.ServiceProps">ServiceProps</a>

Configuration properties for the service.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.CloudService.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.CloudService.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.CloudService.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.CloudService.serialize">serialize</a></code> | Serialize the step to a directory. |
| <code><a href="#wdk-lib.CloudService.addStep">addStep</a></code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.toMap">toMap</a></code> | Convert the object to a map representation following the CWL specification. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.CloudService.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.CloudService.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.CloudService.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.CloudService.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.CloudService.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.CloudService.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.CloudService.hasSteps"></a>

```typescript
public hasSteps(): boolean
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.CloudService.serialize"></a>

```typescript
public serialize(dirPath: string): SynthFiles
```

Serialize the step to a directory.

If the step has substeps, they will be serialized recursively.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.CloudService.serialize.parameter.dirPath"></a>

- *Type:* string

---

##### `addStep` <a name="addStep" id="wdk-lib.CloudService.addStep"></a>

```typescript
public addStep(step: IStep): void
```

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.CloudService.addStep.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

---

##### `toMap` <a name="toMap" id="wdk-lib.CloudService.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Convert the object to a map representation following the CWL specification.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.CloudService.basicProps">basicProps</a></code> | *No description.* |

---

##### `basicProps` <a name="basicProps" id="wdk-lib.CloudService.basicProps"></a>

```typescript
import { CloudService } from 'wdk-lib'

CloudService.basicProps()
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.CloudService.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.CloudService.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.CloudService.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.CloudService.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.CloudService.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.CloudService.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.CloudService.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.CloudService.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.CloudService.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.CloudService.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.CloudService.property.stepInputsValueFrom">stepInputsValueFrom</a></code> | <code><a href="#wdk-lib.StepInputsValue">StepInputsValue</a></code> | Get the stepValueFrom object if the step is a stepValueFrom step. |
| <code><a href="#wdk-lib.CloudService.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.CloudService.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.property.props">props</a></code> | <code><a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.property.requirements">requirements</a></code> | <code><a href="#wdk-lib.Requirement">Requirement</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.property.parameters">parameters</a></code> | <code><a href="#wdk-lib.ExpressionTool">ExpressionTool</a></code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.property.service">service</a></code> | <code><a href="#wdk-lib.Tool">Tool</a></code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.CloudService.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.CloudService.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.CloudService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.CloudService.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.CloudService.property.linkedInputs"></a>

```typescript
public readonly linkedInputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.CloudService.property.linkedOutputs"></a>

```typescript
public readonly linkedOutputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.CloudService.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

All outputs of the step.

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.CloudService.property.steps"></a>

```typescript
public readonly steps: IStep[];
```

- *Type:* <a href="#wdk-lib.IStep">IStep</a>[]

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.CloudService.property.conditional"></a>

```typescript
public readonly conditional: Conditional;
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.CloudService.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.CloudService.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `stepInputsValueFrom`<sup>Optional</sup> <a name="stepInputsValueFrom" id="wdk-lib.CloudService.property.stepInputsValueFrom"></a>

```typescript
public readonly stepInputsValueFrom: StepInputsValue;
```

- *Type:* <a href="#wdk-lib.StepInputsValue">StepInputsValue</a>

Get the stepValueFrom object if the step is a stepValueFrom step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.CloudService.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.CloudService.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.CloudService.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.CloudService.property.props"></a>

```typescript
public readonly props: IWorkflowProps;
```

- *Type:* <a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a>

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.CloudService.property.requirements"></a>

```typescript
public readonly requirements: Requirement[];
```

- *Type:* <a href="#wdk-lib.Requirement">Requirement</a>[]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="wdk-lib.CloudService.property.parameters"></a>

```typescript
public readonly parameters: ExpressionTool;
```

- *Type:* <a href="#wdk-lib.ExpressionTool">ExpressionTool</a>

---

##### `service`<sup>Required</sup> <a name="service" id="wdk-lib.CloudService.property.service"></a>

```typescript
public readonly service: Tool;
```

- *Type:* <a href="#wdk-lib.Tool">Tool</a>

---


### Conditional <a name="Conditional" id="wdk-lib.Conditional"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Conditional.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.Conditional.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.Conditional.whenBooleanInputIs">whenBooleanInputIs</a></code> | Skip this step if the boolean input associated to this condition does not match the specified value. |
| <code><a href="#wdk-lib.Conditional.whenInputNotNull">whenInputNotNull</a></code> | Skip this step if the specified input is null. |
| <code><a href="#wdk-lib.Conditional.whenInputsNotNull">whenInputsNotNull</a></code> | Skip this step if all specified inputs are not null. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.Conditional.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Conditional.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Conditional.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.Conditional.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Conditional.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.Conditional.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

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

e.g. `step.inputFile`

---

##### `whenInputsNotNull` <a name="whenInputsNotNull" id="wdk-lib.Conditional.whenInputsNotNull"></a>

```typescript
public whenInputsNotNull(inputs: Input[]): void
```

Skip this step if all specified inputs are not null.

###### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Conditional.whenInputsNotNull.parameter.inputs"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

A list of step input parameters.

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
| <code><a href="#wdk-lib.Conditional.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.Conditional.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Conditional.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Conditional.property.expression">expression</a></code> | <code>string</code> | Set a conditional expression for this step. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.Conditional.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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

##### `expression`<sup>Optional</sup> <a name="expression" id="wdk-lib.Conditional.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Set a conditional expression for this step.

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

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Construct.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.Construct.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.Construct.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Construct.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Construct.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.Construct.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Construct.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.Construct.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Construct.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.Construct.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Construct.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.Construct.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Constructs.createRoot">createRoot</a></code> | Create a construct that does not need to extend another construct. |
| <code><a href="#wdk-lib.Constructs.rootWorkflow">rootWorkflow</a></code> | Utility to create a root Workflow and use in tests. |
| <code><a href="#wdk-lib.Constructs.rootWorkflowWithName">rootWorkflowWithName</a></code> | Utility to create a root Workflow with name to use in tests. |

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

##### `rootWorkflowWithName` <a name="rootWorkflowWithName" id="wdk-lib.Constructs.rootWorkflowWithName"></a>

```typescript
import { Constructs } from 'wdk-lib'

Constructs.rootWorkflowWithName(name: string)
```

Utility to create a root Workflow with name to use in tests.

###### `name`<sup>Required</sup> <a name="name" id="wdk-lib.Constructs.rootWorkflowWithName.parameter.name"></a>

- *Type:* string

---



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
| <code><a href="#wdk-lib.ExpressionTool.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.ExpressionTool.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.ExpressionTool.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.ExpressionTool.serialize">serialize</a></code> | Serialize the step to a directory. |
| <code><a href="#wdk-lib.ExpressionTool.toMap">toMap</a></code> | Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool. |
| <code><a href="#wdk-lib.ExpressionTool.withExpression">withExpression</a></code> | Specify a custom JavaScript expression for this ExpressionTool. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.ExpressionTool.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.ExpressionTool.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.ExpressionTool.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.ExpressionTool.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.ExpressionTool.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.ExpressionTool.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

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

Serialize the step to a directory.

If the step has substeps, they will be serialized recursively.

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
| <code><a href="#wdk-lib.ExpressionTool.makeParametersJsonExpressionAllStrings">makeParametersJsonExpressionAllStrings</a></code> | Create a CWL expression script that generates a JSON file with the parameters of the tool. |

---

##### `makeParametersJsonExpression` <a name="makeParametersJsonExpression" id="wdk-lib.ExpressionTool.makeParametersJsonExpression"></a>

```typescript
import { ExpressionTool } from 'wdk-lib'

ExpressionTool.makeParametersJsonExpression()
```

Create a CWL expression script that generates a JSON file with the parameters of the tool.

Example: call with makeParametersJsonExpression()

##### `makeParametersJsonExpressionAllStrings` <a name="makeParametersJsonExpressionAllStrings" id="wdk-lib.ExpressionTool.makeParametersJsonExpressionAllStrings"></a>

```typescript
import { ExpressionTool } from 'wdk-lib'

ExpressionTool.makeParametersJsonExpressionAllStrings()
```

Create a CWL expression script that generates a JSON file with the parameters of the tool.

All parameters are converted to strings.
Example: call with makeParametersJsonExpressionAllStrings()

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ExpressionTool.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.ExpressionTool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.ExpressionTool.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.ExpressionTool.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.ExpressionTool.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.ExpressionTool.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.ExpressionTool.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.ExpressionTool.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.ExpressionTool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.ExpressionTool.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.ExpressionTool.property.stepInputsValueFrom">stepInputsValueFrom</a></code> | <code><a href="#wdk-lib.StepInputsValue">StepInputsValue</a></code> | Get the stepValueFrom object if the step is a stepValueFrom step. |
| <code><a href="#wdk-lib.ExpressionTool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.ExpressionTool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.expression">expression</a></code> | <code>string</code> | Get the custom JavaScript expression for this ExpressionTool. |
| <code><a href="#wdk-lib.ExpressionTool.property.requirements">requirements</a></code> | <code><a href="#wdk-lib.Requirement">Requirement</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.ExpressionTool.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.ExpressionTool.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

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

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.ExpressionTool.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.ExpressionTool.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `stepInputsValueFrom`<sup>Optional</sup> <a name="stepInputsValueFrom" id="wdk-lib.ExpressionTool.property.stepInputsValueFrom"></a>

```typescript
public readonly stepInputsValueFrom: StepInputsValue;
```

- *Type:* <a href="#wdk-lib.StepInputsValue">StepInputsValue</a>

Get the stepValueFrom object if the step is a stepValueFrom step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.ExpressionTool.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.ExpressionTool.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.ExpressionTool.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `expression`<sup>Required</sup> <a name="expression" id="wdk-lib.ExpressionTool.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Get the custom JavaScript expression for this ExpressionTool.

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.ExpressionTool.property.requirements"></a>

```typescript
public readonly requirements: Requirement[];
```

- *Type:* <a href="#wdk-lib.Requirement">Requirement</a>[]

---

##### `props`<sup>Optional</sup> <a name="props" id="wdk-lib.ExpressionTool.property.props"></a>

```typescript
public readonly props: IToolProps;
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---


### FileUtils <a name="FileUtils" id="wdk-lib.FileUtils"></a>


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
const root = Constructs.createRoot('root');
const input = Input.string(root, 'myInput')
                   .withDefaultValue('default')
                   .withDoc('This is my input');
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Input.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.Input.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.Input.linkTo">linkTo</a></code> | Links the input to another input or output. |
| <code><a href="#wdk-lib.Input.pickValue">pickValue</a></code> | Set the PickValueMethod for this linkable if there are multiple sources linked to it. |
| <code><a href="#wdk-lib.Input.allowNullElements">allowNullElements</a></code> | Sets the type of the input elements of an array to be nullable. |
| <code><a href="#wdk-lib.Input.as">as</a></code> | Changes the ID of the input and returns the modified input instance. |
| <code><a href="#wdk-lib.Input.containsFileOrDirectory">containsFileOrDirectory</a></code> | Check if this input can link to at least a File or Directory. |
| <code><a href="#wdk-lib.Input.inScope">inScope</a></code> | Get the linked input corresponding to the target scope. |
| <code><a href="#wdk-lib.Input.isArray">isArray</a></code> | Checks if the input is an array type. |
| <code><a href="#wdk-lib.Input.makeOptional">makeOptional</a></code> | Sets the optionality of the input. |
| <code><a href="#wdk-lib.Input.makeSeparate">makeSeparate</a></code> | Sets whether the input items should be separated. |
| <code><a href="#wdk-lib.Input.toMap">toMap</a></code> | Converts the input to a CWL-compatible JSON object. |
| <code><a href="#wdk-lib.Input.toString">toString</a></code> | Returns a string representation of an object. |
| <code><a href="#wdk-lib.Input.withDefaultValue">withDefaultValue</a></code> | Assigns a default value to the input. |
| <code><a href="#wdk-lib.Input.withDoc">withDoc</a></code> | Adds documentation to the input. |
| <code><a href="#wdk-lib.Input.withItemSeparator">withItemSeparator</a></code> | Sets an item separator for array inputs. |
| <code><a href="#wdk-lib.Input.withLabel">withLabel</a></code> | Sets a label for the input. |
| <code><a href="#wdk-lib.Input.withPosition">withPosition</a></code> | Specifies a position for the input. |
| <code><a href="#wdk-lib.Input.withPrefix">withPrefix</a></code> | Sets a prefix for the input. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.Input.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Input.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Input.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.Input.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Input.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.Input.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

---

##### `linkTo` <a name="linkTo" id="wdk-lib.Input.linkTo"></a>

```typescript
public linkTo(linkable: ILinkable): ILinkable
```

Links the input to another input or output.

###### `linkable`<sup>Required</sup> <a name="linkable" id="wdk-lib.Input.linkTo.parameter.linkable"></a>

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>

The input or output to link to.

---

##### `pickValue` <a name="pickValue" id="wdk-lib.Input.pickValue"></a>

```typescript
public pickValue(method: PickValueMethod): ILinkable
```

Set the PickValueMethod for this linkable if there are multiple sources linked to it.

###### `method`<sup>Required</sup> <a name="method" id="wdk-lib.Input.pickValue.parameter.method"></a>

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---

##### `allowNullElements` <a name="allowNullElements" id="wdk-lib.Input.allowNullElements"></a>

```typescript
public allowNullElements(): Input
```

Sets the type of the input elements of an array to be nullable.

##### `as` <a name="as" id="wdk-lib.Input.as"></a>

```typescript
public as(newId: string): Input
```

Changes the ID of the input and returns the modified input instance.

###### `newId`<sup>Required</sup> <a name="newId" id="wdk-lib.Input.as.parameter.newId"></a>

- *Type:* string

The new identifier for this input.

---

##### `containsFileOrDirectory` <a name="containsFileOrDirectory" id="wdk-lib.Input.containsFileOrDirectory"></a>

```typescript
public containsFileOrDirectory(): boolean
```

Check if this input can link to at least a File or Directory.

##### `inScope` <a name="inScope" id="wdk-lib.Input.inScope"></a>

```typescript
public inScope(targetScope: StepConstruct): Input
```

Get the linked input corresponding to the target scope.

If the target scope is the same as the current scope, return the current instance.
Note: The scope must be in one of the upper hierarchies of the current scope.

###### `targetScope`<sup>Required</sup> <a name="targetScope" id="wdk-lib.Input.inScope.parameter.targetScope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The target scope to find the linked input.

---

##### `isArray` <a name="isArray" id="wdk-lib.Input.isArray"></a>

```typescript
public isArray(): boolean
```

Checks if the input is an array type.

##### `makeOptional` <a name="makeOptional" id="wdk-lib.Input.makeOptional"></a>

```typescript
public makeOptional(optional: boolean): Input
```

Sets the optionality of the input.

###### `optional`<sup>Required</sup> <a name="optional" id="wdk-lib.Input.makeOptional.parameter.optional"></a>

- *Type:* boolean

A flag indicating if the input should be optional.

---

##### `makeSeparate` <a name="makeSeparate" id="wdk-lib.Input.makeSeparate"></a>

```typescript
public makeSeparate(separate: boolean): Input
```

Sets whether the input items should be separated.

###### `separate`<sup>Required</sup> <a name="separate" id="wdk-lib.Input.makeSeparate.parameter.separate"></a>

- *Type:* boolean

A flag indicating separation status.

---

##### `toMap` <a name="toMap" id="wdk-lib.Input.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Converts the input to a CWL-compatible JSON object.

##### `toString` <a name="toString" id="wdk-lib.Input.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of an object.

##### `withDefaultValue` <a name="withDefaultValue" id="wdk-lib.Input.withDefaultValue"></a>

```typescript
public withDefaultValue(defaultValue: any): Input
```

Assigns a default value to the input.

###### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="wdk-lib.Input.withDefaultValue.parameter.defaultValue"></a>

- *Type:* any

The default value to assign.

---

##### `withDoc` <a name="withDoc" id="wdk-lib.Input.withDoc"></a>

```typescript
public withDoc(doc: string): Input
```

Adds documentation to the input.

###### `doc`<sup>Required</sup> <a name="doc" id="wdk-lib.Input.withDoc.parameter.doc"></a>

- *Type:* string

The documentation string to add.

---

##### `withItemSeparator` <a name="withItemSeparator" id="wdk-lib.Input.withItemSeparator"></a>

```typescript
public withItemSeparator(separator: string): Input
```

Sets an item separator for array inputs.

###### `separator`<sup>Required</sup> <a name="separator" id="wdk-lib.Input.withItemSeparator.parameter.separator"></a>

- *Type:* string

The separator string to set.

---

##### `withLabel` <a name="withLabel" id="wdk-lib.Input.withLabel"></a>

```typescript
public withLabel(label: string): Input
```

Sets a label for the input.

###### `label`<sup>Required</sup> <a name="label" id="wdk-lib.Input.withLabel.parameter.label"></a>

- *Type:* string

The label to set.

---

##### `withPosition` <a name="withPosition" id="wdk-lib.Input.withPosition"></a>

```typescript
public withPosition(position: number): Input
```

Specifies a position for the input.

###### `position`<sup>Required</sup> <a name="position" id="wdk-lib.Input.withPosition.parameter.position"></a>

- *Type:* number

The position index to set.

---

##### `withPrefix` <a name="withPrefix" id="wdk-lib.Input.withPrefix"></a>

```typescript
public withPrefix(prefix: string): Input
```

Sets a prefix for the input.

###### `prefix`<sup>Required</sup> <a name="prefix" id="wdk-lib.Input.withPrefix.parameter.prefix"></a>

- *Type:* string

The prefix to set.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Input.array">array</a></code> | Creates an array input of a type passed by parameter. |
| <code><a href="#wdk-lib.Input.bool">bool</a></code> | Creates a boolean type input. |
| <code><a href="#wdk-lib.Input.copyInContext">copyInContext</a></code> | Copy the same input in the context of another scope. |
| <code><a href="#wdk-lib.Input.custom">custom</a></code> | Creates a custom type input. |
| <code><a href="#wdk-lib.Input.directory">directory</a></code> | Creates a directory type input. |
| <code><a href="#wdk-lib.Input.double">double</a></code> | Creates a double type input. |
| <code><a href="#wdk-lib.Input.file">file</a></code> | Creates a file type input. |
| <code><a href="#wdk-lib.Input.fileArray">fileArray</a></code> | Creates a file array type input. |
| <code><a href="#wdk-lib.Input.float">float</a></code> | Creates a float type input. |
| <code><a href="#wdk-lib.Input.fromStepInput">fromStepInput</a></code> | Create an input from a step input, using the same ID and type. |
| <code><a href="#wdk-lib.Input.integer">integer</a></code> | Creates an integer type input. |
| <code><a href="#wdk-lib.Input.string">string</a></code> | Creates a string type input. |
| <code><a href="#wdk-lib.Input.stringArray">stringArray</a></code> | Creates a string array type input. |

---

##### `array` <a name="array" id="wdk-lib.Input.array"></a>

```typescript
import { Input } from 'wdk-lib'

Input.array(scope: StepConstruct, id: string, itemsType: TypeIn)
```

Creates an array input of a type passed by parameter.

<pre>
Input.array(root, 'myArray', TypeIn.string())
</pre>

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.array.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.array.parameter.id"></a>

- *Type:* string

The identifier for this input.

---

###### `itemsType`<sup>Required</sup> <a name="itemsType" id="wdk-lib.Input.array.parameter.itemsType"></a>

- *Type:* <a href="#wdk-lib.TypeIn">TypeIn</a>

The type of the array from the Type class.

It can be BOOLEAN, INT, DOUBLE, FLOAT, STRING, FILE, DIRECTORY.

---

##### `bool` <a name="bool" id="wdk-lib.Input.bool"></a>

```typescript
import { Input } from 'wdk-lib'

Input.bool(scope: StepConstruct, id: string)
```

Creates a boolean type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.bool.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.bool.parameter.id"></a>

- *Type:* string

The identifier for this input.

---

##### `copyInContext` <a name="copyInContext" id="wdk-lib.Input.copyInContext"></a>

```typescript
import { Input } from 'wdk-lib'

Input.copyInContext(scope: StepConstruct, input: Input)
```

Copy the same input in the context of another scope.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.copyInContext.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.Input.copyInContext.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

The existing input to copy.

---

##### `custom` <a name="custom" id="wdk-lib.Input.custom"></a>

```typescript
import { Input } from 'wdk-lib'

Input.custom(scope: StepConstruct, id: string, typeIn: TypeIn)
```

Creates a custom type input.

<pre>
// Example creating an array of file arrays
Input.custom(root, 'myCustom', TypeIn.arrayOf(TypeIn.arrayOfTypeIn.int())))
</pre>

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.custom.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.custom.parameter.id"></a>

- *Type:* string

The identifier for this input.

---

###### `typeIn`<sup>Required</sup> <a name="typeIn" id="wdk-lib.Input.custom.parameter.typeIn"></a>

- *Type:* <a href="#wdk-lib.TypeIn">TypeIn</a>

The type of the input.

Use the TypeIn class to create a custom input.

---

##### `directory` <a name="directory" id="wdk-lib.Input.directory"></a>

```typescript
import { Input } from 'wdk-lib'

Input.directory(scope: StepConstruct, id: string)
```

Creates a directory type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.directory.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.directory.parameter.id"></a>

- *Type:* string

The identifier for this input.

---

##### `double` <a name="double" id="wdk-lib.Input.double"></a>

```typescript
import { Input } from 'wdk-lib'

Input.double(scope: StepConstruct, id: string)
```

Creates a double type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.double.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.double.parameter.id"></a>

- *Type:* string

The identifier for this input.

---

##### `file` <a name="file" id="wdk-lib.Input.file"></a>

```typescript
import { Input } from 'wdk-lib'

Input.file(scope: StepConstruct, id: string)
```

Creates a file type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.file.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.file.parameter.id"></a>

- *Type:* string

The identifier for this input.

---

##### `fileArray` <a name="fileArray" id="wdk-lib.Input.fileArray"></a>

```typescript
import { Input } from 'wdk-lib'

Input.fileArray(scope: StepConstruct, id: string)
```

Creates a file array type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.fileArray.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.fileArray.parameter.id"></a>

- *Type:* string

The identifier for this input.

---

##### `float` <a name="float" id="wdk-lib.Input.float"></a>

```typescript
import { Input } from 'wdk-lib'

Input.float(scope: StepConstruct, id: string)
```

Creates a float type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.float.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.float.parameter.id"></a>

- *Type:* string

The identifier for this input.

---

##### `fromStepInput` <a name="fromStepInput" id="wdk-lib.Input.fromStepInput"></a>

```typescript
import { Input } from 'wdk-lib'

Input.fromStepInput(scope: StepConstruct, input: Input)
```

Create an input from a step input, using the same ID and type.

It also copies the default value, the optional flag, and the doc.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.fromStepInput.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

---

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.Input.fromStepInput.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

---

##### `integer` <a name="integer" id="wdk-lib.Input.integer"></a>

```typescript
import { Input } from 'wdk-lib'

Input.integer(scope: StepConstruct, id: string)
```

Creates an integer type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.integer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.integer.parameter.id"></a>

- *Type:* string

The identifier for this input.

---

##### `string` <a name="string" id="wdk-lib.Input.string"></a>

```typescript
import { Input } from 'wdk-lib'

Input.string(scope: StepConstruct, id: string)
```

Creates a string type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.string.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.string.parameter.id"></a>

- *Type:* string

The identifier for this input.

---

##### `stringArray` <a name="stringArray" id="wdk-lib.Input.stringArray"></a>

```typescript
import { Input } from 'wdk-lib'

Input.stringArray(scope: StepConstruct, id: string)
```

Creates a string array type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.stringArray.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.stringArray.parameter.id"></a>

- *Type:* string

The identifier for this input.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Input.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.Input.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Input.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Input.property.idAsReference">idAsReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.linked">linked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.links">links</a></code> | <code><a href="#wdk-lib.ILinkable">ILinkable</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.multiLinked">multiLinked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.referenced">referenced</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.pickValueMethod">pickValueMethod</a></code> | <code><a href="#wdk-lib.PickValueMethod">PickValueMethod</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.defaultValue">defaultValue</a></code> | <code>any</code> | Retrieves the default value of the input. |
| <code><a href="#wdk-lib.Input.property.optional">optional</a></code> | <code>boolean</code> | Indicates whether the input is optional. |
| <code><a href="#wdk-lib.Input.property.type">type</a></code> | <code>string</code> | Retrieves the type of the input as a string representation. |
| <code><a href="#wdk-lib.Input.property.doc">doc</a></code> | <code>string</code> | Retrieves the documentation associated with the input. |
| <code><a href="#wdk-lib.Input.property.label">label</a></code> | <code>string</code> | Retrieves the label associated with the input. |
| <code><a href="#wdk-lib.Input.property.prefix">prefix</a></code> | <code>string</code> | Retrieves the prefix associated with the input. |
| <code><a href="#wdk-lib.Input.property.valueFrom">valueFrom</a></code> | <code>string</code> | Retrieves the expression from which the input's value is derived. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.Input.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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

##### `pickValueMethod`<sup>Optional</sup> <a name="pickValueMethod" id="wdk-lib.Input.property.pickValueMethod"></a>

```typescript
public readonly pickValueMethod: PickValueMethod;
```

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="wdk-lib.Input.property.defaultValue"></a>

```typescript
public readonly defaultValue: any;
```

- *Type:* any

Retrieves the default value of the input.

---

##### `optional`<sup>Required</sup> <a name="optional" id="wdk-lib.Input.property.optional"></a>

```typescript
public readonly optional: boolean;
```

- *Type:* boolean

Indicates whether the input is optional.

---

##### `type`<sup>Required</sup> <a name="type" id="wdk-lib.Input.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Retrieves the type of the input as a string representation.

---

##### `doc`<sup>Optional</sup> <a name="doc" id="wdk-lib.Input.property.doc"></a>

```typescript
public readonly doc: string;
```

- *Type:* string

Retrieves the documentation associated with the input.

---

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.Input.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Retrieves the label associated with the input.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="wdk-lib.Input.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Retrieves the prefix associated with the input.

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="wdk-lib.Input.property.valueFrom"></a>

```typescript
public readonly valueFrom: string;
```

- *Type:* string

Retrieves the expression from which the input's value is derived.

Sets the expression from which the input's value is derived. Use this in the workflows to set a value of a step input from some other value.

---

*Example*

```typescript
tool.message.valueFrom = 'Hello World!'; // This will set the value of the step input to 'Hello World!'
tool.width.valueFrom = Value.double(3.14); // This will set the value of the step input to 3.14
tool.height.valueFrom = Value.expression("inputs.my_input * 2"); // This will set the value of the step input to the value of the input 'my_input' multiplied by 2
```



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
| <code><a href="#wdk-lib.InputReference.convertToS3Reference">convertToS3Reference</a></code> | Convert the local path reference to an S3 reference. |
| <code><a href="#wdk-lib.InputReference.isDirectory">isDirectory</a></code> | Checks if the InputReference is a directory. |
| <code><a href="#wdk-lib.InputReference.toMap">toMap</a></code> | Convert the object to a map representation following the CWL specification. |

---

##### `convertToS3Reference` <a name="convertToS3Reference" id="wdk-lib.InputReference.convertToS3Reference"></a>

```typescript
public convertToS3Reference(s3UriLocation: string): void
```

Convert the local path reference to an S3 reference.

###### `s3UriLocation`<sup>Required</sup> <a name="s3UriLocation" id="wdk-lib.InputReference.convertToS3Reference.parameter.s3UriLocation"></a>

- *Type:* string

The S3 URI location to convert to.

---

##### `isDirectory` <a name="isDirectory" id="wdk-lib.InputReference.isDirectory"></a>

```typescript
public isDirectory(): boolean
```

Checks if the InputReference is a directory.

##### `toMap` <a name="toMap" id="wdk-lib.InputReference.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Convert the object to a map representation following the CWL specification.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.InputReference.directory">directory</a></code> | Create a local directory reference. |
| <code><a href="#wdk-lib.InputReference.directoryArray">directoryArray</a></code> | Create a reference to a list of local directories. |
| <code><a href="#wdk-lib.InputReference.file">file</a></code> | Create a local file reference. |
| <code><a href="#wdk-lib.InputReference.fileArray">fileArray</a></code> | Create a reference to a list of local files. |
| <code><a href="#wdk-lib.InputReference.s3Directory">s3Directory</a></code> | Create a s3 directory reference. |
| <code><a href="#wdk-lib.InputReference.s3DirectoryArray">s3DirectoryArray</a></code> | Create a reference to a list of s3 directories. |
| <code><a href="#wdk-lib.InputReference.s3File">s3File</a></code> | Create a s3 file reference. |
| <code><a href="#wdk-lib.InputReference.s3FileArray">s3FileArray</a></code> | Create a reference to a list of s3 files. |

---

##### `directory` <a name="directory" id="wdk-lib.InputReference.directory"></a>

```typescript
import { InputReference } from 'wdk-lib'

InputReference.directory(relativePath: string)
```

Create a local directory reference.

###### `relativePath`<sup>Required</sup> <a name="relativePath" id="wdk-lib.InputReference.directory.parameter.relativePath"></a>

- *Type:* string

path to a local directory like `/Users/username/project/`.

---

##### `directoryArray` <a name="directoryArray" id="wdk-lib.InputReference.directoryArray"></a>

```typescript
import { InputReference } from 'wdk-lib'

InputReference.directoryArray(relativePaths: string[])
```

Create a reference to a list of local directories.

###### `relativePaths`<sup>Required</sup> <a name="relativePaths" id="wdk-lib.InputReference.directoryArray.parameter.relativePaths"></a>

- *Type:* string[]

path to local directories like `["/home/proj1/", "/home/proj2/"]`.

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

##### `s3Directory` <a name="s3Directory" id="wdk-lib.InputReference.s3Directory"></a>

```typescript
import { InputReference } from 'wdk-lib'

InputReference.s3Directory(s3FileReference: string)
```

Create a s3 directory reference.

###### `s3FileReference`<sup>Required</sup> <a name="s3FileReference" id="wdk-lib.InputReference.s3Directory.parameter.s3FileReference"></a>

- *Type:* string

Reference to an S3 directory formatted like `s3://bucket-name/path/to/directory/`.

---

##### `s3DirectoryArray` <a name="s3DirectoryArray" id="wdk-lib.InputReference.s3DirectoryArray"></a>

```typescript
import { InputReference } from 'wdk-lib'

InputReference.s3DirectoryArray(s3FileReferences: string[])
```

Create a reference to a list of s3 directories.

###### `s3FileReferences`<sup>Required</sup> <a name="s3FileReferences" id="wdk-lib.InputReference.s3DirectoryArray.parameter.s3FileReferences"></a>

- *Type:* string[]

Reference to S3 directories formatted like `["s3://bucket-name/path/to/dir1", "s3://bucket-name/path/to/dir2"]`.

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
| <code><a href="#wdk-lib.LinkableConstruct.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.LinkableConstruct.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.LinkableConstruct.linkTo">linkTo</a></code> | Link this linkable construct to another one. |
| <code><a href="#wdk-lib.LinkableConstruct.pickValue">pickValue</a></code> | Set the PickValueMethod for this linkable if there are multiple sources linked to it. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.LinkableConstruct.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.LinkableConstruct.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.LinkableConstruct.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.LinkableConstruct.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.LinkableConstruct.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.LinkableConstruct.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

---

##### `linkTo` <a name="linkTo" id="wdk-lib.LinkableConstruct.linkTo"></a>

```typescript
public linkTo(linkInput: ILinkable): ILinkable
```

Link this linkable construct to another one.

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
| <code><a href="#wdk-lib.LinkableConstruct.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.LinkableConstruct.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.LinkableConstruct.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.LinkableConstruct.property.idAsReference">idAsReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.linked">linked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.links">links</a></code> | <code><a href="#wdk-lib.ILinkable">ILinkable</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.multiLinked">multiLinked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.referenced">referenced</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.pickValueMethod">pickValueMethod</a></code> | <code><a href="#wdk-lib.PickValueMethod">PickValueMethod</a></code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.LinkableConstruct.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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

##### `pickValueMethod`<sup>Optional</sup> <a name="pickValueMethod" id="wdk-lib.LinkableConstruct.property.pickValueMethod"></a>

```typescript
public readonly pickValueMethod: PickValueMethod;
```

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---


### Output <a name="Output" id="wdk-lib.Output"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>

Represents an output parameter of a workflow, tool, or step.

*Example*

```typescript
import { Output, Constructs } from 'wdk-lib';
const root = Constructs.createRoot('root');
const output = Output.file(root, 'myOutput')
                   .withGlob('*.txt')
                   .loadContents()
                   .outputEval('$(self[0].contents)');
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Output.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.Output.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.Output.linkTo">linkTo</a></code> | Links this output to another output. |
| <code><a href="#wdk-lib.Output.pickValue">pickValue</a></code> | Set the PickValueMethod for this linkable if there are multiple sources linked to it. |
| <code><a href="#wdk-lib.Output.as">as</a></code> | Sets a new identifier for this output. |
| <code><a href="#wdk-lib.Output.globFromInputString">globFromInputString</a></code> | Sets a glob pattern based on an input string identifier. |
| <code><a href="#wdk-lib.Output.inScope">inScope</a></code> | Get the linked output corresponding to the target scope. |
| <code><a href="#wdk-lib.Output.loadContents">loadContents</a></code> | Enables loading contents of the output files. |
| <code><a href="#wdk-lib.Output.makeOptional">makeOptional</a></code> | Sets the optionality of the output. |
| <code><a href="#wdk-lib.Output.outputEval">outputEval</a></code> | Specifies an expression to evaluate the output. |
| <code><a href="#wdk-lib.Output.toMap">toMap</a></code> | Converts the output's properties into a map format. |
| <code><a href="#wdk-lib.Output.withGlob">withGlob</a></code> | Specifies a glob pattern to locate output files. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.Output.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Output.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Output.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.Output.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Output.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.Output.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

---

##### `linkTo` <a name="linkTo" id="wdk-lib.Output.linkTo"></a>

```typescript
public linkTo(linkable: ILinkable): ILinkable
```

Links this output to another output.

###### `linkable`<sup>Required</sup> <a name="linkable" id="wdk-lib.Output.linkTo.parameter.linkable"></a>

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>

The output to link to.

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

Sets a new identifier for this output.

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.as.parameter.id"></a>

- *Type:* string

The new identifier for this output.

---

##### `globFromInputString` <a name="globFromInputString" id="wdk-lib.Output.globFromInputString"></a>

```typescript
public globFromInputString(inputString: Input): Output
```

Sets a glob pattern based on an input string identifier.

###### `inputString`<sup>Required</sup> <a name="inputString" id="wdk-lib.Output.globFromInputString.parameter.inputString"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

An Input instance whose ID forms the basis of the glob pattern.

---

##### `inScope` <a name="inScope" id="wdk-lib.Output.inScope"></a>

```typescript
public inScope(targetScope: StepConstruct): ILinkable
```

Get the linked output corresponding to the target scope.

If the target scope is the same as the current scope, return the current instance.
Note: The scope must be in one of the upper hierarchies of the current scope.

###### `targetScope`<sup>Required</sup> <a name="targetScope" id="wdk-lib.Output.inScope.parameter.targetScope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The target scope to find the linked output.

---

##### `loadContents` <a name="loadContents" id="wdk-lib.Output.loadContents"></a>

```typescript
public loadContents(): Output
```

Enables loading contents of the output files.

##### `makeOptional` <a name="makeOptional" id="wdk-lib.Output.makeOptional"></a>

```typescript
public makeOptional(optional: boolean): Output
```

Sets the optionality of the output.

In cwl this output will have the type 'null' besides the specified type.

###### `optional`<sup>Required</sup> <a name="optional" id="wdk-lib.Output.makeOptional.parameter.optional"></a>

- *Type:* boolean

A flag indicating if the input should be optional.

---

##### `outputEval` <a name="outputEval" id="wdk-lib.Output.outputEval"></a>

```typescript
public outputEval(expression: string): Output
```

Specifies an expression to evaluate the output.

###### `expression`<sup>Required</sup> <a name="expression" id="wdk-lib.Output.outputEval.parameter.expression"></a>

- *Type:* string

The expression for evaluation.

---

##### `toMap` <a name="toMap" id="wdk-lib.Output.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Converts the output's properties into a map format.

##### `withGlob` <a name="withGlob" id="wdk-lib.Output.withGlob"></a>

```typescript
public withGlob(glob: string): Output
```

Specifies a glob pattern to locate output files.

###### `glob`<sup>Required</sup> <a name="glob" id="wdk-lib.Output.withGlob.parameter.glob"></a>

- *Type:* string

The glob pattern.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Output.array">array</a></code> | Creates an array output of a type specified by a parameter. |
| <code><a href="#wdk-lib.Output.bool">bool</a></code> | Creates a boolean type output. |
| <code><a href="#wdk-lib.Output.custom">custom</a></code> | Creates a custom type output. |
| <code><a href="#wdk-lib.Output.directory">directory</a></code> | Creates a directory type output. |
| <code><a href="#wdk-lib.Output.file">file</a></code> | Creates a file type output. |
| <code><a href="#wdk-lib.Output.fileArray">fileArray</a></code> | Creates a file array type output. |
| <code><a href="#wdk-lib.Output.float">float</a></code> | Creates a float type output. |
| <code><a href="#wdk-lib.Output.fromStepOutput">fromStepOutput</a></code> | Creates an output from a step output, using the same ID and type. |
| <code><a href="#wdk-lib.Output.integer">integer</a></code> | Creates an integer type output. |
| <code><a href="#wdk-lib.Output.string">string</a></code> | Creates a string type output. |
| <code><a href="#wdk-lib.Output.stringArray">stringArray</a></code> | Creates a string array type output. |

---

##### `array` <a name="array" id="wdk-lib.Output.array"></a>

```typescript
import { Output } from 'wdk-lib'

Output.array(scope: StepConstruct, id: string, itemsType: TypeOut)
```

Creates an array output of a type specified by a parameter.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.array.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.array.parameter.id"></a>

- *Type:* string

The identifier for this output.

---

###### `itemsType`<sup>Required</sup> <a name="itemsType" id="wdk-lib.Output.array.parameter.itemsType"></a>

- *Type:* <a href="#wdk-lib.TypeOut">TypeOut</a>

The type of the output.

Use one of the basic types from the Type class: BOOLEAN, INT, DOUBLE, FLOAT, STRING, FILE, DIRECTORY.

---

##### `bool` <a name="bool" id="wdk-lib.Output.bool"></a>

```typescript
import { Output } from 'wdk-lib'

Output.bool(scope: StepConstruct, id: string)
```

Creates a boolean type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.bool.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.bool.parameter.id"></a>

- *Type:* string

The identifier for this output.

---

##### `custom` <a name="custom" id="wdk-lib.Output.custom"></a>

```typescript
import { Output } from 'wdk-lib'

Output.custom(scope: StepConstruct, id: string, type: TypeOut)
```

Creates a custom type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.custom.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.custom.parameter.id"></a>

- *Type:* string

The identifier for this output.

---

###### `type`<sup>Required</sup> <a name="type" id="wdk-lib.Output.custom.parameter.type"></a>

- *Type:* <a href="#wdk-lib.TypeOut">TypeOut</a>

The type of the output.

Use the TypeOut to create a custom type.

---

##### `directory` <a name="directory" id="wdk-lib.Output.directory"></a>

```typescript
import { Output } from 'wdk-lib'

Output.directory(scope: StepConstruct, id: string)
```

Creates a directory type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.directory.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.directory.parameter.id"></a>

- *Type:* string

The identifier for this output.

---

##### `file` <a name="file" id="wdk-lib.Output.file"></a>

```typescript
import { Output } from 'wdk-lib'

Output.file(scope: StepConstruct, id: string)
```

Creates a file type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.file.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.file.parameter.id"></a>

- *Type:* string

The identifier for this output.

---

##### `fileArray` <a name="fileArray" id="wdk-lib.Output.fileArray"></a>

```typescript
import { Output } from 'wdk-lib'

Output.fileArray(scope: StepConstruct, id: string)
```

Creates a file array type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.fileArray.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.fileArray.parameter.id"></a>

- *Type:* string

The identifier for this output.

---

##### `float` <a name="float" id="wdk-lib.Output.float"></a>

```typescript
import { Output } from 'wdk-lib'

Output.float(scope: StepConstruct, id: string)
```

Creates a float type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.float.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.float.parameter.id"></a>

- *Type:* string

The identifier for this output.

---

##### `fromStepOutput` <a name="fromStepOutput" id="wdk-lib.Output.fromStepOutput"></a>

```typescript
import { Output } from 'wdk-lib'

Output.fromStepOutput(scope: StepConstruct, linkedOutput: Output)
```

Creates an output from a step output, using the same ID and type.

It also links the existing output to the new one.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.fromStepOutput.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `linkedOutput`<sup>Required</sup> <a name="linkedOutput" id="wdk-lib.Output.fromStepOutput.parameter.linkedOutput"></a>

- *Type:* <a href="#wdk-lib.Output">Output</a>

The output to link and copy properties from.

---

##### `integer` <a name="integer" id="wdk-lib.Output.integer"></a>

```typescript
import { Output } from 'wdk-lib'

Output.integer(scope: StepConstruct, id: string)
```

Creates an integer type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.integer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.integer.parameter.id"></a>

- *Type:* string

The identifier for this output.

---

##### `string` <a name="string" id="wdk-lib.Output.string"></a>

```typescript
import { Output } from 'wdk-lib'

Output.string(scope: StepConstruct, id: string)
```

Creates a string type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.string.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.string.parameter.id"></a>

- *Type:* string

The identifier for this output.

---

##### `stringArray` <a name="stringArray" id="wdk-lib.Output.stringArray"></a>

```typescript
import { Output } from 'wdk-lib'

Output.stringArray(scope: StepConstruct, id: string)
```

Creates a string array type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.stringArray.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.stringArray.parameter.id"></a>

- *Type:* string

The identifier for this output.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Output.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.Output.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Output.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Output.property.idAsReference">idAsReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.linked">linked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.links">links</a></code> | <code><a href="#wdk-lib.ILinkable">ILinkable</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.multiLinked">multiLinked</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.referenced">referenced</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.pickValueMethod">pickValueMethod</a></code> | <code><a href="#wdk-lib.PickValueMethod">PickValueMethod</a></code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.Output.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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

##### `pickValueMethod`<sup>Optional</sup> <a name="pickValueMethod" id="wdk-lib.Output.property.pickValueMethod"></a>

```typescript
public readonly pickValueMethod: PickValueMethod;
```

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

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
| <code><a href="#wdk-lib.RenameExpressionTool.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.RenameExpressionTool.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.RenameExpressionTool.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.RenameExpressionTool.serialize">serialize</a></code> | Serialize the step to a directory. |
| <code><a href="#wdk-lib.RenameExpressionTool.toMap">toMap</a></code> | Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool. |
| <code><a href="#wdk-lib.RenameExpressionTool.withExpression">withExpression</a></code> | Specify a custom JavaScript expression for this ExpressionTool. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.RenameExpressionTool.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.RenameExpressionTool.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.RenameExpressionTool.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.RenameExpressionTool.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.RenameExpressionTool.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.RenameExpressionTool.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

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

Serialize the step to a directory.

If the step has substeps, they will be serialized recursively.

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
| <code><a href="#wdk-lib.RenameExpressionTool.makeParametersJsonExpressionAllStrings">makeParametersJsonExpressionAllStrings</a></code> | Create a CWL expression script that generates a JSON file with the parameters of the tool. |

---

##### `makeParametersJsonExpression` <a name="makeParametersJsonExpression" id="wdk-lib.RenameExpressionTool.makeParametersJsonExpression"></a>

```typescript
import { RenameExpressionTool } from 'wdk-lib'

RenameExpressionTool.makeParametersJsonExpression()
```

Create a CWL expression script that generates a JSON file with the parameters of the tool.

Example: call with makeParametersJsonExpression()

##### `makeParametersJsonExpressionAllStrings` <a name="makeParametersJsonExpressionAllStrings" id="wdk-lib.RenameExpressionTool.makeParametersJsonExpressionAllStrings"></a>

```typescript
import { RenameExpressionTool } from 'wdk-lib'

RenameExpressionTool.makeParametersJsonExpressionAllStrings()
```

Create a CWL expression script that generates a JSON file with the parameters of the tool.

All parameters are converted to strings.
Example: call with makeParametersJsonExpressionAllStrings()

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.RenameExpressionTool.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.stepInputsValueFrom">stepInputsValueFrom</a></code> | <code><a href="#wdk-lib.StepInputsValue">StepInputsValue</a></code> | Get the stepValueFrom object if the step is a stepValueFrom step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.expression">expression</a></code> | <code>string</code> | Get the custom JavaScript expression for this ExpressionTool. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.requirements">requirements</a></code> | <code><a href="#wdk-lib.Requirement">Requirement</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.f1">f1</a></code> | <code><a href="#wdk-lib.Input">Input</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.newname">newname</a></code> | <code><a href="#wdk-lib.Input">Input</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.out">out</a></code> | <code><a href="#wdk-lib.Output">Output</a></code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.RenameExpressionTool.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.RenameExpressionTool.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

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

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.RenameExpressionTool.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.RenameExpressionTool.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `stepInputsValueFrom`<sup>Optional</sup> <a name="stepInputsValueFrom" id="wdk-lib.RenameExpressionTool.property.stepInputsValueFrom"></a>

```typescript
public readonly stepInputsValueFrom: StepInputsValue;
```

- *Type:* <a href="#wdk-lib.StepInputsValue">StepInputsValue</a>

Get the stepValueFrom object if the step is a stepValueFrom step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.RenameExpressionTool.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.RenameExpressionTool.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.RenameExpressionTool.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `expression`<sup>Required</sup> <a name="expression" id="wdk-lib.RenameExpressionTool.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Get the custom JavaScript expression for this ExpressionTool.

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.RenameExpressionTool.property.requirements"></a>

```typescript
public readonly requirements: Requirement[];
```

- *Type:* <a href="#wdk-lib.Requirement">Requirement</a>[]

---

##### `props`<sup>Optional</sup> <a name="props" id="wdk-lib.RenameExpressionTool.property.props"></a>

```typescript
public readonly props: IToolProps;
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

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
| <code><a href="#wdk-lib.Requirement.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.Requirement.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.Requirement.addEntry">addEntry</a></code> | Add a listing entry to the initial work directory requirement. |
| <code><a href="#wdk-lib.Requirement.addEnvVar">addEnvVar</a></code> | Add an environment variable to the EnvVar requirement. |
| <code><a href="#wdk-lib.Requirement.addListing">addListing</a></code> | *No description.* |
| <code><a href="#wdk-lib.Requirement.toMap">toMap</a></code> | *No description.* |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.Requirement.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Requirement.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Requirement.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.Requirement.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Requirement.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.Requirement.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

---

##### `addEntry` <a name="addEntry" id="wdk-lib.Requirement.addEntry"></a>

```typescript
public addEntry(entry: string, writable?: boolean, entryName?: string): Requirement
```

Add a listing entry to the initial work directory requirement.

###### `entry`<sup>Required</sup> <a name="entry" id="wdk-lib.Requirement.addEntry.parameter.entry"></a>

- *Type:* string

a listing entry.

---

###### `writable`<sup>Optional</sup> <a name="writable" id="wdk-lib.Requirement.addEntry.parameter.writable"></a>

- *Type:* boolean

allow the entry to be writable.

---

###### `entryName`<sup>Optional</sup> <a name="entryName" id="wdk-lib.Requirement.addEntry.parameter.entryName"></a>

- *Type:* string

the name of the entry.

---

##### `addEnvVar` <a name="addEnvVar" id="wdk-lib.Requirement.addEnvVar"></a>

```typescript
public addEnvVar(entryName: string, entry: string): Requirement
```

Add an environment variable to the EnvVar requirement.

###### `entryName`<sup>Required</sup> <a name="entryName" id="wdk-lib.Requirement.addEnvVar.parameter.entryName"></a>

- *Type:* string

---

###### `entry`<sup>Required</sup> <a name="entry" id="wdk-lib.Requirement.addEnvVar.parameter.entry"></a>

- *Type:* string

---

##### ~~`addListing`~~ <a name="addListing" id="wdk-lib.Requirement.addListing"></a>

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
| <code><a href="#wdk-lib.Requirement.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.Requirement.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Requirement.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Requirement.property.requirementType">requirementType</a></code> | <code>string</code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.Requirement.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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

A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Scatter.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.Scatter.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.Scatter.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Scatter.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Scatter.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.Scatter.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Scatter.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.Scatter.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Scatter.dotProduct">dotProduct</a></code> | Each of the input arrays is aligned, and one element is taken from each array to construct each job. |
| <code><a href="#wdk-lib.Scatter.flatCrossProduct">flatCrossProduct</a></code> | This method performs a Cartesian product of the inputs, producing a job for every combination of the scattered inputs. |
| <code><a href="#wdk-lib.Scatter.nestedCrossProduct">nestedCrossProduct</a></code> | This method performs a Cartesian product of the inputs, producing a job for every combination of the scattered inputs. |
| <code><a href="#wdk-lib.Scatter.simple">simple</a></code> | Each element of the array linked to the input makes a separate job, independent from the others, and which may be executed concurrently. |

---

##### `dotProduct` <a name="dotProduct" id="wdk-lib.Scatter.dotProduct"></a>

```typescript
import { Scatter } from 'wdk-lib'

Scatter.dotProduct(scope: Workflow, step: IStep, inputs: Input[])
```

Each of the input arrays is aligned, and one element is taken from each array to construct each job.

It is an error if all input arrays do not have the same length.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Scatter.dotProduct.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

A `Workflow` instance representing the workflow to which the scatter belongs.

---

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Scatter.dotProduct.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

An `IStep` instance representing the specific step to scatter.

---

###### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Scatter.dotProduct.parameter.inputs"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

An array of `Input` instances.

These represent multiple input variables belonging to the scattered step, each linked to an array. All arrays must be of equal length.

---

##### `flatCrossProduct` <a name="flatCrossProduct" id="wdk-lib.Scatter.flatCrossProduct"></a>

```typescript
import { Scatter } from 'wdk-lib'

Scatter.flatCrossProduct(scope: Workflow, step: IStep, inputs: Input[])
```

This method performs a Cartesian product of the inputs, producing a job for every combination of the scattered inputs.

Unlike nested cross-product, the output arrays are flattened to a single level but maintain the order of the input arrays.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Scatter.flatCrossProduct.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

A `Workflow` instance representing the workflow to which the scatter belongs.

---

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Scatter.flatCrossProduct.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

An `IStep` instance representing the specific step to scatter.

---

###### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Scatter.flatCrossProduct.parameter.inputs"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

An array of `Input` instances representing multiple input variables belonging to the scattered step, each linked to an array.

All combinations of these inputs are flattened and executed.

---

##### `nestedCrossProduct` <a name="nestedCrossProduct" id="wdk-lib.Scatter.nestedCrossProduct"></a>

```typescript
import { Scatter } from 'wdk-lib'

Scatter.nestedCrossProduct(scope: Workflow, step: IStep, inputs: Input[])
```

This method performs a Cartesian product of the inputs, producing a job for every combination of the scattered inputs.

The output consists of nested arrays for each level of scattering, ordered according to how the input arrays are listed.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Scatter.nestedCrossProduct.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

A `Workflow` instance representing the workflow to which the scatter belongs.

---

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Scatter.nestedCrossProduct.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

An `IStep` instance representing the specific step to scatter.

---

###### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Scatter.nestedCrossProduct.parameter.inputs"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

An array of `Input` instances representing multiple input variables belonging to the scattered step, each linked to an array.

All possible combinations of these inputs are executed.

---

##### `simple` <a name="simple" id="wdk-lib.Scatter.simple"></a>

```typescript
import { Scatter } from 'wdk-lib'

Scatter.simple(scope: Workflow, step: IStep, input: Input)
```

Each element of the array linked to the input makes a separate job, independent from the others, and which may be executed concurrently.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Scatter.simple.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

A `Workflow` instance representing the workflow to which the scatter belongs.

This defines the context and boundaries within which the scatter operation will occur.

---

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Scatter.simple.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

An `IStep` instance representing the specific step to scatter.

This can be either a Tool or a Workflow that needs to be processed in parallel over the provided inputs.

---

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.Scatter.simple.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

An `Input` instance that belongs to the step.

This must be linked to an array whose elements are of the same type. It identifies the input variable to be scattered over.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Scatter.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.Scatter.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Scatter.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Scatter.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.Scatter.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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


### StepConstruct <a name="StepConstruct" id="wdk-lib.StepConstruct"></a>

- *Implements:* <a href="#wdk-lib.IStep">IStep</a>

#### Initializers <a name="Initializers" id="wdk-lib.StepConstruct.Initializer"></a>

```typescript
import { StepConstruct } from 'wdk-lib'

new StepConstruct(scope: StepConstruct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.StepConstruct.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.StepConstruct">StepConstruct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.StepConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.StepConstruct.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.StepConstruct.Initializer.parameter.id"></a>

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.StepConstruct.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.StepConstruct.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.StepConstruct.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.StepConstruct.serialize">serialize</a></code> | Serialize the step to a directory. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.StepConstruct.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.StepConstruct.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.StepConstruct.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.StepConstruct.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.StepConstruct.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.StepConstruct.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.StepConstruct.hasSteps"></a>

```typescript
public hasSteps(): boolean
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.StepConstruct.serialize"></a>

```typescript
public serialize(dirPath: string): SynthFiles
```

Serialize the step to a directory.

If the step has substeps, they will be serialized recursively.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.StepConstruct.serialize.parameter.dirPath"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.StepConstruct.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.StepConstruct.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.StepConstruct.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.StepConstruct.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.StepConstruct.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.StepConstruct.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.StepConstruct.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.StepConstruct.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.StepConstruct.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.StepConstruct.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.StepConstruct.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.StepConstruct.property.stepInputsValueFrom">stepInputsValueFrom</a></code> | <code><a href="#wdk-lib.StepInputsValue">StepInputsValue</a></code> | Get the stepValueFrom object if the step is a stepValueFrom step. |
| <code><a href="#wdk-lib.StepConstruct.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.StepConstruct.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.StepConstruct.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.StepConstruct.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.StepConstruct.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.StepConstruct.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.StepConstruct.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.StepConstruct.property.linkedInputs"></a>

```typescript
public readonly linkedInputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.StepConstruct.property.linkedOutputs"></a>

```typescript
public readonly linkedOutputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.StepConstruct.property.outputs"></a>

```typescript
public readonly outputs: Output[];
```

- *Type:* <a href="#wdk-lib.Output">Output</a>[]

All outputs of the step.

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.StepConstruct.property.steps"></a>

```typescript
public readonly steps: IStep[];
```

- *Type:* <a href="#wdk-lib.IStep">IStep</a>[]

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.StepConstruct.property.conditional"></a>

```typescript
public readonly conditional: Conditional;
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.StepConstruct.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.StepConstruct.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `stepInputsValueFrom`<sup>Optional</sup> <a name="stepInputsValueFrom" id="wdk-lib.StepConstruct.property.stepInputsValueFrom"></a>

```typescript
public readonly stepInputsValueFrom: StepInputsValue;
```

- *Type:* <a href="#wdk-lib.StepInputsValue">StepInputsValue</a>

Get the stepValueFrom object if the step is a stepValueFrom step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.StepConstruct.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.StepConstruct.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.StepConstruct.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---


### StepInputsValue <a name="StepInputsValue" id="wdk-lib.StepInputsValue"></a>

A "stepInput" specifies that the associated workflow step should modify the input according to the stepInput.

This class manages multiple valueFrom expressions for different inputs on a single step.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.StepInputsValue.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.StepInputsValue.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.StepInputsValue.addCustomExpression">addCustomExpression</a></code> | Add a custom valueFrom expression for a specific input. |
| <code><a href="#wdk-lib.StepInputsValue.firstElementOrNull">firstElementOrNull</a></code> | If the input is an empty array, set the value to null. |
| <code><a href="#wdk-lib.StepInputsValue.getExpressionForInput">getExpressionForInput</a></code> | Get the valueFrom expression for a specific input ID. |
| <code><a href="#wdk-lib.StepInputsValue.hasExpressionForInput">hasExpressionForInput</a></code> | Check if there's a valueFrom expression for a specific input ID. |
| <code><a href="#wdk-lib.StepInputsValue.inputIdsWithExpressions">inputIdsWithExpressions</a></code> | Get all input IDs that have valueFrom expressions. |
| <code><a href="#wdk-lib.StepInputsValue.valueToOneElementArray">valueToOneElementArray</a></code> | Set the value of the input to an array with one element being the value passed to the step. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.StepInputsValue.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.StepInputsValue.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.StepInputsValue.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.StepInputsValue.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.StepInputsValue.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.StepInputsValue.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

---

##### `addCustomExpression` <a name="addCustomExpression" id="wdk-lib.StepInputsValue.addCustomExpression"></a>

```typescript
public addCustomExpression(input: Input, expression: string): StepInputsValue
```

Add a custom valueFrom expression for a specific input.

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.StepInputsValue.addCustomExpression.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

The input to modify.

---

###### `expression`<sup>Required</sup> <a name="expression" id="wdk-lib.StepInputsValue.addCustomExpression.parameter.expression"></a>

- *Type:* string

The JavaScript expression to use.

---

##### `firstElementOrNull` <a name="firstElementOrNull" id="wdk-lib.StepInputsValue.firstElementOrNull"></a>

```typescript
public firstElementOrNull(input: Input): StepInputsValue
```

If the input is an empty array, set the value to null.

Otherwise, return the first element of the array.
Also returns null if the input is null, undefined, or not an array.

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.StepInputsValue.firstElementOrNull.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

The input to modify.

---

##### `getExpressionForInput` <a name="getExpressionForInput" id="wdk-lib.StepInputsValue.getExpressionForInput"></a>

```typescript
public getExpressionForInput(inputId: string): string
```

Get the valueFrom expression for a specific input ID.

###### `inputId`<sup>Required</sup> <a name="inputId" id="wdk-lib.StepInputsValue.getExpressionForInput.parameter.inputId"></a>

- *Type:* string

---

##### `hasExpressionForInput` <a name="hasExpressionForInput" id="wdk-lib.StepInputsValue.hasExpressionForInput"></a>

```typescript
public hasExpressionForInput(inputId: string): boolean
```

Check if there's a valueFrom expression for a specific input ID.

###### `inputId`<sup>Required</sup> <a name="inputId" id="wdk-lib.StepInputsValue.hasExpressionForInput.parameter.inputId"></a>

- *Type:* string

---

##### `inputIdsWithExpressions` <a name="inputIdsWithExpressions" id="wdk-lib.StepInputsValue.inputIdsWithExpressions"></a>

```typescript
public inputIdsWithExpressions(): string[]
```

Get all input IDs that have valueFrom expressions.

##### `valueToOneElementArray` <a name="valueToOneElementArray" id="wdk-lib.StepInputsValue.valueToOneElementArray"></a>

```typescript
public valueToOneElementArray(input: Input): StepInputsValue
```

Set the value of the input to an array with one element being the value passed to the step.

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.StepInputsValue.valueToOneElementArray.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

The input to modify.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.StepInputsValue.for">for</a></code> | Create a new StepInputsValue instance for the given step. |

---

##### `for` <a name="for" id="wdk-lib.StepInputsValue.for"></a>

```typescript
import { StepInputsValue } from 'wdk-lib'

StepInputsValue.for(workflow: Workflow, step: IStep)
```

Create a new StepInputsValue instance for the given step.

###### `workflow`<sup>Required</sup> <a name="workflow" id="wdk-lib.StepInputsValue.for.parameter.workflow"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

The workflow in which to apply the requirements and customize step inputs.

---

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.StepInputsValue.for.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

The step to create valueFrom expressions for.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.StepInputsValue.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.StepInputsValue.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.StepInputsValue.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.StepInputsValue.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.StepInputsValue.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.StepInputsValue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the construct in it's scope.

set or update the id of this construct

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


### Tool <a name="Tool" id="wdk-lib.Tool"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>

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
| <code><a href="#wdk-lib.Tool.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.Tool.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.Tool.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.Tool.serialize">serialize</a></code> | Serialize the tool to a CWL file. |
| <code><a href="#wdk-lib.Tool.toMap">toMap</a></code> | Create a map repsentation of the tool following the CWL specification. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.Tool.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Tool.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Tool.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.Tool.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Tool.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.Tool.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

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
| <code><a href="#wdk-lib.Tool.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.Tool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Tool.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Tool.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.Tool.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.Tool.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.Tool.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.Tool.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.Tool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.Tool.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.Tool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.Tool.property.stepInputsValueFrom">stepInputsValueFrom</a></code> | <code><a href="#wdk-lib.StepInputsValue">StepInputsValue</a></code> | Get the stepValueFrom object if the step is a stepValueFrom step. |
| <code><a href="#wdk-lib.Tool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.Tool.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.Tool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.Tool.property.requirements">requirements</a></code> | <code><a href="#wdk-lib.Requirement">Requirement</a>[]</code> | *No description.* |
| <code><a href="#wdk-lib.Tool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.Tool.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Tool.property.inputs"></a>

```typescript
public readonly inputs: Input[];
```

- *Type:* <a href="#wdk-lib.Input">Input</a>[]

All inputs of the step.

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

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.Tool.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.Tool.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `stepInputsValueFrom`<sup>Optional</sup> <a name="stepInputsValueFrom" id="wdk-lib.Tool.property.stepInputsValueFrom"></a>

```typescript
public readonly stepInputsValueFrom: StepInputsValue;
```

- *Type:* <a href="#wdk-lib.StepInputsValue">StepInputsValue</a>

Get the stepValueFrom object if the step is a stepValueFrom step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.Tool.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.Tool.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.Tool.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.Tool.property.requirements"></a>

```typescript
public readonly requirements: Requirement[];
```

- *Type:* <a href="#wdk-lib.Requirement">Requirement</a>[]

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.Tool.property.props"></a>

```typescript
public readonly props: IToolProps;
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

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
| <code><a href="#wdk-lib.ToolConfig.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.ToolConfig.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.ToolConfig.withArguments">withArguments</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.withBaseCommand">withBaseCommand</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.withLabel">withLabel</a></code> | *No description.* |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.ToolConfig.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.ToolConfig.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.ToolConfig.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.ToolConfig.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.ToolConfig.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.ToolConfig.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

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

ToolConfig.basic(scope: StepConstruct)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.ToolConfig.basic.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ToolConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.ToolConfig.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.ToolConfig.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.ToolConfig.property.arguments">arguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.property.baseCommand">baseCommand</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.property.cwlVersion">cwlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.property.label">label</a></code> | <code>string</code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.ToolConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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


### TypeIn <a name="TypeIn" id="wdk-lib.TypeIn"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.TypeIn.toMap">toMap</a></code> | Converts the input to a CWL-compatible JSON object. |

---

##### `toMap` <a name="toMap" id="wdk-lib.TypeIn.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Converts the input to a CWL-compatible JSON object.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.TypeIn.arrayOf">arrayOf</a></code> | Specify the type array with elements of the given custom type. |
| <code><a href="#wdk-lib.TypeIn.boolean">boolean</a></code> | Creates a new `TypeIn` instance representing a Boolean type. |
| <code><a href="#wdk-lib.TypeIn.directory">directory</a></code> | Creates a new `TypeIn` instance representing a Directory type. |
| <code><a href="#wdk-lib.TypeIn.double">double</a></code> | Creates a new `TypeIn` instance representing a Double type. |
| <code><a href="#wdk-lib.TypeIn.file">file</a></code> | Creates a new `TypeIn` instance representing a File type. |
| <code><a href="#wdk-lib.TypeIn.float">float</a></code> | Creates a new `TypeIn` instance representing a Float type. |
| <code><a href="#wdk-lib.TypeIn.int">int</a></code> | Creates a new `TypeIn` instance representing an Integer type. |
| <code><a href="#wdk-lib.TypeIn.stdin">stdin</a></code> | Creates a new `TypeIn` instance representing input from Stdin. |
| <code><a href="#wdk-lib.TypeIn.string">string</a></code> | Creates a new `TypeIn` instance representing a String type. |

---

##### `arrayOf` <a name="arrayOf" id="wdk-lib.TypeIn.arrayOf"></a>

```typescript
import { TypeIn } from 'wdk-lib'

TypeIn.arrayOf(contentType: TypeIn, props?: InputProps)
```

Specify the type array with elements of the given custom type.

###### `contentType`<sup>Required</sup> <a name="contentType" id="wdk-lib.TypeIn.arrayOf.parameter.contentType"></a>

- *Type:* <a href="#wdk-lib.TypeIn">TypeIn</a>

The type of the elements in the array.

---

###### `props`<sup>Optional</sup> <a name="props" id="wdk-lib.TypeIn.arrayOf.parameter.props"></a>

- *Type:* <a href="#wdk-lib.InputProps">InputProps</a>

---

##### `boolean` <a name="boolean" id="wdk-lib.TypeIn.boolean"></a>

```typescript
import { TypeIn } from 'wdk-lib'

TypeIn.boolean()
```

Creates a new `TypeIn` instance representing a Boolean type.

##### `directory` <a name="directory" id="wdk-lib.TypeIn.directory"></a>

```typescript
import { TypeIn } from 'wdk-lib'

TypeIn.directory()
```

Creates a new `TypeIn` instance representing a Directory type.

##### `double` <a name="double" id="wdk-lib.TypeIn.double"></a>

```typescript
import { TypeIn } from 'wdk-lib'

TypeIn.double()
```

Creates a new `TypeIn` instance representing a Double type.

##### `file` <a name="file" id="wdk-lib.TypeIn.file"></a>

```typescript
import { TypeIn } from 'wdk-lib'

TypeIn.file()
```

Creates a new `TypeIn` instance representing a File type.

##### `float` <a name="float" id="wdk-lib.TypeIn.float"></a>

```typescript
import { TypeIn } from 'wdk-lib'

TypeIn.float()
```

Creates a new `TypeIn` instance representing a Float type.

##### `int` <a name="int" id="wdk-lib.TypeIn.int"></a>

```typescript
import { TypeIn } from 'wdk-lib'

TypeIn.int()
```

Creates a new `TypeIn` instance representing an Integer type.

##### `stdin` <a name="stdin" id="wdk-lib.TypeIn.stdin"></a>

```typescript
import { TypeIn } from 'wdk-lib'

TypeIn.stdin()
```

Creates a new `TypeIn` instance representing input from Stdin.

##### `string` <a name="string" id="wdk-lib.TypeIn.string"></a>

```typescript
import { TypeIn } from 'wdk-lib'

TypeIn.string()
```

Creates a new `TypeIn` instance representing a String type.



### TypeOut <a name="TypeOut" id="wdk-lib.TypeOut"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.TypeOut.allowNull">allowNull</a></code> | *No description.* |
| <code><a href="#wdk-lib.TypeOut.combineWith">combineWith</a></code> | *No description.* |
| <code><a href="#wdk-lib.TypeOut.toMap">toMap</a></code> | Converts the input to a CWL-compatible JSON object. |

---

##### `allowNull` <a name="allowNull" id="wdk-lib.TypeOut.allowNull"></a>

```typescript
public allowNull(): TypeOut
```

##### `combineWith` <a name="combineWith" id="wdk-lib.TypeOut.combineWith"></a>

```typescript
public combineWith(type: TypeOut): TypeOut
```

###### `type`<sup>Required</sup> <a name="type" id="wdk-lib.TypeOut.combineWith.parameter.type"></a>

- *Type:* <a href="#wdk-lib.TypeOut">TypeOut</a>

---

##### `toMap` <a name="toMap" id="wdk-lib.TypeOut.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Converts the input to a CWL-compatible JSON object.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.TypeOut.arrayOf">arrayOf</a></code> | Specify the type array with elements of the given custom type. |
| <code><a href="#wdk-lib.TypeOut.boolean">boolean</a></code> | Creates a new `TypeOut` instance representing a Boolean type. |
| <code><a href="#wdk-lib.TypeOut.directory">directory</a></code> | Creates a new `TypeOut` instance representing a Directory type. |
| <code><a href="#wdk-lib.TypeOut.double">double</a></code> | Creates a new `TypeOut` instance representing a Double type. |
| <code><a href="#wdk-lib.TypeOut.file">file</a></code> | Creates a new `TypeOut` instance representing a File type. |
| <code><a href="#wdk-lib.TypeOut.float">float</a></code> | Creates a new `TypeOut` instance representing a Float type. |
| <code><a href="#wdk-lib.TypeOut.int">int</a></code> | Creates a new `TypeOut` instance representing an Integer type. |
| <code><a href="#wdk-lib.TypeOut.stderr">stderr</a></code> | Creates a new `TypeOut` instance representing standard error (stderr). |
| <code><a href="#wdk-lib.TypeOut.stdout">stdout</a></code> | Creates a new `TypeOut` instance representing standard output (stdout). |
| <code><a href="#wdk-lib.TypeOut.string">string</a></code> | Creates a new `TypeOut` instance representing a String type. |

---

##### `arrayOf` <a name="arrayOf" id="wdk-lib.TypeOut.arrayOf"></a>

```typescript
import { TypeOut } from 'wdk-lib'

TypeOut.arrayOf(contentType: TypeOut)
```

Specify the type array with elements of the given custom type.

###### `contentType`<sup>Required</sup> <a name="contentType" id="wdk-lib.TypeOut.arrayOf.parameter.contentType"></a>

- *Type:* <a href="#wdk-lib.TypeOut">TypeOut</a>

The type of the elements in the array.

---

##### `boolean` <a name="boolean" id="wdk-lib.TypeOut.boolean"></a>

```typescript
import { TypeOut } from 'wdk-lib'

TypeOut.boolean()
```

Creates a new `TypeOut` instance representing a Boolean type.

##### `directory` <a name="directory" id="wdk-lib.TypeOut.directory"></a>

```typescript
import { TypeOut } from 'wdk-lib'

TypeOut.directory()
```

Creates a new `TypeOut` instance representing a Directory type.

##### `double` <a name="double" id="wdk-lib.TypeOut.double"></a>

```typescript
import { TypeOut } from 'wdk-lib'

TypeOut.double()
```

Creates a new `TypeOut` instance representing a Double type.

##### `file` <a name="file" id="wdk-lib.TypeOut.file"></a>

```typescript
import { TypeOut } from 'wdk-lib'

TypeOut.file()
```

Creates a new `TypeOut` instance representing a File type.

##### `float` <a name="float" id="wdk-lib.TypeOut.float"></a>

```typescript
import { TypeOut } from 'wdk-lib'

TypeOut.float()
```

Creates a new `TypeOut` instance representing a Float type.

##### `int` <a name="int" id="wdk-lib.TypeOut.int"></a>

```typescript
import { TypeOut } from 'wdk-lib'

TypeOut.int()
```

Creates a new `TypeOut` instance representing an Integer type.

##### `stderr` <a name="stderr" id="wdk-lib.TypeOut.stderr"></a>

```typescript
import { TypeOut } from 'wdk-lib'

TypeOut.stderr()
```

Creates a new `TypeOut` instance representing standard error (stderr).

##### `stdout` <a name="stdout" id="wdk-lib.TypeOut.stdout"></a>

```typescript
import { TypeOut } from 'wdk-lib'

TypeOut.stdout()
```

Creates a new `TypeOut` instance representing standard output (stdout).

##### `string` <a name="string" id="wdk-lib.TypeOut.string"></a>

```typescript
import { TypeOut } from 'wdk-lib'

TypeOut.string()
```

Creates a new `TypeOut` instance representing a String type.



### Value <a name="Value" id="wdk-lib.Value"></a>

Helper class for generating CWL valueFrom expressions.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Value.boolean">boolean</a></code> | Generates a CWL boolean expression. |
| <code><a href="#wdk-lib.Value.double">double</a></code> | Generates a CWL double expression. |
| <code><a href="#wdk-lib.Value.expression">expression</a></code> | Generates a CWL expression from a custom JavaScript-compatible string. |
| <code><a href="#wdk-lib.Value.float">float</a></code> | Generates a CWL float expression. |
| <code><a href="#wdk-lib.Value.int">int</a></code> | Generates a CWL integer expression. |
| <code><a href="#wdk-lib.Value.long">long</a></code> | Generates a CWL long integer expression. |
| <code><a href="#wdk-lib.Value.null">null</a></code> | Generates a CWL null expression to represent no value. |
| <code><a href="#wdk-lib.Value.string">string</a></code> | Generates a CWL string value. |
| <code><a href="#wdk-lib.Value.stringArray">stringArray</a></code> | Generates a CWL string array expression. |

---

##### `boolean` <a name="boolean" id="wdk-lib.Value.boolean"></a>

```typescript
import { Value } from 'wdk-lib'

Value.boolean(value: boolean)
```

Generates a CWL boolean expression.

*Example*

```typescript
Value.boolean(true); // "$(true)"
```


###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Value.boolean.parameter.value"></a>

- *Type:* boolean

The boolean value (true or false).

---

##### `double` <a name="double" id="wdk-lib.Value.double"></a>

```typescript
import { Value } from 'wdk-lib'

Value.double(value: number)
```

Generates a CWL double expression.

*Example*

```typescript
Value.double(3.14159); // "$(3.14159)"
```


###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Value.double.parameter.value"></a>

- *Type:* number

A 64-bit floating-point number.

---

##### `expression` <a name="expression" id="wdk-lib.Value.expression"></a>

```typescript
import { Value } from 'wdk-lib'

Value.expression(expr: string)
```

Generates a CWL expression from a custom JavaScript-compatible string.

*Example*

```typescript
Value.expression("inputs.my_input * 2"); // "$(inputs.my_input * 2)"
```


###### `expr`<sup>Required</sup> <a name="expr" id="wdk-lib.Value.expression.parameter.expr"></a>

- *Type:* string

A custom JavaScript-compatible expression.

---

##### `float` <a name="float" id="wdk-lib.Value.float"></a>

```typescript
import { Value } from 'wdk-lib'

Value.float(value: number)
```

Generates a CWL float expression.

*Example*

```typescript
Value.float(3.14); // "$(3.14)"
```


###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Value.float.parameter.value"></a>

- *Type:* number

A 32-bit floating-point number.

---

##### `int` <a name="int" id="wdk-lib.Value.int"></a>

```typescript
import { Value } from 'wdk-lib'

Value.int(value: number)
```

Generates a CWL integer expression.

*Example*

```typescript
Value.int(42); // "$(42)"
```


###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Value.int.parameter.value"></a>

- *Type:* number

A 32-bit signed integer.

---

##### `long` <a name="long" id="wdk-lib.Value.long"></a>

```typescript
import { Value } from 'wdk-lib'

Value.long(value: number)
```

Generates a CWL long integer expression.

*Example*

```typescript
Value.long(1000000000); // "$(1000000000)"
```


###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Value.long.parameter.value"></a>

- *Type:* number

A 64-bit signed integer.

---

##### `null` <a name="null" id="wdk-lib.Value.null"></a>

```typescript
import { Value } from 'wdk-lib'

Value.null()
```

Generates a CWL null expression to represent no value.

*Example*

```typescript
Value.null(); // "$(null)"
```


##### `string` <a name="string" id="wdk-lib.Value.string"></a>

```typescript
import { Value } from 'wdk-lib'

Value.string(value: string)
```

Generates a CWL string value.

*Example*

```typescript
Value.string("hello world"); // "hello world"
```


###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Value.string.parameter.value"></a>

- *Type:* string

A Unicode character sequence.

---

##### `stringArray` <a name="stringArray" id="wdk-lib.Value.stringArray"></a>

```typescript
import { Value } from 'wdk-lib'

Value.stringArray(values: string[])
```

Generates a CWL string array expression.

*Example*

```typescript
Value.stringArray(["hello", "world"]); // "$(["hello", "world"])"
```


###### `values`<sup>Required</sup> <a name="values" id="wdk-lib.Value.stringArray.parameter.values"></a>

- *Type:* string[]

An array of strings.

---



### WdkUtils <a name="WdkUtils" id="wdk-lib.WdkUtils"></a>


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

WdkUtils.createSynthInfo(step: StepConstruct, workflowDirectory: string)
```

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.WdkUtils.createSynthInfo.parameter.step"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

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

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>, <a href="#wdk-lib.IWorkflow">IWorkflow</a>

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
| <code><a href="#wdk-lib.Workflow.addMetadata">addMetadata</a></code> | Add metadata to this construct. |
| <code><a href="#wdk-lib.Workflow.findNodesWithMetadata">findNodesWithMetadata</a></code> | Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair. |
| <code><a href="#wdk-lib.Workflow.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.Workflow.serialize">serialize</a></code> | Serialize the step to a directory. |
| <code><a href="#wdk-lib.Workflow.addStep">addStep</a></code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.toMap">toMap</a></code> | Convert the object to a map representation following the CWL specification. |

---

##### `addMetadata` <a name="addMetadata" id="wdk-lib.Workflow.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add metadata to this construct.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Workflow.addMetadata.parameter.key"></a>

- *Type:* string

The key of the metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Workflow.addMetadata.parameter.value"></a>

- *Type:* any

The value of the metadata.

---

##### `findNodesWithMetadata` <a name="findNodesWithMetadata" id="wdk-lib.Workflow.findNodesWithMetadata"></a>

```typescript
public findNodesWithMetadata(key: string, value?: any): Construct[]
```

Traverses the construct tree and returns an array of nodes that have the given metadata key-value pair.

If value is not provided, returns all constructs that have the specified metadata key.

###### `key`<sup>Required</sup> <a name="key" id="wdk-lib.Workflow.findNodesWithMetadata.parameter.key"></a>

- *Type:* string

The metadata key to match.

---

###### `value`<sup>Optional</sup> <a name="value" id="wdk-lib.Workflow.findNodesWithMetadata.parameter.value"></a>

- *Type:* any

The metadata value to match (optional).

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

##### `addStep` <a name="addStep" id="wdk-lib.Workflow.addStep"></a>

```typescript
public addStep(step: IStep): void
```

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Workflow.addStep.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

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
| <code><a href="#wdk-lib.Workflow.property.metadata">metadata</a></code> | <code>{[ key: string ]: any}</code> | Get metadata for this construct. |
| <code><a href="#wdk-lib.Workflow.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Workflow.property.id">id</a></code> | <code>string</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Workflow.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.Workflow.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.Workflow.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.Workflow.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.Workflow.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.Workflow.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.Workflow.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.Workflow.property.stepInputsValueFrom">stepInputsValueFrom</a></code> | <code><a href="#wdk-lib.StepInputsValue">StepInputsValue</a></code> | Get the stepValueFrom object if the step is a stepValueFrom step. |
| <code><a href="#wdk-lib.Workflow.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.Workflow.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.property.props">props</a></code> | <code><a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.property.requirements">requirements</a></code> | <code><a href="#wdk-lib.Requirement">Requirement</a>[]</code> | *No description.* |

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="wdk-lib.Workflow.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Get metadata for this construct.

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

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.Workflow.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.Workflow.property.scatter"></a>

```typescript
public readonly scatter: Scatter;
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `stepInputsValueFrom`<sup>Optional</sup> <a name="stepInputsValueFrom" id="wdk-lib.Workflow.property.stepInputsValueFrom"></a>

```typescript
public readonly stepInputsValueFrom: StepInputsValue;
```

- *Type:* <a href="#wdk-lib.StepInputsValue">StepInputsValue</a>

Get the stepValueFrom object if the step is a stepValueFrom step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.Workflow.property.config"></a>

```typescript
public readonly config: ToolConfig;
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.Workflow.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.Workflow.property.stepClass"></a>

```typescript
public readonly stepClass: StepClass;
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

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


### WorkflowValues <a name="WorkflowValues" id="wdk-lib.WorkflowValues"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>

Represents the values associated with inputs of a workflow.

This class allows for the management and retrieval of input values that are part of a workflow,
facilitating tasks such as mapping inputs to their values, extracting file paths, and converting
inputs to serializable formats.

*Example*

```typescript
import { WorkflowValues, Input, Constructs } from 'wdk-lib';
const root = Constructs.createRoot('root');
const input1 = Input.string(root, 'firstInput').withDefaultValue('defaultValue');
const input2 = Input.file(root, 'fileInput');
const workflowValues = WorkflowValues.create('MyTask')
                         .addInput(input1, 'customValue')
                         .addInput(input2, new InputReference('/path/to/file'));
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.WorkflowValues.addInput">addInput</a></code> | Associates a value with an input object. |
| <code><a href="#wdk-lib.WorkflowValues.toMap">toMap</a></code> | Converts the internal map of inputs to an object for easier serialization. |

---

##### `addInput` <a name="addInput" id="wdk-lib.WorkflowValues.addInput"></a>

```typescript
public addInput(input: Input, value: any): WorkflowValues
```

Associates a value with an input object.

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.WorkflowValues.addInput.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

The input object to reference the value to.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.WorkflowValues.addInput.parameter.value"></a>

- *Type:* any

The value to be associated with the input.

---

##### `toMap` <a name="toMap" id="wdk-lib.WorkflowValues.toMap"></a>

```typescript
public toMap(): {[ key: string ]: any}
```

Converts the internal map of inputs to an object for easier serialization.

Each input's value is mapped either directly or through its `toMap` method
if it is an instance of `InputReference`.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.WorkflowValues.create">create</a></code> | Creates a new instance of WorkflowValues with an optional task name. |

---

##### `create` <a name="create" id="wdk-lib.WorkflowValues.create"></a>

```typescript
import { WorkflowValues } from 'wdk-lib'

WorkflowValues.create(scope: StepConstruct)
```

Creates a new instance of WorkflowValues with an optional task name.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.WorkflowValues.create.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The scope where the values are applied.

This can be a workflow or a Tool.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.WorkflowValues.property.filePaths">filePaths</a></code> | <code>string[]</code> | Retrieves the file paths for all inputs that are files. |
| <code><a href="#wdk-lib.WorkflowValues.property.inputs">inputs</a></code> | <code>{[ key: string ]: string \| number \| boolean \| string[] \| <a href="#wdk-lib.InputReference">InputReference</a> \| <a href="#wdk-lib.InputReference">InputReference</a>[]}</code> | Returns a map of input IDs to their associated values. |
| <code><a href="#wdk-lib.WorkflowValues.property.localInputReferences">localInputReferences</a></code> | <code><a href="#wdk-lib.InputReference">InputReference</a>[]</code> | Retrieves all local InputReferences that have a path defined. |
| <code><a href="#wdk-lib.WorkflowValues.property.taskName">taskName</a></code> | <code>string</code> | Retrieves the task name associated with these workflow values. |

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="wdk-lib.WorkflowValues.property.filePaths"></a>

```typescript
public readonly filePaths: string[];
```

- *Type:* string[]

Retrieves the file paths for all inputs that are files.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.WorkflowValues.property.inputs"></a>

```typescript
public readonly inputs: {[ key: string ]: string | number | boolean | string[] | InputReference | InputReference[]};
```

- *Type:* {[ key: string ]: string | number | boolean | string[] | <a href="#wdk-lib.InputReference">InputReference</a> | <a href="#wdk-lib.InputReference">InputReference</a>[]}

Returns a map of input IDs to their associated values.

---

##### `localInputReferences`<sup>Required</sup> <a name="localInputReferences" id="wdk-lib.WorkflowValues.property.localInputReferences"></a>

```typescript
public readonly localInputReferences: InputReference[];
```

- *Type:* <a href="#wdk-lib.InputReference">InputReference</a>[]

Retrieves all local InputReferences that have a path defined.

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="wdk-lib.WorkflowValues.property.taskName"></a>

```typescript
public readonly taskName: string;
```

- *Type:* string

Retrieves the task name associated with these workflow values.

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

### IExpressionTool <a name="IExpressionTool" id="wdk-lib.IExpressionTool"></a>

- *Implemented By:* <a href="#wdk-lib.IExpressionTool">IExpressionTool</a>



### ILinkable <a name="ILinkable" id="wdk-lib.ILinkable"></a>

- *Implemented By:* <a href="#wdk-lib.Input">Input</a>, <a href="#wdk-lib.LinkableConstruct">LinkableConstruct</a>, <a href="#wdk-lib.Output">Output</a>, <a href="#wdk-lib.ILinkable">ILinkable</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.ILinkable.linkTo">linkTo</a></code> | Link this linkable construct to another one. |
| <code><a href="#wdk-lib.ILinkable.pickValue">pickValue</a></code> | Set the PickValueMethod for this linkable if there are multiple sources linked to it. |

---

##### `linkTo` <a name="linkTo" id="wdk-lib.ILinkable.linkTo"></a>

```typescript
public linkTo(link: ILinkable): ILinkable
```

Link this linkable construct to another one.

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
| <code><a href="#wdk-lib.ILinkable.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.id">id</a></code> | <code>string</code> | Access the identified of this construct. |

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

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.ILinkable.property.scope"></a>

```typescript
public readonly scope: Construct;
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.ILinkable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Access the identified of this construct.

---

### IMappable <a name="IMappable" id="wdk-lib.IMappable"></a>

- *Implemented By:* <a href="#wdk-lib.BashTool">BashTool</a>, <a href="#wdk-lib.CheckFileNameTool">CheckFileNameTool</a>, <a href="#wdk-lib.CloudService">CloudService</a>, <a href="#wdk-lib.ExpressionTool">ExpressionTool</a>, <a href="#wdk-lib.InputReference">InputReference</a>, <a href="#wdk-lib.Output">Output</a>, <a href="#wdk-lib.RenameExpressionTool">RenameExpressionTool</a>, <a href="#wdk-lib.Tool">Tool</a>, <a href="#wdk-lib.Workflow">Workflow</a>, <a href="#wdk-lib.WorkflowValues">WorkflowValues</a>, <a href="#wdk-lib.IMappable">IMappable</a>

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

- *Implemented By:* <a href="#wdk-lib.BashTool">BashTool</a>, <a href="#wdk-lib.CheckFileNameTool">CheckFileNameTool</a>, <a href="#wdk-lib.CloudService">CloudService</a>, <a href="#wdk-lib.ExpressionTool">ExpressionTool</a>, <a href="#wdk-lib.RenameExpressionTool">RenameExpressionTool</a>, <a href="#wdk-lib.StepConstruct">StepConstruct</a>, <a href="#wdk-lib.Tool">Tool</a>, <a href="#wdk-lib.Workflow">Workflow</a>, <a href="#wdk-lib.IStep">IStep</a>

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
| <code><a href="#wdk-lib.IStep.property.inputs">inputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | All inputs of the step. |
| <code><a href="#wdk-lib.IStep.property.linkedInputs">linkedInputs</a></code> | <code><a href="#wdk-lib.Input">Input</a>[]</code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.IStep.property.linkedOutputs">linkedOutputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.IStep.property.outputs">outputs</a></code> | <code><a href="#wdk-lib.Output">Output</a>[]</code> | All outputs of the step. |
| <code><a href="#wdk-lib.IStep.property.steps">steps</a></code> | <code><a href="#wdk-lib.IStep">IStep</a>[]</code> | All steps nested within this step. |
| <code><a href="#wdk-lib.IStep.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.IStep.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.IStep.property.stepInputsValueFrom">stepInputsValueFrom</a></code> | <code><a href="#wdk-lib.StepInputsValue">StepInputsValue</a></code> | Get the stepValueFrom object if the step is a stepValueFrom step. |
| <code><a href="#wdk-lib.IStep.property.fileName">fileName</a></code> | <code>string</code> | The name of the step file. |
| <code><a href="#wdk-lib.IStep.property.id">id</a></code> | <code>string</code> | Unique identifier for the step in the workflow. |

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

##### `stepInputsValueFrom`<sup>Optional</sup> <a name="stepInputsValueFrom" id="wdk-lib.IStep.property.stepInputsValueFrom"></a>

```typescript
public readonly stepInputsValueFrom: StepInputsValue;
```

- *Type:* <a href="#wdk-lib.StepInputsValue">StepInputsValue</a>

Get the stepValueFrom object if the step is a stepValueFrom step.

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.IStep.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.IStep.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique identifier for the step in the workflow.

---

### ITool <a name="ITool" id="wdk-lib.ITool"></a>

- *Implemented By:* <a href="#wdk-lib.ITool">ITool</a>



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

### IWorkflow <a name="IWorkflow" id="wdk-lib.IWorkflow"></a>

- *Implemented By:* <a href="#wdk-lib.CloudService">CloudService</a>, <a href="#wdk-lib.Workflow">Workflow</a>, <a href="#wdk-lib.IWorkflow">IWorkflow</a>



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


### StepClass <a name="StepClass" id="wdk-lib.StepClass"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.StepClass.COMMAND_LINE_TOOL">COMMAND_LINE_TOOL</a></code> | *No description.* |
| <code><a href="#wdk-lib.StepClass.EXPRESSION_TOOL">EXPRESSION_TOOL</a></code> | *No description.* |
| <code><a href="#wdk-lib.StepClass.WORKFLOW">WORKFLOW</a></code> | *No description.* |
| <code><a href="#wdk-lib.StepClass.UNDEFINED">UNDEFINED</a></code> | *No description.* |

---

##### `COMMAND_LINE_TOOL` <a name="COMMAND_LINE_TOOL" id="wdk-lib.StepClass.COMMAND_LINE_TOOL"></a>

---


##### `EXPRESSION_TOOL` <a name="EXPRESSION_TOOL" id="wdk-lib.StepClass.EXPRESSION_TOOL"></a>

---


##### `WORKFLOW` <a name="WORKFLOW" id="wdk-lib.StepClass.WORKFLOW"></a>

---


##### `UNDEFINED` <a name="UNDEFINED" id="wdk-lib.StepClass.UNDEFINED"></a>

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

