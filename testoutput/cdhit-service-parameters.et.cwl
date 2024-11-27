class: ExpressionTool
inputs:
  - id: CdhitParameters.input
    type: File
  - id: CdhitParameters.lengthDifferenceCutoff
    type: string
  - id: CdhitParameters.bandWidth
    type: string
  - id: CdhitParameters.sequenceIdentityType
    type: string
  - id: CdhitParameters.sequenceIdentity
    type: string
  - id: CdhitParameters.maxUnmatchedPercentageLonger
    type: string
  - id: CdhitParameters.accurateMode
    type: string
  - id: CdhitParameters.alignmentCoverageShorter
    type: string
  - id: CdhitParameters.maxUnmatchedPercentageShorter
    type: string
  - id: CdhitParameters.alignmentPositionConstrains
    type: string
  - id: CdhitParameters.wordLength
    type: string
  - id: CdhitParameters.strand
    type: string
  - id: CdhitParameters.lengthCutoff
    type: string
  - id: CdhitParameters.alignmentCoverageLonger
    type: string
outputs:
  - id: parameters_file
    type: File
cwlVersion: v1.2
expression: |-
  ${
        var params = {};
          for (var key in inputs) {
            if (inputs[key] !== undefined && inputs[key] !== null) { // Check if inputs[key] is set
              if (Array.isArray(inputs[key]) && inputs[key][0].class === 'File') {
                params[key] = inputs[key].map(file => file.basename);
              } else if (typeof inputs[key] === 'object' && inputs[key].class === 'File') {
                params[key] = inputs[key].basename;
              } else {
                params[key] = inputs[key];
              }
            }
          }

          return {
            "parameters_file": {
              "class": "File",
              "basename": "parameters.txt",
              "contents": JSON.stringify(params, null, 2)
            }
          };
      }
