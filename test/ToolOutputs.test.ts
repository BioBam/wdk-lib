import { ToolOutputs, Output, OutputReference, Constructs } from '../src/lib';

describe('ToolOutputs', () => {
  let root: any;
  let toolOutputs: ToolOutputs;

  beforeEach(() => {
    root = Constructs.createRoot('root');
    toolOutputs = ToolOutputs.create();
  });

  describe('Basic functionality', () => {
    it('should create a ToolOutputs instance', () => {
      expect(toolOutputs).toBeDefined();
      expect(toolOutputs.outputs).toEqual({});
    });

    it('should add string outputs', () => {
      const stringOutput = Output.string(root, 'stringOutput');
      toolOutputs.addOutput(stringOutput, 'hello world');

      expect(toolOutputs.outputs.stringOutput).toBe('hello world');
    });

    it('should add file outputs', () => {
      const fileOutput = Output.file(root, 'fileOutput');
      const fileRef = OutputReference.file('/path/to/output.txt');
      toolOutputs.addOutput(fileOutput, fileRef);

      expect(toolOutputs.outputs.fileOutput).toBe(fileRef);
    });

    it('should add array outputs', () => {
      const arrayOutput = Output.string(root, 'arrayOutput');
      const stringArray = OutputReference.stringArray(['value1', 'value2', 'value3']);
      toolOutputs.addOutput(arrayOutput, stringArray);

      expect(toolOutputs.outputs.arrayOutput).toEqual(stringArray);
    });

    it('should add multiple outputs', () => {
      const stringOutput = Output.string(root, 'stringOutput');
      const fileOutput = Output.file(root, 'fileOutput');
      const boolOutput = Output.bool(root, 'boolOutput');

      toolOutputs
        .addOutput(stringOutput, 'hello')
        .addOutput(fileOutput, OutputReference.file('/path/to/file.txt'))
        .addOutput(boolOutput, true);

      expect(Object.keys(toolOutputs.outputs)).toHaveLength(3);
      expect(toolOutputs.outputs.stringOutput).toBe('hello');
      expect(toolOutputs.outputs.fileOutput).toBeDefined();
      expect(toolOutputs.outputs.boolOutput).toBe(true);
    });
  });

  describe('toMap functionality', () => {
    it('should convert outputs to map representation', () => {
      const stringOutput = Output.string(root, 'stringOutput');
      const fileOutput = Output.file(root, 'fileOutput');
      const arrayOutput = Output.string(root, 'arrayOutput');

      toolOutputs
        .addOutput(stringOutput, 'hello')
        .addOutput(fileOutput, OutputReference.file('/path/to/file.txt'))
        .addOutput(arrayOutput, OutputReference.stringArray(['a', 'b', 'c']));

      const map = toolOutputs.toMap();

      expect(map.stringOutput).toBe('hello');
      expect(map.fileOutput).toEqual({
        class: 'File',
        path: '/path/to/file.txt',
      });
      expect(map.arrayOutput).toEqual(['a', 'b', 'c']);
    });
  });

  describe('File path handling', () => {
    it('should extract file paths from outputs', () => {
      const fileOutput1 = Output.file(root, 'fileOutput1');
      const fileOutput2 = Output.file(root, 'fileOutput2');

      toolOutputs
        .addOutput(fileOutput1, OutputReference.file('/path/to/file1.txt'))
        .addOutput(fileOutput2, OutputReference.file('/path/to/file2.txt'));

      const filePaths = toolOutputs.filePaths;
      expect(filePaths).toContain('/path/to/file1.txt');
      expect(filePaths).toContain('/path/to/file2.txt');
    });

    it('should handle array of file references', () => {
      const arrayOutput = Output.file(root, 'arrayOutput');
      const fileArray = OutputReference.fileArray([
        '/path/to/file1.txt',
        '/path/to/file2.txt',
      ]);

      toolOutputs.addOutput(arrayOutput, fileArray);

      const filePaths = toolOutputs.filePaths;
      expect(filePaths).toContain('/path/to/file1.txt');
      expect(filePaths).toContain('/path/to/file2.txt');
    });
  });

  describe('Output file path configuration', () => {
    it('should set custom output file path', () => {
      toolOutputs.withOutputFilePath('/custom/path/output.json');
      expect(toolOutputs.outputFilePath()).toBe('/custom/path/output.json');
    });

    it('should use default output file path', () => {
      expect(toolOutputs.outputFilePath()).toBe('cwl.output.json');
    });
  });

  describe('Complex output scenarios', () => {
    it('should handle mixed output types', () => {
      const stringOutput = Output.string(root, 'stringOutput');
      const fileOutput = Output.file(root, 'fileOutput');
      const boolOutput = Output.bool(root, 'boolOutput');
      const intOutput = Output.integer(root, 'intOutput');
      const floatOutput = Output.float(root, 'floatOutput');
      const dirOutput = Output.directory(root, 'dirOutput');

      toolOutputs
        .addOutput(stringOutput, 'hello world')
        .addOutput(fileOutput, OutputReference.file('/path/to/file.txt'))
        .addOutput(boolOutput, true)
        .addOutput(intOutput, 42)
        .addOutput(floatOutput, 3.14)
        .addOutput(dirOutput, OutputReference.directory('/path/to/directory'));

      const map = toolOutputs.toMap();

      expect(map.stringOutput).toBe('hello world');
      expect(map.fileOutput.class).toBe('File');
      expect(map.boolOutput).toBe(true);
      expect(map.intOutput).toBe(42);
      expect(map.floatOutput).toBe(3.14);
      expect(map.dirOutput.class).toBe('Directory');
    });

    it('should handle nested array outputs', () => {
      const arrayOutput = Output.string(root, 'arrayOutput');
      const nestedArray = [
        OutputReference.stringArray(['a', 'b']),
        OutputReference.stringArray(['c', 'd']),
        OutputReference.stringArray(['e', 'f']),
      ];

      toolOutputs.addOutput(arrayOutput, nestedArray);

      const map = toolOutputs.toMap();
      expect(map.arrayOutput).toEqual([['a', 'b'], ['c', 'd'], ['e', 'f']]);
    });
  });
});
