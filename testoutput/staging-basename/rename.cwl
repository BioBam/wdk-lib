id: check
class: ExpressionTool
inputs:
  - id: f1
    type: File
  - id: newname
    type: string
outputs:
  - id: out
    type: File
cwlVersion: v1.2
expression: |
  ${
  inputs.f1.basename = inputs.newname;
  return {"out": inputs.f1};
  }
