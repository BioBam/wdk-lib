

export enum ToolRequirementType {
  INITIAL_WORK_DIR = 'InitialWorkDirRequirement',
  INLINE_JAVASCRIPT = 'InlineJavascriptRequirement',
  SUBWORKFLOW_FEATURE = 'SubworkflowFeatureRequirement',
  NETWORK_ACCESS = 'NetworkAccess',
  DOCKER = 'DockerRequirement',
  ENV_VAR = 'EnvVarRequirement',
  STEP_INPUT_EXPRESSION = 'StepInputExpressionRequirement',
  RESOURCE_REQUIREMENT = 'ResourceRequirement',
  SCATTER_FEATURE = 'ScatterFeatureRequirement',
  MULTIPLE_INPUT_FEATURE = 'MultipleInputFeatureRequirement',
  CUDA_REQUIREMENT = 'cwltool:CUDARequirement',
}

