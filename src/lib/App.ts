import * as fs from 'fs';
import * as path from 'path';
import { Construct } from './Construct';
import { RequirementProps } from './Requirement';
import { StepClass } from './ToolClass';
import { Workflow } from './Workflow';

/**
 * Configuration for the App.
 */
export interface AppProps {
  readonly outdir?: string;
  readonly defaultRegistry?: string;
  readonly defaultResources?: RequirementProps;
}

export interface SynthManifest {
  readonly version: string;
  readonly outdir: string;
  readonly workflows: WorkflowManifestEntry[];
}

export interface WorkflowManifestEntry {
  readonly id: string;
  readonly files: string[];
}

export class App extends Construct {

  private _outdir: string;
  private _defaultRegistry?: string;
  private _defaultResources?: RequirementProps;

  public constructor(props?: AppProps | string) {
    super('app');
    if (typeof props === 'string') {
      this._outdir = props;
    } else {
      this._outdir = props?.outdir ?? 'dist';
      this._defaultRegistry = props?.defaultRegistry;
      this._defaultResources = props?.defaultResources;
    }
  }

  /**
   * Validate the construct tree and synthesize all workflows to CWL files.
   *
   * Each workflow gets its own subdirectory under the output directory.
   * Returns a manifest describing all files written.
   */
  synth(): SynthManifest {
    const workflows = this._nodesOf(Workflow) as Workflow[];
    if (workflows.length === 0) {
      throw new Error('App has no workflows. Add at least one Workflow before calling synth().');
    }

    const errors = this.validate(workflows);
    if (errors.length > 0) {
      throw new Error(`Validation failed:\n${errors.map(e => `  - ${e}`).join('\n')}`);
    }

    const manifest: WorkflowManifestEntry[] = [];

    for (const workflow of workflows) {
      const workflowDir = path.join(this._outdir, workflow.id);
      fs.mkdirSync(workflowDir, { recursive: true });
      const files: string[] = [];

      for (const step of workflow.steps) {
        const synthFiles = step.serialize(workflowDir);
        files.push(synthFiles.main);
      }
      if (workflow.steps.length > 1 || workflow.inputs.length > 0 || workflow.outputs.length > 0) {
        const synthFiles = workflow.serialize(workflowDir);
        files.push(synthFiles.main);
      }
      manifest.push({ id: workflow.id, files });
    }

    const result: SynthManifest = {
      version: '1.0',
      outdir: this._outdir,
      workflows: manifest,
    };

    const manifestPath = path.join(this._outdir, 'manifest.json');
    fs.mkdirSync(this._outdir, { recursive: true });
    fs.writeFileSync(manifestPath, JSON.stringify(result, null, 2), 'utf8');

    return result;
  }

  private validate(workflows: Workflow[]): string[] {
    const errors: string[] = [];
    for (const workflow of workflows) {
      if (!workflow.id) {
        errors.push('Workflow is missing an id.');
      }
      for (const step of workflow.steps) {
        if (step._toCwlObject && typeof step._toCwlObject === 'function') {
          if ((step as any).stepClass === StepClass.COMMAND_LINE_TOOL) {
            if ((step as any).config?.baseCommand?.length === 0) {
              errors.push(`Tool '${step.id}' in workflow '${workflow.id}' has no baseCommand.`);
            }
          }
        }
      }
    }
    return errors;
  }

  public get outdir(): string {
    return this._outdir;
  }

  public get defaultRegistry(): string | undefined {
    return this._defaultRegistry;
  }

  public get defaultResources(): RequirementProps | undefined {
    return this._defaultResources;
  }

}