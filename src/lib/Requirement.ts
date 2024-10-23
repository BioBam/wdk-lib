import { Construct } from './Construct';
import { ToolRequirementType } from './ToolRequirementType';


export interface RequirementProps {
  /**
   * Minimum reserved RAM in mebibytes (2**20)
   */
  readonly ramMin?: number;
  /**
   * Maximum reserved RAM in mebibytes (2**20)
   */
  readonly ramMax?: number;
  /**
   * Minimum reserved number of CPU cores
   */
  readonly coresMin?: number;
  /**
   * Maximum reserved number of CPU cores
   */
  readonly coresMax?: number;
  /**
   * Minimum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20)
   */
  readonly tmpdirMin?: number;
  /**
   * Maximum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20)
   */
  readonly tmpdirMax?: number;
  /**
   * Minimum reserved filesystem based storage for the designated output directory, in mebibytes (2**20)
   */
  readonly outdirMin?: number;
  /**
   * Maximum reserved filesystem based storage for the designated output directory, in mebibytes (2**20)
   */
  readonly outdirMax?: number;
}

export class Requirement extends Construct {

  // Static factory methods
  public static subworkflowFeature(scope: Construct): Requirement {
    return new Requirement(scope, ToolRequirementType.SUBWORKFLOW_FEATURE);
  }

  public static scatterFeature(scope: Construct): Requirement {
    return new Requirement(scope, ToolRequirementType.SCATTER_FEATURE);
  }

  public static envVar(scope: Construct, envDef: { [key: string]: string }): Requirement {
    const toolRequirement = new Requirement(scope, ToolRequirementType.ENV_VAR);
    toolRequirement._data.envDef = envDef;
    return toolRequirement;
  }


  public static resource(scope: Construct, props: RequirementProps): Requirement {
    const toolRequirement = new Requirement(scope, ToolRequirementType.RESOURCE_REQUIREMENT);
    toolRequirement._data = props;
    return toolRequirement;
  }

  public static inlineJavascript(scope: Construct): Requirement {
    return new Requirement(scope, ToolRequirementType.INLINE_JAVASCRIPT);
  }

  public static stepInputExpression(scope: Construct): Requirement {
    return new Requirement(scope, ToolRequirementType.STEP_INPUT_EXPRESSION);
  }

  public static initialWorkDir(scope: Construct): Requirement {
    const toolRequirement = new Requirement(scope, ToolRequirementType.INITIAL_WORK_DIR);
    toolRequirement._data.listing = [];
    return toolRequirement;
  }

  public static networkAccess(scope: Construct): Requirement {
    const toolRequirement = new Requirement(scope, ToolRequirementType.NETWORK_ACCESS);
    toolRequirement._data.networkAccess = true;
    return toolRequirement;
  }

  public static docker(scope: Construct, dockerImage: string): Requirement {
    const toolRequirement = new Requirement(scope, ToolRequirementType.DOCKER);
    toolRequirement._data.dockerPull = dockerImage;
    return toolRequirement;
  }

  private _requirementType: string;
  private _data: { [key: string]: any } = {};

  private constructor(scope: Construct, requirementType: string) {
    super(scope, '');
    this._requirementType = requirementType;
  }

  // Instance methods
  public get requirementType(): string {
    return this._requirementType;
  }

  public addListing(entryName: string, entry: string): Requirement {
    const wde = { entryname: entryName, entry: entry, writable: true };
    if (!this._data.listing) {
      this._data.listing = [];
    }
    this._data.listing.push(wde);
    return this;
  }

  public toMap(): { [key: string]: any } {
    return this._data;
  }
}
