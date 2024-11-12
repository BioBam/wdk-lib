import * as fs from 'fs';

export class FileUtils {


  /**
   *
   * Utility to write (or overwrite) the YAML content into the file
   *
   * @param outputFile
   * @param yamlOutput
   */
  static writeFileContent(outputFile: string, yamlOutput: string) {
    fs.writeFileSync(outputFile, yamlOutput, 'utf8');
  }

  /**
   *
   * Utility function to read the content of a file
   *
   * @param filePath
   * @returns
   */
  public static readFileContent(filePath: string): string {
    return fs.readFileSync(filePath, 'utf-8');
  };


  // This class is not meant to be instantiated.
  private constructor() { }

}