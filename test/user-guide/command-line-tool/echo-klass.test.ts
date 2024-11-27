/// !hide

import { Constructs } from '../../../src/lib';
import { Echo } from '../klasses/echo-tool';

describe('Command-line Tool CWL output', () => {
  it('should generate correct CWL for the echo tool and have no git differences', () => {

    // Create the root construct instance with null as its scope.
    const root = Constructs.rootWorkflowWithName('echo-tool-class-example');
    /// !show

    // Create the echo tool
    let tool = new Echo(root);
    let cwlMap = tool._toCwlObject().save();

    /// !hide
    // Create output directory inside the testoutput directory
    // TestHelper.serializeAndCheckStepsInRootWorkflow(root);
    expect(cwlMap).toMatchSnapshot();

  });
});
