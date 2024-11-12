import { Construct } from './Construct';
import { Workflow } from './Workflow';

/**
 * A utility class for Constructs.
 */
export class Constructs {

  /**
     * Create a construct that does not need to extend another construct.
     *
     * @param id Identifier for the construct
     * @returns a root construct
     */
  public static createRoot(id: string): Construct {
    return new Construct(id);
  }

  /**
   * Utility to create a root Workflow with name to use in tests
   * @returns a root Workflow
   */
  static rootWorkflowWithName(name: string): Workflow {
    let w = new Construct(null as any, 'root') as Workflow;
    return new Workflow(w, name);
  }

  /**
   * Utility to create a root Workflow and use in tests
   * @returns a root Workflow
   */
  static rootWorkflow(): Workflow {
    return new Construct(null as any, 'root') as Workflow;
  }

  private constructor() { } // Prevent instantiation

}