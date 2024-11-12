class: Workflow
cwlVersion: v1.2
requirements: {}
inputs:
  l3Input: string
  str1InputL4: string
steps:
  l4:
    in:
      str1InputL4: str1InputL4
      str2InputL4:
        valueFrom: toolStepInputInWorkflow
    out: []
    run: l4.clt.cwl
outputs: []
