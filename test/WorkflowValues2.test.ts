import { Workflow } from '../src/lib';
import { Input } from '../src/lib/Input';
import { InputReference } from '../src/lib/InputReference';
import { WorkflowValues } from '../src/lib/WorkflowValues';

describe('WorkflowValues', () => {
  let w0: Workflow;

  beforeEach(() => {
    const root = w0;
    w0 = new Workflow(root, 'test-workflow');
  });

  it('should be initialized with a default task name "Task"', () => {
    const workflow = WorkflowValues.create();
    expect(workflow.taskName).toBe('Task');
  });

  it('should allow setting a custom task name via factory method', () => {
    const customTaskName = 'Custom Task';
    const workflow = WorkflowValues.create(customTaskName);
    expect(workflow.taskName).toBe(customTaskName);
  });

  it('should return an empty array if no input references are added', () => {
    const workflow = WorkflowValues.create();
    expect(workflow.filePaths).toEqual([]);
  });

  it('should include file paths from single InputReferences', () => {
    const input1 = Input.file(w0, 'input1');
    const inputReference1 = InputReference.file('/path/to/file1');

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, inputReference1);

    expect(workflow.filePaths).toEqual(['/path/to/file1']);
  });

  it('should not include entries that are not InputReferences', () => {
    const input1 = Input.file(w0, 'input1');
    const inputReference1 = InputReference.file('/path/to/file1');
    const stringValue = 'Some string value';

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, inputReference1);
    workflow.addInput(Input.string(w0, 'input2'), stringValue);

    expect(workflow.filePaths).toEqual(['/path/to/file1']);
  });

  it('should handle multiple InputReferences correctly', () => {
    const input1 = Input.file(w0, 'input1');
    const input2 = Input.file(w0, 'input2');
    const inputReference1 = InputReference.file('/path/to/file1');
    const inputReference2 = InputReference.file('/path/to/file2');

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, inputReference1);
    workflow.addInput(input2, inputReference2);

    expect(workflow.filePaths).toEqual(['/path/to/file1', '/path/to/file2']);
  });

  it('should ignore InputReferences without paths', () => {
    const input1 = Input.file(w0, 'input1');
    const inputReference1 = InputReference.file('/path/to/file1');
    const inputReferenceWithoutPath = new InputReference(); // No path provided

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, inputReference1);
    workflow.addInput(Input.file(w0, 'input2'), inputReferenceWithoutPath);

    expect(workflow.filePaths).toEqual(['/path/to/file1']);
  });

  it('should serialize inputs to a map correctly', () => {
    const input1 = Input.file(w0, 'input1');
    const inputReference1 = InputReference.file('/path/to/file1');

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, inputReference1);

    expect(workflow.toMap()).toEqual({
      [input1.id]: inputReference1.toMap(),
    });
  });

  it('should handle arrays of InputReferences', () => {
    const input1 = Input.file(w0, 'input1');
    const inputReferenceArray = [InputReference.file('/path/to/file1'), InputReference.file('/path/to/file2')];

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, inputReferenceArray);

    expect(workflow.filePaths).toEqual(['/path/to/file1', '/path/to/file2']);
  });
});
