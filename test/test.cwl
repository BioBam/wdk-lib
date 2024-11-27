
cwlVersion: v1.2
class: CommandLineTool

inputs:
  weird_input:
    type: 
    - "null"
    - type: array
      items: string
      inputBinding:
        position: 1
    - type: array
      items: File
      inputBinding:
        position: 2

outputs:
  result: stdout

baseCommand: echo