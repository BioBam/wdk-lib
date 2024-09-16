import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { CdHitWorkflow } from '../src/examples/CdHitWorkflowShort2'; // Adjust this import as needed
import { Construct } from '../src/lib/Construct';

describe('CdHitWorkflow YAML output', () => {
  it('should generate correct YAML and have no git differences', () => {
    // // Ensure that Workflow has a toMap() method.
    // CdHitWorkflow.prototype.toMap = function() {
    //   // Mock implementation of toMap(), should reflect actual logic.
    //   return {
    //     inputFasta: this.inputFasta ? this.inputFasta.toMap() : null,
    //     lengthDifferenceCutoff: this.lengthDifferenceCutoff ? this.lengthDifferenceCutoff.toMap() : null,
    //     bandWidth: this.bandWidth ? this.bandWidth.toMap() : null,
    //     sequenceIdentityType: this.sequenceIdentityType ? this.sequenceIdentityType.toMap() : null,
    //     sequenceIdentity: this.sequenceIdentity ? this.sequenceIdentity.toMap() : null,
    //     maxUnmatchedPercentageLonger: this.maxUnmatchedPercentageLonger ? this.maxUnmatchedPercentageLonger.toMap() : null,
    //     accurateMode: this.accurateMode ? this.accurateMode.toMap() : null,
    //     alignmentCoverageShorter: this.alignmentCoverageShorter ? this.alignmentCoverageShorter.toMap() : null,
    //     maxUnmatchedPercentageShorter: this.maxUnmatchedPercentageShorter ? this.maxUnmatchedPercentageShorter.toMap() : null,
    //     alignmentPositionConstrains: this.alignmentPositionConstrains ? this.alignmentPositionConstrains.toMap() : null,
    //     wordLength: this.wordLength ? this.wordLength.toMap() : null,
    //     strand: this.strand ? this.strand.toMap() : null,
    //     lengthCutoff: this.lengthCutoff ? this.lengthCutoff.toMap() : null,
    //     alignmentCoverageLonger: this.alignmentCoverageLonger ? this.alignmentCoverageLonger.toMap() : null,
    //   };
    // };

    // Create the root construct instance with null as its scope.
    const rootConstruct = new Construct(null as any, 'root');

    // Instantiate the CdHitWorkflow with the root construct.
    const cdHitWorkflow = new CdHitWorkflow(rootConstruct, 'cdhit-workflow-id');

    // Assuming the toMap method exists and functions properly.
    // const workflowMap = cdHitWorkflow.toMap();
    // console.log(workflowMap);

    // Convert to YAML
    // const yamlOutput = yaml.dump(workflowMap);

    // Define output path
    const outputDir = path.join(__dirname, '../testoutput');

    // const outputFile = path.join(outputDir, 'cdHitWorkflow.yaml');

    // Ensure `testoutput` directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }
    const sFile = cdHitWorkflow.serialize(outputDir);

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