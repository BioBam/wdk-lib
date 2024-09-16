import { Construct } from 'constructs';
import { BooleanInput, FileInput, FileOutput, StringInput, Tool, ToolProps } from './tool';

export class PathwayLoadExpressionTool extends Tool {

  constructor(scope: Construct, id: string, props: ToolProps) {
    super(scope, id, props);

    new FileInput(this, 'input_project', {
      prefix: '-inputPathwayProject',
    });
    new FileInput(this, 'input_expression', {
      prefix: '-inputExpressionProject',
    });
    new StringInput(this, 'output_project', {
      prefix: '-outputPathwayProject',
    });
    new BooleanInput(this, 'clear_expression', {
      prefix: '-clearExpression',
      default: false,
    });

    new FileOutput(this, 'output_full_project', {
      glob: '$(inputs.output_project)',
    });

  }
}
