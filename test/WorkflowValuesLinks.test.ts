import { Tool, Workflow } from '../src/lib';
import { Input } from '../src/lib/Input';
import { InputReference } from '../src/lib/InputReference';
import { WorkflowValues } from '../src/lib/WorkflowValues';


// class ToolA extends Tool {
//   public fileOut: Output;
//   constructor(scope: Workflow, id: string) {
//     super(scope, id);
//     this.fileOut = Output.file(this, 'fileOut');
//   }
// }

class ToolB extends Tool {
  public fileIn: Input;
  constructor(scope: Workflow, id: string) {
    super(scope, id);
    this.fileIn = Input.file(this, 'fileIn');
  }
}

// class MyWorkflowA extends Workflow {
//   public ta: ToolA;
//   constructor(scope: Workflow, id: string) {
//     super(scope, id);
//     this.ta = new ToolA(this, 'tool-a');
//   }
// }

class MyWorkflowB extends Workflow {
  public tb: ToolB;
  constructor(scope: Workflow, id: string) {
    super(scope, id);
    this.tb = new ToolB(this, 'tool-b');
  }
}

describe('WorkflowValues', () => {

  let w0: Workflow;

  beforeEach(() => {
    const root = w0;
    w0 = new Workflow(root, 'test-workflow');
  });

  it('Should link a deep parameter input all the way up to the top workflow and set the propper value name.', () => {
    let wb = new MyWorkflowB(w0, 'workflow-b');
    let values = WorkflowValues.create(w0);
    values.addInput(wb.tb.fileIn, InputReference.file('/path/to/file1'));
    expect(Object.keys(values.inputs)).toEqual(['workflow-b.tool-b.fileIn']);
  });

});
