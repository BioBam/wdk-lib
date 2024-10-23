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

});
