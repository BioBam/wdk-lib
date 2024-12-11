import { Input, Output, Tool, Workflow } from '../src/lib';
import { Constructs } from '../src/lib/Constructs';

describe('Simple Workflow Conditionals cwl export test', () => {

  it('should generate valid YAML and match snapshot', () => {

    // Create the root construct instance with null as its scope.
    const root = Constructs.rootWorkflow();

    const w = new Workflow(root, 'my-simple-workflow');

    const ta = new Tool(w, 'tool-a');
    const taFInput = Input.file(ta, 'taFInput');
    const taFOutput = Output.file(ta, 'taFOutput');

    const tb = new Tool(w, 'tool-b');
    const tbFInput = Input.file(tb, 'tbFInput');
    const tbFOutput = Output.file(tb, 'tbFOutput');

    // Wi
    const wi = Input.fromStepInput(w, taFInput); // cannot be done both ways now...
    tbFInput.linkTo(wi);

    // Wo
    Output.fromStepOutput(w, taFOutput).as('oa');
    Output.fromStepOutput(w, tbFOutput).as('ob'); // same type or null.

    // const outputDir = path.join(__dirname, '../testoutput');
    // const sFile = w.serialize(outputDir);

    // Assert there are no differences
    expect(w.toMap()).toMatchSnapshot();
  });
});
