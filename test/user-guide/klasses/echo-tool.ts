import { Input, Output, Tool, ToolConfig, Workflow } from '../../../src/lib';

export class Echo extends Tool {
  public message: Input;
  public echoed: Output;

  constructor(scope: Workflow) {
    super(scope, 'echo', { metadata: {} });
    ToolConfig.basic(this).withBaseCommand(['echo']).withArguments(['-n']);
    this.message = Input.string(this, 'message').withDoc('The message to echo').makeOptional(true);
    this.echoed = Output.string(this, 'echoed');
  }
}
