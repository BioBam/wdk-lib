import * as fs from 'fs';
import * as path from 'path';
import { App, Workflow, Tool, ToolConfig, Input, SynthManifest } from '../src/lib';

class EchoTool extends Tool {
  constructor(scope: Workflow) {
    super(scope, 'echo');
    ToolConfig.basic(this).withBaseCommand(['echo']);
    Input.string(this, 'message').withPosition(1);
  }
}

class NoBaseCommandTool extends Tool {
  constructor(scope: Workflow) {
    super(scope, 'broken');
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

  it('should accept string as outdir for backward compatibility', () => {
    const app = new App('/tmp/test-out');
    expect(app.outdir).toBe('/tmp/test-out');
  });

  it('should accept AppProps object', () => {
    const app = new App({
      outdir: testOutdir,
      defaultRegistry: 'ecr.example.com',
      defaultResources: { coresMin: 4, ramMin: 8192 },
    });
    expect(app.outdir).toBe(testOutdir);
    expect(app.defaultRegistry).toBe('ecr.example.com');
    expect(app.defaultResources).toEqual({ coresMin: 4, ramMin: 8192 });
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

  describe('validation', () => {
    it('should reject a tool with no baseCommand', () => {
      const app = new App(testOutdir);
      const workflow = new Workflow(app, 'bad-workflow');
      new NoBaseCommandTool(workflow);

      expect(() => app.synth()).toThrow(/Validation failed/);
      expect(() => app.synth()).toThrow(/Tool 'broken'.*has no baseCommand/);
    });
  });

  describe('manifest', () => {
    it('should return a manifest on synth', () => {
      const app = new App(testOutdir);
      const workflow = new Workflow(app, 'manifest-wf');
      new EchoTool(workflow);

      const manifest: SynthManifest = app.synth();

      expect(manifest.version).toBe('1.0');
      expect(manifest.outdir).toBe(testOutdir);
      expect(manifest.workflows).toHaveLength(1);
      expect(manifest.workflows[0].id).toBe('manifest-wf');
      expect(manifest.workflows[0].files).toHaveLength(1);
      expect(manifest.workflows[0].files[0]).toContain('echo.clt.cwl');
    });

    it('should write manifest.json to outdir', () => {
      const app = new App(testOutdir);
      const workflow = new Workflow(app, 'manifest-wf');
      new EchoTool(workflow);

      app.synth();

      const manifestPath = path.join(testOutdir, 'manifest.json');
      expect(fs.existsSync(manifestPath)).toBe(true);

      const written = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      expect(written.version).toBe('1.0');
      expect(written.workflows).toHaveLength(1);
    });
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
