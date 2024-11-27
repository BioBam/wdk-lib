id: cdhit-workflow-id
class: Workflow
inputs:
  - id: input_fasta
    type: File
  - id: CdhitParameters.lengthDifferenceCutoff
    type: string
  - id: CdhitParameters.bandWidth
    type: string
  - id: CdhitParameters.sequenceIdentityType
    type: string
  - id: CdhitParameters.sequenceIdentity
    type: string
  - id: CdhitParameters.maxUnmatchedPercentageLonger
    type: string
  - id: CdhitParameters.accurateMode
    type: string
  - id: CdhitParameters.alignmentCoverageShorter
    type: string
  - id: CdhitParameters.maxUnmatchedPercentageShorter
    type: string
  - id: CdhitParameters.alignmentPositionConstrains
    type: string
  - id: CdhitParameters.wordLength
    type: string
  - id: CdhitParameters.strand
    type: string
  - id: CdhitParameters.lengthCutoff
    type: string
  - id: CdhitParameters.alignmentCoverageLonger
    type: string
outputs:
  - id: parameters_file
    type: File
  - id: clustered_fasta_file
    type: File
  - id: cluster_file
    type:
      - "null"
      - File
  - id: output_chart_file
    type: File
  - id: output_report_file
    type: File
requirements:
  - class: SubworkflowFeatureRequirement
  - class: InlineJavascriptRequirement
cwlVersion: v1.2
steps:
  - id: cdhit-service-parameters
    in:
      - id: CdhitParameters.input
        source: input_fasta
      - id: CdhitParameters.lengthDifferenceCutoff
        source: CdhitParameters.lengthDifferenceCutoff
        valueFrom: "5"
      - id: CdhitParameters.bandWidth
        source: CdhitParameters.bandWidth
      - id: CdhitParameters.sequenceIdentityType
        source: CdhitParameters.sequenceIdentityType
      - id: CdhitParameters.sequenceIdentity
        source: CdhitParameters.sequenceIdentity
      - id: CdhitParameters.maxUnmatchedPercentageLonger
        source: CdhitParameters.maxUnmatchedPercentageLonger
      - id: CdhitParameters.accurateMode
        source: CdhitParameters.accurateMode
      - id: CdhitParameters.alignmentCoverageShorter
        source: CdhitParameters.alignmentCoverageShorter
      - id: CdhitParameters.maxUnmatchedPercentageShorter
        source: CdhitParameters.maxUnmatchedPercentageShorter
      - id: CdhitParameters.alignmentPositionConstrains
        source: CdhitParameters.alignmentPositionConstrains
      - id: CdhitParameters.wordLength
        source: CdhitParameters.wordLength
      - id: CdhitParameters.strand
        source: CdhitParameters.strand
      - id: CdhitParameters.lengthCutoff
        source: CdhitParameters.lengthCutoff
      - id: CdhitParameters.alignmentCoverageLonger
        source: CdhitParameters.alignmentCoverageLonger
    out:
      - parameters_file
    run:
      id: cdhit-service-parameters
      class: ExpressionTool
      inputs:
        - id: CdhitParameters.input
          type: File
        - id: CdhitParameters.lengthDifferenceCutoff
          type: string
        - id: CdhitParameters.bandWidth
          type: string
        - id: CdhitParameters.sequenceIdentityType
          type: string
        - id: CdhitParameters.sequenceIdentity
          type: string
        - id: CdhitParameters.maxUnmatchedPercentageLonger
          type: string
        - id: CdhitParameters.accurateMode
          type: string
        - id: CdhitParameters.alignmentCoverageShorter
          type: string
        - id: CdhitParameters.maxUnmatchedPercentageShorter
          type: string
        - id: CdhitParameters.alignmentPositionConstrains
          type: string
        - id: CdhitParameters.wordLength
          type: string
        - id: CdhitParameters.strand
          type: string
        - id: CdhitParameters.lengthCutoff
          type: string
        - id: CdhitParameters.alignmentCoverageLonger
          type: string
      outputs:
        - id: parameters_file
          type: File
      requirements:
        - class: InlineJavascriptRequirement
      cwlVersion: v1.2
      expression: |-
        ${
              var params = {};
                for (var key in inputs) {
                  if (inputs[key] !== undefined && inputs[key] !== null) { // Check if inputs[key] is set
                    if (Array.isArray(inputs[key]) && inputs[key][0].class === 'File') {
                      params[key] = inputs[key].map(file => file.basename);
                    } else if (typeof inputs[key] === 'object' && inputs[key].class === 'File') {
                      params[key] = inputs[key].basename;
                    } else {
                      params[key] = inputs[key];
                    }
                  }
                }

                return {
                  "parameters_file": {
                    "class": "File",
                    "basename": "parameters.txt",
                    "contents": JSON.stringify(params, null, 2)
                  }
                };
            }
  - id: cdhit-service
    in:
      - id: parametersFile
        source: cdhit-service-parameters/parameters_file
      - id: inputFasta
        source: input_fasta
    out:
      - clusteredFasta
      - cluster_file
    run:
      id: cdhit-service
      class: CommandLineTool
      label: CDHit
      inputs:
        - id: parametersFile
          type: File
        - id: inputFasta
          type: File
          inputBinding:
            prefix: "-inputFasta"
      outputs:
        - id: clusteredFasta
          type: File
          outputBinding:
            glob: cluster.fasta
        - id: cluster_file
          type:
            - "null"
            - File
          outputBinding:
            glob: cluster.fasta.clstr
        - id: json_example
          type: string
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
            BATCH_MEMORY: "8000"
            BATCH_CPU: "4"
        - class: InitialWorkDirRequirement
          listing:
            - entryname: 4seqs.fasta
              entry: $(inputs.inputFasta)
              writable: true
      cwlVersion: v1.2
      baseCommand:
        - python3
        - /start/start.py
  - id: cdhit-post
    in:
      - id: cluster_path
        source: cdhit-service/cluster_file
      - id: input_fasta
        source: cdhit-service/clusteredFasta
      - id: extra_input
        source:
          - cdhit-service/cluster_file
          - input_fasta
        pickValue: first_non_null
    out:
      - output_chart_file
      - output_report_file
    run:
      id: cdhit-post
      class: CommandLineTool
      label: OmicsBox CD-HIT-Post Tool
      inputs:
        - id: cluster_path
          type: File
          inputBinding:
            position: 1
            prefix: "-clusterPath"
        - id: input_fasta
          type: File
          inputBinding:
            position: 2
            prefix: "-inputFasta"
        - id: extra_input
          type: File
          inputBinding:
            position: 2
            prefix: "-extraInput"
        - id: output_chart
          default: chart.box
          type: string
          inputBinding:
            position: 3
            prefix: "-outputChart"
        - id: output_report
          default: report.box
          type: string
          inputBinding:
            prefix: "-outputReport"
      outputs:
        - id: output_chart_file
          type: File
          outputBinding:
            glob: $(inputs.output_chart)
        - id: output_report_file
          type: File
          outputBinding:
            glob: $(inputs.output_report)
      requirements:
        - class: DockerRequirement
          dockerPull: 188164850845.dkr.ecr.us-east-1.amazonaws.com/omicsbox
      cwlVersion: v1.2
      baseCommand:
        - java
        - "-Dapp.custom.vmoptions=/opt/app/custom.vmoptions"
        - "-jar"
        - /opt/app/omicsbox.jar
      arguments:
        - cdhitpost
