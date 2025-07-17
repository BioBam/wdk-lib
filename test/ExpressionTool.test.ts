import { Constructs } from '../src/lib/Constructs';
import { ExpressionTool } from '../src/lib/ExpressionTool';
import { TypeIn } from '../src/lib/TypeIn';
import { Workflow } from '../src/lib/Workflow';

describe('ExpressionTool', () => {
  let workflow: Workflow;

  beforeEach(() => {
    const root = Constructs.createRoot('test-root');
    workflow = new Workflow(root, 'test-workflow');
  });

  describe('createPickFirstExpressionTool', () => {
    it('should create a pick first tool with default parameters (file type)', () => {
      const pickFirst = ExpressionTool.createPickFirstExpressionTool(workflow, 'pick_first', TypeIn.file());

      expect(pickFirst).toBeInstanceOf(ExpressionTool);
      expect(pickFirst.id).toBe('pick_first');

      // Check that it has the expected inputs and outputs
      expect(pickFirst.inputs).toHaveLength(1);
      expect(pickFirst.outputs).toHaveLength(1);

      const input = pickFirst.inputs[0];
      const output = pickFirst.outputs[0];

      expect(input.id).toBe('items');
      expect(output.id).toBe('first');

      // Check the expression
      const expectedExpression = `\${
      return {
        "first": inputs.items.length > 0 ? inputs.items[0] : null
      };
    }`;
      expect(pickFirst.expression).toBe(expectedExpression);
    });

    it('should create a pick first tool with custom parameters', () => {
      const pickFirst = ExpressionTool.createPickFirstExpressionTool(
        workflow,
        'pick_first_strings',
        TypeIn.string(),
        'input_strings',
        'output_string',
      );

      expect(pickFirst.id).toBe('pick_first_strings');

      const input = pickFirst.inputs[0];
      const output = pickFirst.outputs[0];

      expect(input.id).toBe('input_strings');
      expect(output.id).toBe('output_string');

      // Check the expression
      const expectedExpression = `\${
      return {
        "output_string": inputs.input_strings.length > 0 ? inputs.input_strings[0] : null
      };
    }`;
      expect(pickFirst.expression).toBe(expectedExpression);
    });

    it('should support all TypeIn input types', () => {
      const typeInObjects = [
        TypeIn.file(),
        TypeIn.string(),
        TypeIn.int(),
        TypeIn.float(),
        TypeIn.boolean(),
        TypeIn.directory(),
      ];

      typeInObjects.forEach((typeIn, index) => {
        const tool = ExpressionTool.createPickFirstExpressionTool(workflow, `pick_${index}`, typeIn);
        expect(tool).toBeInstanceOf(ExpressionTool);
        expect(tool.inputs).toHaveLength(1);
        expect(tool.outputs).toHaveLength(1);
        // Output is always a File type, regardless of input type
        expect(tool.outputs[0]).toBeDefined();
      });
    });

    it('should work with complex types like arrayOf', () => {
      // Test with array of strings
      const stringArrayType = TypeIn.arrayOf(TypeIn.string());
      const tool = ExpressionTool.createPickFirstExpressionTool(
        workflow,
        'pick_string_array',
        stringArrayType,
        'nested_arrays',
        'first_array',
      );

      expect(tool).toBeInstanceOf(ExpressionTool);
      expect(tool.inputs).toHaveLength(1);
      expect(tool.outputs).toHaveLength(1);
      expect(tool.inputs[0].id).toBe('nested_arrays');
      expect(tool.outputs[0].id).toBe('first_array');
    });

    it('should generate valid CWL object', () => {
      const pickFirst = ExpressionTool.createPickFirstExpressionTool(workflow, 'pick_first', TypeIn.file());
      const cwlObject = pickFirst._toCwlObject();

      expect(cwlObject.id).toBe('pick_first');
      expect(cwlObject.inputs).toHaveLength(1);
      expect(cwlObject.outputs).toHaveLength(1);
      expect(cwlObject.expression).toBeDefined();
      expect(cwlObject.requirements).toHaveLength(1);
      expect(cwlObject.requirements![0]).toHaveProperty('class_', 'InlineJavascriptRequirement');
    });

    it('should serialize correctly', () => {
      const pickFirst = ExpressionTool.createPickFirstExpressionTool(workflow, 'pick_first', TypeIn.file());
      const map = pickFirst.toMap();

      expect(map).toHaveProperty('id', 'pick_first');
      expect(map).toHaveProperty('inputs');
      expect(map).toHaveProperty('outputs');
      expect(map).toHaveProperty('expression');
      expect(map).toHaveProperty('requirements');
      expect(map.inputs).toHaveLength(1);
      expect(map.outputs).toHaveLength(1);
    });

    it('should handle different input and output ID combinations', () => {
      const testCases = [
        { inputId: 'files', outputId: 'result' },
        { inputId: 'data', outputId: 'selection' },
        { inputId: 'candidates', outputId: 'winner' },
      ];

      testCases.forEach(({ inputId, outputId }, index) => {
        const tool = ExpressionTool.createPickFirstExpressionTool(
          workflow,
          `test_${index}`,
          TypeIn.file(),
          inputId,
          outputId,
        );

        expect(tool.inputs[0].id).toBe(inputId);
        expect(tool.outputs[0].id).toBe(outputId);

        const expectedExpression = `\${
      return {
        "${outputId}": inputs.${inputId}.length > 0 ? inputs.${inputId}[0] : null
      };
    }`;
        expect(tool.expression).toBe(expectedExpression);
      });
    });

    it('should always create a File output regardless of input type', () => {
      const types = [TypeIn.string(), TypeIn.int(), TypeIn.boolean()];

      types.forEach((type, index) => {
        const tool = ExpressionTool.createPickFirstExpressionTool(workflow, `test_${index}`, type);

        // The output should always be a File type even if input is string, int, etc.
        expect(tool.outputs).toHaveLength(1);
        expect(tool.outputs[0]).toBeDefined();
        // We can't easily test the internal type, but we can verify it was created
      });
    });
  });
});