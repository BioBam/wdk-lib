import { Constructs } from '../src/lib/Constructs';
import { Input } from '../src/lib/Input';
import { IStep } from '../src/lib/IStep';
import { Requirement } from '../src/lib/Requirement';
import { Scatter } from '../src/lib/Scatter';
import { Tool } from '../src/lib/Tool';
import { Workflow } from '../src/lib/Workflow';

// Mocking dependencies
jest.mock('../src/lib/Requirement', () => ({
  Requirement: {
    scatterFeature: jest.fn(),
  },
}));

describe('Scatter', () => {

  let scope: Workflow;
  let step: IStep;

  beforeEach(() => {
    const rootConstruct = Constructs.createRoot('root');
    scope = new Workflow(rootConstruct, 'testWorkflow', Workflow.basicProps());
    step = new Tool(scope, 'testStep');
  });

  test('should set step.scatter to input.id if input is an array', () => {
    // Arrange
    const mockInput = Input.stringArray(scope, 'testStringArray');

    // Act
    Scatter.simple(scope, step, mockInput);

    // Assert
    expect(step.scatter?.ids).toStrictEqual(['testStringArray']);
    expect(Requirement.scatterFeature).toHaveBeenCalledWith(scope);
  });

  // test('should throw error if input is not an array', () => {

  //   const input = Input.string(scope, 'testString');

  //   // Act & Assert
  //   expect(() => {
  //     Scatter.simple(scope, step, input);
  //   }).toThrow('Input testString is not an array. Scatter can only be applied on array inputs.');
  // });
});
