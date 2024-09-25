import { Construct } from '../src/lib/Construct';
import { Input } from '../src/lib/Input';
import { InputReference } from '../src/lib/InputReference';
import { WorkflowValues } from '../src/lib/WorkflowValues';

describe('WorkflowValues', () => {
  it('should return an empty object if no input references are added', () => {
    const workflow = WorkflowValues.create();
    expect(workflow.filePaths).toEqual({});
  });

  it('should include the file path from InputReferences', () => {
    const input1 = Input.file(Construct.createRoot('root'), 'input1');
    const s3Input2 = Input.file(Construct.createRoot('root'), 'input2');
    const inputReference1 = InputReference.file('/path/to/file1');
    const s3InputReference = InputReference.s3File('s3://my-bucket/path/to/input2');

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, inputReference1);
    workflow.addInput(s3Input2, s3InputReference);

    expect(workflow.filePaths).toEqual({
      [input1.id]: '/path/to/file1',
    });
  });

  it('should not include entries that are not InputReferences', () => {
    const input1 = Input.file(Construct.createRoot('root'), 'input1');
    const input2 = Input.string(Construct.createRoot('root'), 'input2');
    const inputReference1 = InputReference.file('/path/to/file1');
    const stringValue = 'Some string value';

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, inputReference1);
    workflow.addInput(input2, stringValue);

    expect(workflow.filePaths).toEqual({
      [input1.id]: '/path/to/file1',
    });
  });

  it('should handle multiple InputReferences with paths correctly', () => {
    const input1 = Input.file(Construct.createRoot('root'), 'input1');
    const input2 = Input.file(Construct.createRoot('root'), 'input2');
    const inputReference1 = InputReference.file('/path/to/file1');
    const inputReference2 = InputReference.file('/path/to/file2');

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, inputReference1);
    workflow.addInput(input2, inputReference2);

    expect(workflow.filePaths).toEqual({
      [input1.id]: '/path/to/file1',
      [input2.id]: '/path/to/file2',
    });
  });

  it('should ignore InputReferences without paths', () => {
    const input1 = Input.file(Construct.createRoot('root'), 'input1');
    const input2 = Input.file(Construct.createRoot('root'), 'input2');
    const inputReference1 = InputReference.file('/path/to/file1');
    const inputReferenceWithoutPath = new InputReference(); // No path provided

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, inputReference1);
    workflow.addInput(input2, inputReferenceWithoutPath);

    expect(workflow.filePaths).toEqual({
      [input1.id]: '/path/to/file1',
    });
  });
});
