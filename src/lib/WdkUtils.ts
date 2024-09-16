import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { IStep } from './IStep';
import { SynthFiles } from './SynthFiles';


export class WdkUtils {


  public static newFilePath(workflowDirectory: string, fileName: string): string {
    const filePath = path.join(workflowDirectory, fileName);
    return filePath;
  }


  public static createSynthInfo(step: IStep, workflowDirectory: string): SynthFiles {
    const classInitials = this.getLowercaseInitials(step.stepClass);
    const cwlFile = this.newFilePath(workflowDirectory, `${step.id}.${classInitials}.cwl`);
    const synthInfo = SynthFiles.createWithMain(cwlFile);
    return synthInfo;
  }


  /**
     * TODO: Take care of await correctly.
     * @param content
     * @param filePath
     */
  public static writeToFile(content: string, filePath: string) {
    fs.writeFileSync(filePath, content, 'utf8');
  }

  public static getFileBasename(filePath: string): string {
    return path.basename(filePath, path.basename(filePath));
  }

  public static mapToJsonString(data: { [key: string]: any }): string {
    return JSON.stringify(data, null, 2);
  }

  public static mapToYamlString(data: { [key: string]: any }): string {
    const yamlString = yaml.dump(data, { noRefs: true });
    return yamlString;
  }

  /**
     * Extracts the capital initials from a given camel case string and converts them to lowercase.
     * @param str The input camel case string.
     * @returns A string containing only the lowercase initials.
     */
  public static getLowercaseInitials(str: string): string {
    return str.match(/[A-Z]/g)?.map(letter => letter.toLowerCase()).join('') || '';
  }
}

