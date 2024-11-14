import { Input, Output, Requirement, Tool, ToolConfig } from '../lib';
import { Workflow } from '../lib/Workflow';

export class CdHitServiceTool extends Tool {
  public clusteredFasta: Output;
  public clusterFile: Output;
  public jsonString: Output;
  public parametersFile: Input;
  public inputFasta: Input;

  constructor(scope: Workflow, id: string) {
    super(scope, id);
    ToolConfig.basic(this)
      .withLabel('CDHit')
      .withBaseCommand(['python3', '/start/start.py']);

    // Requirements
    Requirement.networkAccess(this);
    Requirement.docker(this, '188164850845.dkr.ecr.us-east-1.amazonaws.com/cdhit:latest');
    Requirement.envVar(this, {
      BUCKET_NAME: 'scloud-test-data',
      BUCKET_JOB_FOLDER: 'robert/cdblastjob',
      BUCKET_SESSION_SHARED_FOLDER: 'robert/cdblastjob',
      DEV_DATA_DIR: '/data',
      DEV_INPUT_DIR: '/data/input',
      DEV_OUTPUT_DIR: '/data/output',
      DEV_PARAMETERS_FILE: '$(inputs.parametersFile.path)',
      DEV_SHARED_DIR: '/data/shared',
      DEV_COMPRESSED_SHARED_DIR: '/data/compressedShared',
      DEV_COMPRESSED_SHARED_TAR_ZST: '/data/compressedShared.tar.zst',
      BATCH_MEMORY: '8000',
      BATCH_CPU: '4',
    });
    Requirement.initialWorkDir(this)
      .addListing('4seqs.fasta', '$(inputs.inputFasta)');

    // Inputs
    this.parametersFile = Input.file(this, 'parametersFile')
      .withDoc('Required: The parameters file that contains a json with all the parameters passed to the tool.');

    this.inputFasta = Input.file(this, 'inputFasta')
      .withPrefix('-inputFasta');

    // Outputs
    this.clusteredFasta = Output.file(this, 'clusteredFasta')
      .withGlob('cluster.fasta');

    this.clusterFile = Output.file(this, 'cluster_file')
      .withGlob('cluster.fasta.clstr').makeOptional(true);
    this.jsonString = Output.string(this, 'json_example')
      .withGlob('cluster.json').loadContents().outputEval('$(self[0].contents)');
  }
}