import { Constructs } from '../src/lib/Constructs';
import { FirstOrNullExpressionTool } from '../src/lib/l3/FirstOrNullExpressionTool';
import { TypeIn } from '../src/lib/TypeIn';
import { Workflow } from '../src/lib/Workflow';

describe('FirstOrNullExpressionTool', () => {
  let workflow: Workflow;

  beforeEach(() => {
    const root = Constructs.createRoot('test-root');
    workflow = new Workflow(root, 'test-workflow');
  });

  describe('constructor', () => {
    it('should create a tool with default input/output names', () => {
      const tool = new FirstOrNullExpressionTool(workflow, 'pick_first', TypeIn.file());

      expect(tool).toBeInstanceOf(FirstOrNullExpressionTool);
      expect(tool.id).toBe('pick_first');

      // Check exposed fields
      expect(tool.input).toBeDefined();
      expect(tool.output).toBeDefined();
      expect(tool.input.id).toBe('items');
      expect(tool.output.id).toBe('first');

      // Check that it has the expected inputs and outputs
      expect(tool.inputs).toHaveLength(1);
      expect(tool.outputs).toHaveLength(1);
      expect(tool.inputs[0]).toBe(tool.input);
      expect(tool.outputs[0]).toBe(tool.output);
    });

    it('should create a tool with custom input/output names', () => {
      const tool = new FirstOrNullExpressionTool(
        workflow,
        'pick_custom',
        TypeIn.string(),
        { inputId: 'string_array', outputId: 'selected_string' },
      );

      expect(tool.input.id).toBe('string_array');
      expect(tool.output.id).toBe('selected_string');

      // Check the expression uses custom names
      const expectedExpression = `\${
      return {
        "selected_string": inputs.string_array.length > 0 ? inputs.string_array[0] : null
      };
    }`;
      expect(tool.expression).toBe(expectedExpression);
    });

    it('should support different TypeIn inputs', () => {
      const types = [
        TypeIn.file(),
        TypeIn.string(),
        TypeIn.int(),
        TypeIn.float(),
        TypeIn.boolean(),
        TypeIn.directory(),
      ];

      types.forEach((type, index) => {
        const tool = new FirstOrNullExpressionTool(workflow, `tool_${index}`, type);
        expect(tool.input).toBeDefined();
        expect(tool.output).toBeDefined();
        expect(tool.inputs).toHaveLength(1);
        expect(tool.outputs).toHaveLength(1);
      });
    });

    it('should support complex types like arrays', () => {
      const nestedType = TypeIn.arrayOf(TypeIn.string());
      const tool = new FirstOrNullExpressionTool(workflow, 'pick_nested', nestedType);

      expect(tool.input).toBeDefined();
      expect(tool.output).toBeDefined();
      expect(tool.input.id).toBe('items');
      expect(tool.output.id).toBe('first');
    });
  });

  describe('field access and linking', () => {
    it('should allow direct field access for linking', () => {
      const tool = new FirstOrNullExpressionTool(workflow, 'pick_first', TypeIn.file());

      // These should be accessible for linking
      expect(tool.input).toBeDefined();
      expect(tool.output).toBeDefined();
      expect(typeof tool.input.linkTo).toBe('function');
      expect(typeof tool.output.linkTo).toBe('function');
    });

    it('should have properly typed input as array', () => {
      const tool = new FirstOrNullExpressionTool(workflow, 'pick_first', TypeIn.file());

      // The input should be an array type
      expect(tool.input.isArray()).toBe(true);
    });

    it('should expose input and output that match the internal arrays', () => {
      const tool = new FirstOrNullExpressionTool(workflow, 'pick_first', TypeIn.file());

      // The exposed fields should be the same objects as in the arrays
      expect(tool.inputs[0]).toBe(tool.input);
      expect(tool.outputs[0]).toBe(tool.output);
    });
  });

  describe('CWL generation', () => {
    it('should generate valid CWL object', () => {
      const tool = new FirstOrNullExpressionTool(workflow, 'pick_first', TypeIn.file());
      const cwlObject = tool._toCwlObject();

      expect(cwlObject.id).toBe('pick_first');
      expect(cwlObject.inputs).toHaveLength(1);
      expect(cwlObject.outputs).toHaveLength(1);
      expect(cwlObject.expression).toBeDefined();
      expect(cwlObject.requirements).toHaveLength(1);
      expect(cwlObject.requirements![0]).toHaveProperty('class_', 'InlineJavascriptRequirement');
    });

    it('should serialize to correct structure', () => {
      const tool = new FirstOrNullExpressionTool(
        workflow,
        'pick_first',
        TypeIn.file(),
        { inputId: 'files', outputId: 'first_file' },
      );
      const map = tool.toMap();

      expect(map).toEqual({
        id: 'pick_first',
        cwlVersion: 'v1.2',
        class: 'ExpressionTool',
        requirements: [
          {
            class: 'InlineJavascriptRequirement',
          },
        ],
        inputs: [
          {
            type: {
              type: 'array',
              items: 'File',
            },
            id: 'files',
          },
        ],
        outputs: [
          {
            type: ['null', 'File'],
            id: 'first_file',
          },
        ],
        expression: expect.stringContaining('inputs.files.length > 0 ? inputs.files[0] : null'),
      });
    });

    it('should handle different input types correctly in CWL', () => {
      const stringTool = new FirstOrNullExpressionTool(workflow, 'pick_string', TypeIn.string());
      const stringMap = stringTool.toMap();

      expect(stringMap.inputs[0]).toEqual({
        type: {
          type: 'array',
          items: 'string',
        },
        id: 'items',
      });

      // Output is always File type
      expect(stringMap.outputs[0]).toEqual({
        type: ['null', 'File'],
        id: 'first',
      });
    });
  });

  describe('expression generation', () => {
    it('should generate correct expression with default names', () => {
      const tool = new FirstOrNullExpressionTool(workflow, 'pick_first', TypeIn.file());

      const expectedExpression = `\${
      return {
        "first": inputs.items.length > 0 ? inputs.items[0] : null
      };
    }`;
      expect(tool.expression).toBe(expectedExpression);
    });

    it('should generate correct expression with custom names', () => {
      const tool = new FirstOrNullExpressionTool(
        workflow,
        'pick_custom',
        TypeIn.file(),
        { inputId: 'my_files', outputId: 'my_result' },
      );

      const expectedExpression = `\${
      return {
        "my_result": inputs.my_files.length > 0 ? inputs.my_files[0] : null
      };
    }`;
      expect(tool.expression).toBe(expectedExpression);
    });
  });

  describe('requirements', () => {
    it('should include InlineJavascriptRequirement', () => {
      const tool = new FirstOrNullExpressionTool(workflow, 'pick_first', TypeIn.file());

      expect(tool.requirements).toHaveLength(1);
      expect(tool.requirements[0]).toBeDefined();
    });
  });

  describe('props interface', () => {
    it('should handle empty props', () => {
      const tool = new FirstOrNullExpressionTool(workflow, 'pick_first', TypeIn.file(), {});

      expect(tool.input.id).toBe('items');
      expect(tool.output.id).toBe('first');
    });

    it('should handle partial props', () => {
      const tool1 = new FirstOrNullExpressionTool(
        workflow,
        'pick_first1',
        TypeIn.file(),
        { inputId: 'custom_input' },
      );
      expect(tool1.input.id).toBe('custom_input');
      expect(tool1.output.id).toBe('first');

      const tool2 = new FirstOrNullExpressionTool(
        workflow,
        'pick_first2',
        TypeIn.file(),
        { outputId: 'custom_output' },
      );
      expect(tool2.input.id).toBe('items');
      expect(tool2.output.id).toBe('custom_output');
    });
  });
});