import { ExpressionTool } from '../ExpressionTool';
import { Input } from '../Input';
import { Output } from '../Output';
import { Requirement } from '../Requirement';
import { Tool } from '../Tool';
import { ToolConfig } from '../ToolConfig';
import { Workflow } from '../Workflow';

/**
 * Interface defining the properties of a Service
 */
export interface ServiceProps {
  /**
   * A label for the service
   */
  label: string;
  /**
   * Unique identifier for the service
   */
  serviceId: string;
  serviceVersion: string;
  assignedCores?: number;
  assignedMemoryMb?: number;
  assignedTempDirMb?: number;
  serviceDatabasePath?: string;
  mountPoint?: string;
  parameterValuesAsStrings?: boolean;
  containerRepository?: string;
  progressStream?: string;
}


export class Service extends Workflow {
  public parameters: ExpressionTool;
  public service: Tool;

  constructor(scope: Workflow, id: string, props: ServiceProps) {
    super(scope, id);

    this.parameters = new ExpressionTool(this, id + '-pe');
    if (props.parameterValuesAsStrings) {
      this.parameters.withExpression(ExpressionTool.makeParametersJsonExpressionAllStrings());
    } else {
      this.parameters.withExpression(ExpressionTool.makeParametersJsonExpression());
    }
    this.service = new Tool(this, id + '-st');

    ToolConfig.basic(this.service)
      .withLabel(props.label)
      .withBaseCommand(['python3', '/start/start.py']);

    // Requirements
    Requirement.subworkflowFeature(this);
    Requirement.inlineJavascript(this);
    Requirement.networkAccess(this.service);

    const containerRepository = props.containerRepository ? props.containerRepository : '188164850845.dkr.ecr.us-east-1.amazonaws.com';
    Requirement.docker(this, containerRepository + '/' + props.serviceId + ':' + props.serviceVersion);

    const propsCores = props.assignedCores ? props.assignedCores : 1;
    const propsMemory = props.assignedMemoryMb ? props.assignedMemoryMb : 2048;
    const propsTempDir = props.assignedTempDirMb ? props.assignedTempDirMb : 2048;


    Requirement.resource(this, {
      coresMin: propsCores,
      ramMin: propsMemory,
      tmpdirMin: propsTempDir,
    });

    const progressStream = props.progressStream ? props.progressStream : 'carlos';

    Requirement.envVar(this, {
      AWS_BATCH_JOB_ID: 'carlos',
      DEV_PROGRESS_STREAM: progressStream,
      BUCKET_NAME: 'toil-workspace-20240920',
      BUCKET_JOB_FOLDER: 'roberto/emapper',
      BUCKET_SESSION_SHARED_FOLDER: 'roberto/emapper',
      DEV_DATA_DIR: '/data',
      DEV_INPUT_DIR: '/data/input',
      DEV_OUTPUT_DIR: '/data/output',
      DEV_PARAMETERS_FILE: '/data/parameters.txt',
      DEV_SHARED_DIR: '/data/shared',
      DEV_COMPRESSED_SHARED_DIR: '/data/compressedShared',
      DEV_COMPRESSED_SHARED_TAR_ZST: '/data/compressedShared.tar.zst',
      BATCH_MEMORY: '' + props.assignedMemoryMb,
      BATCH_CPU: '' + props.assignedCores,
    });

    // Link parameters between the expression and the service
    let outputParametersFile = Output.file(this.parameters, 'parameters_file');

    Input.file(this.service, 'parametersFile')
      .withDoc('Required: The parameters file that contains a json with all the parameters passed to the tool.')
      .withPrefix('--parameters')
      .linkTo(outputParametersFile);

    // link possible database
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
     * Makes the necessary links between the inputs and the service
     */
  protected initialize() {
    // get all the files and directories inputs and create and link them in/to the
    // service
    this.parameters.inputs.forEach(input => {
      // a) check if input is file or directory
      if (input.containsFileOrDirectory()) {
        // b) create f&d in service and link to the same input
        const serviceInput = Input.copyInContext(this.service, input);
        const workflowInput = input._createMatchingScopeUpper(this);
        serviceInput.linkTo(workflowInput);
      }
    });

  }

}