import { Constants } from '../src/lib/Constants';
import { Constructs } from '../src/lib/Constructs';
import { Input } from '../src/lib/Input';
import { Output } from '../src/lib/Output';
import { StepClass } from '../src/lib/ToolClass';
import { Workflow } from '../src/lib/Workflow';

describe('Workflow', () => {
  let workflow: Workflow;

  beforeEach(() => {
    const root = Constructs.createRoot('root');
    workflow = new Workflow(root, 'test-workflow');
  });

  describe('constructor and basic properties', () => {
    it('should create workflow with default properties', () => {
      expect(workflow.props.cwlVersion).toBe(Constants.cwlVersion);
      expect(workflow.id).toBe('test-workflow');
      expect(workflow.fileName).toBe('test-workflow.cwl');
      expect(workflow.stepClass).toBe(StepClass.WORKFLOW);
    });

    it('should create workflow with custom properties', () => {
      const root = Constructs.createRoot('root');
      const customWorkflow = new Workflow(root, 'custom-workflow', {
        cwlVersion: 'v1.2',
      });
      expect(customWorkflow.props.cwlVersion).toBe('v1.2');
    });
  });

  describe('steps management', () => {
    it('should correctly add and retrieve steps', () => {
      const root = Constructs.createRoot('root');
      const step1 = new Workflow(root, 'step1');
      const step2 = new Workflow(root, 'step2');

      workflow.addStep(step1);
      workflow.addStep(step2);

      expect(workflow.steps).toHaveLength(2);
      expect(workflow.steps).toContain(step1);
      expect(workflow.steps).toContain(step2);
    });

    it('should always return true for hasSteps', () => {
      expect(workflow.hasSteps()).toBe(true);
    });
  });

  describe('inputs and outputs', () => {
    it('should handle inputs correctly', () => {
      const input1 = Input.string(workflow, 'input1');
      const input2 = Input.file(workflow, 'input2');

      expect(workflow.inputs).toHaveLength(2);
      expect(workflow.inputs).toContain(input1);
      expect(workflow.inputs).toContain(input2);
    });

    it('should handle outputs correctly', () => {
      const output1 = Output.string(workflow, 'output1');
      const output2 = Output.file(workflow, 'output2');

      expect(workflow.outputs).toHaveLength(2);
      expect(workflow.outputs).toContain(output1);
      expect(workflow.outputs).toContain(output2);
    });

    it('should filter linked inputs and outputs', () => {
      const input1 = Input.string(workflow, 'input1');
      const root = Constructs.createRoot('root');
      const step = new Workflow(root, 'step1');
      const stepInput = Input.string(step, 'stepInput');

      input1.linkTo(stepInput);

      const output1 = Output.string(workflow, 'output1');
      const stepOutput = Output.string(step, 'stepOutput');

      output1.linkTo(stepOutput);

      expect(workflow.linkedInputs).toHaveLength(1);
      expect(workflow.linkedInputs[0]).toBe(input1);
      expect(workflow.linkedOutputs).toHaveLength(1);
      expect(workflow.linkedOutputs[0]).toBe(output1);
    });
  });

  describe('toMap', () => {
    it('should generate correct workflow map', () => {
      // Create some workflow elements to test mapping
      Input.string(workflow, 'input1');
      Output.string(workflow, 'output1');

      const map = workflow.toMap();

      expect(map.class).toBe(StepClass.WORKFLOW.toString());
      expect(map.cwlVersion).toBe(Constants.cwlVersion);
      expect(map.inputs).toBeDefined();
      expect(map.outputs).toBeDefined();
      expect(map.requirements).toBeDefined();
      expect(map.steps).toBeDefined();
    });
  });
});