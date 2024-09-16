import * as fs from 'fs';

export class FileUtils {

  // Utility to write (or overwrite) the YAML content into the file
  static writeFileContent(outputFile: string, yamlOutput: string) {
    fs.writeFileSync(outputFile, yamlOutput, 'utf8');
  }

  // Utility function to read the content of a file
  public static readFileContent(filePath: string): string {
    return fs.readFileSync(filePath, 'utf-8');
  };

}