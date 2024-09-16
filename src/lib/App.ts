import { Construct } from './Construct';

export class App extends Construct {
  public constructor() {
    super('app');
  }

  synth() {
    throw new Error('Method not implemented.');
  }


}