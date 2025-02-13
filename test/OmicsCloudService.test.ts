import { Input, Output, Workflow } from '../src/lib';
import { Constructs } from '../src/lib/Constructs';
import { Service } from '../src/lib/l2/OmicsCloudService';


class TrimmomaticService extends Service {
  constructor(scope: Workflow) {
    super(scope, 'trimmomatic', {
      label: 'Trimmomatic',
      serviceId: 'trimmomatic',
      serviceVersion: '1',
      assignedCores: 1,
      assignedMemoryMb: 1000,
      assignedTempDirMb: 1000,
    });
    Input.file(this.parameters, 'fastaFile').withPrefix('--fastaFile');
    Output.file(this.service, 'trimmedFasta').withGlob('*.trimmed.fasta');
    this.initialize();
  }
}

describe('Simple Workflow cwl export test', () => {

  it('should generate valid YAML and match snapshot', () => {

    // Create the root construct instance with null as its scope.
    const root = Constructs.rootWorkflow();
    const tsw = new TrimmomaticService(root);
    console.log(JSON.stringify(tsw._toCwlObject().save()));
    expect(tsw.toMap()).toMatchSnapshot();
  });
});
