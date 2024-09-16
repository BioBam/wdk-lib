'use strict';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';
import { BashTool, CheckFileNameTool, FileUtils, Input, RenameExpressionTool, Requirement, Workflow } from '../src/lib';
import { ConstructUtils } from '../src/lib/utils';


// Function to get all files recursively from a directory
const getFilesRecursively = (dir: string): string[] => {
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  list.forEach((file: string) => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      /* Recurse into subdirectory */
      results = results.concat(getFilesRecursively(file));
    } else {
      /* Is a file */
      results.push(file);
    }
  });
  return results;
};

const printMap = (toolMap: any, pathToDirectory: string, fileName: string) => {
  const yamlOutput = yaml.dump(toolMap, { quotingType: '\"' });
  const outputFile = path.join(pathToDirectory, fileName);
  FileUtils.writeFileContent(outputFile, yamlOutput);
};

// Path to the script-check.sh.txt file
const scriptCheckPath = path.join(__dirname, 'script-check.sh');


// Utility function to create the staging-basename workflow components
const createStagingBasename = (destDirectory: string) => {
  const checkTool = new BashTool(ConstructUtils.rootWorkflow(), 'check', { inlineScriptPath: scriptCheckPath });
  Input.file(checkTool, 'p');
  Input.string(checkTool, 'checkname');
  const toolMap = checkTool.toMap();
  printMap(toolMap, destDirectory, 'check.cwl');
};

const createRename = (destDirectory: string) => {
  const renameTool = new RenameExpressionTool(ConstructUtils.rootWorkflow(), 'check');
  const toolMap = renameTool.toMap();
  printMap(toolMap, destDirectory, 'rename.cwl');
};

const createWfRen = (destDirectory: string) => {
  const wfRen = new Workflow(ConstructUtils.rootWorkflow(), 'wf_ren', Workflow.basicProps());
  Requirement.stepInputExpression(wfRen);
  Requirement.inlineJavascript(wfRen);
  const renameTool = new RenameExpressionTool(wfRen, 'rename');
  Input.fromStepInput(wfRen, renameTool.f1).withDefaultValue('whale.txt');
  const newname = Input.fromStepInput(wfRen, renameTool.newname).withDefaultValue('badger.txt');
  const checkTool = new CheckFileNameTool(wfRen, 'echo');
  checkTool.f1.linkTo(renameTool.out);
  checkTool.checkname.linkTo(newname);
  const toolMap = wfRen.toMap();
  printMap(toolMap, destDirectory, 'wf_ren.cwl');
};


// Test case to compare output files with gold standard files
describe('Output File Comparison with Test Set', () => {
  const goldStandardDir = path.join(__dirname, '../cwl-tests/staging-basename/');
  const outputDir = path.join(__dirname, '../testoutput/staging-basename/');
  // Ensure `outputDir` directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Create the output to compare.
  createStagingBasename(outputDir);
  createRename(outputDir);
  createWfRen(outputDir);
  const goldStandardFiles = getFilesRecursively(goldStandardDir);

  goldStandardFiles.forEach((goldFile) => {
    const relativePath = path.relative(goldStandardDir, goldFile);
    const outputFile = path.join(outputDir, relativePath);

    test(`Comparing ${relativePath}`, () => {
      const goldContent = FileUtils.readFileContent(goldFile);
      const outputContent = FileUtils.readFileContent(outputFile);

      expect(outputContent).toBe(goldContent);
    });
  });
});