import { Construct } from 'constructs';
import { FileInput, FileOutput, Tool, ToolProps } from './tool';

export class PathwayLoadSequencesTool extends Tool {

  constructor(scope: Construct, id: string, props: ToolProps) {
    super(scope, id, props);

    new FileInput(this, 'input_file', {
      prefix: '-inputFile',
      position: 1,
    });
    new FileInput(this, 'output_project', {
      prefix: '-outputProject',
      position: 2,
    });

    new FileOutput(this, 'loaded_project', {
      glob: '$(inputs.output_project)',
    });

  }
}
