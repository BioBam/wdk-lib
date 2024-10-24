class: CommandLineTool
cwlVersion: v1.2
label: OmicsBox CD-HIT-Post Tool
requirements:
  DockerRequirement:
    dockerPull: 188164850845.dkr.ecr.us-east-1.amazonaws.com/omicsbox
baseCommand:
  - java
  - '-Dapp.custom.vmoptions=/opt/app/custom.vmoptions'
  - '-jar'
  - /opt/app/omicsbox.jar
inputs:
  cluster_path:
    type: File
    inputBinding:
      prefix: '-clusterPath'
      position: 1
  input_fasta:
    type: File
    inputBinding:
      prefix: '-inputFasta'
      position: 2
  extra_input:
    type: File
    inputBinding:
      prefix: '-extraInput'
      position: 2
  output_chart:
    type: string
    default: chart.box
    inputBinding:
      prefix: '-outputChart'
      position: 3
  output_report:
    type: string
    default: report.box
    inputBinding:
      prefix: '-outputReport'
outputs:
  output_chart_file:
    type: File
    outputBinding:
      glob: $(inputs.output_chart)
  output_report_file:
    type: File
    outputBinding:
      glob: $(inputs.output_report)
arguments:
  - cdhitpost
