import * as fs from 'fs';
import * as path from 'path';
import { Construct } from './Construct';
import { Workflow } from './Workflow';

export class App extends Construct {

  private _outdir: string;

  /**
   * @param outdir Directory where CWL files are written. Defaults to `dist/`.
   */
  public constructor(outdir?: string) {
    super('app');
    this._outdir = outdir ?? 'dist';
  }

  /**
   * Synthesize all workflows in this app to CWL files.
   *
   * Each workflow gets its own subdirectory under the output directory.
   * The workflow itself and every step it contains are serialized as
   * individual `.cwl` files.
   */
  synth(): void {
    const workflows = this._nodesOf(Workflow) as Workflow[];
    if (workflows.length === 0) {
      throw new Error('App has no workflows. Add at least one Workflow before calling synth().');
    }
    for (const workflow of workflows) {
      const workflowDir = path.join(this._outdir, workflow.id);
      fs.mkdirSync(workflowDir, { recursive: true });
      for (const step of workflow.steps) {
        step.serialize(workflowDir);
      }
      if (workflow.steps.length > 1 || workflow.inputs.length > 0 || workflow.outputs.length > 0) {
        workflow.serialize(workflowDir);
      }
    }
  }

  public get outdir(): string {
    return this._outdir;
  }

}