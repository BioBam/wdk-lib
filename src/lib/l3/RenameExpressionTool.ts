import { ExpressionTool } from '../ExpressionTool';
import { Input } from '../Input';
import { Output } from '../Output';
import { IToolProps } from '../Tool';
import { Workflow } from '../Workflow';

export interface IRenameExpressionToolProps extends IToolProps {
  inFilePropId?: string;
  newNamePropId?: string;
  outFilePropId?: string;
}

export class RenameExpressionTool extends ExpressionTool {
  public out: Output;
  public f1: Input;
  public newname: Input;

  constructor(scope: Workflow, id: string, props?: IRenameExpressionToolProps) {
    super(scope, id);

    // Requirements
    // Requirement.inlineJavascript(this);

    // Inputs
    this.f1 = Input.file(this, props?.inFilePropId || 'f1');
    this.newname = Input.string(this, props?.newNamePropId || 'newname');

    // Outputs
    this.out = Output.file(this, props?.outFilePropId || 'out');

    // Setting the expression for generating parameters JSON
    const expression = `\${
inputs.${this.f1.id}.basename = inputs.${this.newname.id};
return {"${this.out.id}": inputs.${this.f1.id}};
}
`;
    this.withExpression(expression);
  }
}