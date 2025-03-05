import * as cwl from 'cwl-ts-auto';
import { InputReference } from '../src/lib/InputReference';

describe('InputReference', () => {

  describe('file', () => {
    it('should create a local file reference', () => {
      const relativePath = '/Users/username/file.txt';
      const inputReference = InputReference.file(relativePath);

      expect(inputReference.path).toBe(relativePath);
      expect(inputReference.location).toBeUndefined();
      expect((inputReference as any).type).toBe(cwl.CWLType.FILE.toString());
    });
  });

  describe('s3File', () => {
    it('should create an S3 file reference', () => {
      const s3FileReference = 's3://bucket-name/path/to/file';
      const inputReference = InputReference.s3File(s3FileReference);

      expect(inputReference.location).toBe(s3FileReference);
      expect(inputReference.path).toBeUndefined();
      expect((inputReference as any).type).toBe(cwl.CWLType.FILE.toString());
    });
  });

  describe('toMap', () => {
    it('should convert local file reference to map', () => {
      const relativePath = '/Users/username/file.txt';
      const inputReference = InputReference.file(relativePath);
      const yamlMap = inputReference.toMap();

      expect(yamlMap.class).toBe(cwl.CWLType.FILE.toString());
      expect(yamlMap.path).toBe('file.txt'); // Extracting filename from path
      expect(yamlMap.location).toBeUndefined();
    });

    it('should convert S3 file reference to map', () => {
      const s3FileReference = 's3://bucket-name/path/to/file';
      const inputReference = InputReference.s3File(s3FileReference);
      const yamlMap = inputReference.toMap();

      expect(yamlMap.class).toBe(cwl.CWLType.FILE.toString());
      expect(yamlMap.path).toBeUndefined();
      expect(yamlMap.location).toBe(s3FileReference);
    });
  });

  describe('convertToS3Reference', () => {
    it('should convert local path to S3 reference', () => {
      const localPath = '/Users/username/file.txt';
      const s3UriLocation = 's3://bucket-name/path/to/file';
      const inputReference = InputReference.file(localPath);

      inputReference.convertToS3Reference(s3UriLocation);

      expect(inputReference.location).toBe(s3UriLocation);
      expect(inputReference.path).toBeUndefined();
    });
  });

});