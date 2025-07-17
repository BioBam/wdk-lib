import { Constructs } from '../src/lib/Constructs';
import { ExpressionTool } from '../src/lib/ExpressionTool';
import { Workflow } from '../src/lib/Workflow';

describe('ExpressionTool', () => {
  let workflow: Workflow;

  beforeEach(() => {
    const root = Constructs.createRoot('test-root');
    workflow = new Workflow(root, 'test-workflow');
  });

  it('should be instantiable', () => {
    const tool = new ExpressionTool(workflow, 'test-expression');
    expect(tool).toBeInstanceOf(ExpressionTool);
    expect(tool.id).toBe('test-expression');
  });
});