import { Input, Output, Tool, Workflow } from '../src/lib';
import { Constructs } from '../src/lib/Constructs';

describe('Reference Deep Parameters', () => {

  it('Link top workflow input all the way into a deep Tool input, creating intermediate workflow input.', () => {

    const root = Constructs.rootWorkflow();
    class ToolB extends Tool {
      public fileIn: Input;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.fileIn = Input.file(this, 'fileIn');
      }
    }

    class MyWorkflowB extends Workflow {
      public tb: ToolB;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.tb = new ToolB(this, 'tool-b');
      }
    }
    const w = new Workflow(root, 'my-simple-workflow');
    let workflowInputFile = Input.file(w, 'workflowInputFile');

    const wb = new MyWorkflowB(w, 'my-simple-workflow-b');

    wb.tb.fileIn.linkTo(workflowInputFile);

    // Assert there are no differences
    expect(w.toMap()).toMatchSnapshot();
  });


  it('Link top tool output to deep tool input', () => {

    const root = Constructs.rootWorkflow();

    class ToolA extends Tool {
      public fileOut: Output;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.fileOut = Output.file(this, 'fileOut');
      }
    }

    class ToolB extends Tool {
      public fileIn: Input;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.fileIn = Input.file(this, 'fileIn');
      }
    }


    class MyWorkflowB extends Workflow {
      public tb: ToolB;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.tb = new ToolB(this, 'tool-b-deep');
      }
    }

    const w = new Workflow(root, 'my-simple-workflow');
    const ta = new ToolA(w, 'tool-a-top');

    // const wa = new MyWorkflowA(w, 'my-simple-workflow-a');
    const wb = new MyWorkflowB(w, 'my-simple-workflow-b');
    wb.tb.fileIn.linkTo(ta.fileOut);

    // Assert there are no differences
    expect(w.toMap()).toMatchSnapshot();
  });


  it('Link deep tool output to deep tool input', () => {

    const root = Constructs.rootWorkflow();

    class ToolA extends Tool {
      public fileOut: Output;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.fileOut = Output.file(this, 'fileOut');
      }
    }

    class ToolB extends Tool {
      public fileIn: Input;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.fileIn = Input.file(this, 'fileIn');
      }
    }

    class MyWorkflowA extends Workflow {
      public ta: ToolA;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.ta = new ToolA(this, 'tool-a');
      }
    }

    class MyWorkflowB extends Workflow {
      public tb: ToolB;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.tb = new ToolB(this, 'tool-b-deep');
      }
    }

    const w = new Workflow(root, 'top-workflow');

    // const wa = new MyWorkflowA(w, 'my-simple-workflow-a');
    const wa = new MyWorkflowA(w, 'swa');
    const wb = new MyWorkflowB(w, 'swb');
    wb.tb.fileIn.linkTo(wa.ta.fileOut);

    // Assert there are no differences
    expect(w.toMap()).toMatchSnapshot();
  });


  // it('Link workflow output from deep tool output', () => {

  //   const root = Constructs.rootWorkflow();

  //   class ToolA extends Tool {
  //     public fileOut: Output;
  //     constructor(scope: Workflow, id: string) {
  //       super(scope, id);
  //       this.fileOut = Output.file(this, 'fileOut');
  //     }
  //   }

  //   class MyWorkflowA extends Workflow {
  //     public ta: ToolA;
  //     constructor(scope: Workflow, id: string) {
  //       super(scope, id);
  //       this.ta = new ToolA(this, 'tool-a');
  //     }
  //   }


  //   const w = new Workflow(root, 'top-workflow');
  //   let workflowOutputFile = Output.file(w, 'workflowOutputFile');

  //   const wa = new MyWorkflowA(w, 'swa');
  //   workflowOutputFile.linkTo(wa.ta.fileOut);

  //   // Assert there are no differences
  //   expect(w.toMap()).toMatchSnapshot();
  // });


  // it('Link Wo Parameters in Workflows', () => {

  //   const root = Constructs.rootWorkflow();

  //   class ToolA extends Tool {
  //     public fileOut: Output;
  //     constructor(scope: Workflow, id: string) {
  //       super(scope, id);
  //       this.fileOut = Output.file(this, 'fileOut');
  //     }
  //   }

  //   class ToolB extends Tool {
  //     public fileIn: Input;
  //     constructor(scope: Workflow, id: string) {
  //       super(scope, id);
  //       this.fileIn = Input.file(this, 'fileIn');
  //     }
  //   }

  //   class MyWorkflowA extends Workflow {
  //     public ta: ToolA;
  //     constructor(scope: Workflow, id: string) {
  //       super(scope, id);
  //       this.ta = new ToolA(this, 'tool-a');
  //     }
  //   }

  //   class MyWorkflowB extends Workflow {
  //     public tb: ToolB;
  //     constructor(scope: Workflow, id: string) {
  //       super(scope, id);
  //       this.tb = new ToolB(this, 'tool-b');
  //     }
  //   }

  //   const w = new Workflow(root, 'my-simple-workflow');
  //   let workflowInputFile = Input.file(w, 'workflowInputFile');

  //   // const wa = new MyWorkflowA(w, 'my-simple-workflow-a');
  //   const wb = new MyWorkflowB(w, 'my-simple-workflow-b');

  //   // wb.tb.fileIn.linkTo(wa.ta.fileOut);
  //   wb.tb.fileIn.linkTo(workflowInputFile);

  //   // Assert there are no differences
  //   expect(w.toMap()).toMatchSnapshot();
  // });


});
