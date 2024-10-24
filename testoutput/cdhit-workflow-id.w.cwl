class: Workflow
cwlVersion: v1.2
requirements:
  SubworkflowFeatureRequirement: {}
  InlineJavascriptRequirement: {}
inputs:
  input_fasta: File
  CdhitParameters.lengthDifferenceCutoff: string
  CdhitParameters.bandWidth: string
  CdhitParameters.sequenceIdentityType: string
  CdhitParameters.sequenceIdentity: string
  CdhitParameters.maxUnmatchedPercentageLonger: string
  CdhitParameters.accurateMode: string
  CdhitParameters.alignmentCoverageShorter: string
  CdhitParameters.maxUnmatchedPercentageShorter: string
  CdhitParameters.alignmentPositionConstrains: string
  CdhitParameters.wordLength: string
  CdhitParameters.strand: string
  CdhitParameters.lengthCutoff: string
  CdhitParameters.alignmentCoverageLonger: string
steps:
  cdhit-service-parameters:
    in:
      CdhitParameters.input: input_fasta
      CdhitParameters.lengthDifferenceCutoff:
        source: CdhitParameters.lengthDifferenceCutoff
        valueFrom: '5'
      CdhitParameters.bandWidth: CdhitParameters.bandWidth
      CdhitParameters.sequenceIdentityType: CdhitParameters.sequenceIdentityType
      CdhitParameters.sequenceIdentity: CdhitParameters.sequenceIdentity
      CdhitParameters.maxUnmatchedPercentageLonger: CdhitParameters.maxUnmatchedPercentageLonger
      CdhitParameters.accurateMode: CdhitParameters.accurateMode
      CdhitParameters.alignmentCoverageShorter: CdhitParameters.alignmentCoverageShorter
      CdhitParameters.maxUnmatchedPercentageShorter: CdhitParameters.maxUnmatchedPercentageShorter
      CdhitParameters.alignmentPositionConstrains: CdhitParameters.alignmentPositionConstrains
      CdhitParameters.wordLength: CdhitParameters.wordLength
      CdhitParameters.strand: CdhitParameters.strand
      CdhitParameters.lengthCutoff: CdhitParameters.lengthCutoff
      CdhitParameters.alignmentCoverageLonger: CdhitParameters.alignmentCoverageLonger
    out:
      - parameters_file
    run: cdhit-service-parameters.et.cwl
  cdhit-service:
    in:
      parametersFile: cdhit-service-parameters/parameters_file
      inputFasta: input_fasta
    out:
      - clusteredFasta
      - cluster_file
    run: cdhit-service.clt.cwl
  cdhit-post:
    in:
      cluster_path: cdhit-service/cluster_file
      input_fasta: cdhit-service/clusteredFasta
      extra_input:
        source:
          - cdhit-service/cluster_file
          - input_fasta
        pickValue: first_non_null
    out:
      - output_chart_file
      - output_report_file
    run: cdhit-post.clt.cwl
outputs:
  - id: parameters_file
    type: File
    outputSource: cdhit-service-parameters/parameters_file
  - id: clustered_fasta_file
    type: File
    outputSource: cdhit-service/clusteredFasta
  - id: cluster_file
    type: File
    outputSource: cdhit-service/cluster_file
  - id: output_chart_file
    type: File
    outputSource: cdhit-post/output_chart_file
  - id: output_report_file
    type: File
    outputSource: cdhit-post/output_report_file
