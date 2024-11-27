class: CommandLineTool
inputs:
  - id: message
    type:
      - 'null'
      - string
outputs:
  - type: string
cwlVersion: v1.2
baseCommand:
  - echo
arguments:
  - '-n'
