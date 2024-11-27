id: wf_ren
class: Workflow
inputs:
  - id: f1
    default: whale.txt
    type: File
  - id: newname
    default: badger.txt
    type: string
outputs: []
requirements:
  - class: StepInputExpressionRequirement
  - class: InlineJavascriptRequirement
cwlVersion: v1.2
steps:
  - id: rename
    in:
      - id: f1
        source: f1
      - id: newname
        source: newname
    out:
      - out
    run:
      id: rename
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
  - id: echo
    in:
      - id: p
        source: rename/out
      - id: checkname
        source: newname
    out: []
    run:
      id: echo
      class: CommandLineTool
      inputs:
        - id: p
          type: File
        - id: checkname
          type: string
      outputs: []
      cwlVersion: v1.2
      arguments:
        - sh
        - "-c"
        - |
          name=`basename $(inputs.p.path)`
          ls -l $(inputs.p.path)
          if test $name = $(inputs.checkname) ; then
            echo success
          else
            echo expected basename to be $(inputs.checkname) but was $name
            exit 1
          fi
