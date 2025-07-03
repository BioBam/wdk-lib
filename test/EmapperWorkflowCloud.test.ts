import { EmapperWorkflowCloud } from '../src/examples/emapper/EmapperWorkflowCloud';
import { Constructs } from '../src/lib/Constructs';

describe('EmapperWorkflowCloud cwl export test', () => {

  it('should generate valid YAML and match snapshot', () => {

    // Create the root construct instance with null as its scope.
    const root = Constructs.rootWorkflow();

    const w = new EmapperWorkflowCloud(root, 'emapper-workflow-cloud');

    // Assert there are no differences
    expect(w.toMap()).toMatchSnapshot();
  });
});