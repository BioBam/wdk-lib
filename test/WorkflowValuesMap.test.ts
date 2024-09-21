import { Construct } from '../src/lib/Construct';
import { Input } from '../src/lib/Input';
import { InputReference } from '../src/lib/InputReference';
import { WorkflowValues } from '../src/lib/WorkflowValues';

describe('WorkflowValues', () => {
  it('should return an empty object if no inputs are added', () => {
    const workflow = WorkflowValues.create();
    expect(workflow.toMap()).toEqual({});
  });

  it('should return a map with string input values', () => {
    const input1 = Input.string(Construct.createRoot('root'), 'input1');
    const stringValue = 'Some string value';

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, stringValue);

    expect(workflow.toMap()).toEqual({
      [input1.id]: stringValue,
    });
  });

  it('should return a map with boolean input values', () => {
    const input1 = Input.string(Construct.createRoot('root'), 'input1');
    const booleanValue = true;

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, booleanValue);

    expect(workflow.toMap()).toEqual({
      [input1.id]: booleanValue,
    });
  });

  it('should return a map with number input values', () => {
    const input1 = Input.string(Construct.createRoot('root'), 'input1');
    const numberValue = 42;

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, numberValue);

    expect(workflow.toMap()).toEqual({
      [input1.id]: numberValue,
    });
  });

  it('should return a map with array of strings input values', () => {
    const input1 = Input.string(Construct.createRoot('root'), 'input1');
    const arrayValue = ['value1', 'value2'];

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, arrayValue);

    expect(workflow.toMap()).toEqual({
      [input1.id]: arrayValue,
    });
  });

  it('should return a map with InputReference values', () => {
    const input1 = Input.file(Construct.createRoot('root'), 'input1');
    const inputReference1 = InputReference.file('/path/to/file1');

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, inputReference1);

    expect(workflow.toMap()).toEqual({
      [input1.id]: inputReference1.toMap(),
    });
  });

  it('should handle mixed types correctly in the map', () => {
    const input1 = Input.file(Construct.createRoot('root'), 'input1');
    const input2 = Input.string(Construct.createRoot('root'), 'input2');
    const input3 = Input.string(Construct.createRoot('root'), 'input3');
    const inputReference1 = InputReference.file('/path/to/file1');
    const stringValue = 'Some string value';
    const numberValue = 123;

    const workflow = WorkflowValues.create();
    workflow.addInput(input1, inputReference1);
    workflow.addInput(input2, stringValue);
    workflow.addInput(input3, numberValue);

    expect(workflow.toMap()).toEqual({
      [input1.id]: inputReference1.toMap(),
      [input2.id]: stringValue,
      [input3.id]: numberValue,
    });
  });
});
