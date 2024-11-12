class: Workflow
cwlVersion: v1.2
requirements: {}
inputs: {}
steps:
  L3:
    in:
      str1InputL4:
        valueFrom: strL3WorkflowInput
    out: []
    run: L3.w.cwl
outputs: []
