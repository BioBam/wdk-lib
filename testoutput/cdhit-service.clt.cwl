class: CommandLineTool
label: CDHit
inputs:
  - id: parametersFile
    type: File
  - id: inputFasta
    type: File
    inputBinding:
      prefix: '-inputFasta'
outputs:
  - type: File
    outputBinding:
      glob: cluster.fasta
  - type:
      - 'null'
      - File
    outputBinding:
      glob: cluster.fasta.clstr
  - type: string
    outputBinding:
      loadContents: true
      glob: cluster.json
      outputEval: $(self[0].contents)
requirements:
  - class: NetworkAccess
    networkAccess: true
  - class: DockerRequirement
    dockerPull: 188164850845.dkr.ecr.us-east-1.amazonaws.com/cdhit:latest
  - class: EnvVarRequirement
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
  - class: InitialWorkDirRequirement
    listing:
      - entryname: 4seqs.fasta
        entry: $(inputs.inputFasta)
        writable: true
cwlVersion: v1.2
baseCommand:
  - python3
  - /start/start.py
