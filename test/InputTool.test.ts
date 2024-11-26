import { Tool, Workflow } from '../src/lib';
import { Constructs } from '../src/lib/Constructs';
import { Input } from '../src/lib/Input';

describe('Input Class', () => {
  let workflow: Workflow;
  let tool: Tool;

  beforeEach(() => {
    workflow = Constructs.rootWorkflow();
    tool = new Tool(workflow, 'test-tool');
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
      input.withPrefix('--prefix').makeSeparate(true);

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: 'string',
        },
        inputBinding: {
          prefix: '--prefix',
          separate: true,
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
          separate: false,
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
          separate: false,
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

  // Add more comprehensive tests to ensure complete coverage
});
