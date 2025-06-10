/**
 * Helper class for generating CWL valueFrom expressions.
 */
export class Value {

  /**
   * Generates a CWL boolean expression.
   *
   * @param value - The boolean value (true or false).
   * @returns A CWL-compatible expression for a boolean.
   * @example
   * Value.boolean(true); // "$( true )"
   */
  public static boolean(value: boolean): string {
    return `$( ${value} )`;
  }

  /**
   * Generates a CWL integer expression.
   *
   * @param value - A 32-bit signed integer.
   * @returns A CWL-compatible expression for an integer.
   * @throws Error if the value is not an integer.
   * @example
   * Value.int(42); // "$( 42 )"
   */
  public static int(value: number): string {
    if (!Number.isInteger(value)) throw new Error('Expected an integer value');
    return `$( ${value} )`;
  }

  /**
   * Generates a CWL long integer expression.
   *
   * @param value - A 64-bit signed integer.
   * @returns A CWL-compatible expression for a long integer.
   * @throws Error if the value is not an integer.
   * @example
   * Value.long(1000000000); // "$( 1000000000 )"
   */
  public static long(value: number): string {
    if (!Number.isInteger(value)) throw new Error('Expected a long integer value');
    return `$( ${value} )`;
  }

  /**
   * Generates a CWL float expression.
   *
   * @param value - A 32-bit floating-point number.
   * @returns A CWL-compatible expression for a float.
   * @example
   * Value.float(3.14); // "$( 3.14 )"
   */
  public static float(value: number): string {
    return `$( ${value} )`;
  }

  /**
   * Generates a CWL double expression.
   *
   * @param value - A 64-bit floating-point number.
   * @returns A CWL-compatible expression for a double.
   * @example
   * Value.double(3.14159); // "$( 3.14159 )"
   */
  public static double(value: number): string {
    return `$( ${value} )`;
  }

  /**
   * Generates a CWL string expression.
   *
   * @param value - A Unicode character sequence.
   * @returns A CWL-compatible expression for a string.
   * @example
   * Value.string("hello world"); // "$( "hello world" )"
   */
  public static string(value: string): string {
    return `$( "${value}" )`;
  }

  /**
   * Generates a CWL string array expression.
   *
   * @param values - An array of strings.
   * @returns A CWL-compatible expression for a string array.
   * @example
   * Value.stringArray(["hello", "world"]); // "$( [ "hello", "world" ] )"
   */
  public static stringArray(values: string[]): string {
    return `$( [${values.map(value => `"${value}"`).join(', ')}] )`;
  }

  /**
   * Generates a CWL null expression to represent no value.
   *
   * @returns A CWL-compatible expression for null.
   * @example
   * Value.null(); // "$(null)"
   */
  public static null(): string {
    return '$(null)';
  }


  /**
   * Generates a CWL expression from a custom JavaScript-compatible string.
   *
   * @param expr - A custom JavaScript-compatible expression.
   * @returns A CWL-compatible custom expression.
   * @example
   * Value.expression("inputs.my_input * 2"); // "$( inputs.my_input * 2 )"
   */
  public static expression(expr: string): string {
    return `$( ${expr} )`;
  }


  // This class is not meant to be instantiated.
  private constructor() { }
}
