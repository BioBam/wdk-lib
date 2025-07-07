import { Constructs } from '../src/lib/Constructs';
import { Input } from '../src/lib/Input';
import { Requirement } from '../src/lib/Requirement';
import { StepInputsValue } from '../src/lib/StepInputsValue';
import { Tool } from '../src/lib/Tool';
import { Workflow } from '../src/lib/Workflow';

// Mocking dependencies
jest.mock('../src/lib/Requirement', () => ({
  Requirement: {
    inlineJavascript: jest.fn(),
  },
}));

describe('StepInputsValueFrom', () => {

  let scope: Workflow;
  let step: Tool;
  let stepInputsValueFrom: StepInputsValue;

  beforeEach(() => {
    const rootConstruct = Constructs.createRoot('root');
    scope = new Workflow(rootConstruct, 'testWorkflow', Workflow.basicProps());
    step = new Tool(scope, 'testStep');
    stepInputsValueFrom = StepInputsValue.for(scope, step);
  });

  describe('creator method', () => {
    test('should create instance with correct ID using static for method', () => {
      expect(stepInputsValueFrom.id).toBe('testStep_stepInputsValueFrom');
    });

    test('should store the step internally', () => {
      expect((stepInputsValueFrom as any)._step).toBe(step);
    });

    test('should create new instance via static for method', () => {
      const instance = StepInputsValue.for(scope, step);
      expect(instance).toBeInstanceOf(StepInputsValue);
      expect(instance.id).toBe('testStep_stepInputsValueFrom');
    });
  });

  describe('valueToOneElementArray', () => {
    test('should add correct expression for converting value to single element array', () => {
      // Arrange
      const input = Input.string(step, 'testInput');

      // Act
      stepInputsValueFrom.valueToOneElementArray(input);

      // Assert
      expect(stepInputsValueFrom.hasExpressionForInput('testInput')).toBe(true);
      expect(stepInputsValueFrom.getExpressionForInput('testInput')).toBe('$([self])');
      expect(Requirement.inlineJavascript).toHaveBeenCalledWith(scope);
    });

    test('should return this for method chaining', () => {
      // Arrange
      const input = Input.string(step, 'testInput');

      // Act
      const result = stepInputsValueFrom.valueToOneElementArray(input);

      // Assert
      expect(result).toBe(stepInputsValueFrom);
    });
  });

  describe('emptyArrayToNull', () => {
    test('should add correct expression for converting empty array to null', () => {
      // Arrange
      const input = Input.stringArray(step, 'testArrayInput');

      // Act
      stepInputsValueFrom.emptyArrayToNull(input);

      // Assert
      expect(stepInputsValueFrom.hasExpressionForInput('testArrayInput')).toBe(true);
      expect(stepInputsValueFrom.getExpressionForInput('testArrayInput')).toBe('$(self.length === 0 ? null : self)');
      expect(Requirement.inlineJavascript).toHaveBeenCalledWith(scope);
    });

    test('should return this for method chaining', () => {
      // Arrange
      const input = Input.stringArray(step, 'testArrayInput');

      // Act
      const result = stepInputsValueFrom.emptyArrayToNull(input);

      // Assert
      expect(result).toBe(stepInputsValueFrom);
    });
  });

  describe('addCustomExpression', () => {
    test('should add custom expression with proper wrapping', () => {
      // Arrange
      const input = Input.string(step, 'testInput');
      const customExpression = 'self.replace("old", "new")';

      // Act
      stepInputsValueFrom.addCustomExpression(input, customExpression);

      // Assert
      expect(stepInputsValueFrom.hasExpressionForInput('testInput')).toBe(true);
      expect(stepInputsValueFrom.getExpressionForInput('testInput')).toBe('$(self.replace("old", "new"))');
      expect(Requirement.inlineJavascript).toHaveBeenCalledWith(scope);
    });

    test('should return this for method chaining', () => {
      // Arrange
      const input = Input.string(step, 'testInput');
      const customExpression = 'self.toUpperCase()';

      // Act
      const result = stepInputsValueFrom.addCustomExpression(input, customExpression);

      // Assert
      expect(result).toBe(stepInputsValueFrom);
    });
  });

  describe('multiple expressions on same step', () => {
    test('should handle multiple different expressions for different inputs', () => {
      // Arrange
      const input1 = Input.string(step, 'input1');
      const input2 = Input.stringArray(step, 'input2');
      const input3 = Input.string(step, 'input3');

      // Act
      stepInputsValueFrom
        .valueToOneElementArray(input1)
        .emptyArrayToNull(input2)
        .addCustomExpression(input3, 'self.trim()');

      // Assert
      expect(stepInputsValueFrom.hasExpressionForInput('input1')).toBe(true);
      expect(stepInputsValueFrom.hasExpressionForInput('input2')).toBe(true);
      expect(stepInputsValueFrom.hasExpressionForInput('input3')).toBe(true);

      expect(stepInputsValueFrom.getExpressionForInput('input1')).toBe('$([self])');
      expect(stepInputsValueFrom.getExpressionForInput('input2')).toBe('$(self.length === 0 ? null : self)');
      expect(stepInputsValueFrom.getExpressionForInput('input3')).toBe('$(self.trim())');
    });

    test('should allow overriding expression for same input', () => {
      // Arrange
      const input = Input.string(step, 'testInput');

      // Act
      stepInputsValueFrom
        .valueToOneElementArray(input)
        .addCustomExpression(input, 'self.toLowerCase()');

      // Assert
      expect(stepInputsValueFrom.hasExpressionForInput('testInput')).toBe(true);
      expect(stepInputsValueFrom.getExpressionForInput('testInput')).toBe('$(self.toLowerCase())');
    });
  });

  describe('getInputIdsWithExpressions', () => {
    test('should return all input IDs that have expressions', () => {
      // Arrange
      const input1 = Input.string(step, 'input1');
      const input2 = Input.stringArray(step, 'input2');
      const input3 = Input.string(step, 'input3');

      // Act
      stepInputsValueFrom
        .valueToOneElementArray(input1)
        .emptyArrayToNull(input2)
        .addCustomExpression(input3, 'self.trim()');

      // Assert
      const inputIds = stepInputsValueFrom.inputIdsWithExpressions();
      expect(inputIds).toContain('input1');
      expect(inputIds).toContain('input2');
      expect(inputIds).toContain('input3');
      expect(inputIds).toHaveLength(3);
    });

    test('should return empty array when no expressions are set', () => {
      // Act
      const inputIds = stepInputsValueFrom.inputIdsWithExpressions();

      // Assert
      expect(inputIds).toEqual([]);
    });
  });

  describe('workflow integration', () => {
    test('should integrate with step for workflow generation', () => {
      // Arrange
      const input1 = Input.string(step, 'input1');
      const input2 = Input.stringArray(step, 'input2');

      // Create step inputs value from
      stepInputsValueFrom
        .valueToOneElementArray(input1)
        .emptyArrayToNull(input2);

      // Create workflow inputs and link them
      Input.fromStepInput(scope, input1);
      Input.fromStepInput(scope, input2);

      // Act & Assert
      // Check that the step has the stepInputsValueFrom object
      expect(step.stepInputsValueFrom).toBeDefined();
      expect(step.stepInputsValueFrom!.hasExpressionForInput('input1')).toBe(true);
      expect(step.stepInputsValueFrom!.hasExpressionForInput('input2')).toBe(true);
      expect(step.stepInputsValueFrom!.getExpressionForInput('input1')).toBe('$([self])');
      expect(step.stepInputsValueFrom!.getExpressionForInput('input2')).toBe('$(self.length === 0 ? null : self)');
    });
  });

  describe('nested workflow scope', () => {
    test('should handle nested workflow step inputs correctly', () => {
      // Arrange
      const nestedWorkflow = new Workflow(scope, 'nestedWorkflow');
      const nestedStep = new Tool(nestedWorkflow, 'nestedStep');
      const nestedInput = Input.string(nestedStep, 'nestedInput');

      const nestedStepInputsValueFrom = StepInputsValue.for(nestedWorkflow, nestedStep);

      // Act
      nestedStepInputsValueFrom.valueToOneElementArray(nestedInput);

      // Assert
      expect(nestedStepInputsValueFrom.hasExpressionForInput('nestedInput')).toBe(true);
      expect(nestedStepInputsValueFrom.getExpressionForInput('nestedInput')).toBe('$([self])');
    });
  });

  describe('edge cases', () => {
    test('should handle input with no expression', () => {
      // Arrange
      Input.string(step, 'testInput');

      // Act & Assert
      expect(stepInputsValueFrom.hasExpressionForInput('testInput')).toBe(false);
      expect(stepInputsValueFrom.getExpressionForInput('testInput')).toBeUndefined();
    });

    test('should handle empty expression gracefully', () => {
      // Arrange
      const input = Input.string(step, 'testInput');

      // Act
      stepInputsValueFrom.addCustomExpression(input, '');

      // Assert
      expect(stepInputsValueFrom.hasExpressionForInput('testInput')).toBe(true);
      expect(stepInputsValueFrom.getExpressionForInput('testInput')).toBe('$()');
    });
  });
});