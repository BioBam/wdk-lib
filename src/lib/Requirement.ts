import * as cwl from 'cwl-ts-auto';
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

  public static multipleInputFeature(scope: Construct): Requirement {
    return new Requirement(scope, ToolRequirementType.MULTIPLE_INPUT_FEATURE);
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

  /**
   *
   * @param entryName
   * @param entry
   * @returns
   * @deprecated Use addEntry instead
   */
  public addListing(entryName: string, entry: string): Requirement {
    const wde = { entryname: entryName, entry: entry, writable: true };
    if (!this._data.listing) {
      this._data.listing = [];
    }
    this._data.listing.push(wde);
    return this;
  }

  /**
   * Add an environment variable to the EnvVar requirement.
   * @param entryName
   * @param entry
   * @returns
   */
  public addEnvVar(entryName: string, entry: string): Requirement {
    if (this._requirementType !== ToolRequirementType.ENV_VAR) {
      throw new Error('Cannot add environment variable to a requirement that is not of type ENV_VAR');
    }
    this._data.envDef[entryName] = entry;
    return this;
  }


  /**
   * Add a listing entry to the initial work directory requirement.
   * @param entry a listing entry
   * @param writable allow the entry to be writable
   * @param entryName the name of the entry
   * @returns the Requirement object
   */
  public addEntry(entry: string, writable?: boolean, entryName?: string): Requirement {
    // Check the type of requirement and throw an error if it is not INITIAL_WORK_DIR
    if (this._requirementType !== ToolRequirementType.INITIAL_WORK_DIR) {
      throw new Error('Cannot add entry to a requirement that is not of type INITIAL_WORK_DIR');
    }
    // Define wde as a union type of either an object or a string
    let wde: { entryname: string | undefined; entry: string; writable: boolean | undefined } | string = {
      entryname: entryName,
      entry: entry,
      writable: writable,
    };

    // Initialize _data.listing if it is undefined
    if (!this._data.listing) {
      this._data.listing = [];
    }

    // If both entryname and writable are undefined, assign the entry directly as a string to wde
    if (wde.entryname === undefined && wde.writable === undefined) {
      wde = entry;
    }

    // Add wde to the listing array
    this._data.listing.push(wde);

    return this;
  }


  public toMap(): { [key: string]: any } {
    return this._toCwlObject().save();
  }

  /**
   * @internal
   * @returns
   */
  _toCwlObject(): cwl.SubworkflowFeatureRequirement
    | cwl.ScatterFeatureRequirement
    | cwl.MultipleInputFeatureRequirement
    | cwl.EnvVarRequirement
    | cwl.ResourceRequirement
    | cwl.InlineJavascriptRequirement
    | cwl.StepInputExpressionRequirement
    | cwl.InitialWorkDirRequirement
    | cwl.NetworkAccess
    | cwl.DockerRequirement {

    switch (this._requirementType) {
      case ToolRequirementType.SUBWORKFLOW_FEATURE:
        return new cwl.SubworkflowFeatureRequirement({});
      case ToolRequirementType.SCATTER_FEATURE:
        return new cwl.ScatterFeatureRequirement({});
      case ToolRequirementType.MULTIPLE_INPUT_FEATURE:
        return new cwl.MultipleInputFeatureRequirement({});
      case ToolRequirementType.ENV_VAR:
        return new cwl.EnvVarRequirement({
          envDef: this._data.envDef,
        });
      case ToolRequirementType.RESOURCE_REQUIREMENT:
        return new cwl.ResourceRequirement(this._data);
      case ToolRequirementType.INLINE_JAVASCRIPT:
        return new cwl.InlineJavascriptRequirement({});
      case ToolRequirementType.STEP_INPUT_EXPRESSION:
        return new cwl.StepInputExpressionRequirement({});
      case ToolRequirementType.INITIAL_WORK_DIR:
        return new cwl.InitialWorkDirRequirement({
          listing: this._data.listing,
        });
      case ToolRequirementType.NETWORK_ACCESS:
        return new cwl.NetworkAccess({
          networkAccess: this._data.networkAccess,
        });
      case ToolRequirementType.DOCKER:
        return new cwl.DockerRequirement({
          dockerPull: this._data.dockerPull,
        });
      default:
        throw new Error(`Unknown requirement type ${this._requirementType}`);
    }
  }
}
