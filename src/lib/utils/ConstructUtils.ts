import { Construct } from '../Construct';
import { Workflow } from '../Workflow';

export class ConstructUtils {

  // Utility to create a root Workflow and use in tests
  static rootWorkflow(): Workflow {
    return new Construct(null as any, 'root') as Workflow;
  }

}