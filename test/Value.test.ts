import { Value } from '../src/lib/Value';

describe('Value', () => {

  describe('boolean', () => {
    test('should return expression for true', () => {
      // Act
      const result = Value.boolean(true);

      // Assert
      expect(result).toBe('$(true)');
    });

    test('should return expression for false', () => {
      // Act
      const result = Value.boolean(false);

      // Assert
      expect(result).toBe('$(false)');
    });
  });

  describe('int', () => {
    test('should return expression for positive integer', () => {
      // Act
      const result = Value.int(42);

      // Assert
      expect(result).toBe('$(42)');
    });

    test('should return expression for negative integer', () => {
      // Act
      const result = Value.int(-123);

      // Assert
      expect(result).toBe('$(-123)');
    });

    test('should return expression for zero', () => {
      // Act
      const result = Value.int(0);

      // Assert
      expect(result).toBe('$(0)');
    });

    test('should throw error for non-integer values', () => {
      // Act & Assert
      expect(() => Value.int(3.14)).toThrow('Expected an integer value');
      expect(() => Value.int(NaN)).toThrow('Expected an integer value');
      expect(() => Value.int(Infinity)).toThrow('Expected an integer value');
    });
  });

  describe('long', () => {
    test('should return expression for large integer', () => {
      // Act
      const result = Value.long(1000000000);

      // Assert
      expect(result).toBe('$(1000000000)');
    });

    test('should return expression for negative large integer', () => {
      // Act
      const result = Value.long(-1000000000);

      // Assert
      expect(result).toBe('$(-1000000000)');
    });

    test('should throw error for non-integer values', () => {
      // Act & Assert
      expect(() => Value.long(3.14)).toThrow('Expected a long integer value');
      expect(() => Value.long(NaN)).toThrow('Expected a long integer value');
    });
  });

  describe('float', () => {
    test('should return expression for positive float', () => {
      // Act
      const result = Value.float(3.14);

      // Assert
      expect(result).toBe('$(3.14)');
    });

    test('should return expression for negative float', () => {
      // Act
      const result = Value.float(-2.718);

      // Assert
      expect(result).toBe('$(-2.718)');
    });

    test('should handle special float values', () => {
      // Act & Assert
      expect(Value.float(0.0)).toBe('$(0)');
      expect(Value.float(-0.0)).toBe('$(0)'); // JavaScript converts -0.0 to "0"
      expect(Value.float(Infinity)).toBe('$(Infinity)');
      expect(Value.float(-Infinity)).toBe('$(-Infinity)');
    });

    test('should handle integer as float', () => {
      // Act
      const result = Value.float(42);

      // Assert
      expect(result).toBe('$(42)');
    });
  });

  describe('double', () => {
    test('should return expression for positive double', () => {
      // Act
      const result = Value.double(3.14159265359);

      // Assert
      expect(result).toBe('$(3.14159265359)');
    });

    test('should return expression for negative double', () => {
      // Act
      const result = Value.double(-2.71828182846);

      // Assert
      expect(result).toBe('$(-2.71828182846)');
    });

    test('should handle special double values', () => {
      // Act & Assert
      expect(Value.double(0.0)).toBe('$(0)');
      expect(Value.double(-0.0)).toBe('$(0)'); // JavaScript converts -0.0 to "0"
      expect(Value.double(Infinity)).toBe('$(Infinity)');
      expect(Value.double(-Infinity)).toBe('$(-Infinity)');
    });
  });

  describe('string', () => {
    test('should return string value directly', () => {
      // Act
      const result = Value.string('hello world');

      // Assert
      expect(result).toBe('hello world');
    });

    test('should return empty string directly', () => {
      // Act
      const result = Value.string('');

      // Assert
      expect(result).toBe('');
    });

    test('should return string with special characters directly', () => {
      // Act & Assert
      expect(Value.string('hello "world"')).toBe('hello "world"');
      expect(Value.string('line1\nline2')).toBe('line1\nline2');
      expect(Value.string('tab\there')).toBe('tab\there');
      expect(Value.string('path\\to\\file')).toBe('path\\to\\file');
    });

    test('should handle unicode characters directly', () => {
      // Act
      const result = Value.string('Hello 世界! 🌍');

      // Assert
      expect(result).toBe('Hello 世界! 🌍');
    });
  });

  describe('stringArray', () => {
    test('should return expression for string array', () => {
      // Act
      const result = Value.stringArray(['hello', 'world']);

      // Assert
      expect(result).toBe('$(["hello","world"])');
    });

    test('should return expression for empty array', () => {
      // Act
      const result = Value.stringArray([]);

      // Assert
      expect(result).toBe('$([])');
    });

    test('should return expression for single element array', () => {
      // Act
      const result = Value.stringArray(['single']);

      // Assert
      expect(result).toBe('$(["single"])');
    });

    test('should properly escape strings in array', () => {
      // Act
      const result = Value.stringArray(['hello "world"', 'line1\nline2']);

      // Assert
      expect(result).toBe('$(["hello \\"world\\"","line1\\nline2"])');
    });
  });

  describe('null', () => {
    test('should return expression for null', () => {
      // Act
      const result = Value.null();

      // Assert
      expect(result).toBe('$(null)');
    });
  });

  describe('expression', () => {
    test('should wrap custom expression', () => {
      // Act
      const result = Value.expression('inputs.my_input * 2');

      // Assert
      expect(result).toBe('$(inputs.my_input * 2)');
    });

    test('should handle complex expressions', () => {
      // Act & Assert
      expect(Value.expression('inputs.files.length')).toBe('$(inputs.files.length)');
      expect(Value.expression('inputs.prefix + "_" + inputs.suffix')).toBe('$(inputs.prefix + "_" + inputs.suffix)');
      expect(Value.expression('inputs.value > 0 ? "positive" : "negative"')).toBe('$(inputs.value > 0 ? "positive" : "negative")');
    });

    test('should handle empty expression', () => {
      // Act
      const result = Value.expression('');

      // Assert
      expect(result).toBe('$()');
    });
  });

});