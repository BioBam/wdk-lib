import * as fs from 'fs';
import * as path from 'path';
import { App, Workflow, Tool, ToolConfig, Input } from '../src/lib';

class EchoTool extends Tool {
  constructor(scope: Workflow) {
    super(scope, 'echo');
    ToolConfig.basic(this).withBaseCommand(['echo']);
    Input.string(this, 'message').withPosition(1);
  }
}

describe('App', () => {
  const testOutdir = path.join(__dirname, '../testoutput/app-test');

  afterEach(() => {
    if (fs.existsSync(testOutdir)) {
      fs.rmSync(testOutdir, { recursive: true });
    }
  });

  it('should synth a single-tool workflow to disk', () => {
    const app = new App(testOutdir);
    const workflow = new Workflow(app, 'my-workflow');
    new EchoTool(workflow);

    app.synth();

    const workflowDir = path.join(testOutdir, 'my-workflow');
    expect(fs.existsSync(workflowDir)).toBe(true);

    const toolFile = path.join(workflowDir, 'echo.clt.cwl');
    expect(fs.existsSync(toolFile)).toBe(true);

    const content = fs.readFileSync(toolFile, 'utf8');
    expect(content).toContain('baseCommand');
    expect(content).toContain('echo');
  });

  it('should use dist/ as the default output directory', () => {
    const app = new App();
    expect(app.outdir).toBe('dist');
  });

  it('should throw when there are no workflows', () => {
    const app = new App(testOutdir);
    expect(() => app.synth()).toThrow('App has no workflows');
  });

  it('should synth the CWL content matching snapshot', () => {
    const app = new App(testOutdir);
    const workflow = new Workflow(app, 'snap-workflow');
    new EchoTool(workflow);

    app.synth();

    const toolFile = path.join(testOutdir, 'snap-workflow', 'echo.clt.cwl');
    const content = fs.readFileSync(toolFile, 'utf8');
    expect(content).toMatchSnapshot();
  });
});

describe('Workflow.create', () => {
  it('should create a workflow without App', () => {
    const workflow = Workflow.create('standalone');
    expect(workflow.id).toBe('standalone');
  });

  it('should allow adding tools to a standalone workflow', () => {
    const workflow = Workflow.create('standalone');
    new EchoTool(workflow);

    expect(workflow.steps).toHaveLength(1);
    expect(workflow.steps[0].id).toBe('echo');
  });

  it('should produce valid CWL from a standalone workflow tool', () => {
    const workflow = Workflow.create('standalone');
    const tool = new EchoTool(workflow);

    const cwlMap = tool.toMap();
    expect(cwlMap.class).toBe('CommandLineTool');
    expect(cwlMap.baseCommand).toEqual(['echo']);
    expect(cwlMap.inputs).toHaveLength(1);
    expect(cwlMap.inputs[0].id).toBe('message');
  });
});
