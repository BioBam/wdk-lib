class: Workflow
cwlVersion: v1.2
inputs:
  f1:
    id: f1
    default: whale.txt
    type: File
  newname:
    id: newname
    default: badger.txt
    type: string
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
