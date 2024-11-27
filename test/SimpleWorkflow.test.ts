import * as path from 'path';
import { Input, Output, Tool, Workflow } from '../src/lib';
import { Constructs } from '../src/lib/Constructs';

describe('Simple Workflow cwl export test', () => {

  it('should generate valid YAML and match snapshot', () => {

    // Create the root construct instance with null as its scope.
    const root = Constructs.rootWorkflow();

    const w = new Workflow(root, 'my-simple-workflow');

    const ta = new Tool(w, 'tool-a');
    const tb = new Tool(w, 'tool-b');

    const taFInput = Input.file(ta, 'taFInput');
    const taFOutput = Output.file(ta, 'taFOutput');

    const tbFInput = Input.file(tb, 'tbFInput');
    const tbFOutput = Output.file(tb, 'tbFOutput');

    tbFInput.linkTo(taFOutput);

    Input.fromStepInput(w, taFInput);
    Output.fromStepOutput(w, tbFOutput);

    const outputDir = path.join(__dirname, '../testoutput');
    const sFile = w.serialize(outputDir);
    console.log(sFile);

    // Assert there are no differences
    expect(w.toMap()).toMatchSnapshot();
  });
});
