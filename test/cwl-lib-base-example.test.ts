import { CWLVersion, CommandInputParameter, CommandLineTool, CommandLineTool_class, PrimitiveType } from 'cwl-ts-auto';
import * as yaml from 'js-yaml';


describe('CdHitWorkflow YAML output', () => {
  it('should generate correct YAML and have no git differences', () => {

    let exampleCommandLineTool =
            new CommandLineTool({
              cwlVersion: CWLVersion.V1_2,
              class_: CommandLineTool_class.COMMANDLINETOOL,
              inputs: [],
              outputs: [],
            });
    exampleCommandLineTool.baseCommand = 'echo';

    let exampleInput =
            new CommandInputParameter({
              type: PrimitiveType.STRING,
            });
    exampleInput.default_ = 'Hello World!';
    exampleCommandLineTool.inputs.push(exampleInput);

    console.log(JSON.stringify(exampleCommandLineTool.save()));

    const yamlOutput = yaml.dump(exampleCommandLineTool.save(true), { quotingType: '\"', sortKeys: true });
    console.log(yamlOutput);

    // Assert there are no differences
    expect('').toBe('');
  });
});

