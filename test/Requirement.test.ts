import { Construct } from '../src/lib/Construct';
import { Constructs } from '../src/lib/Constructs';
import { Requirement } from '../src/lib/Requirement';
import { ToolRequirementType } from '../src/lib/ToolRequirementType';

describe('Requirement Class', () => {
  let scope: Construct;

  beforeEach(() => {
    scope = Constructs.createRoot('root'); // Assuming Construct has a default constructor
  });

  it('should create a subworkflow feature requirement', () => {
    const req = Requirement.subworkflowFeature(scope);
    expect(req.requirementType).toEqual(ToolRequirementType.SUBWORKFLOW_FEATURE);
  });

  it('should create an environment variable requirement with envDef', () => {
    const envDef = { key: 'value' };
    const req = Requirement.envVar(scope, envDef);
    expect(req.requirementType).toEqual(ToolRequirementType.ENV_VAR);
    expect(req.toMap().envDef).toEqual(envDef);
  });

  it('should create a resource requirement with specified props', () => {
    const props = {
      class: 'ResourceRequirement', // This is just for testing, not necessary in the Requirement.resource method
      ramMin: 512,
      ramMax: 1024,
      coresMin: 1,
      coresMax: 4,
      tmpdirMin: 10,
      tmpdirMax: 20,
      outdirMin: 30,
      outdirMax: 40,
    };
    const req = Requirement.resource(scope, props);
    expect(req.requirementType).toEqual(ToolRequirementType.RESOURCE_REQUIREMENT);
    expect(req.toMap()).toEqual(props);
  });

  it('should create an inline JavaScript requirement', () => {
    const req = Requirement.inlineJavascript(scope);
    expect(req.requirementType).toEqual(ToolRequirementType.INLINE_JAVASCRIPT);
  });

  it('should create a step input expression requirement', () => {
    const req = Requirement.stepInputExpression(scope);
    expect(req.requirementType).toEqual(ToolRequirementType.STEP_INPUT_EXPRESSION);
  });

  it('should create an initial work directory requirement with empty listing', () => {
    const req = Requirement.initialWorkDir(scope);
    expect(req.requirementType).toEqual(ToolRequirementType.INITIAL_WORK_DIR);
    expect(req.toMap().listing).toEqual([]);
  });

  it('should create a network access requirement with networkAccess set to true', () => {
    const req = Requirement.networkAccess(scope);
    expect(req.requirementType).toEqual(ToolRequirementType.NETWORK_ACCESS);
    expect(req.toMap().networkAccess).toBe(true);
  });

  it('should create a docker requirement with specified docker image', () => {
    const dockerImage = 'my-docker-image:latest';
    const req = Requirement.docker(scope, dockerImage);
    expect(req.requirementType).toEqual(ToolRequirementType.DOCKER);
    expect(req.toMap().dockerPull).toEqual(dockerImage);
  });

  it('should add a listing entry to the initial work directory requirement', () => {
    const req = Requirement.initialWorkDir(scope);
    req.addListing('entryName', 'entryValue');
    expect(req.toMap().listing).toEqual([{ entryname: 'entryName', entry: 'entryValue', writable: true }]);
  });

  // New test for addEntry method
  it('should add an entry to the initial work directory requirement', () => {
    const req = Requirement.initialWorkDir(scope);
    req.addEntry('entryContent', true, 'entryName');

    expect(req.toMap().listing).toEqual([
      {
        entryname: 'entryName',
        entry: 'entryContent',
        writable: true,
      },
    ]);
  });

  it('should add an entry as a string when no entryName and writable are provided', () => {
    const req = Requirement.initialWorkDir(scope);
    req.addEntry('entryContent');

    expect(req.toMap().listing).toEqual(['entryContent']);
  });

  it('should add an environment variable using addEnvVar', () => {
    const envVarRequirement = Requirement.envVar(scope, {});

    const key = 'NODE_ENV';
    const value = 'production';

    envVarRequirement.addEnvVar(key, value);

    expect(envVarRequirement.toMap().envDef[key]).toBe(value);
  });
});
