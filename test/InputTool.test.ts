import { Tool, Workflow } from '../src/lib';
import { Constructs } from '../src/lib/Constructs';
import { Input } from '../src/lib/Input';
import { TypeIn } from '../src/lib/TypeIn';

describe('Input Class', () => {
  let workflow: Workflow;
  let tool: Tool;

  beforeEach(() => {
    workflow = Constructs.rootWorkflow();
    tool = new Tool(workflow, 'test-tool');
  });

  describe('Array Method', () => {

    it('should create a boolean array input correctly', () => {
      const input = Input.array(tool, 'testBooleanArrayId', TypeIn.boolean());

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: 'boolean',
        },
      });
    });

    it('should create an integer array input correctly', () => {
      const input = Input.array(tool, 'testIntArrayId', TypeIn.int());

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: 'int',
        },
      });
    });

    // it('should handle invalid type gracefully', () => {
    //   expect(() => {
    //     Input.array(tool, 'testInvalidTypeId', TypeIn.stdin());
    //   }).toThrow(new Error('Unknown type: stdout. Please use one of the basic types from the Type class: BOOLEAN, INT, DOUBLE, FLOAT, STRING, FILE, DIRECTORY'));
    // });

    it('should create a file array input with additional configurations', () => {
      const input = Input.array(tool, 'testFileArrayId', TypeIn.file());
      input.withPrefix('--files').withDefaultValue(['file1.txt', 'file2.txt']);

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: 'File',
        },
        default: ['file1.txt', 'file2.txt'],
        inputBinding: {
          prefix: '--files',
        },
      });
    });

    // Add more cases to cover FLOAT, DOUBLE, STRING, and DIRECTORY types if necessary

    it('should create a string array input with additional configurations', () => {
      const input = Input.array(tool, 'testStringArrayId', TypeIn.string());
      input.withPrefix('--strings').withItemSeparator(',');

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: 'string',
        },
        inputBinding: {
          prefix: '--strings',
          itemSeparator: ',',
          separate: true,
        },
      });
    });

  });

  describe('Allow Null Elements Method for Arrays', () => {

    it('should allow null elements in boolean array input', () => {
      const input = Input.array(tool, 'testBooleanArrayIdWithNulls', TypeIn.boolean());
      input.allowNullElements();

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: ['null', 'boolean'],
        },
      });
    });

    it('should allow null elements in integer array input', () => {
      const input = Input.array(tool, 'testIntArrayIdWithNulls', TypeIn.int());
      input.allowNullElements();

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: ['null', 'int'],
        },
      });
    });

    it('should allow null elements in string array input with configurations', () => {
      const input = Input.array(tool, 'testStringArrayIdWithNulls', TypeIn.string());
      input.withPrefix('--strings').withItemSeparator(',').allowNullElements();

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: ['null', 'string'],
        },
        inputBinding: {
          prefix: '--strings',
          itemSeparator: ',',
          separate: true,
        },
      });
    });

    // Add more cases for other types if needed

  });


  describe('toMap Method', () => {
    it('should convert string input to map correctly', () => {
      const input = Input.string(tool, 'testId');
      input.withPrefix('--prefix').withDefaultValue('default');

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: 'string',
        default: 'default',
        inputBinding: {
          prefix: '--prefix',
        },
      });
      // Add more tests for toMap with different types and configurations
    });

    it('should convert string array input to map correctly', () => {
      const input = Input.stringArray(tool, 'testStringArrayId');
      input.withPrefix('--prefix').makeSeparate(false);

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: 'string',
        },
        inputBinding: {
          prefix: '--prefix',
          separate: false,
        },
      });
    });

    it('should convert string array input to map correctly with item separator', () => {
      const input = Input.stringArray(tool, 'testStringArrayId');
      input.withPrefix('--prefix').withItemSeparator(',');

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: 'string',
        },
        inputBinding: {
          prefix: '--prefix',
          itemSeparator: ',',
          separate: true,
        },
      });
    });

    it('should convert file array input to map correctly with item separator', () => {
      const input = Input.fileArray(tool, 'testStringArrayId');
      input.withPrefix('--prefix').withItemSeparator(',');

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: 'File',
        },
        inputBinding: {
          prefix: '--prefix',
          separate: true,
          itemSeparator: ',',
        },
      });
    });

    it('should convert file array input to map correctly', () => {
      const input = Input.fileArray(tool, 'testFileArrayId');
      input.withDefaultValue(['file1', 'file2']);

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type:
        {
          type: 'array',
          items: 'File',
        },
        default: ['file1', 'file2'],
      });
    });

    it('should convert directory input to map correctly', () => {
      const input = Input.directory(tool, 'testDirectoryId');
      input.withDefaultValue('/path/to/directory');

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: 'Directory',
        default: {
          class: 'Directory',
          path: '/path/to/directory',
        },
      });
    });

    it('should include label in the map output', () => {
      const input = Input.string(tool, 'testLabelId');
      input.withLabel('Test Label');

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: 'string',
        label: 'Test Label',
      });
    });

    it('should include label with other properties in the map output', () => {
      const input = Input.string(tool, 'testLabelWithPropsId');
      input.withLabel('Test Label')
        .withPrefix('--prefix')
        .withDefaultValue('default')
        .withDoc('Test documentation');

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: 'string',
        label: 'Test Label',
        default: 'default',
        doc: 'Test documentation',
        inputBinding: {
          prefix: '--prefix',
        },
      });
    });

    it('should include label in array input map output', () => {
      const input = Input.stringArray(tool, 'testLabelArrayId');
      input.withLabel('Test Array Label')
        .withPrefix('--prefix')
        .withItemSeparator(',');

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: 'string',
        },
        label: 'Test Array Label',
        inputBinding: {
          prefix: '--prefix',
          itemSeparator: ',',
          separate: true,
        },
      });
    });

    it('should include doc in the map output', () => {
      const input = Input.string(tool, 'testDocId');
      input.withDoc('Test documentation');

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: 'string',
        doc: 'Test documentation',
      });
    });

    it('should include doc with other properties in the map output', () => {
      const input = Input.string(tool, 'testDocWithPropsId');
      input.withDoc('Test documentation')
        .withLabel('Test Label')
        .withPrefix('--prefix')
        .withDefaultValue('default');

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: 'string',
        doc: 'Test documentation',
        label: 'Test Label',
        default: 'default',
        inputBinding: {
          prefix: '--prefix',
        },
      });
    });

    // Add more tests for toMap with different types and configurations, covering all possible configurations
  });

  it('should convert an optional short file array input to map correctly', () => {
    const input = Input.fileArray(tool, 'testStringArrayId');
    input.makeOptional(true);

    const map = input.toMap();
    expect(map).toEqual({
      id: `${input.id}`,
      type: [
        'null',
        {
          type: 'array',
          items: 'File',
        },
      ],
    });
  });

  it('should convert an optional file array input with bindings to map correctly', () => {
    const input = Input.fileArray(tool, 'testStringArrayId');
    input.makeOptional(true).withPrefix('--prefix');

    const map = input.toMap();
    expect(map).toEqual({
      id: `${input.id}`,
      type: [
        'null',
        {
          type: 'array',
          items: 'File',
        },
      ],
      inputBinding: {
        prefix: '--prefix',
      },
    });
  });


  describe('Custom Input should work as expected.', () => {

    it('should allow null elements in boolean array input', () => {
      const input = Input.custom(tool, 'testCustomBooleanArray', TypeIn.arrayOf(TypeIn.boolean()));
      input.allowNullElements();

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: ['null', 'boolean'],
        },
      });
    });

    it('should allow null elements in integer array input', () => {
      const input = Input.custom(tool, 'testCustomTypeArray', TypeIn.arrayOf(TypeIn.arrayOf(TypeIn.int())));
      input.allowNullElements();

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: ['null', { type: 'array', items: 'int' }],
        },
      });
    });
  });

  // Add more comprehensive tests to ensure complete coverage
});
