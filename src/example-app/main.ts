import * as path from 'path';
import { App, BashTool, Workflow } from '../lib';


class MyWorkflow extends Workflow {
  constructor(scope: App, name: string) {
    super(scope, name);
    new BashTool(this, 'BashTool', {
      inlineScriptPath: path.join(__dirname, 'scripts', 'bash-script.sh'),
    });
  }
}

const app = new App();
new MyWorkflow(app, 'wdk-welcome');
app.synth();