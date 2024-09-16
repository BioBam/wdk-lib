import * as path from 'path';
import { Input } from '../Input';
import { BashTool, IBashToolProps } from '../l2';
import { IToolProps } from '../Tool';

export class CheckFileNameTool extends BashTool {

  public f1: Input;
  public checkname: Input;

  constructor(scope: any, id: string, props?: IToolProps) {
    // Clone props to ensure immutability if necessary
    // and add `bashScriptPath` property and `fileName` metadata
    const combinedProps: IBashToolProps = {
      ...props,
      metadata: {
        ...props?.metadata,
        fileName: 'check.cwl',
      },
      inlineScriptPath: path.join(__dirname, 'scripts', 'script-check.sh'),
    };

    super(scope, id, combinedProps);

    this.f1 = Input.file(this, 'p');
    this.checkname = Input.string(this, 'checkname');
  }
}
