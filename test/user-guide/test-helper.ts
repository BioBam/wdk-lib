// helpers/testHelper.ts
import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { Workflow } from '../../src/lib';

export class TestHelper {
  static serializeAndCheckStepsInRootWorkflow(root: Workflow) {
    let outputDir = TestHelper.ensureExampleDirectoryExistWithName(root.id);
    // for each step in the root workflow, serialize the step and check the output file
    root.steps.forEach(step => {
      const synthFile = step.serialize(outputDir);
      const outputFile = synthFile.main;
      const diffResult = TestHelper.compareWithGitDiff(outputFile);
      expect(diffResult).toBe('');
    });

  }

  static ensureExampleDirectoryExistWithName(exampleName: string): string {
    const outputDir = path.join(__dirname, '../../testoutput/user-guide', exampleName);
    // Ensure directory exists
    TestHelper.ensureDirectoryExists(outputDir);
    return outputDir;
  }

  static ensureDirectoryExists(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  static compareWithGitDiff(outputFile: string): string {
    let diffResult = '';
    try {
      diffResult = execSync(`git diff -- ${outputFile}`, { encoding: 'utf-8' });
    } catch (error) {
      if (error instanceof Error && 'stdout' in error) {
        diffResult = (error.stdout as Buffer).toString();
      } else {
        throw error;
      }
    }
    return diffResult;
  }

  //   static createEchoTool(root: any): Tool {
  //     const echoTool = new Tool(root, 'echo-inline', {});
  //     ToolConfig.basic(echoTool).withBaseCommand(['echo']).withArguments(['-n']);
  //     Input.string(echoTool, 'message').withDoc('The message to echo').makeOptional(true);
  //     Output.string(echoTool, 'echoed');

  //     return echoTool;
  //   }
}