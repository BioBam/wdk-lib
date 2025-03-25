import * as cwl from 'cwl-ts-auto';
import { TypeOut } from '../src/lib/TypeOut'; // Adjust the import path as necessary

// import { Tool, Workflow } from '../src/lib';
// import { Constructs } from '../src/lib/Constructs';
// import { Input } from '../src/lib/Input';
// import { TypeIn } from '../src/lib/TypeIn';


describe('TypeOut Class', () => {

  test('should create a File type instance', () => {
    const typeOut = TypeOut.file();
    expect(typeOut.toMap()).toEqual({ type: cwl.CWLType.FILE });
  });

  test('should create a Directory type instance', () => {
    const typeOut = TypeOut.directory();
    expect(typeOut.toMap()).toEqual({ type: cwl.CWLType.DIRECTORY });
  });

  test('should create a Boolean type instance', () => {
    const typeOut = TypeOut.boolean();
    expect(typeOut.toMap()).toEqual({ type: cwl.PrimitiveType.BOOLEAN });
  });

  test('should create a String type instance', () => {
    const typeOut = TypeOut.string();
    expect(typeOut.toMap()).toEqual({ type: cwl.PrimitiveType.STRING });
  });

  test('should create an Integer type instance', () => {
    const typeOut = TypeOut.int();
    expect(typeOut.toMap()).toEqual({ type: cwl.PrimitiveType.INT });
  });

  test('should create a Double type instance', () => {
    const typeOut = TypeOut.double();
    expect(typeOut.toMap()).toEqual({ type: cwl.PrimitiveType.DOUBLE });
  });

  test('should create a Float type instance', () => {
    const typeOut = TypeOut.float();
    expect(typeOut.toMap()).toEqual({ type: cwl.PrimitiveType.FLOAT });
  });

  test('should create a stdout type instance', () => {
    const typeOut = TypeOut.stdout();
    expect(typeOut.toMap()).toEqual({ type: cwl.stdout.STDOUT });
  });

  test('should create an stderr type instance', () => {
    const typeOut = TypeOut.stderr();
    expect(typeOut.toMap()).toEqual({ type: cwl.stderr.STDERR });
  });

  test('should allow empty types', () => {
    const typeOut = TypeOut.boolean().allowNull();
    expect(typeOut.toMap()).toEqual({ type: [cwl.PrimitiveType.BOOLEAN, cwl.PrimitiveType.NULL] });
  });

  test('should combine types', () => {
    const typeA = TypeOut.int();
    const typeB = TypeOut.double();
    const combined = typeA.combineWith(typeB);
    expect(combined.toMap()).toEqual({ type: [cwl.PrimitiveType.INT, cwl.PrimitiveType.DOUBLE] });
  });
});