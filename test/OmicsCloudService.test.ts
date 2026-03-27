import * as cwl from 'cwl-ts-auto';
import { Input, Output, Workflow } from '../src/lib';
import { Constructs } from '../src/lib/Constructs';
import { CloudService } from '../src/lib/l2/CloudService';


class TrimmomaticService extends CloudService {
  constructor(scope: Workflow) {
    super(scope, 'trimmomatic', {
      label: 'Trimmomatic',
      serviceId: 'trimmomatic',
      serviceVersion: '1',
      containerRepository: 'example-registry.com',
      assignedCores: 1,
      assignedMemoryMb: 1000,
      assignedTempDirMb: 1000,
    });
    Input.file(this.parameters, 'fastaFile').withPrefix('--fastaFile');
    Output.file(this.service, 'trimmedFasta').withGlob('*.trimmed.fasta');
    this.initialize();
  }
}

class EMapperService extends CloudService {
  constructor(scope: Workflow) {
    super(scope, 'emapper', {
      label: 'Eggnog Mapper',
      serviceId: 'emapper',
      serviceVersion: '1',
      containerRepository: 'example-registry.com',
      assignedCores: 32,
      assignedMemoryMb: 62500,
      assignedTempDirMb: 10000,
      mountPoint: 'remote_eggnog_mapper',
      serviceDatabasePath: '/var/lib/toil/images/eggnog-mapper/20190503/',
    });
    Input.file(this.parameters, 'sequences').withPrefix('--sequences');
    Output.file(this.service, 'annotations').withGlob('*.annotations');
    this.initialize();
  }
}

describe('Simple Workflow cwl export test', () => {

  it('should generate valid YAML and match snapshot', () => {

    // Create the root construct instance with null as its scope.
    const root = Constructs.rootWorkflow();
    const tsw = new TrimmomaticService(root);
    // console.log(JSON.stringify(tsw._toCwlObject().save()));
    expect(tsw.toMap()).toMatchSnapshot();
  });

  it('should have read-only mounted path in initial work dir requirement', () => {
    const root = Constructs.rootWorkflow();
    const tsw = new EMapperService(root);

    // Find the InitialWorkDir requirement
    const requirements = tsw.service.requirements;
    const initialWorkDirReq = requirements.find(req =>
      req.requirementType === 'InitialWorkDirRequirement',
    );

    expect(initialWorkDirReq).toBeDefined();

    // Get the CWL object and verify the listing
    const cwlObject = initialWorkDirReq!._toCwlObject();
    expect(cwlObject).toBeInstanceOf(cwl.InitialWorkDirRequirement);

    const initialWorkDir = cwlObject as cwl.InitialWorkDirRequirement;
    expect(initialWorkDir.listing).toBeDefined();

    const listing = initialWorkDir.listing as Array<{ entryname?: string; entry: string; writable?: boolean }>;

    // Find the entry with the mounted path
    const mountedEntry = listing.find(entry =>
      typeof entry === 'object' &&
      'entryname' in entry &&
      'writable' in entry,
    );

    expect(mountedEntry).toBeDefined();
    expect(mountedEntry).toHaveProperty('writable', false);
  });
});
