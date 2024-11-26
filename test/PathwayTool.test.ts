import { PathwayLoadExpressionTool } from '../src/examples/PathwayExpressionTool';
import { PathwayWorkflow } from '../src/examples/PathwayWorkflow';
import { Construct } from '../src/lib/Construct';

describe('PathwayLoadExpressionTool YAML output', () => {
  it('should generate correct YAML and have no git differences', () => {
    PathwayLoadExpressionTool.prototype.toMap = function () {
      // Mock implementation of toMap(), should reflect actual logic.
      return {
        inputProject: this.inputProject ? this.inputProject.toMap() : null,
        outputProjectFileName: this.outputProjectFileName ? this.outputProjectFileName.toMap() : null,
        clearExpression: this.clearExpression ? this.clearExpression.toMap() : null,
        outputFullProject: this.outputFullProject ? this.outputFullProject.toMap() : null,
      };
    };

    // Create the root construct instance with null as its scope.
    const rootConstruct = new Construct(null as any, 'root');

    // Instantiate the PathwayLoadExpressionTool with the root construct.
    // const pathwayTool = new PathwayLoadExpressionTool(rootConstruct, 'unique-id');
    const pathwayWorkflow = new PathwayWorkflow(rootConstruct, 'workflow-id');

    // // Assuming the toMap method exists and functions properly.
    // // const aMap = pathwayTool.toMap();
    // const aMap = pathwayWorkflow.toMap();

    // // console.log(aMap);

    // // Convert to YAML
    // const yamlOutput = yaml.dump(aMap);

    // // Define output path
    // const outputDir = path.join(__dirname, '../testoutput');
    // const outputFile = path.join(outputDir, 'pathwayWorkflow.yaml');

    // // Ensure `testoutput` directory exists
    // if (!fs.existsSync(outputDir)) {
    //   fs.mkdirSync(outputDir);
    // }

    // // Write (or overwrite) the YAML content to the file
    // fs.writeFileSync(outputFile, yamlOutput, 'utf8');

    // // Compare with git diff
    // let diffResult: string;
    // try {
    //   diffResult = execSync(`git diff -- ${outputFile}`, { encoding: 'utf-8' });
    // } catch (error) {
    //   if (error instanceof Error && 'stdout' in error) {
    //     diffResult = (error.stdout as Buffer).toString();
    //   } else {
    //     throw error; // Re-throw if it's not the expected error type.
    //   }
    // }

    const workflowCwlMap = pathwayWorkflow._toCwlObject().save();
    expect(workflowCwlMap).toMatchSnapshot();

    // // Assert there are no differences
    // expect(diffResult).toBe('');
  });
});
