

export enum ToolRequirementType {
  INITIAL_WORK_DIR = 'InitialWorkDirRequirement',
  INLINE_JAVASCRIPT = 'InlineJavascriptRequirement',
  SUBWORKFLOW_FEATURE = 'SubworkflowFeatureRequirement',
  NETWORK_ACCESS = 'NetworkAccess',
  DOCKER = 'DockerRequirement',
  ENV_VAR = 'EnvVarRequirement',
  STEP_INPUT_EXPRESSION = 'StepInputExpressionRequirement'
}

