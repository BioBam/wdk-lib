import { CdHitWorkflow } from '../src/examples/CdHitWorkflowShort2'; // Adjust this import as needed
import { Construct } from '../src/lib/Construct';

describe('CdHitWorkflow YAML output', () => {
  it('should generate correct YAML and have no git differences', () => {

    // Create the root construct instance with null as its scope.
    const rootConstruct = new Construct(null as any, 'root');

    // Instantiate the CdHitWorkflow with the root construct.

    const cdHitWorkflow = new CdHitWorkflow(rootConstruct, 'cdhit-workflow-id');

    expect(cdHitWorkflow.toMap()).toMatchSnapshot();

    // // Define output path
    // const outputDir = path.join(__dirname, '../testoutput');

    // // const outputFile = path.join(outputDir, 'cdHitWorkflow.yaml');

    // // Ensure `testoutput` directory exists
    // if (!fs.existsSync(outputDir)) {
    //   fs.mkdirSync(outputDir);
    // }
    // const sFile = cdHitWorkflow.serialize(outputDir);

    // // Write (or overwrite) the YAML content to the file
    // // fs.writeFileSync(outputFile, yamlOutput, 'utf8');

    // // Compare with git diff
    // let diffResult: string;
    // try {
    //   diffResult = execSync(`git diff -- ${sFile.main}`, { encoding: 'utf-8' });
    // } catch (error) {
    //   if (error instanceof Error && 'stdout' in error) {
    //     diffResult = (error.stdout as Buffer).toString();
    //   } else {
    //     throw error; // Re-throw if it's not the expected error type.
    //   }
    // }

    // // Assert there are no differences
    // expect(diffResult).toBe('');
  });
});