class: CommandLineTool
cwlVersion: v1.2
baseCommand:
  - echo
inputs:
  message: string?
outputs:
  echoed:
    type: string
arguments:
  - '-n'
