cwlVersion: v1.0
class: CommandLineTool

baseCommand: main_processing_script.sh

inputs:
  box_files:
    type: File[]
    inputBinding:
      prefix: "--box_files"
      itemSeparator: ","

outputs:
  result:
    type: File
    outputBinding:
      glob: "result.txt"

requirements:
  InlineJavascriptRequirement: {}
    dockerPull: your_docker_image
