class: ExpressionTool
cwlVersion: v1.2
requirements:
  InlineJavascriptRequirement: {}
inputs:
  CdhitParameters.input: File
  CdhitParameters.lengthDifferenceCutoff: string
  CdhitParameters.bandWidth: string
  CdhitParameters.sequenceIdentityType: string
  CdhitParameters.sequenceIdentity: string
  CdhitParameters.maxUnmatchedPercentageLonger: string
  CdhitParameters.accurateMode: string
  CdhitParameters.alignmentCoverageShorter: string
  CdhitParameters.maxUnmatchedPercentageShorter: string
  CdhitParameters.alignmentPositionConstrains: string
  CdhitParameters.wordLength: string
  CdhitParameters.strand: string
  CdhitParameters.lengthCutoff: string
  CdhitParameters.alignmentCoverageLonger: string
outputs:
  parameters_file: File
expression: |-
  ${
        var params = {};
        for (var key in inputs) {
          if (typeof inputs[key] === 'object' && inputs[key] !== null && inputs[key].class === 'File') {
            params[key] = inputs[key].basename;
          } else {
            params[key] = inputs[key];
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
