class: CommandLineTool
cwlVersion: v1.2
label: CDHit
requirements:
  NetworkAccess:
    networkAccess: true
  DockerRequirement:
    dockerPull: 188164850845.dkr.ecr.us-east-1.amazonaws.com/cdhit:latest
  EnvVarRequirement:
    envDef:
      BUCKET_NAME: scloud-test-data
      BUCKET_JOB_FOLDER: robert/cdblastjob
      BUCKET_SESSION_SHARED_FOLDER: robert/cdblastjob
      DEV_DATA_DIR: /data
      DEV_INPUT_DIR: /data/input
      DEV_OUTPUT_DIR: /data/output
      DEV_PARAMETERS_FILE: $(inputs.parametersFile.path)
      DEV_SHARED_DIR: /data/shared
      DEV_COMPRESSED_SHARED_DIR: /data/compressedShared
      DEV_COMPRESSED_SHARED_TAR_ZST: /data/compressedShared.tar.zst
      BATCH_MEMORY: '8000'
      BATCH_CPU: '4'
  InitialWorkDirRequirement:
    listing:
      - entryname: 4seqs.fasta
        entry: $(inputs.inputFasta)
        writable: true
baseCommand:
  - python3
  - /start/start.py
inputs:
  parametersFile: File
  inputFasta:
    type: File
    inputBinding:
      prefix: '-inputFasta'
outputs:
  clusteredFasta:
    type: File
    outputBinding:
      glob: cluster.fasta
  cluster_file:
    type: File
    outputBinding:
      glob: cluster.fasta.clstr
arguments: []
