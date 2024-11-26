import { Workflow } from '../src/lib';
import { Constructs } from '../src/lib/Constructs';
import { Input } from '../src/lib/Input';

describe('Input Class', () => {
  let rootWorkflow: Workflow;
  let workflow: Workflow;

  beforeEach(() => {
    rootWorkflow = Constructs.rootWorkflow();
    workflow = new Workflow(rootWorkflow, 'test-workflow');
  });


  describe('toMap Method', () => {
    it('should convert string input to map correctly', () => {
      const input = Input.string(workflow, 'testId').withDefaultValue('default');

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: 'string',
        default: 'default',
      });
      // Add more tests for toMap with different types and configurations
    });

    it('should convert string array input to map correctly', () => {
      const input = Input.stringArray(workflow, 'testStringArrayId');

      const map = input.toMap();
      expect(map).toEqual({
        id: `${input.id}`,
        type: {
          type: 'array',
          items: 'string',
        },
      });
    });

    it('should convert file array input to map correctly', () => {
      const input = Input.fileArray(workflow, 'testFileArrayId');
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
    const input = Input.fileArray(workflow, 'testStringArrayId');
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

  // Add more comprehensive tests to ensure complete coverage
});
