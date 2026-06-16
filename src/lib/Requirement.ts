import * as cwl from 'cwl-ts-auto';
import { Construct } from './Construct';
import { ToolRequirementType } from './ToolRequirementType';


/** Namespace URI for cwltool CWL extensions (e.g. CUDARequirement). */
export const CWLTOOL_NAMESPACE_URI = 'http://commonwl.org/cwltool#';

export interface CudaRequirementProps {
  /**
   * Minimum CUDA version required, in X.Y format (e.g. "12.2").
   */
  readonly cudaVersionMin: string;
  /**
   * Minimum CUDA compute capability (e.g. "7.5"), or a list of accepted values.
   */
  readonly cudaComputeCapability?: string | string[];
  /**
   * Minimum number of GPU devices to request. Defaults to 1 when omitted.
   */
  readonly cudaDeviceCountMin?: number | string;
  /**
   * Maximum number of GPU devices to request.
   */
  readonly cudaDeviceCountMax?: number | string;
}

export interface RequirementProps {
  /**
   * Minimum reserved RAM in mebibytes (2**20).
   * Accepts a CWL expression string (e.g. `$(inputs.computed_memory)`) for
   * dynamic resource allocation.
   */
  readonly ramMin?: number | string;
  /**
   * Maximum reserved RAM in mebibytes (2**20)
   */
  readonly ramMax?: number | string;
  /**
   * Minimum reserved number of CPU cores.
   * Accepts a CWL expression string (e.g. `$(inputs.computed_cores)`) for
   * dynamic resource allocation.
   */
  readonly coresMin?: number | string;
  /**
   * Maximum reserved number of CPU cores
   */
  readonly coresMax?: number | string;
  /**
   * Minimum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20)
   */
  readonly tmpdirMin?: number | string;
  /**
   * Maximum reserved filesystem based storage for the designated temporary directory, in mebibytes (2**20)
   */
  readonly tmpdirMax?: number | string;
  /**
   * Minimum reserved filesystem based storage for the designated output directory, in mebibytes (2**20)
   */
  readonly outdirMin?: number | string;
  /**
   * Maximum reserved filesystem based storage for the designated output directory, in mebibytes (2**20)
   */
  readonly outdirMax?: number | string;
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

  /**
   * Require NVIDIA CUDA GPU acceleration for this process.
   *
   * Emits a `cwltool:CUDARequirement` extension understood by Toil/cwltool.
   * Pair with a CUDA-capable `DockerRequirement` image on the same tool.
   */
  public static cuda(scope: Construct, props: CudaRequirementProps): Requirement {
    const toolRequirement = new Requirement(scope, ToolRequirementType.CUDA_REQUIREMENT);
    toolRequirement._data = { ...props };
    return toolRequirement;
  }

  /**
   * Inject `$namespaces` into a serialized CWL document when cwltool extensions
   * are present. Recurses into embedded workflow step `run` documents.
   */
  public static enrichCwlDocument(doc: { [key: string]: any }): void {
    if (!doc || typeof doc !== 'object') {
      return;
    }

    if (Requirement.documentDeclaresCwltoolExtension(doc)) {
      doc.$namespaces = {
        ...(doc.$namespaces ?? {}),
        cwltool: CWLTOOL_NAMESPACE_URI,
      };
    }

    const steps = doc.steps;
    if (!Array.isArray(steps)) {
      return;
    }

    for (const step of steps) {
      const run = step?.run;
      if (run && typeof run === 'object') {
        Requirement.enrichCwlDocument(run);
      }
    }
  }

  private static documentDeclaresCwltoolExtension(doc: { [key: string]: any }): boolean {
    const requirements = Requirement.collectProcessRequirements(doc);
    return requirements.some(
      requirement => requirement?.class === ToolRequirementType.CUDA_REQUIREMENT,
    );
  }

  private static collectProcessRequirements(doc: { [key: string]: any }): { class?: string }[] {
    const requirements = doc.requirements;
    const hints = doc.hints;
    const collected: { class?: string }[] = [];

    if (Array.isArray(requirements)) {
      collected.push(...requirements);
    }
    if (Array.isArray(hints)) {
      collected.push(...hints);
    }

    return collected;
  }

  private static buildCudaRequirementRecord(
    props: CudaRequirementProps,
  ): { [key: string]: string | number | string[] } {
    const record: { [key: string]: string | number | string[] } = {
      class: ToolRequirementType.CUDA_REQUIREMENT,
      cudaVersionMin: props.cudaVersionMin,
    };

    if (props.cudaComputeCapability !== undefined) {
      record.cudaComputeCapability = props.cudaComputeCapability;
    }
    if (props.cudaDeviceCountMin !== undefined) {
      record.cudaDeviceCountMin = props.cudaDeviceCountMin;
    }
    if (props.cudaDeviceCountMax !== undefined) {
      record.cudaDeviceCountMax = props.cudaDeviceCountMax;
    }

    return record;
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
    const cwlObject = this._toCwlObject();
    if (typeof (cwlObject as { save?: () => { [key: string]: any } }).save === 'function') {
      return (cwlObject as { save: () => { [key: string]: any } }).save();
    }
    return cwlObject as { [key: string]: any };
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
    | cwl.DockerRequirement
    | { [key: string]: string | number | string[] } {

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
      case ToolRequirementType.CUDA_REQUIREMENT:
        return Requirement.buildCudaRequirementRecord(this._data as CudaRequirementProps);
      default:
        throw new Error(`Unknown requirement type ${this._requirementType}`);
    }
  }
}
