import { ExpressionTool } from '../ExpressionTool';
import { Input } from '../Input';
import { Output } from '../Output';
import { Requirement } from '../Requirement';
import { Tool } from '../Tool';
import { ToolConfig } from '../ToolConfig';
import { Workflow } from '../Workflow';

/**
 * Interface defining the properties of a Service, including attributes such as label, ID, and resources.
 */
export interface ServiceProps {
  /**
   * A descriptive label for the service.
   */
  readonly label: string;

  /**
   * Unique identifier for the service.
   */
  readonly serviceId: string;

  /**
   * Version number of the service.
   */
  readonly serviceVersion: string;

  /**
   * Optional: Number of CPU cores assigned to the service.
   * Defaults to 1 if not specified.
   */
  readonly assignedCores?: number;

  /**
   * Optional: Amount of memory in MB assigned to the service.
   * Defaults to 2048 MB if not specified.
   */
  readonly assignedMemoryMb?: number;

  /**
   * Optional: Size of the temporary directory in MB.
   * Defaults to 2048 MB if not specified.
   */
  readonly assignedTempDirMb?: number;

  /**
   * Optional: Path to the service's database.
   */
  readonly serviceDatabasePath?: string;

  /**
   * Optional: Mount point for the database.
   */
  readonly mountPoint?: string;

  /**
   * Optional: Whether to create all parameter values as strings. Look at how they are used currently.
   */
  readonly parameterValuesAsStrings?: boolean;

  /**
   * Optional: Repository where the container image is stored. This is only the base repository, not the full image path.
   */
  readonly containerRepository?: string;

  /**
   * Optional: Name of the progress stream.
   */
  readonly progressStream?: string;
}

/**
 * Class representing a Cloud Service, which is a type of Workflow with two steps, one that creates the parameters and one the service.
 * Everything should already be linked correctly internally between the two.
 * <br>
 * Note: Add the inputs to the parameters and outputs to the service. Inputs must have a prefix. e.g.:
 * <pre><code>
 * Input.file(this.parameters, 'fastaFile').withPrefix('--fastaFile');
 * Output.file(this.service, 'trimmedFasta').withGlob('*.trimmed.fasta');
 * </code></pre>
 */
export class CloudService extends Workflow {
  // Parameters required for the service execution.
  public parameters: ExpressionTool;

  // The actual tool or service being managed.
  public service: Tool;

  /**
   * Constructs an instance of the Service class.
   *
   * @param scope - The workflow this service belongs to.
   * @param id - A unique identifier for the service within its workflow.
   * @param props - Configuration properties for the service.
   */
  constructor(scope: Workflow, id: string, props: ServiceProps) {
    super(scope, id);

    // Initialize parameters with either JSON expression or JSON string expression based on props.
    this.parameters = new ExpressionTool(this, id + '-pe');
    if (props.parameterValuesAsStrings) {
      this.parameters.withExpression(ExpressionTool.makeParametersJsonExpressionAllStrings());
    } else {
      this.parameters.withExpression(ExpressionTool.makeParametersJsonExpression());
    }

    // Initialize the service tool and configure it with basic settings.
    this.service = new Tool(this, id + '-st');
    ToolConfig.basic(this.service)
      .withLabel(props.label)
      .withBaseCommand(['python3', '/start/start.py']);

    // Define requirements such as subworkflow feature, JavaScript, network access, and Docker pull image.
    Requirement.subworkflowFeature(this);
    Requirement.inlineJavascript(this);
    Requirement.inlineJavascript(this.parameters);
    Requirement.inlineJavascript(this.service);
    Requirement.networkAccess(this.service);

    const containerRepository = props.containerRepository || '188164850845.dkr.ecr.us-east-1.amazonaws.com';
    Requirement.docker(this.service, `${containerRepository}/${props.serviceId}:${props.serviceVersion}`);

    const propsCores = props.assignedCores || 1;
    const propsMemory = props.assignedMemoryMb || 2048;
    const propsTempDir = props.assignedTempDirMb || 2048;

    Requirement.resource(this.service, {
      coresMin: propsCores,
      ramMin: propsMemory,
      tmpdirMin: propsTempDir,
    });

    const progressStream = props.progressStream || 'carlos';

    // Set up environment variables necessary for batch job execution.
    Requirement.envVar(this.service, {
      AWS_BATCH_JOB_ID: 'carlos', // just to activate logs streaming. Should be replaced to the actual job id.
      DEV_PROGRESS_STREAM: progressStream,
      BUCKET_NAME: 'toil-workspace-20240920',
      BUCKET_JOB_FOLDER: 'roberto/carlos',
      BUCKET_SESSION_SHARED_FOLDER: 'roberto/shared',
      DEV_DATA_DIR: '/data',
      DEV_INPUT_DIR: '/data/input',
      DEV_OUTPUT_DIR: '/data/output',
      DEV_PARAMETERS_FILE: '$(inputs.parametersFile.path)',
      BLASTDB: '$(runtime.tmpdir)/blastdb',
      DEV_SHARED_DIR: '/data/shared',
      DEV_COMPRESSED_SHARED_DIR: '/data/compressedShared',
      DEV_COMPRESSED_SHARED_TAR_ZST: '/data/compressedShared.tar.zst',
      BATCH_MEMORY: '' + propsMemory,
      BATCH_CPU: '' + propsCores,
    });

    // Link the output parameters file to the service input parameters.
    let outputParametersFile = Output.file(this.parameters, 'parameters_file');

    Input.file(this.service, 'parametersFile')
      .withDoc('Required: The parameters file that contains a json with all the parameters passed to the tool.')
      .linkTo(outputParametersFile);

    // Optionally link database path and mounting point if provided.
    if (props.serviceDatabasePath && props.mountPoint) {
      Requirement.initialWorkDir(this.service)
        .addListing(props.mountPoint, '$(inputs.inputDatabase)');

      Input.string(this.service, 'mountPoint')
        .withPrefix('--mountPoint')
        .withDefaultValue(props.mountPoint)
        .makeOptional(true);

      Input.directory(this.service, 'inputDatabase')
        .withDefaultValue(props.serviceDatabasePath)
        .makeOptional(true);
    }
  }

  /**
   * Initializes required links between inputs and the service, ensuring correct data flow.
   */
  protected initialize() {
    // Go through each input, determine if it's a file or directory, and set up links accordingly.
    this.parameters.inputs.forEach(input => {
      if (input.containsFileOrDirectory()) {
        const serviceInput = Input.copyInContext(this.service, input);
        const workflowInput = input._createMatchingScopeUpper(this);
        serviceInput.linkTo(workflowInput);
      }
    });
    super.initialize();
  }
}
