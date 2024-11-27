id: L1
class: Workflow
inputs: []
outputs: []
cwlVersion: v1.2
steps:
  - id: L2
    in: []
    out: []
    run:
      id: L2
      class: Workflow
      inputs: []
      outputs: []
      cwlVersion: v1.2
      steps:
        - id: L3
          in:
            - id: str1InputL4
              valueFrom: strL3WorkflowInput
          out: []
          run:
            id: L3
            class: Workflow
            inputs:
              - id: l3Input
                type: string
              - id: str1InputL4
                type: string
            outputs: []
            cwlVersion: v1.2
            steps:
              - id: l4
                in:
                  - id: str1InputL4
                    source: str1InputL4
                  - id: str2InputL4
                    valueFrom: toolStepInputInWorkflow
                out: []
                run:
                  id: l4
                  class: CommandLineTool
                  inputs:
                    - id: str1InputL4
                      type: string
                    - id: str2InputL4
                      type: string
                  outputs: []
                  cwlVersion: v1.2
