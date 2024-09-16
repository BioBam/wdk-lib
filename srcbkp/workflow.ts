import { Construct } from 'constructs';
import { Type } from './tool';


export interface BasicInputProps {
  readonly id: string;
  readonly type: Type;
  readonly optional?: boolean;
}

export class BasicInput extends Construct {
  constructor(scope: Construct, id: string, props: BasicInputProps) {
    super(scope, id);
  }
}

export class FileInput extends BasicInput {
  constructor(scope: Construct, id: string) {
    super(scope, id, { id: id, type: Type.FILE });
  }
}

export class StringInput extends BasicInput {
  constructor(scope: Construct, id: string) {
    super(scope, id, { id: id, type: Type.STRING });
  }
}

export class BooleanInput extends BasicInput {
  constructor(scope: Construct, id: string) {
    super(scope, id, { id: id, type: Type.BOOLEAN });
  }
}

export class BooleanInput extends BasicInput {
  constructor(scope: Construct, id: string) {
    super(scope, id, { id: id, type: Type.BOOLEAN });
  }
}


export class Workflow extends Construct {

  constructor(scope: Construct, id: string) {
    super(scope, id);


  }

}