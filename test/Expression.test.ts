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
    expect(evaluatedScript).not.toContain('nullValue');
    expect(evaluatedScript).toEqual(expectedOutput);
  });
});