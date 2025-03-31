# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### RequirementProps <a name="RequirementProps" id="wdk-lib.RequirementProps"></a>

#### Initializer <a name="Initializer" id="wdk-lib.RequirementProps.Initializer"></a>

```java
import com.biobam.wdk.lib.RequirementProps;

RequirementProps.builder()
//  .coresMax(java.lang.Number)
//  .coresMin(java.lang.Number)
//  .outdirMax(java.lang.Number)
//  .outdirMin(java.lang.Number)
//  .ramMax(java.lang.Number)
//  .ramMin(java.lang.Number)
//  .tmpdirMax(java.lang.Number)
//  .tmpdirMin(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.RequirementProps.property.coresMax">coresMax</a></code> | <code>java.lang.Number</code> | Maximum reserved number of CPU cores. |
| <code><a href="#wdk-lib.RequirementProps.property.coresMin">coresMin</a></code> | <code>java.lang.Number</code> | Minimum reserved number of CPU cores. |
| <code><a href="#wdk-lib.RequirementProps.property.outdirMax">outdirMax</a></code> | <code>java.lang.Number</code> | Maximum reserved filesystem based storage for the designated output directory, in mebibytes (2**20). |
| <code><a href="#wdk-lib.RequirementProps.property.outdirMin">outdirMin</a></code> | <code>java.lang.Number</code> | Minimum reserved filesystem based storage for the designated output directory, in mebibytes (2**20). |
| <code><a href="#wdk-lib.RequirementProps.property.ramMax">ramMax</a></code> | <code>java.lang.Number</code> | Maximum reserved RAM in mebibytes (2**20). |
| <code><a href="#wdk-lib.RequirementProps.property.ramMin">ramMin</a></code> | <code>java.lang.Number</code> | Minimum reserved RAM in mebibytes (2**20). |
| <code><a href="#wdk-lib.RequirementProps.property.tmpdirMax">tmpdirMax</a></code> | <code>java.lang.Number</code> | Maximum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20). |
| <code><a href="#wdk-lib.RequirementProps.property.tmpdirMin">tmpdirMin</a></code> | <code>java.lang.Number</code> | Minimum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20). |

---

##### `coresMax`<sup>Optional</sup> <a name="coresMax" id="wdk-lib.RequirementProps.property.coresMax"></a>

```java
public java.lang.Number getCoresMax();
```

- *Type:* java.lang.Number

Maximum reserved number of CPU cores.

---

##### `coresMin`<sup>Optional</sup> <a name="coresMin" id="wdk-lib.RequirementProps.property.coresMin"></a>

```java
public java.lang.Number getCoresMin();
```

- *Type:* java.lang.Number

Minimum reserved number of CPU cores.

---

##### `outdirMax`<sup>Optional</sup> <a name="outdirMax" id="wdk-lib.RequirementProps.property.outdirMax"></a>

```java
public java.lang.Number getOutdirMax();
```

- *Type:* java.lang.Number

Maximum reserved filesystem based storage for the designated output directory, in mebibytes (2**20).

---

##### `outdirMin`<sup>Optional</sup> <a name="outdirMin" id="wdk-lib.RequirementProps.property.outdirMin"></a>

```java
public java.lang.Number getOutdirMin();
```

- *Type:* java.lang.Number

Minimum reserved filesystem based storage for the designated output directory, in mebibytes (2**20).

---

##### `ramMax`<sup>Optional</sup> <a name="ramMax" id="wdk-lib.RequirementProps.property.ramMax"></a>

```java
public java.lang.Number getRamMax();
```

- *Type:* java.lang.Number

Maximum reserved RAM in mebibytes (2**20).

---

##### `ramMin`<sup>Optional</sup> <a name="ramMin" id="wdk-lib.RequirementProps.property.ramMin"></a>

```java
public java.lang.Number getRamMin();
```

- *Type:* java.lang.Number

Minimum reserved RAM in mebibytes (2**20).

---

##### `tmpdirMax`<sup>Optional</sup> <a name="tmpdirMax" id="wdk-lib.RequirementProps.property.tmpdirMax"></a>

```java
public java.lang.Number getTmpdirMax();
```

- *Type:* java.lang.Number

Maximum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20).

---

##### `tmpdirMin`<sup>Optional</sup> <a name="tmpdirMin" id="wdk-lib.RequirementProps.property.tmpdirMin"></a>

```java
public java.lang.Number getTmpdirMin();
```

- *Type:* java.lang.Number

Minimum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20).

---

### ServiceProps <a name="ServiceProps" id="wdk-lib.ServiceProps"></a>

Interface defining the properties of a Service, including attributes such as label, ID, and resources.

#### Initializer <a name="Initializer" id="wdk-lib.ServiceProps.Initializer"></a>

```java
import com.biobam.wdk.lib.ServiceProps;

ServiceProps.builder()
    .label(java.lang.String)
    .serviceId(java.lang.String)
    .serviceVersion(java.lang.String)
//  .assignedCores(java.lang.Number)
//  .assignedMemoryMb(java.lang.Number)
//  .assignedTempDirMb(java.lang.Number)
//  .containerRepository(java.lang.String)
//  .mountPoint(java.lang.String)
//  .parameterValuesAsStrings(java.lang.Boolean)
//  .serviceDatabasePath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ServiceProps.property.label">label</a></code> | <code>java.lang.String</code> | A descriptive label for the service. |
| <code><a href="#wdk-lib.ServiceProps.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Unique identifier for the service. |
| <code><a href="#wdk-lib.ServiceProps.property.serviceVersion">serviceVersion</a></code> | <code>java.lang.String</code> | Version number of the service. |
| <code><a href="#wdk-lib.ServiceProps.property.assignedCores">assignedCores</a></code> | <code>java.lang.Number</code> | Optional: Number of CPU cores assigned to the service. |
| <code><a href="#wdk-lib.ServiceProps.property.assignedMemoryMb">assignedMemoryMb</a></code> | <code>java.lang.Number</code> | Optional: Amount of memory in MB assigned to the service. |
| <code><a href="#wdk-lib.ServiceProps.property.assignedTempDirMb">assignedTempDirMb</a></code> | <code>java.lang.Number</code> | Optional: Size of the temporary directory in MB. |
| <code><a href="#wdk-lib.ServiceProps.property.containerRepository">containerRepository</a></code> | <code>java.lang.String</code> | Optional: Repository where the container image is stored. |
| <code><a href="#wdk-lib.ServiceProps.property.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Optional: Mount point for the database. |
| <code><a href="#wdk-lib.ServiceProps.property.parameterValuesAsStrings">parameterValuesAsStrings</a></code> | <code>java.lang.Boolean</code> | Optional: Whether to create all parameter values as strings. |
| <code><a href="#wdk-lib.ServiceProps.property.serviceDatabasePath">serviceDatabasePath</a></code> | <code>java.lang.String</code> | Optional: Path to the service's database. |

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.ServiceProps.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

A descriptive label for the service.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="wdk-lib.ServiceProps.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

Unique identifier for the service.

---

##### `serviceVersion`<sup>Required</sup> <a name="serviceVersion" id="wdk-lib.ServiceProps.property.serviceVersion"></a>

```java
public java.lang.String getServiceVersion();
```

- *Type:* java.lang.String

Version number of the service.

---

##### `assignedCores`<sup>Optional</sup> <a name="assignedCores" id="wdk-lib.ServiceProps.property.assignedCores"></a>

```java
public java.lang.Number getAssignedCores();
```

- *Type:* java.lang.Number

Optional: Number of CPU cores assigned to the service.

Defaults to 1 if not specified.

---

##### `assignedMemoryMb`<sup>Optional</sup> <a name="assignedMemoryMb" id="wdk-lib.ServiceProps.property.assignedMemoryMb"></a>

```java
public java.lang.Number getAssignedMemoryMb();
```

- *Type:* java.lang.Number

Optional: Amount of memory in MB assigned to the service.

Defaults to 2048 MB if not specified.

---

##### `assignedTempDirMb`<sup>Optional</sup> <a name="assignedTempDirMb" id="wdk-lib.ServiceProps.property.assignedTempDirMb"></a>

```java
public java.lang.Number getAssignedTempDirMb();
```

- *Type:* java.lang.Number

Optional: Size of the temporary directory in MB.

Defaults to 2048 MB if not specified.

---

##### `containerRepository`<sup>Optional</sup> <a name="containerRepository" id="wdk-lib.ServiceProps.property.containerRepository"></a>

```java
public java.lang.String getContainerRepository();
```

- *Type:* java.lang.String

Optional: Repository where the container image is stored.

This is only the base repository, not the full image path.

---

##### `mountPoint`<sup>Optional</sup> <a name="mountPoint" id="wdk-lib.ServiceProps.property.mountPoint"></a>

```java
public java.lang.String getMountPoint();
```

- *Type:* java.lang.String

Optional: Mount point for the database.

---

##### `parameterValuesAsStrings`<sup>Optional</sup> <a name="parameterValuesAsStrings" id="wdk-lib.ServiceProps.property.parameterValuesAsStrings"></a>

```java
public java.lang.Boolean getParameterValuesAsStrings();
```

- *Type:* java.lang.Boolean

Optional: Whether to create all parameter values as strings.

Look at how they are used currently.

---

##### `serviceDatabasePath`<sup>Optional</sup> <a name="serviceDatabasePath" id="wdk-lib.ServiceProps.property.serviceDatabasePath"></a>

```java
public java.lang.String getServiceDatabasePath();
```

- *Type:* java.lang.String

Optional: Path to the service's database.

---

## Classes <a name="Classes" id="Classes"></a>

### App <a name="App" id="wdk-lib.App"></a>

#### Initializers <a name="Initializers" id="wdk-lib.App.Initializer"></a>

```java
import com.biobam.wdk.lib.App;

new App();
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

```java
public void synth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.App.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.App.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.App.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.App.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---


### BashTool <a name="BashTool" id="wdk-lib.BashTool"></a>

#### Initializers <a name="Initializers" id="wdk-lib.BashTool.Initializer"></a>

```java
import com.biobam.wdk.lib.BashTool;

new BashTool(java.lang.Object scope, java.lang.String id, IBashToolProps props);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.BashTool.Initializer.parameter.scope">scope</a></code> | <code>java.lang.Object</code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.BashTool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.BashTool.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.IBashToolProps">IBashToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.BashTool.Initializer.parameter.scope"></a>

- *Type:* java.lang.Object

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.BashTool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

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

```java
public java.lang.Boolean hasSteps()
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.BashTool.serialize"></a>

```java
public SynthFiles serialize(java.lang.String dirPath)
```

Serialize the tool to a CWL file.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.BashTool.serialize.parameter.dirPath"></a>

- *Type:* java.lang.String

---

##### `toMap` <a name="toMap" id="wdk-lib.BashTool.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
```

Create a map repsentation of the tool following the CWL specification.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.BashTool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.BashTool.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.BashTool.property.inputs">inputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | All inputs of the step. |
| <code><a href="#wdk-lib.BashTool.property.label">label</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#wdk-lib.BashTool.property.linkedInputs">linkedInputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.BashTool.property.linkedOutputs">linkedOutputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.BashTool.property.outputs">outputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | All outputs of the step. |
| <code><a href="#wdk-lib.BashTool.property.steps">steps</a></code> | <code>java.util.List<<a href="#wdk-lib.IStep">IStep</a>></code> | All steps nested within this step. |
| <code><a href="#wdk-lib.BashTool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.BashTool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.BashTool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.BashTool.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The name of the step file. |
| <code><a href="#wdk-lib.BashTool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.BashTool.property.requirements">requirements</a></code> | <code>java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>></code> | *No description.* |
| <code><a href="#wdk-lib.BashTool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.BashTool.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.BashTool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.BashTool.property.inputs"></a>

```java
public java.util.List<Input> getInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.BashTool.property.label"></a>

```java
public java.lang.Object getLabel();
```

- *Type:* java.lang.Object

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.BashTool.property.linkedInputs"></a>

```java
public java.util.List<Input> getLinkedInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.BashTool.property.linkedOutputs"></a>

```java
public java.util.List<Output> getLinkedOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.BashTool.property.outputs"></a>

```java
public java.util.List<Output> getOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

All outputs of the step.

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.BashTool.property.steps"></a>

```java
public java.util.List<IStep> getSteps();
```

- *Type:* java.util.List<<a href="#wdk-lib.IStep">IStep</a>>

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.BashTool.property.conditional"></a>

```java
public Conditional getConditional();
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.BashTool.property.scatter"></a>

```java
public Scatter getScatter();
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.BashTool.property.config"></a>

```java
public ToolConfig getConfig();
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.BashTool.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.BashTool.property.stepClass"></a>

```java
public StepClass getStepClass();
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.BashTool.property.requirements"></a>

```java
public java.util.List<Requirement> getRequirements();
```

- *Type:* java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>>

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.BashTool.property.props"></a>

```java
public IToolProps getProps();
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---


### CheckFileNameTool <a name="CheckFileNameTool" id="wdk-lib.CheckFileNameTool"></a>

#### Initializers <a name="Initializers" id="wdk-lib.CheckFileNameTool.Initializer"></a>

```java
import com.biobam.wdk.lib.CheckFileNameTool;

new CheckFileNameTool(java.lang.Object scope, java.lang.String id);,new CheckFileNameTool(java.lang.Object scope, java.lang.String id, IToolProps props);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.CheckFileNameTool.Initializer.parameter.scope">scope</a></code> | <code>java.lang.Object</code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.CheckFileNameTool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.CheckFileNameTool.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.CheckFileNameTool.Initializer.parameter.scope"></a>

- *Type:* java.lang.Object

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.CheckFileNameTool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

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

```java
public java.lang.Boolean hasSteps()
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.CheckFileNameTool.serialize"></a>

```java
public SynthFiles serialize(java.lang.String dirPath)
```

Serialize the tool to a CWL file.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.CheckFileNameTool.serialize.parameter.dirPath"></a>

- *Type:* java.lang.String

---

##### `toMap` <a name="toMap" id="wdk-lib.CheckFileNameTool.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
```

Create a map repsentation of the tool following the CWL specification.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.CheckFileNameTool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.inputs">inputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | All inputs of the step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.label">label</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.linkedInputs">linkedInputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.linkedOutputs">linkedOutputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.outputs">outputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | All outputs of the step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.steps">steps</a></code> | <code>java.util.List<<a href="#wdk-lib.IStep">IStep</a>></code> | All steps nested within this step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The name of the step file. |
| <code><a href="#wdk-lib.CheckFileNameTool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.requirements">requirements</a></code> | <code>java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.checkname">checkname</a></code> | <code><a href="#wdk-lib.Input">Input</a></code> | *No description.* |
| <code><a href="#wdk-lib.CheckFileNameTool.property.f1">f1</a></code> | <code><a href="#wdk-lib.Input">Input</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.CheckFileNameTool.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.CheckFileNameTool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.CheckFileNameTool.property.inputs"></a>

```java
public java.util.List<Input> getInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.CheckFileNameTool.property.label"></a>

```java
public java.lang.Object getLabel();
```

- *Type:* java.lang.Object

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.CheckFileNameTool.property.linkedInputs"></a>

```java
public java.util.List<Input> getLinkedInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.CheckFileNameTool.property.linkedOutputs"></a>

```java
public java.util.List<Output> getLinkedOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.CheckFileNameTool.property.outputs"></a>

```java
public java.util.List<Output> getOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

All outputs of the step.

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.CheckFileNameTool.property.steps"></a>

```java
public java.util.List<IStep> getSteps();
```

- *Type:* java.util.List<<a href="#wdk-lib.IStep">IStep</a>>

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.CheckFileNameTool.property.conditional"></a>

```java
public Conditional getConditional();
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.CheckFileNameTool.property.scatter"></a>

```java
public Scatter getScatter();
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.CheckFileNameTool.property.config"></a>

```java
public ToolConfig getConfig();
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.CheckFileNameTool.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.CheckFileNameTool.property.stepClass"></a>

```java
public StepClass getStepClass();
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.CheckFileNameTool.property.requirements"></a>

```java
public java.util.List<Requirement> getRequirements();
```

- *Type:* java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>>

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.CheckFileNameTool.property.props"></a>

```java
public IToolProps getProps();
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---

##### `checkname`<sup>Required</sup> <a name="checkname" id="wdk-lib.CheckFileNameTool.property.checkname"></a>

```java
public Input getCheckname();
```

- *Type:* <a href="#wdk-lib.Input">Input</a>

---

##### `f1`<sup>Required</sup> <a name="f1" id="wdk-lib.CheckFileNameTool.property.f1"></a>

```java
public Input getF1();
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

```java
import com.biobam.wdk.lib.CloudService;

CloudService.Builder.create(Workflow scope, java.lang.String id)
    .label(java.lang.String)
    .serviceId(java.lang.String)
    .serviceVersion(java.lang.String)
//  .assignedCores(java.lang.Number)
//  .assignedMemoryMb(java.lang.Number)
//  .assignedTempDirMb(java.lang.Number)
//  .containerRepository(java.lang.String)
//  .mountPoint(java.lang.String)
//  .parameterValuesAsStrings(java.lang.Boolean)
//  .serviceDatabasePath(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.Workflow">Workflow</a></code> | - The workflow this service belongs to. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | - A unique identifier for the service within its workflow. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | A descriptive label for the service. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | Unique identifier for the service. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.serviceVersion">serviceVersion</a></code> | <code>java.lang.String</code> | Version number of the service. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.assignedCores">assignedCores</a></code> | <code>java.lang.Number</code> | Optional: Number of CPU cores assigned to the service. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.assignedMemoryMb">assignedMemoryMb</a></code> | <code>java.lang.Number</code> | Optional: Amount of memory in MB assigned to the service. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.assignedTempDirMb">assignedTempDirMb</a></code> | <code>java.lang.Number</code> | Optional: Size of the temporary directory in MB. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.containerRepository">containerRepository</a></code> | <code>java.lang.String</code> | Optional: Repository where the container image is stored. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.mountPoint">mountPoint</a></code> | <code>java.lang.String</code> | Optional: Mount point for the database. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.parameterValuesAsStrings">parameterValuesAsStrings</a></code> | <code>java.lang.Boolean</code> | Optional: Whether to create all parameter values as strings. |
| <code><a href="#wdk-lib.CloudService.Initializer.parameter.serviceDatabasePath">serviceDatabasePath</a></code> | <code>java.lang.String</code> | Optional: Path to the service's database. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.CloudService.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

The workflow this service belongs to.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.CloudService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

A unique identifier for the service within its workflow.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.CloudService.Initializer.parameter.label"></a>

- *Type:* java.lang.String

A descriptive label for the service.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="wdk-lib.CloudService.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

Unique identifier for the service.

---

##### `serviceVersion`<sup>Required</sup> <a name="serviceVersion" id="wdk-lib.CloudService.Initializer.parameter.serviceVersion"></a>

- *Type:* java.lang.String

Version number of the service.

---

##### `assignedCores`<sup>Optional</sup> <a name="assignedCores" id="wdk-lib.CloudService.Initializer.parameter.assignedCores"></a>

- *Type:* java.lang.Number

Optional: Number of CPU cores assigned to the service.

Defaults to 1 if not specified.

---

##### `assignedMemoryMb`<sup>Optional</sup> <a name="assignedMemoryMb" id="wdk-lib.CloudService.Initializer.parameter.assignedMemoryMb"></a>

- *Type:* java.lang.Number

Optional: Amount of memory in MB assigned to the service.

Defaults to 2048 MB if not specified.

---

##### `assignedTempDirMb`<sup>Optional</sup> <a name="assignedTempDirMb" id="wdk-lib.CloudService.Initializer.parameter.assignedTempDirMb"></a>

- *Type:* java.lang.Number

Optional: Size of the temporary directory in MB.

Defaults to 2048 MB if not specified.

---

##### `containerRepository`<sup>Optional</sup> <a name="containerRepository" id="wdk-lib.CloudService.Initializer.parameter.containerRepository"></a>

- *Type:* java.lang.String

Optional: Repository where the container image is stored.

This is only the base repository, not the full image path.

---

##### `mountPoint`<sup>Optional</sup> <a name="mountPoint" id="wdk-lib.CloudService.Initializer.parameter.mountPoint"></a>

- *Type:* java.lang.String

Optional: Mount point for the database.

---

##### `parameterValuesAsStrings`<sup>Optional</sup> <a name="parameterValuesAsStrings" id="wdk-lib.CloudService.Initializer.parameter.parameterValuesAsStrings"></a>

- *Type:* java.lang.Boolean

Optional: Whether to create all parameter values as strings.

Look at how they are used currently.

---

##### `serviceDatabasePath`<sup>Optional</sup> <a name="serviceDatabasePath" id="wdk-lib.CloudService.Initializer.parameter.serviceDatabasePath"></a>

- *Type:* java.lang.String

Optional: Path to the service's database.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.CloudService.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.CloudService.serialize">serialize</a></code> | Serialize the step to a directory. |
| <code><a href="#wdk-lib.CloudService.addStep">addStep</a></code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.toMap">toMap</a></code> | Convert the object to a map representation following the CWL specification. |

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.CloudService.hasSteps"></a>

```java
public java.lang.Boolean hasSteps()
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.CloudService.serialize"></a>

```java
public SynthFiles serialize(java.lang.String dirPath)
```

Serialize the step to a directory.

If the step has substeps, they will be serialized recursively.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.CloudService.serialize.parameter.dirPath"></a>

- *Type:* java.lang.String

---

##### `addStep` <a name="addStep" id="wdk-lib.CloudService.addStep"></a>

```java
public void addStep(IStep step)
```

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.CloudService.addStep.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

---

##### `toMap` <a name="toMap" id="wdk-lib.CloudService.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
```

Convert the object to a map representation following the CWL specification.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.CloudService.basicProps">basicProps</a></code> | *No description.* |

---

##### `basicProps` <a name="basicProps" id="wdk-lib.CloudService.basicProps"></a>

```java
import com.biobam.wdk.lib.CloudService;

CloudService.basicProps()
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.CloudService.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.CloudService.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.CloudService.property.inputs">inputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | All inputs of the step. |
| <code><a href="#wdk-lib.CloudService.property.label">label</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.property.linkedInputs">linkedInputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.CloudService.property.linkedOutputs">linkedOutputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.CloudService.property.outputs">outputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | All outputs of the step. |
| <code><a href="#wdk-lib.CloudService.property.steps">steps</a></code> | <code>java.util.List<<a href="#wdk-lib.IStep">IStep</a>></code> | All steps nested within this step. |
| <code><a href="#wdk-lib.CloudService.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.CloudService.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.CloudService.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The name of the step file. |
| <code><a href="#wdk-lib.CloudService.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.property.props">props</a></code> | <code><a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.property.requirements">requirements</a></code> | <code>java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>></code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.property.parameters">parameters</a></code> | <code><a href="#wdk-lib.ExpressionTool">ExpressionTool</a></code> | *No description.* |
| <code><a href="#wdk-lib.CloudService.property.service">service</a></code> | <code><a href="#wdk-lib.Tool">Tool</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.CloudService.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.CloudService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.CloudService.property.inputs"></a>

```java
public java.util.List<Input> getInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.CloudService.property.label"></a>

```java
public java.lang.Object getLabel();
```

- *Type:* java.lang.Object

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.CloudService.property.linkedInputs"></a>

```java
public java.util.List<Input> getLinkedInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.CloudService.property.linkedOutputs"></a>

```java
public java.util.List<Output> getLinkedOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.CloudService.property.outputs"></a>

```java
public java.util.List<Output> getOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

All outputs of the step.

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.CloudService.property.steps"></a>

```java
public java.util.List<IStep> getSteps();
```

- *Type:* java.util.List<<a href="#wdk-lib.IStep">IStep</a>>

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.CloudService.property.conditional"></a>

```java
public Conditional getConditional();
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.CloudService.property.scatter"></a>

```java
public Scatter getScatter();
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.CloudService.property.config"></a>

```java
public ToolConfig getConfig();
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.CloudService.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.CloudService.property.stepClass"></a>

```java
public StepClass getStepClass();
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.CloudService.property.props"></a>

```java
public IWorkflowProps getProps();
```

- *Type:* <a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a>

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.CloudService.property.requirements"></a>

```java
public java.util.List<Requirement> getRequirements();
```

- *Type:* java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="wdk-lib.CloudService.property.parameters"></a>

```java
public ExpressionTool getParameters();
```

- *Type:* <a href="#wdk-lib.ExpressionTool">ExpressionTool</a>

---

##### `service`<sup>Required</sup> <a name="service" id="wdk-lib.CloudService.property.service"></a>

```java
public Tool getService();
```

- *Type:* <a href="#wdk-lib.Tool">Tool</a>

---


### Conditional <a name="Conditional" id="wdk-lib.Conditional"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Conditional.whenBooleanInputIs">whenBooleanInputIs</a></code> | Skip this step if the boolean input associated to this condition does not match the specified value. |
| <code><a href="#wdk-lib.Conditional.whenInputNotNull">whenInputNotNull</a></code> | Skip this step if the specified input is null. |
| <code><a href="#wdk-lib.Conditional.whenInputsNotNull">whenInputsNotNull</a></code> | Skip this step if all specified inputs are not null. |

---

##### `whenBooleanInputIs` <a name="whenBooleanInputIs" id="wdk-lib.Conditional.whenBooleanInputIs"></a>

```java
public void whenBooleanInputIs(Input input, java.lang.Boolean value)
```

Skip this step if the boolean input associated to this condition does not match the specified value.

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.Conditional.whenBooleanInputIs.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

A boolean step input parameter.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Conditional.whenBooleanInputIs.parameter.value"></a>

- *Type:* java.lang.Boolean

<code>true</code> to run the step only if the input is true, <code>false</code> to run the step only if the input is false.

---

##### `whenInputNotNull` <a name="whenInputNotNull" id="wdk-lib.Conditional.whenInputNotNull"></a>

```java
public void whenInputNotNull(Input input)
```

Skip this step if the specified input is null.

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.Conditional.whenInputNotNull.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

One of the step input parameters.

e.g. `step.inputFile`

---

##### `whenInputsNotNull` <a name="whenInputsNotNull" id="wdk-lib.Conditional.whenInputsNotNull"></a>

```java
public void whenInputsNotNull(java.util.List<Input> inputs)
```

Skip this step if all specified inputs are not null.

###### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Conditional.whenInputsNotNull.parameter.inputs"></a>

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

A list of step input parameters.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Conditional.step">step</a></code> | *No description.* |

---

##### `step` <a name="step" id="wdk-lib.Conditional.step"></a>

```java
import com.biobam.wdk.lib.Conditional;

Conditional.step(IStep step)
```

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Conditional.step.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Conditional.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Conditional.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Conditional.property.expression">expression</a></code> | <code>java.lang.String</code> | Set a conditional expression for this step. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Conditional.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Conditional.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `expression`<sup>Optional</sup> <a name="expression" id="wdk-lib.Conditional.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Set a conditional expression for this step.

---


### Construct <a name="Construct" id="wdk-lib.Construct"></a>

#### Initializers <a name="Initializers" id="wdk-lib.Construct.Initializer"></a>

```java
import com.biobam.wdk.lib.Construct;

new Construct(java.lang.String id);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Construct.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Construct.Initializer.parameter.id"></a>

- *Type:* java.lang.String

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Construct.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Construct.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Construct.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Construct.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

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

```java
import com.biobam.wdk.lib.Constructs;

Constructs.createRoot(java.lang.String id)
```

Create a construct that does not need to extend another construct.

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Constructs.createRoot.parameter.id"></a>

- *Type:* java.lang.String

Identifier for the construct.

---

##### `rootWorkflow` <a name="rootWorkflow" id="wdk-lib.Constructs.rootWorkflow"></a>

```java
import com.biobam.wdk.lib.Constructs;

Constructs.rootWorkflow()
```

Utility to create a root Workflow and use in tests.

##### `rootWorkflowWithName` <a name="rootWorkflowWithName" id="wdk-lib.Constructs.rootWorkflowWithName"></a>

```java
import com.biobam.wdk.lib.Constructs;

Constructs.rootWorkflowWithName(java.lang.String name)
```

Utility to create a root Workflow with name to use in tests.

###### `name`<sup>Required</sup> <a name="name" id="wdk-lib.Constructs.rootWorkflowWithName.parameter.name"></a>

- *Type:* java.lang.String

---



### ExpressionTool <a name="ExpressionTool" id="wdk-lib.ExpressionTool"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>

#### Initializers <a name="Initializers" id="wdk-lib.ExpressionTool.Initializer"></a>

```java
import com.biobam.wdk.lib.ExpressionTool;

new ExpressionTool(Workflow scope, java.lang.String id);,new ExpressionTool(Workflow scope, java.lang.String id, IToolProps props);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ExpressionTool.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.Workflow">Workflow</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.ExpressionTool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.ExpressionTool.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.ExpressionTool.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.ExpressionTool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

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
| <code><a href="#wdk-lib.ExpressionTool.serialize">serialize</a></code> | Serialize the step to a directory. |
| <code><a href="#wdk-lib.ExpressionTool.toMap">toMap</a></code> | Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool. |
| <code><a href="#wdk-lib.ExpressionTool.withExpression">withExpression</a></code> | Specify a custom JavaScript expression for this ExpressionTool. |

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.ExpressionTool.hasSteps"></a>

```java
public java.lang.Boolean hasSteps()
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.ExpressionTool.serialize"></a>

```java
public SynthFiles serialize(java.lang.String dirPath)
```

Serialize the step to a directory.

If the step has substeps, they will be serialized recursively.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.ExpressionTool.serialize.parameter.dirPath"></a>

- *Type:* java.lang.String

---

##### `toMap` <a name="toMap" id="wdk-lib.ExpressionTool.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
```

Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool.

##### `withExpression` <a name="withExpression" id="wdk-lib.ExpressionTool.withExpression"></a>

```java
public ExpressionTool withExpression(java.lang.String expression)
```

Specify a custom JavaScript expression for this ExpressionTool.

###### `expression`<sup>Required</sup> <a name="expression" id="wdk-lib.ExpressionTool.withExpression.parameter.expression"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.ExpressionTool.makeParametersJsonExpression">makeParametersJsonExpression</a></code> | Create a CWL expression script that generates a JSON file with the parameters of the tool. |
| <code><a href="#wdk-lib.ExpressionTool.makeParametersJsonExpressionAllStrings">makeParametersJsonExpressionAllStrings</a></code> | Create a CWL expression script that generates a JSON file with the parameters of the tool. |

---

##### `makeParametersJsonExpression` <a name="makeParametersJsonExpression" id="wdk-lib.ExpressionTool.makeParametersJsonExpression"></a>

```java
import com.biobam.wdk.lib.ExpressionTool;

ExpressionTool.makeParametersJsonExpression()
```

Create a CWL expression script that generates a JSON file with the parameters of the tool.

Example: call with makeParametersJsonExpression()

##### `makeParametersJsonExpressionAllStrings` <a name="makeParametersJsonExpressionAllStrings" id="wdk-lib.ExpressionTool.makeParametersJsonExpressionAllStrings"></a>

```java
import com.biobam.wdk.lib.ExpressionTool;

ExpressionTool.makeParametersJsonExpressionAllStrings()
```

Create a CWL expression script that generates a JSON file with the parameters of the tool.

All parameters are converted to strings.
Example: call with makeParametersJsonExpressionAllStrings()

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ExpressionTool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.ExpressionTool.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.ExpressionTool.property.inputs">inputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | All inputs of the step. |
| <code><a href="#wdk-lib.ExpressionTool.property.label">label</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.linkedInputs">linkedInputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.ExpressionTool.property.linkedOutputs">linkedOutputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.ExpressionTool.property.outputs">outputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | All outputs of the step. |
| <code><a href="#wdk-lib.ExpressionTool.property.steps">steps</a></code> | <code>java.util.List<<a href="#wdk-lib.IStep">IStep</a>></code> | All steps nested within this step. |
| <code><a href="#wdk-lib.ExpressionTool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.ExpressionTool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.ExpressionTool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The name of the step file. |
| <code><a href="#wdk-lib.ExpressionTool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.expression">expression</a></code> | <code>java.lang.String</code> | Get the custom JavaScript expression for this ExpressionTool. |
| <code><a href="#wdk-lib.ExpressionTool.property.requirements">requirements</a></code> | <code>java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>></code> | *No description.* |
| <code><a href="#wdk-lib.ExpressionTool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.ExpressionTool.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.ExpressionTool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.ExpressionTool.property.inputs"></a>

```java
public java.util.List<Input> getInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.ExpressionTool.property.label"></a>

```java
public java.lang.Object getLabel();
```

- *Type:* java.lang.Object

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.ExpressionTool.property.linkedInputs"></a>

```java
public java.util.List<Input> getLinkedInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.ExpressionTool.property.linkedOutputs"></a>

```java
public java.util.List<Output> getLinkedOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.ExpressionTool.property.outputs"></a>

```java
public java.util.List<Output> getOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

All outputs of the step.

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.ExpressionTool.property.steps"></a>

```java
public java.util.List<IStep> getSteps();
```

- *Type:* java.util.List<<a href="#wdk-lib.IStep">IStep</a>>

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.ExpressionTool.property.conditional"></a>

```java
public Conditional getConditional();
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.ExpressionTool.property.scatter"></a>

```java
public Scatter getScatter();
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.ExpressionTool.property.config"></a>

```java
public ToolConfig getConfig();
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.ExpressionTool.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.ExpressionTool.property.stepClass"></a>

```java
public StepClass getStepClass();
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `expression`<sup>Required</sup> <a name="expression" id="wdk-lib.ExpressionTool.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Get the custom JavaScript expression for this ExpressionTool.

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.ExpressionTool.property.requirements"></a>

```java
public java.util.List<Requirement> getRequirements();
```

- *Type:* java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>>

---

##### `props`<sup>Optional</sup> <a name="props" id="wdk-lib.ExpressionTool.property.props"></a>

```java
public IToolProps getProps();
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

```java
import com.biobam.wdk.lib.FileUtils;

FileUtils.readFileContent(java.lang.String filePath)
```

Utility function to read the content of a file.

###### `filePath`<sup>Required</sup> <a name="filePath" id="wdk-lib.FileUtils.readFileContent.parameter.filePath"></a>

- *Type:* java.lang.String

---

##### `writeFileContent` <a name="writeFileContent" id="wdk-lib.FileUtils.writeFileContent"></a>

```java
import com.biobam.wdk.lib.FileUtils;

FileUtils.writeFileContent(java.lang.String outputFile, java.lang.String yamlOutput)
```

Utility to write (or overwrite) the YAML content into the file.

###### `outputFile`<sup>Required</sup> <a name="outputFile" id="wdk-lib.FileUtils.writeFileContent.parameter.outputFile"></a>

- *Type:* java.lang.String

---

###### `yamlOutput`<sup>Required</sup> <a name="yamlOutput" id="wdk-lib.FileUtils.writeFileContent.parameter.yamlOutput"></a>

- *Type:* java.lang.String

---



### Input <a name="Input" id="wdk-lib.Input"></a>

Represents an input parameter of a workflow or a tool.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
Construct root = Constructs.createRoot("root");
Input input = Input.string(root, "myInput").withDefaultValue("default").withDoc("This is my input");
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
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
| <code><a href="#wdk-lib.Input.withDefaultValue">withDefaultValue</a></code> | Assigns a default value to the input. |
| <code><a href="#wdk-lib.Input.withDoc">withDoc</a></code> | Adds documentation to the input. |
| <code><a href="#wdk-lib.Input.withItemSeparator">withItemSeparator</a></code> | Sets an item separator for array inputs. |
| <code><a href="#wdk-lib.Input.withPosition">withPosition</a></code> | Specifies a position for the input. |
| <code><a href="#wdk-lib.Input.withPrefix">withPrefix</a></code> | Sets a prefix for the input. |

---

##### `linkTo` <a name="linkTo" id="wdk-lib.Input.linkTo"></a>

```java
public ILinkable linkTo(ILinkable linkable)
```

Links the input to another input or output.

###### `linkable`<sup>Required</sup> <a name="linkable" id="wdk-lib.Input.linkTo.parameter.linkable"></a>

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>

The input or output to link to.

---

##### `pickValue` <a name="pickValue" id="wdk-lib.Input.pickValue"></a>

```java
public ILinkable pickValue(PickValueMethod method)
```

Set the PickValueMethod for this linkable if there are multiple sources linked to it.

###### `method`<sup>Required</sup> <a name="method" id="wdk-lib.Input.pickValue.parameter.method"></a>

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---

##### `allowNullElements` <a name="allowNullElements" id="wdk-lib.Input.allowNullElements"></a>

```java
public Input allowNullElements()
```

Sets the type of the input elements of an array to be nullable.

##### `as` <a name="as" id="wdk-lib.Input.as"></a>

```java
public Input as(java.lang.String newId)
```

Changes the ID of the input and returns the modified input instance.

###### `newId`<sup>Required</sup> <a name="newId" id="wdk-lib.Input.as.parameter.newId"></a>

- *Type:* java.lang.String

The new identifier for this input.

---

##### `containsFileOrDirectory` <a name="containsFileOrDirectory" id="wdk-lib.Input.containsFileOrDirectory"></a>

```java
public java.lang.Boolean containsFileOrDirectory()
```

Check if this input can link to at least a File or Directory.

##### `inScope` <a name="inScope" id="wdk-lib.Input.inScope"></a>

```java
public Input inScope(StepConstruct targetScope)
```

Get the linked input corresponding to the target scope.

If the target scope is the same as the current scope, return the current instance.
Note: The scope must be in one of the upper hierarchies of the current scope.

###### `targetScope`<sup>Required</sup> <a name="targetScope" id="wdk-lib.Input.inScope.parameter.targetScope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The target scope to find the linked input.

---

##### `isArray` <a name="isArray" id="wdk-lib.Input.isArray"></a>

```java
public java.lang.Boolean isArray()
```

Checks if the input is an array type.

##### `makeOptional` <a name="makeOptional" id="wdk-lib.Input.makeOptional"></a>

```java
public Input makeOptional(java.lang.Boolean optional)
```

Sets the optionality of the input.

###### `optional`<sup>Required</sup> <a name="optional" id="wdk-lib.Input.makeOptional.parameter.optional"></a>

- *Type:* java.lang.Boolean

A flag indicating if the input should be optional.

---

##### `makeSeparate` <a name="makeSeparate" id="wdk-lib.Input.makeSeparate"></a>

```java
public Input makeSeparate(java.lang.Boolean separate)
```

Sets whether the input items should be separated.

###### `separate`<sup>Required</sup> <a name="separate" id="wdk-lib.Input.makeSeparate.parameter.separate"></a>

- *Type:* java.lang.Boolean

A flag indicating separation status.

---

##### `toMap` <a name="toMap" id="wdk-lib.Input.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
```

Converts the input to a CWL-compatible JSON object.

##### `withDefaultValue` <a name="withDefaultValue" id="wdk-lib.Input.withDefaultValue"></a>

```java
public Input withDefaultValue(java.lang.Object defaultValue)
```

Assigns a default value to the input.

###### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="wdk-lib.Input.withDefaultValue.parameter.defaultValue"></a>

- *Type:* java.lang.Object

The default value to assign.

---

##### `withDoc` <a name="withDoc" id="wdk-lib.Input.withDoc"></a>

```java
public Input withDoc(java.lang.String doc)
```

Adds documentation to the input.

###### `doc`<sup>Required</sup> <a name="doc" id="wdk-lib.Input.withDoc.parameter.doc"></a>

- *Type:* java.lang.String

The documentation string to add.

---

##### `withItemSeparator` <a name="withItemSeparator" id="wdk-lib.Input.withItemSeparator"></a>

```java
public Input withItemSeparator(java.lang.String separator)
```

Sets an item separator for array inputs.

###### `separator`<sup>Required</sup> <a name="separator" id="wdk-lib.Input.withItemSeparator.parameter.separator"></a>

- *Type:* java.lang.String

The separator string to set.

---

##### `withPosition` <a name="withPosition" id="wdk-lib.Input.withPosition"></a>

```java
public Input withPosition(java.lang.Number position)
```

Specifies a position for the input.

###### `position`<sup>Required</sup> <a name="position" id="wdk-lib.Input.withPosition.parameter.position"></a>

- *Type:* java.lang.Number

The position index to set.

---

##### `withPrefix` <a name="withPrefix" id="wdk-lib.Input.withPrefix"></a>

```java
public Input withPrefix(java.lang.String prefix)
```

Sets a prefix for the input.

###### `prefix`<sup>Required</sup> <a name="prefix" id="wdk-lib.Input.withPrefix.parameter.prefix"></a>

- *Type:* java.lang.String

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

```java
import com.biobam.wdk.lib.Input;

Input.array(StepConstruct scope, java.lang.String id, TypeIn itemsType)
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

- *Type:* java.lang.String

The identifier for this input.

---

###### `itemsType`<sup>Required</sup> <a name="itemsType" id="wdk-lib.Input.array.parameter.itemsType"></a>

- *Type:* <a href="#wdk-lib.TypeIn">TypeIn</a>

The type of the array from the Type class.

It can be BOOLEAN, INT, DOUBLE, FLOAT, STRING, FILE, DIRECTORY.

---

##### `bool` <a name="bool" id="wdk-lib.Input.bool"></a>

```java
import com.biobam.wdk.lib.Input;

Input.bool(StepConstruct scope, java.lang.String id)
```

Creates a boolean type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.bool.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.bool.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this input.

---

##### `copyInContext` <a name="copyInContext" id="wdk-lib.Input.copyInContext"></a>

```java
import com.biobam.wdk.lib.Input;

Input.copyInContext(StepConstruct scope, Input input)
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

```java
import com.biobam.wdk.lib.Input;

Input.custom(StepConstruct scope, java.lang.String id, TypeIn typeIn)
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

- *Type:* java.lang.String

The identifier for this input.

---

###### `typeIn`<sup>Required</sup> <a name="typeIn" id="wdk-lib.Input.custom.parameter.typeIn"></a>

- *Type:* <a href="#wdk-lib.TypeIn">TypeIn</a>

The type of the input.

Use the TypeIn class to create a custom input.

---

##### `directory` <a name="directory" id="wdk-lib.Input.directory"></a>

```java
import com.biobam.wdk.lib.Input;

Input.directory(StepConstruct scope, java.lang.String id)
```

Creates a directory type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.directory.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.directory.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this input.

---

##### `double` <a name="double" id="wdk-lib.Input.double"></a>

```java
import com.biobam.wdk.lib.Input;

Input.double(StepConstruct scope, java.lang.String id)
```

Creates a double type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.double.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.double.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this input.

---

##### `file` <a name="file" id="wdk-lib.Input.file"></a>

```java
import com.biobam.wdk.lib.Input;

Input.file(StepConstruct scope, java.lang.String id)
```

Creates a file type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.file.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.file.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this input.

---

##### `fileArray` <a name="fileArray" id="wdk-lib.Input.fileArray"></a>

```java
import com.biobam.wdk.lib.Input;

Input.fileArray(StepConstruct scope, java.lang.String id)
```

Creates a file array type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.fileArray.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.fileArray.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this input.

---

##### `float` <a name="float" id="wdk-lib.Input.float"></a>

```java
import com.biobam.wdk.lib.Input;

Input.float(StepConstruct scope, java.lang.String id)
```

Creates a float type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.float.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.float.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this input.

---

##### `fromStepInput` <a name="fromStepInput" id="wdk-lib.Input.fromStepInput"></a>

```java
import com.biobam.wdk.lib.Input;

Input.fromStepInput(StepConstruct scope, Input input)
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

```java
import com.biobam.wdk.lib.Input;

Input.integer(StepConstruct scope, java.lang.String id)
```

Creates an integer type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.integer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.integer.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this input.

---

##### `string` <a name="string" id="wdk-lib.Input.string"></a>

```java
import com.biobam.wdk.lib.Input;

Input.string(StepConstruct scope, java.lang.String id)
```

Creates a string type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.string.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.string.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this input.

---

##### `stringArray` <a name="stringArray" id="wdk-lib.Input.stringArray"></a>

```java
import com.biobam.wdk.lib.Input;

Input.stringArray(StepConstruct scope, java.lang.String id)
```

Creates a string array type input.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Input.stringArray.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this input is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.stringArray.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this input.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Input.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Input.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Input.property.idAsReference">idAsReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.linked">linked</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.links">links</a></code> | <code>java.util.List<<a href="#wdk-lib.ILinkable">ILinkable</a>></code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.multiLinked">multiLinked</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.referenced">referenced</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.pickValueMethod">pickValueMethod</a></code> | <code><a href="#wdk-lib.PickValueMethod">PickValueMethod</a></code> | *No description.* |
| <code><a href="#wdk-lib.Input.property.optional">optional</a></code> | <code>java.lang.Boolean</code> | Indicates whether the input is optional. |
| <code><a href="#wdk-lib.Input.property.doc">doc</a></code> | <code>java.lang.String</code> | Retrieves the documentation associated with the input. |
| <code><a href="#wdk-lib.Input.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | Retrieves the expression from which the input's value is derived. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Input.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Input.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `idAsReference`<sup>Required</sup> <a name="idAsReference" id="wdk-lib.Input.property.idAsReference"></a>

```java
public java.lang.String getIdAsReference();
```

- *Type:* java.lang.String

---

##### `linked`<sup>Required</sup> <a name="linked" id="wdk-lib.Input.property.linked"></a>

```java
public java.lang.Boolean getLinked();
```

- *Type:* java.lang.Boolean

---

##### `links`<sup>Required</sup> <a name="links" id="wdk-lib.Input.property.links"></a>

```java
public java.util.List<ILinkable> getLinks();
```

- *Type:* java.util.List<<a href="#wdk-lib.ILinkable">ILinkable</a>>

---

##### `multiLinked`<sup>Required</sup> <a name="multiLinked" id="wdk-lib.Input.property.multiLinked"></a>

```java
public java.lang.Boolean getMultiLinked();
```

- *Type:* java.lang.Boolean

---

##### `referenced`<sup>Required</sup> <a name="referenced" id="wdk-lib.Input.property.referenced"></a>

```java
public java.lang.Boolean getReferenced();
```

- *Type:* java.lang.Boolean

---

##### `pickValueMethod`<sup>Optional</sup> <a name="pickValueMethod" id="wdk-lib.Input.property.pickValueMethod"></a>

```java
public PickValueMethod getPickValueMethod();
```

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---

##### `optional`<sup>Required</sup> <a name="optional" id="wdk-lib.Input.property.optional"></a>

```java
public java.lang.Boolean getOptional();
```

- *Type:* java.lang.Boolean

Indicates whether the input is optional.

---

##### `doc`<sup>Optional</sup> <a name="doc" id="wdk-lib.Input.property.doc"></a>

```java
public java.lang.String getDoc();
```

- *Type:* java.lang.String

Retrieves the documentation associated with the input.

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="wdk-lib.Input.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

Retrieves the expression from which the input's value is derived.

Sets the expression from which the input's value is derived. Use this in the workflows to set a value of a step input from some other value.

---

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
tool.getMessage().getValueFrom() = "Hello World!"; // This will set the value of the step input to 'Hello World!'
tool.getWidth().getValueFrom() = Value.double(3.14); // This will set the value of the step input to 3.14
tool.getHeight().getValueFrom() = Value.expression("inputs.my_input * 2");
```



### InputReference <a name="InputReference" id="wdk-lib.InputReference"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>

#### Initializers <a name="Initializers" id="wdk-lib.InputReference.Initializer"></a>

```java
import com.biobam.wdk.lib.InputReference;

new InputReference();
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

```java
public void convertToS3Reference(java.lang.String s3UriLocation)
```

Convert the local path reference to an S3 reference.

###### `s3UriLocation`<sup>Required</sup> <a name="s3UriLocation" id="wdk-lib.InputReference.convertToS3Reference.parameter.s3UriLocation"></a>

- *Type:* java.lang.String

The S3 URI location to convert to.

---

##### `isDirectory` <a name="isDirectory" id="wdk-lib.InputReference.isDirectory"></a>

```java
public java.lang.Boolean isDirectory()
```

Checks if the InputReference is a directory.

##### `toMap` <a name="toMap" id="wdk-lib.InputReference.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
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

```java
import com.biobam.wdk.lib.InputReference;

InputReference.directory(java.lang.String relativePath)
```

Create a local directory reference.

###### `relativePath`<sup>Required</sup> <a name="relativePath" id="wdk-lib.InputReference.directory.parameter.relativePath"></a>

- *Type:* java.lang.String

path to a local directory like `/Users/username/project/`.

---

##### `directoryArray` <a name="directoryArray" id="wdk-lib.InputReference.directoryArray"></a>

```java
import com.biobam.wdk.lib.InputReference;

InputReference.directoryArray(java.util.List<java.lang.String> relativePaths)
```

Create a reference to a list of local directories.

###### `relativePaths`<sup>Required</sup> <a name="relativePaths" id="wdk-lib.InputReference.directoryArray.parameter.relativePaths"></a>

- *Type:* java.util.List<java.lang.String>

path to local directories like `["/home/proj1/", "/home/proj2/"]`.

---

##### `file` <a name="file" id="wdk-lib.InputReference.file"></a>

```java
import com.biobam.wdk.lib.InputReference;

InputReference.file(java.lang.String relativePath)
```

Create a local file reference.

###### `relativePath`<sup>Required</sup> <a name="relativePath" id="wdk-lib.InputReference.file.parameter.relativePath"></a>

- *Type:* java.lang.String

path to a local file like `/Users/username/file.txt`.

---

##### `fileArray` <a name="fileArray" id="wdk-lib.InputReference.fileArray"></a>

```java
import com.biobam.wdk.lib.InputReference;

InputReference.fileArray(java.util.List<java.lang.String> relativePaths)
```

Create a reference to a list of local files.

###### `relativePaths`<sup>Required</sup> <a name="relativePaths" id="wdk-lib.InputReference.fileArray.parameter.relativePaths"></a>

- *Type:* java.util.List<java.lang.String>

path to local files like `["/home/file1.txt", "/home/file2.txt"]`.

---

##### `s3Directory` <a name="s3Directory" id="wdk-lib.InputReference.s3Directory"></a>

```java
import com.biobam.wdk.lib.InputReference;

InputReference.s3Directory(java.lang.String s3FileReference)
```

Create a s3 directory reference.

###### `s3FileReference`<sup>Required</sup> <a name="s3FileReference" id="wdk-lib.InputReference.s3Directory.parameter.s3FileReference"></a>

- *Type:* java.lang.String

Reference to an S3 directory formatted like `s3://bucket-name/path/to/directory/`.

---

##### `s3DirectoryArray` <a name="s3DirectoryArray" id="wdk-lib.InputReference.s3DirectoryArray"></a>

```java
import com.biobam.wdk.lib.InputReference;

InputReference.s3DirectoryArray(java.util.List<java.lang.String> s3FileReferences)
```

Create a reference to a list of s3 directories.

###### `s3FileReferences`<sup>Required</sup> <a name="s3FileReferences" id="wdk-lib.InputReference.s3DirectoryArray.parameter.s3FileReferences"></a>

- *Type:* java.util.List<java.lang.String>

Reference to S3 directories formatted like `["s3://bucket-name/path/to/dir1", "s3://bucket-name/path/to/dir2"]`.

---

##### `s3File` <a name="s3File" id="wdk-lib.InputReference.s3File"></a>

```java
import com.biobam.wdk.lib.InputReference;

InputReference.s3File(java.lang.String s3FileReference)
```

Create a s3 file reference.

###### `s3FileReference`<sup>Required</sup> <a name="s3FileReference" id="wdk-lib.InputReference.s3File.parameter.s3FileReference"></a>

- *Type:* java.lang.String

Reference to an S3 file formatted like `s3://bucket-name/path/to/file`.

---

##### `s3FileArray` <a name="s3FileArray" id="wdk-lib.InputReference.s3FileArray"></a>

```java
import com.biobam.wdk.lib.InputReference;

InputReference.s3FileArray(java.util.List<java.lang.String> s3FileReferences)
```

Create a reference to a list of s3 files.

###### `s3FileReferences`<sup>Required</sup> <a name="s3FileReferences" id="wdk-lib.InputReference.s3FileArray.parameter.s3FileReferences"></a>

- *Type:* java.util.List<java.lang.String>

Reference to S3 files formatted like `["s3://bucket-name/path/to/file1", "s3://bucket-name/path/to/file2"]`.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.InputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#wdk-lib.InputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `location`<sup>Optional</sup> <a name="location" id="wdk-lib.InputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `path`<sup>Optional</sup> <a name="path" id="wdk-lib.InputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---


### LinkableConstruct <a name="LinkableConstruct" id="wdk-lib.LinkableConstruct"></a>

- *Implements:* <a href="#wdk-lib.ILinkable">ILinkable</a>

#### Initializers <a name="Initializers" id="wdk-lib.LinkableConstruct.Initializer"></a>

```java
import com.biobam.wdk.lib.LinkableConstruct;

new LinkableConstruct(Construct scope, java.lang.String id);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.LinkableConstruct.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.LinkableConstruct.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.LinkableConstruct.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.LinkableConstruct.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.LinkableConstruct.linkTo">linkTo</a></code> | Link this linkable construct to another one. |
| <code><a href="#wdk-lib.LinkableConstruct.pickValue">pickValue</a></code> | Set the PickValueMethod for this linkable if there are multiple sources linked to it. |

---

##### `linkTo` <a name="linkTo" id="wdk-lib.LinkableConstruct.linkTo"></a>

```java
public ILinkable linkTo(ILinkable linkInput)
```

Link this linkable construct to another one.

###### `linkInput`<sup>Required</sup> <a name="linkInput" id="wdk-lib.LinkableConstruct.linkTo.parameter.linkInput"></a>

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>

---

##### `pickValue` <a name="pickValue" id="wdk-lib.LinkableConstruct.pickValue"></a>

```java
public ILinkable pickValue(PickValueMethod method)
```

Set the PickValueMethod for this linkable if there are multiple sources linked to it.

###### `method`<sup>Required</sup> <a name="method" id="wdk-lib.LinkableConstruct.pickValue.parameter.method"></a>

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.LinkableConstruct.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.LinkableConstruct.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.LinkableConstruct.property.idAsReference">idAsReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.linked">linked</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.links">links</a></code> | <code>java.util.List<<a href="#wdk-lib.ILinkable">ILinkable</a>></code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.multiLinked">multiLinked</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.referenced">referenced</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#wdk-lib.LinkableConstruct.property.pickValueMethod">pickValueMethod</a></code> | <code><a href="#wdk-lib.PickValueMethod">PickValueMethod</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.LinkableConstruct.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.LinkableConstruct.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `idAsReference`<sup>Required</sup> <a name="idAsReference" id="wdk-lib.LinkableConstruct.property.idAsReference"></a>

```java
public java.lang.String getIdAsReference();
```

- *Type:* java.lang.String

---

##### `linked`<sup>Required</sup> <a name="linked" id="wdk-lib.LinkableConstruct.property.linked"></a>

```java
public java.lang.Boolean getLinked();
```

- *Type:* java.lang.Boolean

---

##### `links`<sup>Required</sup> <a name="links" id="wdk-lib.LinkableConstruct.property.links"></a>

```java
public java.util.List<ILinkable> getLinks();
```

- *Type:* java.util.List<<a href="#wdk-lib.ILinkable">ILinkable</a>>

---

##### `multiLinked`<sup>Required</sup> <a name="multiLinked" id="wdk-lib.LinkableConstruct.property.multiLinked"></a>

```java
public java.lang.Boolean getMultiLinked();
```

- *Type:* java.lang.Boolean

---

##### `referenced`<sup>Required</sup> <a name="referenced" id="wdk-lib.LinkableConstruct.property.referenced"></a>

```java
public java.lang.Boolean getReferenced();
```

- *Type:* java.lang.Boolean

---

##### `pickValueMethod`<sup>Optional</sup> <a name="pickValueMethod" id="wdk-lib.LinkableConstruct.property.pickValueMethod"></a>

```java
public PickValueMethod getPickValueMethod();
```

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---


### Output <a name="Output" id="wdk-lib.Output"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>

Represents an output parameter of a workflow, tool, or step.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
import com.biobam.wdk.lib.Output;
import com.biobam.wdk.lib.Constructs;

Construct root = Constructs.createRoot("root");
Output output = Output.file(root, "myOutput").withGlob("*.txt").loadContents().outputEval("$(self[0].contents)");
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
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

##### `linkTo` <a name="linkTo" id="wdk-lib.Output.linkTo"></a>

```java
public ILinkable linkTo(ILinkable linkable)
```

Links this output to another output.

###### `linkable`<sup>Required</sup> <a name="linkable" id="wdk-lib.Output.linkTo.parameter.linkable"></a>

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>

The output to link to.

---

##### `pickValue` <a name="pickValue" id="wdk-lib.Output.pickValue"></a>

```java
public ILinkable pickValue(PickValueMethod method)
```

Set the PickValueMethod for this linkable if there are multiple sources linked to it.

###### `method`<sup>Required</sup> <a name="method" id="wdk-lib.Output.pickValue.parameter.method"></a>

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---

##### `as` <a name="as" id="wdk-lib.Output.as"></a>

```java
public Output as(java.lang.String id)
```

Sets a new identifier for this output.

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.as.parameter.id"></a>

- *Type:* java.lang.String

The new identifier for this output.

---

##### `globFromInputString` <a name="globFromInputString" id="wdk-lib.Output.globFromInputString"></a>

```java
public Output globFromInputString(Input inputString)
```

Sets a glob pattern based on an input string identifier.

###### `inputString`<sup>Required</sup> <a name="inputString" id="wdk-lib.Output.globFromInputString.parameter.inputString"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

An Input instance whose ID forms the basis of the glob pattern.

---

##### `inScope` <a name="inScope" id="wdk-lib.Output.inScope"></a>

```java
public ILinkable inScope(StepConstruct targetScope)
```

Get the linked output corresponding to the target scope.

If the target scope is the same as the current scope, return the current instance.
Note: The scope must be in one of the upper hierarchies of the current scope.

###### `targetScope`<sup>Required</sup> <a name="targetScope" id="wdk-lib.Output.inScope.parameter.targetScope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The target scope to find the linked output.

---

##### `loadContents` <a name="loadContents" id="wdk-lib.Output.loadContents"></a>

```java
public Output loadContents()
```

Enables loading contents of the output files.

##### `makeOptional` <a name="makeOptional" id="wdk-lib.Output.makeOptional"></a>

```java
public Output makeOptional(java.lang.Boolean optional)
```

Sets the optionality of the output.

In cwl this output will have the type 'null' besides the specified type.

###### `optional`<sup>Required</sup> <a name="optional" id="wdk-lib.Output.makeOptional.parameter.optional"></a>

- *Type:* java.lang.Boolean

A flag indicating if the input should be optional.

---

##### `outputEval` <a name="outputEval" id="wdk-lib.Output.outputEval"></a>

```java
public Output outputEval(java.lang.String expression)
```

Specifies an expression to evaluate the output.

###### `expression`<sup>Required</sup> <a name="expression" id="wdk-lib.Output.outputEval.parameter.expression"></a>

- *Type:* java.lang.String

The expression for evaluation.

---

##### `toMap` <a name="toMap" id="wdk-lib.Output.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
```

Converts the output's properties into a map format.

##### `withGlob` <a name="withGlob" id="wdk-lib.Output.withGlob"></a>

```java
public Output withGlob(java.lang.String glob)
```

Specifies a glob pattern to locate output files.

###### `glob`<sup>Required</sup> <a name="glob" id="wdk-lib.Output.withGlob.parameter.glob"></a>

- *Type:* java.lang.String

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

```java
import com.biobam.wdk.lib.Output;

Output.array(StepConstruct scope, java.lang.String id, TypeOut itemsType)
```

Creates an array output of a type specified by a parameter.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.array.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.array.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this output.

---

###### `itemsType`<sup>Required</sup> <a name="itemsType" id="wdk-lib.Output.array.parameter.itemsType"></a>

- *Type:* <a href="#wdk-lib.TypeOut">TypeOut</a>

The type of the output.

Use one of the basic types from the Type class: BOOLEAN, INT, DOUBLE, FLOAT, STRING, FILE, DIRECTORY.

---

##### `bool` <a name="bool" id="wdk-lib.Output.bool"></a>

```java
import com.biobam.wdk.lib.Output;

Output.bool(StepConstruct scope, java.lang.String id)
```

Creates a boolean type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.bool.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.bool.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this output.

---

##### `custom` <a name="custom" id="wdk-lib.Output.custom"></a>

```java
import com.biobam.wdk.lib.Output;

Output.custom(StepConstruct scope, java.lang.String id, TypeOut type)
```

Creates a custom type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.custom.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.custom.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this output.

---

###### `type`<sup>Required</sup> <a name="type" id="wdk-lib.Output.custom.parameter.type"></a>

- *Type:* <a href="#wdk-lib.TypeOut">TypeOut</a>

The type of the output.

Use the TypeOut to create a custom type.

---

##### `directory` <a name="directory" id="wdk-lib.Output.directory"></a>

```java
import com.biobam.wdk.lib.Output;

Output.directory(StepConstruct scope, java.lang.String id)
```

Creates a directory type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.directory.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.directory.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this output.

---

##### `file` <a name="file" id="wdk-lib.Output.file"></a>

```java
import com.biobam.wdk.lib.Output;

Output.file(StepConstruct scope, java.lang.String id)
```

Creates a file type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.file.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.file.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this output.

---

##### `fileArray` <a name="fileArray" id="wdk-lib.Output.fileArray"></a>

```java
import com.biobam.wdk.lib.Output;

Output.fileArray(StepConstruct scope, java.lang.String id)
```

Creates a file array type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.fileArray.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.fileArray.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this output.

---

##### `float` <a name="float" id="wdk-lib.Output.float"></a>

```java
import com.biobam.wdk.lib.Output;

Output.float(StepConstruct scope, java.lang.String id)
```

Creates a float type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.float.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.float.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this output.

---

##### `fromStepOutput` <a name="fromStepOutput" id="wdk-lib.Output.fromStepOutput"></a>

```java
import com.biobam.wdk.lib.Output;

Output.fromStepOutput(StepConstruct scope, Output linkedOutput)
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

```java
import com.biobam.wdk.lib.Output;

Output.integer(StepConstruct scope, java.lang.String id)
```

Creates an integer type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.integer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.integer.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this output.

---

##### `string` <a name="string" id="wdk-lib.Output.string"></a>

```java
import com.biobam.wdk.lib.Output;

Output.string(StepConstruct scope, java.lang.String id)
```

Creates a string type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.string.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.string.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this output.

---

##### `stringArray` <a name="stringArray" id="wdk-lib.Output.stringArray"></a>

```java
import com.biobam.wdk.lib.Output;

Output.stringArray(StepConstruct scope, java.lang.String id)
```

Creates a string array type output.

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Output.stringArray.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The construct within which this output is defined.

---

###### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.stringArray.parameter.id"></a>

- *Type:* java.lang.String

The identifier for this output.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Output.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Output.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Output.property.idAsReference">idAsReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.linked">linked</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.links">links</a></code> | <code>java.util.List<<a href="#wdk-lib.ILinkable">ILinkable</a>></code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.multiLinked">multiLinked</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.referenced">referenced</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#wdk-lib.Output.property.pickValueMethod">pickValueMethod</a></code> | <code><a href="#wdk-lib.PickValueMethod">PickValueMethod</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Output.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Output.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `idAsReference`<sup>Required</sup> <a name="idAsReference" id="wdk-lib.Output.property.idAsReference"></a>

```java
public java.lang.String getIdAsReference();
```

- *Type:* java.lang.String

---

##### `linked`<sup>Required</sup> <a name="linked" id="wdk-lib.Output.property.linked"></a>

```java
public java.lang.Boolean getLinked();
```

- *Type:* java.lang.Boolean

---

##### `links`<sup>Required</sup> <a name="links" id="wdk-lib.Output.property.links"></a>

```java
public java.util.List<ILinkable> getLinks();
```

- *Type:* java.util.List<<a href="#wdk-lib.ILinkable">ILinkable</a>>

---

##### `multiLinked`<sup>Required</sup> <a name="multiLinked" id="wdk-lib.Output.property.multiLinked"></a>

```java
public java.lang.Boolean getMultiLinked();
```

- *Type:* java.lang.Boolean

---

##### `referenced`<sup>Required</sup> <a name="referenced" id="wdk-lib.Output.property.referenced"></a>

```java
public java.lang.Boolean getReferenced();
```

- *Type:* java.lang.Boolean

---

##### `pickValueMethod`<sup>Optional</sup> <a name="pickValueMethod" id="wdk-lib.Output.property.pickValueMethod"></a>

```java
public PickValueMethod getPickValueMethod();
```

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---


### RenameExpressionTool <a name="RenameExpressionTool" id="wdk-lib.RenameExpressionTool"></a>

#### Initializers <a name="Initializers" id="wdk-lib.RenameExpressionTool.Initializer"></a>

```java
import com.biobam.wdk.lib.RenameExpressionTool;

new RenameExpressionTool(Workflow scope, java.lang.String id);,new RenameExpressionTool(Workflow scope, java.lang.String id, IRenameExpressionToolProps props);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.RenameExpressionTool.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.Workflow">Workflow</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.RenameExpressionTool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.RenameExpressionTool.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.IRenameExpressionToolProps">IRenameExpressionToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.RenameExpressionTool.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.RenameExpressionTool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

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
| <code><a href="#wdk-lib.RenameExpressionTool.serialize">serialize</a></code> | Serialize the step to a directory. |
| <code><a href="#wdk-lib.RenameExpressionTool.toMap">toMap</a></code> | Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool. |
| <code><a href="#wdk-lib.RenameExpressionTool.withExpression">withExpression</a></code> | Specify a custom JavaScript expression for this ExpressionTool. |

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.RenameExpressionTool.hasSteps"></a>

```java
public java.lang.Boolean hasSteps()
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.RenameExpressionTool.serialize"></a>

```java
public SynthFiles serialize(java.lang.String dirPath)
```

Serialize the step to a directory.

If the step has substeps, they will be serialized recursively.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.RenameExpressionTool.serialize.parameter.dirPath"></a>

- *Type:* java.lang.String

---

##### `toMap` <a name="toMap" id="wdk-lib.RenameExpressionTool.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
```

Create a CWL representation of this expression script that generates a JSON file with the parameters of the tool.

##### `withExpression` <a name="withExpression" id="wdk-lib.RenameExpressionTool.withExpression"></a>

```java
public ExpressionTool withExpression(java.lang.String expression)
```

Specify a custom JavaScript expression for this ExpressionTool.

###### `expression`<sup>Required</sup> <a name="expression" id="wdk-lib.RenameExpressionTool.withExpression.parameter.expression"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.RenameExpressionTool.makeParametersJsonExpression">makeParametersJsonExpression</a></code> | Create a CWL expression script that generates a JSON file with the parameters of the tool. |
| <code><a href="#wdk-lib.RenameExpressionTool.makeParametersJsonExpressionAllStrings">makeParametersJsonExpressionAllStrings</a></code> | Create a CWL expression script that generates a JSON file with the parameters of the tool. |

---

##### `makeParametersJsonExpression` <a name="makeParametersJsonExpression" id="wdk-lib.RenameExpressionTool.makeParametersJsonExpression"></a>

```java
import com.biobam.wdk.lib.RenameExpressionTool;

RenameExpressionTool.makeParametersJsonExpression()
```

Create a CWL expression script that generates a JSON file with the parameters of the tool.

Example: call with makeParametersJsonExpression()

##### `makeParametersJsonExpressionAllStrings` <a name="makeParametersJsonExpressionAllStrings" id="wdk-lib.RenameExpressionTool.makeParametersJsonExpressionAllStrings"></a>

```java
import com.biobam.wdk.lib.RenameExpressionTool;

RenameExpressionTool.makeParametersJsonExpressionAllStrings()
```

Create a CWL expression script that generates a JSON file with the parameters of the tool.

All parameters are converted to strings.
Example: call with makeParametersJsonExpressionAllStrings()

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.RenameExpressionTool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.inputs">inputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | All inputs of the step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.label">label</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.linkedInputs">linkedInputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.linkedOutputs">linkedOutputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.outputs">outputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | All outputs of the step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.steps">steps</a></code> | <code>java.util.List<<a href="#wdk-lib.IStep">IStep</a>></code> | All steps nested within this step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The name of the step file. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.expression">expression</a></code> | <code>java.lang.String</code> | Get the custom JavaScript expression for this ExpressionTool. |
| <code><a href="#wdk-lib.RenameExpressionTool.property.requirements">requirements</a></code> | <code>java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.f1">f1</a></code> | <code><a href="#wdk-lib.Input">Input</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.newname">newname</a></code> | <code><a href="#wdk-lib.Input">Input</a></code> | *No description.* |
| <code><a href="#wdk-lib.RenameExpressionTool.property.out">out</a></code> | <code><a href="#wdk-lib.Output">Output</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.RenameExpressionTool.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.RenameExpressionTool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.RenameExpressionTool.property.inputs"></a>

```java
public java.util.List<Input> getInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.RenameExpressionTool.property.label"></a>

```java
public java.lang.Object getLabel();
```

- *Type:* java.lang.Object

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.RenameExpressionTool.property.linkedInputs"></a>

```java
public java.util.List<Input> getLinkedInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.RenameExpressionTool.property.linkedOutputs"></a>

```java
public java.util.List<Output> getLinkedOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.RenameExpressionTool.property.outputs"></a>

```java
public java.util.List<Output> getOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

All outputs of the step.

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.RenameExpressionTool.property.steps"></a>

```java
public java.util.List<IStep> getSteps();
```

- *Type:* java.util.List<<a href="#wdk-lib.IStep">IStep</a>>

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.RenameExpressionTool.property.conditional"></a>

```java
public Conditional getConditional();
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.RenameExpressionTool.property.scatter"></a>

```java
public Scatter getScatter();
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.RenameExpressionTool.property.config"></a>

```java
public ToolConfig getConfig();
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.RenameExpressionTool.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.RenameExpressionTool.property.stepClass"></a>

```java
public StepClass getStepClass();
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `expression`<sup>Required</sup> <a name="expression" id="wdk-lib.RenameExpressionTool.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Get the custom JavaScript expression for this ExpressionTool.

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.RenameExpressionTool.property.requirements"></a>

```java
public java.util.List<Requirement> getRequirements();
```

- *Type:* java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>>

---

##### `props`<sup>Optional</sup> <a name="props" id="wdk-lib.RenameExpressionTool.property.props"></a>

```java
public IToolProps getProps();
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---

##### `f1`<sup>Required</sup> <a name="f1" id="wdk-lib.RenameExpressionTool.property.f1"></a>

```java
public Input getF1();
```

- *Type:* <a href="#wdk-lib.Input">Input</a>

---

##### `newname`<sup>Required</sup> <a name="newname" id="wdk-lib.RenameExpressionTool.property.newname"></a>

```java
public Input getNewname();
```

- *Type:* <a href="#wdk-lib.Input">Input</a>

---

##### `out`<sup>Required</sup> <a name="out" id="wdk-lib.RenameExpressionTool.property.out"></a>

```java
public Output getOut();
```

- *Type:* <a href="#wdk-lib.Output">Output</a>

---


### Requirement <a name="Requirement" id="wdk-lib.Requirement"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Requirement.addEntry">addEntry</a></code> | Add a listing entry to the initial work directory requirement. |
| <code><a href="#wdk-lib.Requirement.addEnvVar">addEnvVar</a></code> | Add an environment variable to the EnvVar requirement. |
| <code><a href="#wdk-lib.Requirement.addListing">addListing</a></code> | *No description.* |
| <code><a href="#wdk-lib.Requirement.toMap">toMap</a></code> | *No description.* |

---

##### `addEntry` <a name="addEntry" id="wdk-lib.Requirement.addEntry"></a>

```java
public Requirement addEntry(java.lang.String entry)
public Requirement addEntry(java.lang.String entry, java.lang.Boolean writable)
public Requirement addEntry(java.lang.String entry, java.lang.Boolean writable, java.lang.String entryName)
```

Add a listing entry to the initial work directory requirement.

###### `entry`<sup>Required</sup> <a name="entry" id="wdk-lib.Requirement.addEntry.parameter.entry"></a>

- *Type:* java.lang.String

a listing entry.

---

###### `writable`<sup>Optional</sup> <a name="writable" id="wdk-lib.Requirement.addEntry.parameter.writable"></a>

- *Type:* java.lang.Boolean

allow the entry to be writable.

---

###### `entryName`<sup>Optional</sup> <a name="entryName" id="wdk-lib.Requirement.addEntry.parameter.entryName"></a>

- *Type:* java.lang.String

the name of the entry.

---

##### `addEnvVar` <a name="addEnvVar" id="wdk-lib.Requirement.addEnvVar"></a>

```java
public Requirement addEnvVar(java.lang.String entryName, java.lang.String entry)
```

Add an environment variable to the EnvVar requirement.

###### `entryName`<sup>Required</sup> <a name="entryName" id="wdk-lib.Requirement.addEnvVar.parameter.entryName"></a>

- *Type:* java.lang.String

---

###### `entry`<sup>Required</sup> <a name="entry" id="wdk-lib.Requirement.addEnvVar.parameter.entry"></a>

- *Type:* java.lang.String

---

##### ~~`addListing`~~ <a name="addListing" id="wdk-lib.Requirement.addListing"></a>

```java
public Requirement addListing(java.lang.String entryName, java.lang.String entry)
```

###### `entryName`<sup>Required</sup> <a name="entryName" id="wdk-lib.Requirement.addListing.parameter.entryName"></a>

- *Type:* java.lang.String

---

###### `entry`<sup>Required</sup> <a name="entry" id="wdk-lib.Requirement.addListing.parameter.entry"></a>

- *Type:* java.lang.String

---

##### `toMap` <a name="toMap" id="wdk-lib.Requirement.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
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

```java
import com.biobam.wdk.lib.Requirement;

Requirement.docker(Construct scope, java.lang.String dockerImage)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.docker.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `dockerImage`<sup>Required</sup> <a name="dockerImage" id="wdk-lib.Requirement.docker.parameter.dockerImage"></a>

- *Type:* java.lang.String

---

##### `envVar` <a name="envVar" id="wdk-lib.Requirement.envVar"></a>

```java
import com.biobam.wdk.lib.Requirement;

Requirement.envVar(Construct scope, java.util.Map<java.lang.String, java.lang.String> envDef)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.envVar.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `envDef`<sup>Required</sup> <a name="envDef" id="wdk-lib.Requirement.envVar.parameter.envDef"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `initialWorkDir` <a name="initialWorkDir" id="wdk-lib.Requirement.initialWorkDir"></a>

```java
import com.biobam.wdk.lib.Requirement;

Requirement.initialWorkDir(Construct scope)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.initialWorkDir.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `inlineJavascript` <a name="inlineJavascript" id="wdk-lib.Requirement.inlineJavascript"></a>

```java
import com.biobam.wdk.lib.Requirement;

Requirement.inlineJavascript(Construct scope)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.inlineJavascript.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `multipleInputFeature` <a name="multipleInputFeature" id="wdk-lib.Requirement.multipleInputFeature"></a>

```java
import com.biobam.wdk.lib.Requirement;

Requirement.multipleInputFeature(Construct scope)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.multipleInputFeature.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `networkAccess` <a name="networkAccess" id="wdk-lib.Requirement.networkAccess"></a>

```java
import com.biobam.wdk.lib.Requirement;

Requirement.networkAccess(Construct scope)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.networkAccess.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `resource` <a name="resource" id="wdk-lib.Requirement.resource"></a>

```java
import com.biobam.wdk.lib.Requirement;

Requirement.resource(Construct scope, RequirementProps props)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.resource.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

###### `props`<sup>Required</sup> <a name="props" id="wdk-lib.Requirement.resource.parameter.props"></a>

- *Type:* <a href="#wdk-lib.RequirementProps">RequirementProps</a>

---

##### `scatterFeature` <a name="scatterFeature" id="wdk-lib.Requirement.scatterFeature"></a>

```java
import com.biobam.wdk.lib.Requirement;

Requirement.scatterFeature(Construct scope)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.scatterFeature.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `stepInputExpression` <a name="stepInputExpression" id="wdk-lib.Requirement.stepInputExpression"></a>

```java
import com.biobam.wdk.lib.Requirement;

Requirement.stepInputExpression(Construct scope)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.stepInputExpression.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `subworkflowFeature` <a name="subworkflowFeature" id="wdk-lib.Requirement.subworkflowFeature"></a>

```java
import com.biobam.wdk.lib.Requirement;

Requirement.subworkflowFeature(Construct scope)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Requirement.subworkflowFeature.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Requirement.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Requirement.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Requirement.property.requirementType">requirementType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Requirement.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Requirement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `requirementType`<sup>Required</sup> <a name="requirementType" id="wdk-lib.Requirement.property.requirementType"></a>

```java
public java.lang.String getRequirementType();
```

- *Type:* java.lang.String

---


### Scatter <a name="Scatter" id="wdk-lib.Scatter"></a>

A "scatter" operation specifies that the associated workflow step or subworkflow should execute separately over a list of input elements.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Scatter.dotProduct">dotProduct</a></code> | Each of the input arrays is aligned, and one element is taken from each array to construct each job. |
| <code><a href="#wdk-lib.Scatter.flatCrossProduct">flatCrossProduct</a></code> | This method performs a Cartesian product of the inputs, producing a job for every combination of the scattered inputs. |
| <code><a href="#wdk-lib.Scatter.nestedCrossProduct">nestedCrossProduct</a></code> | This method performs a Cartesian product of the inputs, producing a job for every combination of the scattered inputs. |
| <code><a href="#wdk-lib.Scatter.simple">simple</a></code> | Each element of the array linked to the input makes a separate job, independent from the others, and which may be executed concurrently. |

---

##### `dotProduct` <a name="dotProduct" id="wdk-lib.Scatter.dotProduct"></a>

```java
import com.biobam.wdk.lib.Scatter;

Scatter.dotProduct(Workflow scope, IStep step, java.util.List<Input> inputs)
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

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

An array of `Input` instances.

These represent multiple input variables belonging to the scattered step, each linked to an array. All arrays must be of equal length.

---

##### `flatCrossProduct` <a name="flatCrossProduct" id="wdk-lib.Scatter.flatCrossProduct"></a>

```java
import com.biobam.wdk.lib.Scatter;

Scatter.flatCrossProduct(Workflow scope, IStep step, java.util.List<Input> inputs)
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

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

An array of `Input` instances representing multiple input variables belonging to the scattered step, each linked to an array.

All combinations of these inputs are flattened and executed.

---

##### `nestedCrossProduct` <a name="nestedCrossProduct" id="wdk-lib.Scatter.nestedCrossProduct"></a>

```java
import com.biobam.wdk.lib.Scatter;

Scatter.nestedCrossProduct(Workflow scope, IStep step, java.util.List<Input> inputs)
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

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

An array of `Input` instances representing multiple input variables belonging to the scattered step, each linked to an array.

All possible combinations of these inputs are executed.

---

##### `simple` <a name="simple" id="wdk-lib.Scatter.simple"></a>

```java
import com.biobam.wdk.lib.Scatter;

Scatter.simple(Workflow scope, IStep step, Input input)
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
| <code><a href="#wdk-lib.Scatter.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Scatter.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Scatter.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Scatter.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Scatter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `ids`<sup>Required</sup> <a name="ids" id="wdk-lib.Scatter.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---


### StepConstruct <a name="StepConstruct" id="wdk-lib.StepConstruct"></a>

- *Implements:* <a href="#wdk-lib.IStep">IStep</a>

#### Initializers <a name="Initializers" id="wdk-lib.StepConstruct.Initializer"></a>

```java
import com.biobam.wdk.lib.StepConstruct;

new StepConstruct(StepConstruct scope, java.lang.String id);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.StepConstruct.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.StepConstruct">StepConstruct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.StepConstruct.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.StepConstruct.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.StepConstruct.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.StepConstruct.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.StepConstruct.serialize">serialize</a></code> | Serialize the step to a directory. |

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.StepConstruct.hasSteps"></a>

```java
public java.lang.Boolean hasSteps()
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.StepConstruct.serialize"></a>

```java
public SynthFiles serialize(java.lang.String dirPath)
```

Serialize the step to a directory.

If the step has substeps, they will be serialized recursively.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.StepConstruct.serialize.parameter.dirPath"></a>

- *Type:* java.lang.String

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.StepConstruct.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.StepConstruct.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.StepConstruct.property.inputs">inputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | All inputs of the step. |
| <code><a href="#wdk-lib.StepConstruct.property.label">label</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#wdk-lib.StepConstruct.property.linkedInputs">linkedInputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.StepConstruct.property.linkedOutputs">linkedOutputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.StepConstruct.property.outputs">outputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | All outputs of the step. |
| <code><a href="#wdk-lib.StepConstruct.property.steps">steps</a></code> | <code>java.util.List<<a href="#wdk-lib.IStep">IStep</a>></code> | All steps nested within this step. |
| <code><a href="#wdk-lib.StepConstruct.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.StepConstruct.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.StepConstruct.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.StepConstruct.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The name of the step file. |
| <code><a href="#wdk-lib.StepConstruct.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.StepConstruct.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.StepConstruct.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.StepConstruct.property.inputs"></a>

```java
public java.util.List<Input> getInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.StepConstruct.property.label"></a>

```java
public java.lang.Object getLabel();
```

- *Type:* java.lang.Object

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.StepConstruct.property.linkedInputs"></a>

```java
public java.util.List<Input> getLinkedInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.StepConstruct.property.linkedOutputs"></a>

```java
public java.util.List<Output> getLinkedOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.StepConstruct.property.outputs"></a>

```java
public java.util.List<Output> getOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

All outputs of the step.

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.StepConstruct.property.steps"></a>

```java
public java.util.List<IStep> getSteps();
```

- *Type:* java.util.List<<a href="#wdk-lib.IStep">IStep</a>>

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.StepConstruct.property.conditional"></a>

```java
public Conditional getConditional();
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.StepConstruct.property.scatter"></a>

```java
public Scatter getScatter();
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.StepConstruct.property.config"></a>

```java
public ToolConfig getConfig();
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.StepConstruct.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.StepConstruct.property.stepClass"></a>

```java
public StepClass getStepClass();
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

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

```java
public void addAsAttachment(SynthFiles stepSynthInfo)
```

###### `stepSynthInfo`<sup>Required</sup> <a name="stepSynthInfo" id="wdk-lib.SynthFiles.addAsAttachment.parameter.stepSynthInfo"></a>

- *Type:* <a href="#wdk-lib.SynthFiles">SynthFiles</a>

---

##### `addAttached` <a name="addAttached" id="wdk-lib.SynthFiles.addAttached"></a>

```java
public SynthFiles addAttached(java.lang.String file)
```

###### `file`<sup>Required</sup> <a name="file" id="wdk-lib.SynthFiles.addAttached.parameter.file"></a>

- *Type:* java.lang.String

---

##### `withMain` <a name="withMain" id="wdk-lib.SynthFiles.withMain"></a>

```java
public SynthFiles withMain(java.lang.String main)
```

###### `main`<sup>Required</sup> <a name="main" id="wdk-lib.SynthFiles.withMain.parameter.main"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.SynthFiles.createWithMain">createWithMain</a></code> | *No description.* |

---

##### `createWithMain` <a name="createWithMain" id="wdk-lib.SynthFiles.createWithMain"></a>

```java
import com.biobam.wdk.lib.SynthFiles;

SynthFiles.createWithMain(java.lang.String cwlFile)
```

###### `cwlFile`<sup>Required</sup> <a name="cwlFile" id="wdk-lib.SynthFiles.createWithMain.parameter.cwlFile"></a>

- *Type:* java.lang.String

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.SynthFiles.property.attachedFiles">attachedFiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#wdk-lib.SynthFiles.property.main">main</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `attachedFiles`<sup>Required</sup> <a name="attachedFiles" id="wdk-lib.SynthFiles.property.attachedFiles"></a>

```java
public java.util.List<java.lang.String> getAttachedFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `main`<sup>Required</sup> <a name="main" id="wdk-lib.SynthFiles.property.main"></a>

```java
public java.lang.String getMain();
```

- *Type:* java.lang.String

---


### Tool <a name="Tool" id="wdk-lib.Tool"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>

#### Initializers <a name="Initializers" id="wdk-lib.Tool.Initializer"></a>

```java
import com.biobam.wdk.lib.Tool;

new Tool(Workflow scope, java.lang.String id);,new Tool(Workflow scope, java.lang.String id, IToolProps props);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Tool.Initializer.parameter.scope">scope</a></code> | <code><a href="#wdk-lib.Workflow">Workflow</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Tool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Tool.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Tool.Initializer.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.Workflow">Workflow</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Tool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

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

```java
public java.lang.Boolean hasSteps()
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.Tool.serialize"></a>

```java
public SynthFiles serialize(java.lang.String dirPath)
```

Serialize the tool to a CWL file.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.Tool.serialize.parameter.dirPath"></a>

- *Type:* java.lang.String

---

##### `toMap` <a name="toMap" id="wdk-lib.Tool.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
```

Create a map repsentation of the tool following the CWL specification.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Tool.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Tool.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Tool.property.inputs">inputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | All inputs of the step. |
| <code><a href="#wdk-lib.Tool.property.label">label</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#wdk-lib.Tool.property.linkedInputs">linkedInputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.Tool.property.linkedOutputs">linkedOutputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.Tool.property.outputs">outputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | All outputs of the step. |
| <code><a href="#wdk-lib.Tool.property.steps">steps</a></code> | <code>java.util.List<<a href="#wdk-lib.IStep">IStep</a>></code> | All steps nested within this step. |
| <code><a href="#wdk-lib.Tool.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.Tool.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.Tool.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.Tool.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The name of the step file. |
| <code><a href="#wdk-lib.Tool.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.Tool.property.requirements">requirements</a></code> | <code>java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>></code> | *No description.* |
| <code><a href="#wdk-lib.Tool.property.props">props</a></code> | <code><a href="#wdk-lib.IToolProps">IToolProps</a></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Tool.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Tool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Tool.property.inputs"></a>

```java
public java.util.List<Input> getInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.Tool.property.label"></a>

```java
public java.lang.Object getLabel();
```

- *Type:* java.lang.Object

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.Tool.property.linkedInputs"></a>

```java
public java.util.List<Input> getLinkedInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.Tool.property.linkedOutputs"></a>

```java
public java.util.List<Output> getLinkedOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.Tool.property.outputs"></a>

```java
public java.util.List<Output> getOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

All outputs of the step.

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.Tool.property.steps"></a>

```java
public java.util.List<IStep> getSteps();
```

- *Type:* java.util.List<<a href="#wdk-lib.IStep">IStep</a>>

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.Tool.property.conditional"></a>

```java
public Conditional getConditional();
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.Tool.property.scatter"></a>

```java
public Scatter getScatter();
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.Tool.property.config"></a>

```java
public ToolConfig getConfig();
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.Tool.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.Tool.property.stepClass"></a>

```java
public StepClass getStepClass();
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.Tool.property.requirements"></a>

```java
public java.util.List<Requirement> getRequirements();
```

- *Type:* java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>>

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.Tool.property.props"></a>

```java
public IToolProps getProps();
```

- *Type:* <a href="#wdk-lib.IToolProps">IToolProps</a>

---


### ToolConfig <a name="ToolConfig" id="wdk-lib.ToolConfig"></a>

#### Initializers <a name="Initializers" id="wdk-lib.ToolConfig.Initializer"></a>

```java
import com.biobam.wdk.lib.ToolConfig;

new ToolConfig(java.lang.String id);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ToolConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.ToolConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.ToolConfig.withArguments">withArguments</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.withBaseCommand">withBaseCommand</a></code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.withLabel">withLabel</a></code> | *No description.* |

---

##### `withArguments` <a name="withArguments" id="wdk-lib.ToolConfig.withArguments"></a>

```java
public ToolConfig withArguments(java.util.List<java.lang.String> newArgs)
```

###### `newArgs`<sup>Required</sup> <a name="newArgs" id="wdk-lib.ToolConfig.withArguments.parameter.newArgs"></a>

- *Type:* java.util.List<java.lang.String>

---

##### `withBaseCommand` <a name="withBaseCommand" id="wdk-lib.ToolConfig.withBaseCommand"></a>

```java
public ToolConfig withBaseCommand(java.util.List<java.lang.String> baseCommand)
```

###### `baseCommand`<sup>Required</sup> <a name="baseCommand" id="wdk-lib.ToolConfig.withBaseCommand.parameter.baseCommand"></a>

- *Type:* java.util.List<java.lang.String>

---

##### `withLabel` <a name="withLabel" id="wdk-lib.ToolConfig.withLabel"></a>

```java
public ToolConfig withLabel(java.lang.String label)
```

###### `label`<sup>Required</sup> <a name="label" id="wdk-lib.ToolConfig.withLabel.parameter.label"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.ToolConfig.basic">basic</a></code> | *No description.* |

---

##### `basic` <a name="basic" id="wdk-lib.ToolConfig.basic"></a>

```java
import com.biobam.wdk.lib.ToolConfig;

ToolConfig.basic(StepConstruct scope)
```

###### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.ToolConfig.basic.parameter.scope"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ToolConfig.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.ToolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.ToolConfig.property.arguments">arguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.property.baseCommand">baseCommand</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.property.cwlVersion">cwlVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#wdk-lib.ToolConfig.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.ToolConfig.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.ToolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="wdk-lib.ToolConfig.property.arguments"></a>

```java
public java.util.List<java.lang.String> getArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `baseCommand`<sup>Required</sup> <a name="baseCommand" id="wdk-lib.ToolConfig.property.baseCommand"></a>

```java
public java.util.List<java.lang.String> getBaseCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cwlVersion`<sup>Required</sup> <a name="cwlVersion" id="wdk-lib.ToolConfig.property.cwlVersion"></a>

```java
public java.lang.String getCwlVersion();
```

- *Type:* java.lang.String

---

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.ToolConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---


### TypeIn <a name="TypeIn" id="wdk-lib.TypeIn"></a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.TypeIn.toMap">toMap</a></code> | Converts the input to a CWL-compatible JSON object. |

---

##### `toMap` <a name="toMap" id="wdk-lib.TypeIn.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
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

```java
import com.biobam.wdk.lib.TypeIn;

TypeIn.arrayOf(TypeIn contentType)
```

Specify the type array with elements of the given custom type.

###### `contentType`<sup>Required</sup> <a name="contentType" id="wdk-lib.TypeIn.arrayOf.parameter.contentType"></a>

- *Type:* <a href="#wdk-lib.TypeIn">TypeIn</a>

The type of the elements in the array.

---

##### `boolean` <a name="boolean" id="wdk-lib.TypeIn.boolean"></a>

```java
import com.biobam.wdk.lib.TypeIn;

TypeIn.boolean()
```

Creates a new `TypeIn` instance representing a Boolean type.

##### `directory` <a name="directory" id="wdk-lib.TypeIn.directory"></a>

```java
import com.biobam.wdk.lib.TypeIn;

TypeIn.directory()
```

Creates a new `TypeIn` instance representing a Directory type.

##### `double` <a name="double" id="wdk-lib.TypeIn.double"></a>

```java
import com.biobam.wdk.lib.TypeIn;

TypeIn.double()
```

Creates a new `TypeIn` instance representing a Double type.

##### `file` <a name="file" id="wdk-lib.TypeIn.file"></a>

```java
import com.biobam.wdk.lib.TypeIn;

TypeIn.file()
```

Creates a new `TypeIn` instance representing a File type.

##### `float` <a name="float" id="wdk-lib.TypeIn.float"></a>

```java
import com.biobam.wdk.lib.TypeIn;

TypeIn.float()
```

Creates a new `TypeIn` instance representing a Float type.

##### `int` <a name="int" id="wdk-lib.TypeIn.int"></a>

```java
import com.biobam.wdk.lib.TypeIn;

TypeIn.int()
```

Creates a new `TypeIn` instance representing an Integer type.

##### `stdin` <a name="stdin" id="wdk-lib.TypeIn.stdin"></a>

```java
import com.biobam.wdk.lib.TypeIn;

TypeIn.stdin()
```

Creates a new `TypeIn` instance representing input from Stdin.

##### `string` <a name="string" id="wdk-lib.TypeIn.string"></a>

```java
import com.biobam.wdk.lib.TypeIn;

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

```java
public TypeOut allowNull()
```

##### `combineWith` <a name="combineWith" id="wdk-lib.TypeOut.combineWith"></a>

```java
public TypeOut combineWith(TypeOut type)
```

###### `type`<sup>Required</sup> <a name="type" id="wdk-lib.TypeOut.combineWith.parameter.type"></a>

- *Type:* <a href="#wdk-lib.TypeOut">TypeOut</a>

---

##### `toMap` <a name="toMap" id="wdk-lib.TypeOut.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
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

```java
import com.biobam.wdk.lib.TypeOut;

TypeOut.arrayOf(TypeOut contentType)
```

Specify the type array with elements of the given custom type.

###### `contentType`<sup>Required</sup> <a name="contentType" id="wdk-lib.TypeOut.arrayOf.parameter.contentType"></a>

- *Type:* <a href="#wdk-lib.TypeOut">TypeOut</a>

The type of the elements in the array.

---

##### `boolean` <a name="boolean" id="wdk-lib.TypeOut.boolean"></a>

```java
import com.biobam.wdk.lib.TypeOut;

TypeOut.boolean()
```

Creates a new `TypeOut` instance representing a Boolean type.

##### `directory` <a name="directory" id="wdk-lib.TypeOut.directory"></a>

```java
import com.biobam.wdk.lib.TypeOut;

TypeOut.directory()
```

Creates a new `TypeOut` instance representing a Directory type.

##### `double` <a name="double" id="wdk-lib.TypeOut.double"></a>

```java
import com.biobam.wdk.lib.TypeOut;

TypeOut.double()
```

Creates a new `TypeOut` instance representing a Double type.

##### `file` <a name="file" id="wdk-lib.TypeOut.file"></a>

```java
import com.biobam.wdk.lib.TypeOut;

TypeOut.file()
```

Creates a new `TypeOut` instance representing a File type.

##### `float` <a name="float" id="wdk-lib.TypeOut.float"></a>

```java
import com.biobam.wdk.lib.TypeOut;

TypeOut.float()
```

Creates a new `TypeOut` instance representing a Float type.

##### `int` <a name="int" id="wdk-lib.TypeOut.int"></a>

```java
import com.biobam.wdk.lib.TypeOut;

TypeOut.int()
```

Creates a new `TypeOut` instance representing an Integer type.

##### `stderr` <a name="stderr" id="wdk-lib.TypeOut.stderr"></a>

```java
import com.biobam.wdk.lib.TypeOut;

TypeOut.stderr()
```

Creates a new `TypeOut` instance representing standard error (stderr).

##### `stdout` <a name="stdout" id="wdk-lib.TypeOut.stdout"></a>

```java
import com.biobam.wdk.lib.TypeOut;

TypeOut.stdout()
```

Creates a new `TypeOut` instance representing standard output (stdout).

##### `string` <a name="string" id="wdk-lib.TypeOut.string"></a>

```java
import com.biobam.wdk.lib.TypeOut;

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
| <code><a href="#wdk-lib.Value.string">string</a></code> | Generates a CWL string expression. |

---

##### `boolean` <a name="boolean" id="wdk-lib.Value.boolean"></a>

```java
import com.biobam.wdk.lib.Value;

Value.boolean(java.lang.Boolean value)
```

Generates a CWL boolean expression.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
Value.boolean(true);
```


###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Value.boolean.parameter.value"></a>

- *Type:* java.lang.Boolean

The boolean value (true or false).

---

##### `double` <a name="double" id="wdk-lib.Value.double"></a>

```java
import com.biobam.wdk.lib.Value;

Value.double(java.lang.Number value)
```

Generates a CWL double expression.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
Value.double(3.14159);
```


###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Value.double.parameter.value"></a>

- *Type:* java.lang.Number

A 64-bit floating-point number.

---

##### `expression` <a name="expression" id="wdk-lib.Value.expression"></a>

```java
import com.biobam.wdk.lib.Value;

Value.expression(java.lang.String expr)
```

Generates a CWL expression from a custom JavaScript-compatible string.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
Value.expression("inputs.my_input * 2");
```


###### `expr`<sup>Required</sup> <a name="expr" id="wdk-lib.Value.expression.parameter.expr"></a>

- *Type:* java.lang.String

A custom JavaScript-compatible expression.

---

##### `float` <a name="float" id="wdk-lib.Value.float"></a>

```java
import com.biobam.wdk.lib.Value;

Value.float(java.lang.Number value)
```

Generates a CWL float expression.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
Value.float(3.14);
```


###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Value.float.parameter.value"></a>

- *Type:* java.lang.Number

A 32-bit floating-point number.

---

##### `int` <a name="int" id="wdk-lib.Value.int"></a>

```java
import com.biobam.wdk.lib.Value;

Value.int(java.lang.Number value)
```

Generates a CWL integer expression.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
Value.int(42);
```


###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Value.int.parameter.value"></a>

- *Type:* java.lang.Number

A 32-bit signed integer.

---

##### `long` <a name="long" id="wdk-lib.Value.long"></a>

```java
import com.biobam.wdk.lib.Value;

Value.long(java.lang.Number value)
```

Generates a CWL long integer expression.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
Value.long(1000000000);
```


###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Value.long.parameter.value"></a>

- *Type:* java.lang.Number

A 64-bit signed integer.

---

##### `null` <a name="null" id="wdk-lib.Value.null"></a>

```java
import com.biobam.wdk.lib.Value;

Value.null()
```

Generates a CWL null expression to represent no value.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
Value.null();
```


##### `string` <a name="string" id="wdk-lib.Value.string"></a>

```java
import com.biobam.wdk.lib.Value;

Value.string(java.lang.String value)
```

Generates a CWL string expression.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
Value.string("hello world");
```


###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.Value.string.parameter.value"></a>

- *Type:* java.lang.String

A Unicode character sequence.

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

```java
import com.biobam.wdk.lib.WdkUtils;

WdkUtils.createSynthInfo(StepConstruct step, java.lang.String workflowDirectory)
```

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.WdkUtils.createSynthInfo.parameter.step"></a>

- *Type:* <a href="#wdk-lib.StepConstruct">StepConstruct</a>

---

###### `workflowDirectory`<sup>Required</sup> <a name="workflowDirectory" id="wdk-lib.WdkUtils.createSynthInfo.parameter.workflowDirectory"></a>

- *Type:* java.lang.String

---

##### `getFileBasename` <a name="getFileBasename" id="wdk-lib.WdkUtils.getFileBasename"></a>

```java
import com.biobam.wdk.lib.WdkUtils;

WdkUtils.getFileBasename(java.lang.String filePath)
```

###### `filePath`<sup>Required</sup> <a name="filePath" id="wdk-lib.WdkUtils.getFileBasename.parameter.filePath"></a>

- *Type:* java.lang.String

---

##### `getLowercaseInitials` <a name="getLowercaseInitials" id="wdk-lib.WdkUtils.getLowercaseInitials"></a>

```java
import com.biobam.wdk.lib.WdkUtils;

WdkUtils.getLowercaseInitials(java.lang.String str)
```

Extracts the capital initials from a given camel case string and converts them to lowercase.

###### `str`<sup>Required</sup> <a name="str" id="wdk-lib.WdkUtils.getLowercaseInitials.parameter.str"></a>

- *Type:* java.lang.String

The input camel case string.

---

##### `mapToJsonString` <a name="mapToJsonString" id="wdk-lib.WdkUtils.mapToJsonString"></a>

```java
import com.biobam.wdk.lib.WdkUtils;

WdkUtils.mapToJsonString(java.util.Map<java.lang.String, java.lang.Object> data)
```

###### `data`<sup>Required</sup> <a name="data" id="wdk-lib.WdkUtils.mapToJsonString.parameter.data"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `mapToYamlString` <a name="mapToYamlString" id="wdk-lib.WdkUtils.mapToYamlString"></a>

```java
import com.biobam.wdk.lib.WdkUtils;

WdkUtils.mapToYamlString(java.util.Map<java.lang.String, java.lang.Object> data)
```

###### `data`<sup>Required</sup> <a name="data" id="wdk-lib.WdkUtils.mapToYamlString.parameter.data"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `newFilePath` <a name="newFilePath" id="wdk-lib.WdkUtils.newFilePath"></a>

```java
import com.biobam.wdk.lib.WdkUtils;

WdkUtils.newFilePath(java.lang.String workflowDirectory, java.lang.String fileName)
```

###### `workflowDirectory`<sup>Required</sup> <a name="workflowDirectory" id="wdk-lib.WdkUtils.newFilePath.parameter.workflowDirectory"></a>

- *Type:* java.lang.String

---

###### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.WdkUtils.newFilePath.parameter.fileName"></a>

- *Type:* java.lang.String

---

##### `writeToFile` <a name="writeToFile" id="wdk-lib.WdkUtils.writeToFile"></a>

```java
import com.biobam.wdk.lib.WdkUtils;

WdkUtils.writeToFile(java.lang.String content, java.lang.String filePath)
```

TODO: Take care of await correctly.

###### `content`<sup>Required</sup> <a name="content" id="wdk-lib.WdkUtils.writeToFile.parameter.content"></a>

- *Type:* java.lang.String

---

###### `filePath`<sup>Required</sup> <a name="filePath" id="wdk-lib.WdkUtils.writeToFile.parameter.filePath"></a>

- *Type:* java.lang.String

---



### Workflow <a name="Workflow" id="wdk-lib.Workflow"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>, <a href="#wdk-lib.IWorkflow">IWorkflow</a>

#### Initializers <a name="Initializers" id="wdk-lib.Workflow.Initializer"></a>

```java
import com.biobam.wdk.lib.Workflow;

new Workflow(java.lang.Object scope, java.lang.String id);,new Workflow(java.lang.Object scope, java.lang.String id, IWorkflowProps props);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Workflow.Initializer.parameter.scope">scope</a></code> | <code>java.lang.Object</code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Workflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Workflow.Initializer.parameter.props">props</a></code> | <code><a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="wdk-lib.Workflow.Initializer.parameter.scope"></a>

- *Type:* java.lang.Object

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Workflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `props`<sup>Optional</sup> <a name="props" id="wdk-lib.Workflow.Initializer.parameter.props"></a>

- *Type:* <a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Workflow.hasSteps">hasSteps</a></code> | Whether the step has sub steps like in case of a workflow step. |
| <code><a href="#wdk-lib.Workflow.serialize">serialize</a></code> | Serialize the step to a directory. |
| <code><a href="#wdk-lib.Workflow.addStep">addStep</a></code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.toMap">toMap</a></code> | Convert the object to a map representation following the CWL specification. |

---

##### `hasSteps` <a name="hasSteps" id="wdk-lib.Workflow.hasSteps"></a>

```java
public java.lang.Boolean hasSteps()
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.Workflow.serialize"></a>

```java
public SynthFiles serialize(java.lang.String dirPath)
```

Serialize the step to a directory.

If the step has substeps, they will be serialized recursively.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.Workflow.serialize.parameter.dirPath"></a>

- *Type:* java.lang.String

---

##### `addStep` <a name="addStep" id="wdk-lib.Workflow.addStep"></a>

```java
public void addStep(IStep step)
```

###### `step`<sup>Required</sup> <a name="step" id="wdk-lib.Workflow.addStep.parameter.step"></a>

- *Type:* <a href="#wdk-lib.IStep">IStep</a>

---

##### `toMap` <a name="toMap" id="wdk-lib.Workflow.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
```

Convert the object to a map representation following the CWL specification.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.Workflow.basicProps">basicProps</a></code> | *No description.* |

---

##### `basicProps` <a name="basicProps" id="wdk-lib.Workflow.basicProps"></a>

```java
import com.biobam.wdk.lib.Workflow;

Workflow.basicProps()
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.Workflow.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | The scope in which this construct is defined. |
| <code><a href="#wdk-lib.Workflow.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the construct in it's scope. |
| <code><a href="#wdk-lib.Workflow.property.inputs">inputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | All inputs of the step. |
| <code><a href="#wdk-lib.Workflow.property.label">label</a></code> | <code>java.lang.Object</code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.property.linkedInputs">linkedInputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.Workflow.property.linkedOutputs">linkedOutputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.Workflow.property.outputs">outputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | All outputs of the step. |
| <code><a href="#wdk-lib.Workflow.property.steps">steps</a></code> | <code>java.util.List<<a href="#wdk-lib.IStep">IStep</a>></code> | All steps nested within this step. |
| <code><a href="#wdk-lib.Workflow.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.Workflow.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.Workflow.property.config">config</a></code> | <code><a href="#wdk-lib.ToolConfig">ToolConfig</a></code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The name of the step file. |
| <code><a href="#wdk-lib.Workflow.property.stepClass">stepClass</a></code> | <code><a href="#wdk-lib.StepClass">StepClass</a></code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.property.props">props</a></code> | <code><a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a></code> | *No description.* |
| <code><a href="#wdk-lib.Workflow.property.requirements">requirements</a></code> | <code>java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>></code> | *No description.* |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.Workflow.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

The scope in which this construct is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.Workflow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for the construct in it's scope.

set or update the id of this construct

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.Workflow.property.inputs"></a>

```java
public java.util.List<Input> getInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

All inputs of the step.

---

##### `label`<sup>Required</sup> <a name="label" id="wdk-lib.Workflow.property.label"></a>

```java
public java.lang.Object getLabel();
```

- *Type:* java.lang.Object

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.Workflow.property.linkedInputs"></a>

```java
public java.util.List<Input> getLinkedInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.Workflow.property.linkedOutputs"></a>

```java
public java.util.List<Output> getLinkedOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.Workflow.property.outputs"></a>

```java
public java.util.List<Output> getOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

All outputs of the step.

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.Workflow.property.steps"></a>

```java
public java.util.List<IStep> getSteps();
```

- *Type:* java.util.List<<a href="#wdk-lib.IStep">IStep</a>>

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.Workflow.property.conditional"></a>

```java
public Conditional getConditional();
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.Workflow.property.scatter"></a>

```java
public Scatter getScatter();
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `config`<sup>Required</sup> <a name="config" id="wdk-lib.Workflow.property.config"></a>

```java
public ToolConfig getConfig();
```

- *Type:* <a href="#wdk-lib.ToolConfig">ToolConfig</a>

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.Workflow.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `stepClass`<sup>Required</sup> <a name="stepClass" id="wdk-lib.Workflow.property.stepClass"></a>

```java
public StepClass getStepClass();
```

- *Type:* <a href="#wdk-lib.StepClass">StepClass</a>

---

##### `props`<sup>Required</sup> <a name="props" id="wdk-lib.Workflow.property.props"></a>

```java
public IWorkflowProps getProps();
```

- *Type:* <a href="#wdk-lib.IWorkflowProps">IWorkflowProps</a>

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="wdk-lib.Workflow.property.requirements"></a>

```java
public java.util.List<Requirement> getRequirements();
```

- *Type:* java.util.List<<a href="#wdk-lib.Requirement">Requirement</a>>

---


### WorkflowValues <a name="WorkflowValues" id="wdk-lib.WorkflowValues"></a>

- *Implements:* <a href="#wdk-lib.IMappable">IMappable</a>

Represents the values associated with inputs of a workflow.

This class allows for the management and retrieval of input values that are part of a workflow,
facilitating tasks such as mapping inputs to their values, extracting file paths, and converting
inputs to serializable formats.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
import com.biobam.wdk.lib.WorkflowValues;
import com.biobam.wdk.lib.Input;
import com.biobam.wdk.lib.Constructs;

Construct root = Constructs.createRoot("root");
Input input1 = Input.string(root, "firstInput").withDefaultValue("defaultValue");
Input input2 = Input.file(root, "fileInput");
WorkflowValues workflowValues = WorkflowValues.create("MyTask").addInput(input1, "customValue").addInput(input2, new InputReference("/path/to/file"));
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#wdk-lib.WorkflowValues.addInput">addInput</a></code> | Associates a value with an input object. |
| <code><a href="#wdk-lib.WorkflowValues.toMap">toMap</a></code> | Converts the internal map of inputs to an object for easier serialization. |

---

##### `addInput` <a name="addInput" id="wdk-lib.WorkflowValues.addInput"></a>

```java
public WorkflowValues addInput(Input input, java.lang.Object value)
```

Associates a value with an input object.

###### `input`<sup>Required</sup> <a name="input" id="wdk-lib.WorkflowValues.addInput.parameter.input"></a>

- *Type:* <a href="#wdk-lib.Input">Input</a>

The input object to reference the value to.

---

###### `value`<sup>Required</sup> <a name="value" id="wdk-lib.WorkflowValues.addInput.parameter.value"></a>

- *Type:* java.lang.Object

The value to be associated with the input.

---

##### `toMap` <a name="toMap" id="wdk-lib.WorkflowValues.toMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
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

```java
import com.biobam.wdk.lib.WorkflowValues;

WorkflowValues.create(StepConstruct scope)
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
| <code><a href="#wdk-lib.WorkflowValues.property.filePaths">filePaths</a></code> | <code>java.util.List<java.lang.String></code> | Retrieves the file paths for all inputs that are files. |
| <code><a href="#wdk-lib.WorkflowValues.property.inputs">inputs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String OR java.lang.Number OR java.lang.Boolean OR java.util.List<java.lang.String> OR <a href="#wdk-lib.InputReference">InputReference</a> OR java.util.List<<a href="#wdk-lib.InputReference">InputReference</a>>></code> | Returns a map of input IDs to their associated values. |
| <code><a href="#wdk-lib.WorkflowValues.property.localInputReferences">localInputReferences</a></code> | <code>java.util.List<<a href="#wdk-lib.InputReference">InputReference</a>></code> | Retrieves all local InputReferences that have a path defined. |
| <code><a href="#wdk-lib.WorkflowValues.property.taskName">taskName</a></code> | <code>java.lang.String</code> | Retrieves the task name associated with these workflow values. |

---

##### `filePaths`<sup>Required</sup> <a name="filePaths" id="wdk-lib.WorkflowValues.property.filePaths"></a>

```java
public java.util.List<java.lang.String> getFilePaths();
```

- *Type:* java.util.List<java.lang.String>

Retrieves the file paths for all inputs that are files.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.WorkflowValues.property.inputs"></a>

```java
public java.lang.Object getInputs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String OR java.lang.Number OR java.lang.Boolean OR java.util.List<java.lang.String> OR <a href="#wdk-lib.InputReference">InputReference</a> OR java.util.List<<a href="#wdk-lib.InputReference">InputReference</a>>>

Returns a map of input IDs to their associated values.

---

##### `localInputReferences`<sup>Required</sup> <a name="localInputReferences" id="wdk-lib.WorkflowValues.property.localInputReferences"></a>

```java
public java.util.List<InputReference> getLocalInputReferences();
```

- *Type:* java.util.List<<a href="#wdk-lib.InputReference">InputReference</a>>

Retrieves all local InputReferences that have a path defined.

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="wdk-lib.WorkflowValues.property.taskName"></a>

```java
public java.lang.String getTaskName();
```

- *Type:* java.lang.String

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
| <code><a href="#wdk-lib.IBashToolProps.property.inlineScript">inlineScript</a></code> | <code>java.lang.String</code> | The inline script content. |
| <code><a href="#wdk-lib.IBashToolProps.property.inlineScriptPath">inlineScriptPath</a></code> | <code>java.lang.String</code> | The path to the inline script file. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="wdk-lib.IBashToolProps.property.metadata"></a>

```java
public IToolMetadata getMetadata();
```

- *Type:* <a href="#wdk-lib.IToolMetadata">IToolMetadata</a>

---

##### `inlineScript`<sup>Optional</sup> <a name="inlineScript" id="wdk-lib.IBashToolProps.property.inlineScript"></a>

```java
public java.lang.String getInlineScript();
```

- *Type:* java.lang.String

The inline script content.

Provide either this or `inlineScriptPath`.

---

##### `inlineScriptPath`<sup>Optional</sup> <a name="inlineScriptPath" id="wdk-lib.IBashToolProps.property.inlineScriptPath"></a>

```java
public java.lang.String getInlineScriptPath();
```

- *Type:* java.lang.String

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

```java
public ILinkable linkTo(ILinkable link)
```

Link this linkable construct to another one.

###### `link`<sup>Required</sup> <a name="link" id="wdk-lib.ILinkable.linkTo.parameter.link"></a>

- *Type:* <a href="#wdk-lib.ILinkable">ILinkable</a>

---

##### `pickValue` <a name="pickValue" id="wdk-lib.ILinkable.pickValue"></a>

```java
public ILinkable pickValue(PickValueMethod method)
```

Set the PickValueMethod for this linkable if there are multiple sources linked to it.

*Example*

```java
// Example automatically generated from non-compiling source. May contain errors.
myStepTool.input.linkTo(cdHit.clusterFile).linkTo(inputFasta).pickValue(PickValueMethod.getFIRST_NON_NULL());
```


###### `method`<sup>Required</sup> <a name="method" id="wdk-lib.ILinkable.pickValue.parameter.method"></a>

- *Type:* <a href="#wdk-lib.PickValueMethod">PickValueMethod</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.ILinkable.property.idAsReference">idAsReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.linked">linked</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.links">links</a></code> | <code>java.util.List<<a href="#wdk-lib.ILinkable">ILinkable</a>></code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.multiLinked">multiLinked</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.referenced">referenced</a></code> | <code>java.lang.Boolean</code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.scope">scope</a></code> | <code><a href="#wdk-lib.Construct">Construct</a></code> | *No description.* |
| <code><a href="#wdk-lib.ILinkable.property.id">id</a></code> | <code>java.lang.String</code> | Access the identified of this construct. |

---

##### `idAsReference`<sup>Required</sup> <a name="idAsReference" id="wdk-lib.ILinkable.property.idAsReference"></a>

```java
public java.lang.String getIdAsReference();
```

- *Type:* java.lang.String

---

##### `linked`<sup>Required</sup> <a name="linked" id="wdk-lib.ILinkable.property.linked"></a>

```java
public java.lang.Boolean getLinked();
```

- *Type:* java.lang.Boolean

---

##### `links`<sup>Required</sup> <a name="links" id="wdk-lib.ILinkable.property.links"></a>

```java
public java.util.List<ILinkable> getLinks();
```

- *Type:* java.util.List<<a href="#wdk-lib.ILinkable">ILinkable</a>>

---

##### `multiLinked`<sup>Required</sup> <a name="multiLinked" id="wdk-lib.ILinkable.property.multiLinked"></a>

```java
public java.lang.Boolean getMultiLinked();
```

- *Type:* java.lang.Boolean

---

##### `referenced`<sup>Required</sup> <a name="referenced" id="wdk-lib.ILinkable.property.referenced"></a>

```java
public java.lang.Boolean getReferenced();
```

- *Type:* java.lang.Boolean

---

##### `scope`<sup>Optional</sup> <a name="scope" id="wdk-lib.ILinkable.property.scope"></a>

```java
public Construct getScope();
```

- *Type:* <a href="#wdk-lib.Construct">Construct</a>

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.ILinkable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

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

```java
public java.util.Map<java.lang.String, java.lang.Object> toMap()
```

Convert the object to a map representation following the CWL specification.


### IRenameExpressionToolProps <a name="IRenameExpressionToolProps" id="wdk-lib.IRenameExpressionToolProps"></a>

- *Extends:* <a href="#wdk-lib.IToolProps">IToolProps</a>

- *Implemented By:* <a href="#wdk-lib.IRenameExpressionToolProps">IRenameExpressionToolProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.IRenameExpressionToolProps.property.metadata">metadata</a></code> | <code><a href="#wdk-lib.IToolMetadata">IToolMetadata</a></code> | *No description.* |
| <code><a href="#wdk-lib.IRenameExpressionToolProps.property.inFilePropId">inFilePropId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#wdk-lib.IRenameExpressionToolProps.property.newNamePropId">newNamePropId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#wdk-lib.IRenameExpressionToolProps.property.outFilePropId">outFilePropId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="wdk-lib.IRenameExpressionToolProps.property.metadata"></a>

```java
public IToolMetadata getMetadata();
```

- *Type:* <a href="#wdk-lib.IToolMetadata">IToolMetadata</a>

---

##### `inFilePropId`<sup>Optional</sup> <a name="inFilePropId" id="wdk-lib.IRenameExpressionToolProps.property.inFilePropId"></a>

```java
public java.lang.String getInFilePropId();
```

- *Type:* java.lang.String

---

##### `newNamePropId`<sup>Optional</sup> <a name="newNamePropId" id="wdk-lib.IRenameExpressionToolProps.property.newNamePropId"></a>

```java
public java.lang.String getNewNamePropId();
```

- *Type:* java.lang.String

---

##### `outFilePropId`<sup>Optional</sup> <a name="outFilePropId" id="wdk-lib.IRenameExpressionToolProps.property.outFilePropId"></a>

```java
public java.lang.String getOutFilePropId();
```

- *Type:* java.lang.String

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

```java
public java.lang.Boolean hasSteps()
```

Whether the step has sub steps like in case of a workflow step.

##### `serialize` <a name="serialize" id="wdk-lib.IStep.serialize"></a>

```java
public SynthFiles serialize(java.lang.String dirPath)
```

Serialize the step to a directory.

If the step has substeps, they will be serialized recursively.

###### `dirPath`<sup>Required</sup> <a name="dirPath" id="wdk-lib.IStep.serialize.parameter.dirPath"></a>

- *Type:* java.lang.String

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#wdk-lib.IStep.property.inputs">inputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | All inputs of the step. |
| <code><a href="#wdk-lib.IStep.property.linkedInputs">linkedInputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Input">Input</a>></code> | Inputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.IStep.property.linkedOutputs">linkedOutputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | Outputs of the step that are actually being used (linked) in parent workflow. |
| <code><a href="#wdk-lib.IStep.property.outputs">outputs</a></code> | <code>java.util.List<<a href="#wdk-lib.Output">Output</a>></code> | All outputs of the step. |
| <code><a href="#wdk-lib.IStep.property.steps">steps</a></code> | <code>java.util.List<<a href="#wdk-lib.IStep">IStep</a>></code> | All steps nested within this step. |
| <code><a href="#wdk-lib.IStep.property.conditional">conditional</a></code> | <code><a href="#wdk-lib.Conditional">Conditional</a></code> | Get the conditional object if the step is a scatter step. |
| <code><a href="#wdk-lib.IStep.property.scatter">scatter</a></code> | <code><a href="#wdk-lib.Scatter">Scatter</a></code> | Get the scatter object if the step is a scatter step. |
| <code><a href="#wdk-lib.IStep.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The name of the step file. |
| <code><a href="#wdk-lib.IStep.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for the step in the workflow. |

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="wdk-lib.IStep.property.inputs"></a>

```java
public java.util.List<Input> getInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

All inputs of the step.

---

##### `linkedInputs`<sup>Required</sup> <a name="linkedInputs" id="wdk-lib.IStep.property.linkedInputs"></a>

```java
public java.util.List<Input> getLinkedInputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Input">Input</a>>

Inputs of the step that are actually being used (linked) in parent workflow.

---

##### `linkedOutputs`<sup>Required</sup> <a name="linkedOutputs" id="wdk-lib.IStep.property.linkedOutputs"></a>

```java
public java.util.List<Output> getLinkedOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

Outputs of the step that are actually being used (linked) in parent workflow.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="wdk-lib.IStep.property.outputs"></a>

```java
public java.util.List<Output> getOutputs();
```

- *Type:* java.util.List<<a href="#wdk-lib.Output">Output</a>>

All outputs of the step.

---

##### `steps`<sup>Required</sup> <a name="steps" id="wdk-lib.IStep.property.steps"></a>

```java
public java.util.List<IStep> getSteps();
```

- *Type:* java.util.List<<a href="#wdk-lib.IStep">IStep</a>>

All steps nested within this step.

---

##### `conditional`<sup>Optional</sup> <a name="conditional" id="wdk-lib.IStep.property.conditional"></a>

```java
public Conditional getConditional();
```

- *Type:* <a href="#wdk-lib.Conditional">Conditional</a>

Get the conditional object if the step is a scatter step.

---

##### `scatter`<sup>Optional</sup> <a name="scatter" id="wdk-lib.IStep.property.scatter"></a>

```java
public Scatter getScatter();
```

- *Type:* <a href="#wdk-lib.Scatter">Scatter</a>

Get the scatter object if the step is a scatter step.

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="wdk-lib.IStep.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The name of the step file.

It defaults to the `step id` + '.cwl'. It can be set using the metadata.fileName property.

---

##### `id`<sup>Required</sup> <a name="id" id="wdk-lib.IStep.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

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
| <code><a href="#wdk-lib.IToolMetadata.property.fileName">fileName</a></code> | <code>java.lang.String</code> | The file name used when exporting a tool and referencing in a workflow. |
| <code><a href="#wdk-lib.IToolMetadata.property.label">label</a></code> | <code>java.lang.String</code> | Allow to customize the label in a tool. |

---

##### `fileName`<sup>Optional</sup> <a name="fileName" id="wdk-lib.IToolMetadata.property.fileName"></a>

```java
public java.lang.String getFileName();
```

- *Type:* java.lang.String

The file name used when exporting a tool and referencing in a workflow.

Default is the id + '.cwl'.

---

##### `label`<sup>Optional</sup> <a name="label" id="wdk-lib.IToolMetadata.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

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

```java
public IToolMetadata getMetadata();
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
| <code><a href="#wdk-lib.IWorkflowProps.property.cwlVersion">cwlVersion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `cwlVersion`<sup>Optional</sup> <a name="cwlVersion" id="wdk-lib.IWorkflowProps.property.cwlVersion"></a>

```java
public java.lang.String getCwlVersion();
```

- *Type:* java.lang.String

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

* [null, x, null, y] -> x
* [null, [null], null, y] -> [null]
* [null, null, null] -> Runtime Error

Intended use case: If-else pattern where the value comes either from a conditional step or from a default or fallback value. The conditional step(s) should be placed first in the list.

---


##### `THE_ONLY_NON_NULL` <a name="THE_ONLY_NON_NULL" id="wdk-lib.PickValueMethod.THE_ONLY_NON_NULL"></a>

For the first level of a list input, pick the single non-null element.

The result is a scalar. It is an error if there is more than one non-null element.
Examples:

* [null, x, null] -> x
* [null, x, null, y] -> Runtime Error
* [null, [null], null] -> [null]
* [null, null, null] -> Runtime Error

Intended use case: Switch type patterns where developer considers more than one active code path as a workflow error (possibly indicating an error in writing when condition expressions).

---


##### `ALL_NON_NULL` <a name="ALL_NON_NULL" id="wdk-lib.PickValueMethod.ALL_NON_NULL"></a>

For the first level of a list input, pick all non-null values.

The result is a list, which may be empty.
Examples:

* [null, x, null] -> [x]
* [x, null, y] -> [x, y]
* [null, [x], [null]] -> [[x], [null]]
* [null, null, null] -> []

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

