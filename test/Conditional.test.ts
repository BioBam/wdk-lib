import { Input } from '../src/lib';
import { Conditional } from '../src/lib/Conditional';
import { Construct } from '../src/lib/Construct';
import { Tool } from '../src/lib/Tool';
import { Workflow } from '../src/lib/Workflow';

describe('Scatter', () => {

  let scope: Workflow;
  let step: Tool;

  beforeEach(() => {
    const rootConstruct = Construct.createRoot('root');
    scope = new Workflow(rootConstruct, 'testWorkflow', Workflow.basicProps());
    step = new Tool(scope, 'testStep');
  });

  test('should set create my own conditional expression', () => {
    // Arrange
    // Input.integer(step, 'a_new_var');

    // Act
    Conditional.step(step).expression = '$(inputs.a_new_var > 2)';

    // Assert
    expect(step.conditional?.expression).toStrictEqual('$(inputs.a_new_var > 2)');
  });


  test('should set create a boolean conditional expression', () => {
    // Arrange
    const booleanInput = Input.bool(step, 'a_new_var');

    // Act
    Conditional.step(step).whenBooleanInputIs(booleanInput, true);

    // Assert
    expect(step.conditional?.expression).toStrictEqual('$(inputs.a_new_var == true)');
  });

  test('should create not null conditional expression', () => {
    // Arrange
    const input = Input.string(step, 'test_input');

    // Act
    Conditional.step(step).whenInputNotNull(input);

    // Assert
    expect(step.conditional?.expression).toBe('$(inputs.test_input !== null)');
  });

  test('should throw error when non-boolean input used in whenBooleanInputIs', () => {
    // Arrange
    const input = Input.string(step, 'string_input');

    // Act & Assert
    expect(() => {
      Conditional.step(step).whenBooleanInputIs(input, true);
    }).toThrow('Input string_input is not a boolean. Conditional can only be applied on boolean inputs.');
  });
});
