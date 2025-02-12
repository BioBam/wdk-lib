import { Output, Tool, Workflow } from '../src/lib';
import { Constructs } from '../src/lib/Constructs';
import { TypeOut } from '../src/lib/TypeOut';

describe('Output Class', () => {
  let root: Workflow;
  let tool: Tool;

  beforeEach(() => {
    root = Constructs.rootWorkflow();
    tool = new Tool(root, 'test-tool');
  });

  describe('array Method', () => {
    it('should create an Output configured as a file array for BOOLEAN type', () => {
      const output = Output.array(tool, 'outputBoolean', TypeOut.boolean());
      const map = output._toCwlObject().save();

      expect(map).toEqual({
        id: 'outputBoolean',
        type: {
          items: 'boolean',
          type: 'array',
        },
      });
    });

    it('should create an Output configured as a file array for STRING type', () => {
      const output = Output.array(tool, 'outputString', TypeOut.string());
      const map = output._toCwlObject().save();

      expect(map).toEqual({
        id: 'outputString',
        type: {
          items: 'string',
          type: 'array',
        },
      });
    });

    // it('should throw an error for an unknown type', () => {
    //   expect(() => {
    //     Output.array(tool, 'outputUnknown', TypeOut.stderr());
    //   }).toThrow('Unknown type: stderr. Please use one of the basic types from the Type class: BOOLEAN, INT, DOUBLE, FLOAT, STRING, FILE, DIRECTORY');
    // });

    // Add additional tests for other types
    it('should create an Output configured as a file array for INT type', () => {
      const output = Output.array(tool, 'outputInt', TypeOut.int());
      const map = output._toCwlObject().save();

      expect(map).toEqual({
        id: 'outputInt',
        type: {
          items: 'int',
          type: 'array',
        },
      });
    });

    // Repeat for DOUBLE, FLOAT, FILE, DIRECTORY
  });


  describe('toMap Method', () => {
    it('should convert string input to map correctly', () => {
      const output = Output.string(tool, 'testId').withGlob('*.txt').loadContents().outputEval('$(self[0].contents)');
      const map = output._toCwlObject().save();

      expect(map).toEqual({
        id: 'testId',
        type: 'string',
        outputBinding: {
          glob: '*.txt',
          loadContents: true,
          outputEval: '$(self[0].contents)',
        },
      });
    });

    it('should convert string array input to map correctly', () => {
      const output = Output.stringArray(tool, 'testStringArrayId');
      const map = output._toCwlObject().save();

      expect(map).toEqual({
        id: 'testStringArrayId',
        type: { type: 'array', items: 'string' },
      });

    });

    it('should convert optional string array input to map correctly', () => {
      const output = Output.stringArray(tool, 'testStringArrayId').makeOptional(true);
      const map = output._toCwlObject().save();

      expect(map).toEqual({
        id: 'testStringArrayId',
        type: [
          'null',
          { type: 'array', items: 'string' },
        ],
      });

    });

    it('should convert optional string array input with bindings to map correctly', () => {
      const output = Output.stringArray(tool, 'testStringArrayId').makeOptional(true).withGlob('*.txt').loadContents().outputEval('$(self[0].contents)');
      const map = output._toCwlObject().save();

      expect(map).toEqual({
        id: 'testStringArrayId',
        type: [
          'null',
          { type: 'array', items: 'string' },
        ],
        outputBinding: {
          glob: '*.txt',
          loadContents: true,
          outputEval: '$(self[0].contents)',
        },
      });

    });

    it('should convert file array input to map correctly with item separator', () => {
      const output = Output.fileArray(tool, 'testStringArrayId').makeOptional(true);
      const map = output._toCwlObject().save();

      expect(map).toEqual({
        id: 'testStringArrayId',
        type: [
          'null',
          {
            items: 'File',
            type: 'array',
          },
        ],
      });
    });

  });


  describe('toMap Method for custom', () => {
    it('should convert custom string array output with bindings to map correctly', () => {
      const output = Output.custom(tool, 'testStringArrayId', TypeOut.arrayOf(TypeOut.string())).makeOptional(true).withGlob('*.txt').loadContents().outputEval('$(self[0].contents)');
      const map = output._toCwlObject().save();

      expect(map).toEqual({
        id: 'testStringArrayId',
        type: [
          'null',
          {
            type: 'array',
            items: 'string',
          },
        ],
        outputBinding: {
          glob: '*.txt',
          loadContents: true,
          outputEval: '$(self[0].contents)',
        },
      });

    });

    it('should convert custom array of file arrays input to map correctly with item separator', () => {
      const output = Output.custom(tool, 'testStringArrayId', TypeOut.arrayOf(TypeOut.arrayOf(TypeOut.file()))).makeOptional(true);
      const map = output._toCwlObject().save();

      expect(map).toEqual({
        id: 'testStringArrayId',
        type: [
          'null',
          {
            items: {
              items: 'File',
              type: 'array',
            },
            type: 'array',
          },
        ],
      });
    });
  });

  // Add more comprehensive tests to ensure complete coverage
});
