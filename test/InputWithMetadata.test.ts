import { Constructs } from '../src/lib/Constructs';
import { Input } from '../src/lib/Input';
import { Tool as ToolClass } from '../src/lib/Tool';
import { Workflow } from '../src/lib/Workflow';

describe('Input Metadata Tests', () => {
  let workflow: Workflow;
  let tool: ToolClass;

  beforeEach(() => {
    workflow = Constructs.rootWorkflow();
    tool = new ToolClass(workflow, 'test-tool');
  });

  describe('Metadata Operations', () => {
    it('should add and retrieve metadata from a string input', () => {
      const input = Input.string(tool, 'testInput');
      input.addMetadata('isRequired', true);

      expect(input.metadata.isRequired).toBe(true);
    });

    it('should allow multiple metadata entries on the same input', () => {
      const input = Input.string(tool, 'testInput');
      input.addMetadata('isRequired', true);
      input.addMetadata('pattern', '^[A-Z]+$');

      expect(input.metadata.isRequired).toBe(true);
      expect(input.metadata.pattern).toBe('^[A-Z]+$');
    });

    it('should update existing metadata when adding with the same key', () => {
      const input = Input.string(tool, 'testInput');
      input.addMetadata('isRequired', false);
      input.addMetadata('isRequired', true);

      expect(input.metadata.isRequired).toBe(true);
    });
  });

  describe('Finding Inputs with Metadata', () => {
    it('should find inputs with specific metadata in a workflow', () => {
      const rootWorkflow = Constructs.rootWorkflow();
      const testTool = new ToolClass(rootWorkflow, 'test-tool');
      const input1 = Input.string(testTool, 'input1');
      const input2 = Input.string(testTool, 'input2');
      const input3 = Input.string(testTool, 'input3');

      input1.addMetadata('isRequired', true);
      input2.addMetadata('isRequired', false);
      input3.addMetadata('isRequired', true);

      const requiredInputs = rootWorkflow.findNodesWithMetadata('isRequired', true).filter(node => node instanceof Input);
      expect(requiredInputs).toHaveLength(2);
      expect(requiredInputs).toContain(input1);
      expect(requiredInputs).toContain(input3);
    });

    it('should find inputs with metadata in nested workflow structure', () => {
      const rootWorkflow = Constructs.rootWorkflow();
      const rootInput = Input.string(rootWorkflow, 'rootInput');
      const nestedWorkflow = new Workflow(rootWorkflow, 'nested-workflow');
      const nestedInput = Input.string(nestedWorkflow, 'nestedInput');

      rootInput.addMetadata('pattern', '^[A-Z]+$');
      nestedInput.addMetadata('pattern', '^[A-Z]+$');

      const patternInputs = rootWorkflow.findNodesWithMetadata('pattern', '^[A-Z]+$').filter(node => node instanceof Input);
      expect(patternInputs).toHaveLength(2);
      expect(patternInputs).toContain(rootInput);
      expect(patternInputs).toContain(nestedInput);
    });

    it('should find all inputs with a specific metadata key, regardless of value', () => {
      const rootWorkflow = Constructs.rootWorkflow();
      const input1 = Input.string(rootWorkflow, 'input1');
      const input2 = Input.string(rootWorkflow, 'input2');
      const input3 = Input.string(rootWorkflow, 'input3');
      input1.addMetadata('isRequired', true);
      input2.addMetadata('isRequired', false);
      input3.addMetadata('isRequired', true);
      const inputsWithIsRequired = rootWorkflow.findNodesWithMetadata('isRequired').filter(node => node instanceof Input);
      expect(inputsWithIsRequired).toHaveLength(3);
      expect(inputsWithIsRequired).toContain(input1);
      expect(inputsWithIsRequired).toContain(input2);
      expect(inputsWithIsRequired).toContain(input3);
    });
  });
});

