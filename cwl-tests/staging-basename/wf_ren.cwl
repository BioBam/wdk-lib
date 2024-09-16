class: Workflow
cwlVersion: v1.2
inputs:
  f1:
    type: File
    default: whale.txt
  newname:
    type: string
    default: badger.txt
outputs: []
requirements:
  StepInputExpressionRequirement: {}
  InlineJavascriptRequirement: {}
steps:
  rename:
    in:
      f1: f1
      newname: newname
    out:
      - out
    run: rename.cwl
  echo:
    in:
      p: rename/out
      checkname: newname
    out: []
    run: check.cwl
