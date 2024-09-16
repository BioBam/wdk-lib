cwlVersion: v1.0
class: CommandLineTool

baseCommand: convert_to_box_script.sh

inputs:
  input_file:
    type: File
    inputBinding:
      position: 1

outputs:
  output_box:
    type: File
    outputBinding:
      glob: "*.box"

requirements:
  InlineJavascriptRequirement: {}
  DockerRequirement:
    dockerPull: your_docker_image
