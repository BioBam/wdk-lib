/// !hide
import { Constructs, Input, Output, Tool, ToolConfig } from '../../../src/lib/';
import { TestHelper } from '../test-helper';

describe('Command-line Tool CWL output', () => {
  it('should generate correct CWL for the echo tool and have no git differences', () => {

    // Create the root construct instance with null as its scope.
    const root = Constructs.rootWorkflowWithName('echo-tool-inline-example');
    /// !show

    // Create the echo tool and define its inputs and outputs
    const echoTool = new Tool(root, 'echo-inline', {});
    ToolConfig.basic(echoTool).withBaseCommand(['echo']).withArguments(['-n']);
    Input.string(echoTool, 'message').withDoc('The message to echo').makeOptional(true);
    Output.string(echoTool, 'echoed');

    /// !hide
    // Create output directory inside the testoutput directory
    TestHelper.serializeAndCheckStepsInRootWorkflow(root);
  });
});
