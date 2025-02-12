import { TypeIn } from '../src/lib/TypeIn';


describe('Types Class', () => {

  beforeEach(() => {
  });

  describe('simple types toMap', () => {

    it('should create a boolean type correctly', () => {
      const myType = TypeIn.boolean().toMap();
      expect(myType).toEqual({ type: 'boolean' });
    });

    it('should create a string type correctly', () => {
      const myType = TypeIn.string().toMap();
      expect(myType).toEqual({ type: 'string' });
    });

    it('should create a int type correctly', () => {
      const myType = TypeIn.int().toMap();
      expect(myType).toEqual({ type: 'int' });
    });

    it('should create a double type correctly', () => {
      const myType = TypeIn.double().toMap();
      expect(myType).toEqual({ type: 'double' });
    });

    it('should create a float type correctly', () => {
      const myType = TypeIn.float().toMap();
      expect(myType).toEqual({ type: 'float' });
    });

    it('should create a file type correctly', () => {
      const myType = TypeIn.file().toMap();
      expect(myType).toEqual({ type: 'File' });
    });

  });

  describe('complex types toMap', () => {

    it('should create a string array type correctly', () => {
      const myType = TypeIn.arrayOf(TypeIn.string()).toMap();
      expect(myType).toEqual({ type: 'array', items: 'string' });
    });

    it('should create a file array type correctly', () => {
      const myType = TypeIn.arrayOf(TypeIn.file()).toMap();
      expect(myType).toEqual({ type: 'array', items: 'File' });
    });

    it('should create an array of array of files correctly', () => {
      const myType = TypeIn.arrayOf(TypeIn.arrayOf(TypeIn.file())).toMap();
      expect(myType).toEqual({ type: 'array', items: { type: 'array', items: 'File' } });
    });

  });
});

