class: CommandLineTool
label: OmicsBox CD-HIT-Post Tool
inputs:
  - id: cluster_path
    type: File
    inputBinding:
      position: 1
      prefix: '-clusterPath'
  - id: input_fasta
    type: File
    inputBinding:
      position: 2
      prefix: '-inputFasta'
  - id: extra_input
    type: File
    inputBinding:
      position: 2
      prefix: '-extraInput'
  - id: output_chart
    default: chart.box
    type: string
    inputBinding:
      position: 3
      prefix: '-outputChart'
  - id: output_report
    default: report.box
    type: string
    inputBinding:
      prefix: '-outputReport'
outputs:
  - type: File
    outputBinding:
      glob: $(inputs.output_chart)
  - type: File
    outputBinding:
      glob: $(inputs.output_report)
requirements:
  - class: DockerRequirement
    dockerPull: 188164850845.dkr.ecr.us-east-1.amazonaws.com/omicsbox
cwlVersion: v1.2
baseCommand:
  - java
  - '-Dapp.custom.vmoptions=/opt/app/custom.vmoptions'
  - '-jar'
  - /opt/app/omicsbox.jar
arguments:
  - cdhitpost
