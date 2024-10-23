import { Construct } from '../src/lib/Construct';
import { Input } from '../src/lib/Input';
import { Type } from '../src/lib/Type';

describe('Input Class', () => {
  let mockScope: Construct;

  beforeEach(() => {
    mockScope = Construct.createRoot('root');
  });

  describe('Static factory methods', () => {
    it('should create a string input', () => {
      const input = Input.string(mockScope, 'testStringId');
      expect(input.type).toBe(Type.STRING);
    });

    it('should create a boolean input', () => {
      const input = Input.bool(mockScope, 'testBoolId');
      expect(input.type).toBe(Type.BOOLEAN);
    });

    it('should create an integer input', () => {
      const input = Input.integer(mockScope, 'testIntId');
      expect(input.type).toBe(Type.INT);
    });

    it('should create a double input', () => {
      const input = Input.double(mockScope, 'testDoubleId');
      expect(input.type).toBe(Type.DOUBLE);
    });

    it('should create a string array input', () => {
      const input = Input.stringArray(mockScope, 'testStringArrayId');
      expect(input.type).toBe(Type.STRING_ARRAY);
    });

    it('should create a file array input', () => {
      const input = Input.fileArray(mockScope, 'testFileArrayId');
      expect(input.type).toBe(Type.FILE_ARRAY);
    });

    // Add similar tests for other static methods
  });


  describe('toMap Method', () => {
    it('should convert string input to map correctly', () => {
      const input = Input.string(mockScope, 'testId');
      input.withPrefix('--prefix').withDefaultValue('default');

      const map = input.toMap();
      expect(map).toEqual({
        type: 'string',
        default: 'default',
        inputBinding: {
          prefix: '--prefix',
        },
      });
      // Add more tests for toMap with different types and configurations
    });

    it('should convert string array input to map correctly', () => {
      const input = Input.stringArray(mockScope, 'testStringArrayId');
      input.withPrefix('--prefix').makeSeparate(true);

      const map = input.toMap();
      expect(map).toEqual({
        type: {
          type: 'string[]',
          inputBinding: {
            prefix: '--prefix',
            separate: true,
          },
        },
      });
    });

    it('should convert string array input to map correctly with item separator', () => {
      const input = Input.stringArray(mockScope, 'testStringArrayId');
      input.withPrefix('--prefix').withItemSeparator(',');

      const map = input.toMap();
      expect(map).toEqual({
        type: {
          type: 'string[]',
          inputBinding: {
            prefix: '--prefix',
            itemSeparator: ',',
          },
        },
      });
    });

    it('should convert file array input to map correctly', () => {
      const input = Input.fileArray(mockScope, 'testFileArrayId');
      input.withDefaultValue(['file1', 'file2']);

      const map = input.toMap();
      expect(map).toEqual({
        type: 'File[]',
        default: ['file1', 'file2'],
      });
    });

    // Add more tests for toMap with different types and configurations, covering all possible configurations
  });

  // Add more comprehensive tests to ensure complete coverage
});
