id: my-simple-workflow
class: Workflow
inputs:
  - id: taFInput
    type: File
outputs:
  - id: tbFOutput
    type: File
cwlVersion: v1.2
steps:
  - id: tool-a
    in:
      - id: taFInput
        source: taFInput
    out:
      - taFOutput
    run:
      id: tool-a
      class: CommandLineTool
      inputs:
        - id: taFInput
          type: File
      outputs:
        - id: taFOutput
          type: File
      cwlVersion: v1.2
  - id: tool-b
    in:
      - id: tbFInput
        source: tool-a/taFOutput
    out:
      - tbFOutput
    run:
      id: tool-b
      class: CommandLineTool
      inputs:
        - id: tbFInput
          type: File
      outputs:
        - id: tbFOutput
          type: File
      cwlVersion: v1.2
