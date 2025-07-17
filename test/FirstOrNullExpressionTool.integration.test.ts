import { Constructs } from '../src/lib/Constructs';
import { FirstOrNullExpressionTool } from '../src/lib/l3/FirstOrNullExpressionTool';
import { TypeIn } from '../src/lib/TypeIn';
import { Workflow } from '../src/lib/Workflow';

describe('FirstOrNullExpressionTool Integration', () => {
  let workflow: Workflow;

  beforeEach(() => {
    const root = Constructs.createRoot('test-root');
    workflow = new Workflow(root, 'test-workflow');
  });

  it('should generate CWL structure matching the original user example', () => {
    const pickFirst = new FirstOrNullExpressionTool(
      workflow,
      'pick_first',
      TypeIn.file(),
      { inputId: 'files', outputId: 'first_file' },
    );

    const cwlMap = pickFirst.toMap();

    // Verify the basic structure
    expect(cwlMap).toEqual({
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

  it('should generate the exact expression format from user example', () => {
    const pickFirst = new FirstOrNullExpressionTool(
      workflow,
      'pick_first',
      TypeIn.file(),
      { inputId: 'files', outputId: 'first_file' },
    );

    const expectedExpression = `\${
      return {
        "first_file": inputs.files.length > 0 ? inputs.files[0] : null
      };
    }`;

    expect(pickFirst.expression).toBe(expectedExpression);
  });

  it('should support custom input and output names like in user example', () => {
    const pickFirst = new FirstOrNullExpressionTool(
      workflow,
      'pick_first',
      TypeIn.file(),
      { inputId: 'files', outputId: 'first_file' }, // Custom input and output names
    );

    const cwlMap = pickFirst.toMap();

    expect(cwlMap.inputs[0].id).toBe('files');
    expect(cwlMap.outputs[0].id).toBe('first_file');
    expect(cwlMap.expression).toContain('inputs.files');
    expect(cwlMap.expression).toContain('"first_file"');
  });

  it('should work with different data types while maintaining File output', () => {
    const stringPickFirst = new FirstOrNullExpressionTool(
      workflow,
      'pick_string',
      TypeIn.string(),
      { inputId: 'string_items', outputId: 'selected_string' },
    );

    const cwlMap = stringPickFirst.toMap();

    // Input should be array of strings
    expect(cwlMap.inputs[0]).toEqual({
      type: {
        type: 'array',
        items: 'string',
      },
      id: 'string_items',
    });

    // Output should still be File (optional)
    expect(cwlMap.outputs[0]).toEqual({
      type: ['null', 'File'],
      id: 'selected_string',
    });
  });

  it('should handle complex types like array of files', () => {
    const nestedArrayType = TypeIn.arrayOf(TypeIn.file());
    const pickFirst = new FirstOrNullExpressionTool(
      workflow,
      'pick_nested',
      nestedArrayType,
      { inputId: 'nested_arrays', outputId: 'first_array' },
    );

    const cwlMap = pickFirst.toMap();

    // Input should be array of (array of files)
    expect(cwlMap.inputs[0]).toEqual({
      type: {
        type: 'array',
        items: {
          type: 'array',
          items: 'File',
        },
      },
      id: 'nested_arrays',
    });

    // Output should be File (optional)
    expect(cwlMap.outputs[0]).toEqual({
      type: ['null', 'File'],
      id: 'first_array',
    });
  });

  it('should produce serializable YAML that matches CWL spec format', () => {
    const pickFirst = new FirstOrNullExpressionTool(
      workflow,
      'pick_first',
      TypeIn.file(),
    );

    // Test that we can serialize without errors
    expect(() => pickFirst.serialize('/tmp')).not.toThrow();

    const cwlMap = pickFirst.toMap();

    // Ensure all required CWL fields are present
    expect(cwlMap).toHaveProperty('cwlVersion');
    expect(cwlMap).toHaveProperty('class', 'ExpressionTool');
    expect(cwlMap).toHaveProperty('inputs');
    expect(cwlMap).toHaveProperty('outputs');
    expect(cwlMap).toHaveProperty('expression');
    expect(cwlMap).toHaveProperty('requirements');

    // Ensure InlineJavascriptRequirement is included
    expect(cwlMap.requirements).toHaveLength(1);
    expect(cwlMap.requirements[0]).toHaveProperty('class', 'InlineJavascriptRequirement');
  });
});