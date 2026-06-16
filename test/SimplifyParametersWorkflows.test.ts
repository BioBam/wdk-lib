import { Input, Output, PickValueMethod, Tool, Workflow } from '../src/lib';
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


  it('Link workflow output from deep tool output', () => {

    const root = Constructs.rootWorkflow();

    class ToolA extends Tool {
      public fileOut: Output;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.fileOut = Output.file(this, 'fileOut');
      }
    }

    class MyWorkflowA extends Workflow {
      public ta: ToolA;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.ta = new ToolA(this, 'tool-a');
      }
    }


    const w = new Workflow(root, 'top-workflow');
    let workflowOutputFile = Output.file(w, 'workflowOutputFile');

    const wa = new MyWorkflowA(w, 'swa');
    workflowOutputFile.linkTo(wa.ta.fileOut);

    // Assert there are no differences
    expect(w.toMap()).toMatchSnapshot();
  });

  it('Link deep tool output to other upper tool and workflow output.', () => {

    const root = Constructs.rootWorkflow();

    class ToolA extends Tool {
      public fileOut: Output;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.fileOut = Output.file(this, 'fileOut');
      }
    }

    class MyWorkflowA extends Workflow {
      public ta: ToolA;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.ta = new ToolA(this, 'tool-a');
      }
    }

    class ToolB extends Tool {
      public fileIn: Input;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.fileIn = Input.file(this, 'fileIn');
      }
    }


    const w = new Workflow(root, 'top-workflow');
    let workflowOutputFile = Output.file(w, 'workflowOutputFile');

    const wa = new MyWorkflowA(w, 'swa');
    workflowOutputFile.linkTo(wa.ta.fileOut);

    const tb = new ToolB(w, 'tb');
    tb.fileIn.linkTo(wa.ta.fileOut);

    // Assert there are no differences
    expect(w.toMap()).toMatchSnapshot();
  });


  it('Link tool input to pick the first available value between deep tool output and workflow input', () => {

    const root = Constructs.rootWorkflow();

    class ToolA extends Tool {
      public fileOut: Output;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.fileOut = Output.file(this, 'fileOut');
      }
    }

    class MyWorkflowA extends Workflow {
      public ta: ToolA;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.ta = new ToolA(this, 'tool-a');
      }
    }

    class ToolB extends Tool {
      public fileIn: Input;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.fileIn = Input.file(this, 'fileIn');
      }
    }

    // class MyWorkflowB extends Workflow {
    //   public tb: ToolB;
    //   constructor(scope: Workflow, id: string) {
    //     super(scope, id);
    //     this.tb = new ToolB(this, 'tool-b-deep');
    //   }
    // }


    const w = new Workflow(root, 'top-workflow');
    let workflowInputFile = Input.file(w, 'workflowInputFile');

    const wa = new MyWorkflowA(w, 'swa');
    // const wb = new MyWorkflowB(w, 'swb');
    const tb = new ToolB(w, 'tb');
    // works with top tool but not with deep tool B
    // wb.
    tb.fileIn
      .linkTo(wa.ta.fileOut)
      .linkTo(workflowInputFile)
      .pickValue(PickValueMethod.FIRST_NON_NULL);

    // Assert there are no differences
    expect(w.toMap()).toMatchSnapshot();
  });


  // Regression test for the Workflow._toCwlObject infinite loop that used to
  // freeze workflow.serialize(...) in OmicsBox (e.g. AssemblerFlyeWorkflow).
  //
  // The bug: when an input with a single .linkTo(...) also had a .pickValue(...)
  // set, the pickValue-propagation while-loop in Workflow._toCwlObject never
  // advanced its cursor. If the bubbled-up upper input existed but was not
  // multi-linked, neither break fired and serialization spun forever.
  //
  // The fix advances the cursor up the scope chain. The correct semantic is:
  //   - if no multi-linked ancestor is found, pickValue is effectively a no-op
  //     on the CWL output (since a single-source input has nothing to pick).
  // This test just needs to complete — any hang means the regression is back.
  it('Single linkTo + pickValue inside a nested subworkflow must not hang (regression)', () => {
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

    class SubB extends Workflow {
      public tb: ToolB;
      constructor(scope: Workflow, id: string) {
        super(scope, id);
        this.tb = new ToolB(this, 'tool-b-deep');
      }
    }

    const w = new Workflow(root, 'top-workflow');
    const ta = new ToolA(w, 'tool-a-top');
    const sb = new SubB(w, 'swb');

    // Single source + pickValue on a parameter that gets bubbled up into the
    // nested subworkflow. Before the fix this hung indefinitely.
    sb.tb.fileIn
      .linkTo(ta.fileOut)
      .pickValue(PickValueMethod.FIRST_NON_NULL);

    // Succeeds (does not hang) — the snapshot also documents the shape.
    expect(w.toMap()).toMatchSnapshot();
  });

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
