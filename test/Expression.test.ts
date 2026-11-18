import { ExpressionTool } from '../src/lib/ExpressionTool';


// Jest test case
describe('ExpressionTool', () => {
  it('test generate correct parameters.txt', () => {

    // Call makeParametersJsonExpression
    const expressionScript = ExpressionTool.makeParametersJsonExpression();

    // Correctly format the script for evaluation
    const formattedExpression = expressionScript.replace(/^\$\{/, '').replace(/\}$/, ''); // Remove wrapping `${ ... }`

    // Define mock inputs
    const mockInputs = {
      inputFile: { class: 'File', basename: 'testfile.txt' },
      numberParam: 42,
      stringParam: 'example',
      nullValue: null, // should not be shown in the parameters.txt output json
    };

    // Simulate the evaluation of the formatted script
    const evaluateScript = new Function('inputs', `
      ${formattedExpression}
    `);
    const evaluatedScript = evaluateScript(mockInputs);

    // Expected output
    const expectedOutput = {
      parameters_file: {
        class: 'File',
        basename: 'parameters.txt',
        contents: JSON.stringify({
          inputFile: 'testfile.txt',
          numberParam: 42,
          stringParam: 'example',
        }, null, 2),
      },
    };

    // Assert that the evaluated script matches the expected output
    expect(evaluatedScript).toEqual(expectedOutput);
  });


  it('test generate correct parameters.txt for arrays too', () => {

    // Call makeParametersJsonExpression
    const expressionScript = ExpressionTool.makeParametersJsonExpression();

    // Correctly format the script for evaluation
    const formattedExpression = expressionScript.replace(/^\$\{/, '').replace(/\}$/, ''); // Remove wrapping `${ ... }`

    // Define mock inputs
    const mockInputs = {
      outputArray: [
        {
          location: 'file:///home/runner/work/user_guide/user_guide/src/_includes/cwl/outputs/baz.txt',
          basename: 'baz.txt',
          class: 'File',
          checksum: 'sha1$da39a3ee5e6b4b0d3255bfef95601890afd80709',
          size: 0,
          path: '/home/runner/work/user_guide/user_guide/src/_includes/cwl/outputs/baz.txt',
        },
        {
          location: 'file:///home/runner/work/user_guide/user_guide/src/_includes/cwl/outputs/foo.txt',
          basename: 'foo.txt',
          class: 'File',
          checksum: 'sha1$da39a3ee5e6b4b0d3255bfef95601890afd80709',
          size: 0,
          path: '/home/runner/work/user_guide/user_guide/src/_includes/cwl/outputs/foo.txt',
        },
      ],
      inputFile: { class: 'File', basename: 'testfile.txt' },
      numberParam: 42,
      stringParam: 'example',
      nullValue: null, // should not be shown in the parameters.txt output json
    };

    // Simulate the evaluation of the formatted script
    const evaluateScript = new Function('inputs', `
      ${formattedExpression}
    `);
    const evaluatedScript = evaluateScript(mockInputs);

    // Expected output
    const expectedOutput = {
      parameters_file: {
        class: 'File',
        basename: 'parameters.txt',
        contents: JSON.stringify({
          outputArray: [
            'baz.txt',
            'foo.txt',
          ],
          inputFile: 'testfile.txt',
          numberParam: 42,
          stringParam: 'example',
        }, null, 2),
      },
    };

    // Assert that the evaluated script matches the expected output
    expect(evaluatedScript).toEqual(expectedOutput);
  });
});
// An empty array input used to crash every parameters.txt expression with
// "TypeError: Cannot read property 'class' of undefined" (inputs[key][0].class),
// e.g. a scatter that produced no files. It must pass through instead.
describe('ExpressionTool parameters.txt with empty arrays', () => {
  const run = (expressionScript: string, inputs: any) => {
    const body = expressionScript.replace(/^\$\{/, '').replace(/\}$/, '');
    return new Function('inputs', body)(inputs);
  };
  const inputs = {
    emptyArray: [],
    files: [{ class: 'File', basename: 'a.vcf' }, { class: 'File', basename: 'b.vcf' }],
    nullFirst: [null, { class: 'File', basename: 'c.vcf' }],
    names: ['chr1', 'chr2'],
    step: 'concat',
  };

  it('makeParametersJsonExpression keeps an empty array as []', () => {
    const out = run(ExpressionTool.makeParametersJsonExpression(), inputs);
    expect(JSON.parse(out.parameters_file.contents)).toEqual({
      emptyArray: [],
      files: ['a.vcf', 'b.vcf'],
      nullFirst: [null, { class: 'File', basename: 'c.vcf' }],
      names: ['chr1', 'chr2'],
      step: 'concat',
    });
  });

  it('makeParametersJsonExpressionAllStrings turns an empty array into ""', () => {
    const out = run(ExpressionTool.makeParametersJsonExpressionAllStrings(), inputs);
    const params = JSON.parse(out.parameters_file.contents);
    expect(params.emptyArray).toEqual('');
    expect(params.files).toEqual(['a.vcf', 'b.vcf']);
    expect(params.names).toEqual('chr1,chr2');
  });

  it('makeParametersAndResourcesExpression does not fail on an empty array', () => {
    const out = run(ExpressionTool.makeParametersAndResourcesExpression('return { cores: 3, memory: 100 };', 1, 10), inputs);
    expect(JSON.parse(out.parameters_file.contents).emptyArray).toEqual([]);
  });
});
