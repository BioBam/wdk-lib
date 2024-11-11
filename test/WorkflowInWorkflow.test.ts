import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { Input, Workflow } from '../src/lib';
import { Constructs } from '../src/lib/Constructs';

describe('Workflow In Workflow YAML output', () => {
  it('should generate correct YAML and have no git differences', () => {

    // Create the root construct instance with null as its scope.
    const root = Constructs.rootWorkflow();

    const l1 = new Workflow(root, 'L1');
    const l2 = new Workflow(l1, 'L2');
    const l3 = new Workflow(l2, 'L3');
    Input.string(l3, 'l3Input');
    // l1.addStep(l2);
    // l2.addStep(l3);


    // Define output path
    const outputDir = path.join(__dirname, '../testoutput', 'workflow-in-workflow');

    // Ensure `testoutput` directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }

    const sFile = l1.serialize(outputDir);

    // Write (or overwrite) the YAML content to the file
    // fs.writeFileSync(outputFile, yamlOutput, 'utf8');

    // Compare with git diff
    let diffResult: string;
    try {
      diffResult = execSync(`git diff -- ${sFile.main}`, { encoding: 'utf-8' });
    } catch (error) {
      if (error instanceof Error && 'stdout' in error) {
        diffResult = (error.stdout as Buffer).toString();
      } else {
        throw error; // Re-throw if it's not the expected error type.
      }
    }

    // Assert there are no differences
    expect(diffResult).toBe('');
  });
});