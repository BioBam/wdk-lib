import { Value } from '../src/lib/Value';

describe('Value', () => {

  describe('boolean', () => {
    test('should return string representation of true', () => {
      // Act
      const result = Value.boolean(true);

      // Assert
      expect(result).toBe('true');
    });

    test('should return string representation of false', () => {
      // Act
      const result = Value.boolean(false);

      // Assert
      expect(result).toBe('false');
    });
  });

  describe('int', () => {
    test('should return string representation of positive integer', () => {
      // Act
      const result = Value.int(42);

      // Assert
      expect(result).toBe('42');
    });

    test('should return string representation of negative integer', () => {
      // Act
      const result = Value.int(-42);

      // Assert
      expect(result).toBe('-42');
    });

    test('should return string representation of zero', () => {
      // Act
      const result = Value.int(0);

      // Assert
      expect(result).toBe('0');
    });

    test('should throw error for non-integer values', () => {
      // Act & Assert
      expect(() => Value.int(3.14)).toThrow('Expected an integer value');
      expect(() => Value.int(3.1)).toThrow('Expected an integer value');
      expect(() => Value.int(NaN)).toThrow('Expected an integer value');
    });
  });

  describe('long', () => {
    test('should return string representation of large integer', () => {
      // Act
      const result = Value.long(1000000000);

      // Assert
      expect(result).toBe('1000000000');
    });

    test('should return string representation of negative large integer', () => {
      // Act
      const result = Value.long(-1000000000);

      // Assert
      expect(result).toBe('-1000000000');
    });

    test('should throw error for non-integer values', () => {
      // Act & Assert
      expect(() => Value.long(3.14)).toThrow('Expected a long integer value');
      expect(() => Value.long(3.1)).toThrow('Expected a long integer value');
      expect(() => Value.long(NaN)).toThrow('Expected a long integer value');
    });
  });

  describe('float', () => {
    test('should return string representation of float', () => {
      // Act
      const result = Value.float(3.14);

      // Assert
      expect(result).toBe('3.14');
    });

    test('should return string representation of negative float', () => {
      // Act
      const result = Value.float(-3.14);

      // Assert
      expect(result).toBe('-3.14');
    });

    test('should return string representation of integer as float', () => {
      // Act
      const result = Value.float(42);

      // Assert
      expect(result).toBe('42');
    });

    test('should handle special float values', () => {
      // Act & Assert
      expect(Value.float(0.0)).toBe('0');
      expect(Value.float(-0.0)).toBe('0'); // JavaScript converts -0.0 to "0"
      expect(Value.float(Infinity)).toBe('Infinity');
      expect(Value.float(-Infinity)).toBe('-Infinity');
    });
  });

  describe('double', () => {
    test('should return string representation of double', () => {
      // Act
      const result = Value.double(3.14159);

      // Assert
      expect(result).toBe('3.14159');
    });

    test('should return string representation of negative double', () => {
      // Act
      const result = Value.double(-3.14159);

      // Assert
      expect(result).toBe('-3.14159');
    });

    test('should return string representation of integer as double', () => {
      // Act
      const result = Value.double(42);

      // Assert
      expect(result).toBe('42');
    });

    test('should handle special double values', () => {
      // Act & Assert
      expect(Value.double(0.0)).toBe('0');
      expect(Value.double(-0.0)).toBe('0'); // JavaScript converts -0.0 to "0"
      expect(Value.double(Infinity)).toBe('Infinity');
      expect(Value.double(-Infinity)).toBe('-Infinity');
    });
  });

  describe('string', () => {
    test('should return string as-is', () => {
      // Act
      const result = Value.string('hello world');

      // Assert
      expect(result).toBe('hello world');
    });

    test('should return empty string', () => {
      // Act
      const result = Value.string('');

      // Assert
      expect(result).toBe('');
    });

    test('should return string with special characters', () => {
      // Act
      const result = Value.string('hello\nworld\t!@#$%^&*()');

      // Assert
      expect(result).toBe('hello\nworld\t!@#$%^&*()');
    });

    test('should return string with quotes', () => {
      // Act
      const result = Value.string('hello "world"');

      // Assert
      expect(result).toBe('hello "world"');
    });
  });

  describe('stringArray', () => {
    test('should return CWL expression for string array', () => {
      // Act
      const result = Value.stringArray(['hello', 'world']);

      // Assert
      expect(result).toBe('$( ["hello","world"] )');
    });

    test('should return CWL expression for empty array', () => {
      // Act
      const result = Value.stringArray([]);

      // Assert
      expect(result).toBe('$( [] )');
    });

    test('should return CWL expression for single element array', () => {
      // Act
      const result = Value.stringArray(['hello']);

      // Assert
      expect(result).toBe('$( ["hello"] )');
    });

    test('should properly escape strings in array', () => {
      // Act
      const result = Value.stringArray(['hello "world"', 'test\nvalue']);

      // Assert
      expect(result).toBe('$( ["hello \\"world\\"","test\\nvalue"] )');
    });
  });

  describe('null', () => {
    test('should return null string', () => {
      // Act
      const result = Value.null();

      // Assert
      expect(result).toBe('null');
    });
  });

  describe('expression', () => {
    test('should wrap expression in CWL syntax', () => {
      // Act
      const result = Value.expression('inputs.my_input * 2');

      // Assert
      expect(result).toBe('$( inputs.my_input * 2 )');
    });

    test('should wrap simple expression', () => {
      // Act
      const result = Value.expression('true');

      // Assert
      expect(result).toBe('$( true )');
    });

    test('should wrap complex expression', () => {
      // Act
      const result = Value.expression('inputs.files.length > 0 ? inputs.files[0].path : null');

      // Assert
      expect(result).toBe('$( inputs.files.length > 0 ? inputs.files[0].path : null )');
    });

    test('should wrap empty expression', () => {
      // Act
      const result = Value.expression('');

      // Assert
      expect(result).toBe('$(  )');
    });
  });

});