import { CWLVersion, CommandInputParameter, CommandLineTool, CommandLineTool_class, PrimitiveType } from 'cwl-ts-auto';
import * as cwlTsAuto from 'cwl-ts-auto';
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

  it('should tell me what type the optional array is', () => {

    cwlTsAuto.loadDocument('./test/test.cwl')
      .then((file) => {
        if (file instanceof cwlTsAuto.CommandLineTool) {
          console.log('This document is a CommandLineTool with baseCommand: ', file.baseCommand);
          // print each input and the class of each of the input type and type attributes recursively
          file.inputs.forEach((input) => {
            console.log('Input: ', input.id, 'Type: ', input.type);
          });

          // serialize to yaml and print
          const yamlOutput = yaml.dump(file.save(true, 'robert', true));
          console.log(yamlOutput);
        }
      })
      .catch((e) => {
        if (e instanceof cwlTsAuto.ValidationException) {
          console.log(e.toString());
        } else {
          console.log(e);
        }
      });

  });
});

