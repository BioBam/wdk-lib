import { Input } from '../src/lib';
import { Conditional } from '../src/lib/Conditional';
import { Constructs } from '../src/lib/Constructs';
import { Tool } from '../src/lib/Tool';
import { Workflow } from '../src/lib/Workflow';

describe('Scatter', () => {

  let scope: Workflow;
  let step: Tool;

  beforeEach(() => {
    const rootConstruct = Constructs.createRoot('root');
    scope = new Workflow(rootConstruct, 'testWorkflow', Workflow.basicProps());
    step = new Tool(scope, 'testStep');
  });

  test('should set create my own conditional _expression', () => {
    // Arrange
    // Input.integer(step, 'a_new_var');

    // Act
    Conditional.step(step).expression = '$(inputs.a_new_var > 2)';

    // Assert
    expect(step.conditional?._expression).toStrictEqual('$(inputs.a_new_var > 2)');
  });


  test('should set create a boolean conditional _expression', () => {
    // Arrange
    const booleanInput = Input.bool(step, 'a_new_var');

    // Act
    Conditional.step(step).whenBooleanInputIs(booleanInput, true);

    // Assert
    expect(step.conditional?._expression).toStrictEqual('$(inputs.a_new_var == true)');
  });

  test('should create not null conditional _expression', () => {
    // Arrange
    const input = Input.string(step, 'test_input');

    // Act
    Conditional.step(step).whenInputNotNull(input);

    // Assert
    expect(step.conditional?._expression).toBe('$(inputs.test_input !== null)');
  });

  test('should throw error when non-boolean input used in whenBooleanInputIs', () => {
    // Arrange
    const input = Input.string(step, 'string_input');

    // Act & Assert
    expect(() => {
      Conditional.step(step).whenBooleanInputIs(input, true);
    }).toThrow('Input string_input is not a boolean. Conditional can only be applied on boolean inputs.');
  });

  test('should throw error when string non-step input is used in nonNull', () => {
    // Arrange
    const workflowInput = Input.string(scope, 'string_input');
    // Act & Assert
    expect(() => {
      Conditional.step(step).whenInputNotNull(workflowInput);
    }).toThrow(`Input ${workflowInput.id} is not part of the step ${step.id} inputs.`);
  });

  test('should throw error when boolean non-step input is used in nonNull', () => {
    // Arrange
    const workflowInput = Input.bool(scope, 'bool_input');
    // Act & Assert
    expect(() => {
      Conditional.step(step).whenInputNotNull(workflowInput);
    }).toThrow(`Input ${workflowInput.id} is not part of the step ${step.id} inputs.`);
  });

  test('should create conditional _expression when all inputs are not null', () => {
    // Arrange
    const input1 = Input.string(step, 'input1');
    const input2 = Input.string(step, 'input2');

    // Act
    Conditional.step(step).whenInputsNotNull([input1, input2]);

    // Assert
    expect(step.conditional?._expression).toBe('$(inputs.input1 !== null && inputs.input2 !== null)');
  });


});
