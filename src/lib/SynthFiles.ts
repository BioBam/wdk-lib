
export class SynthFiles {

  public static createWithMain(cwlFile: string): SynthFiles {
    return new SynthFiles(cwlFile);
  }

  private _main: string;
  private attached: string[];

  private constructor(cwlFile: string) {
    this._main = cwlFile;
    this.attached = [];
  }

  public addAttached(file: string): SynthFiles {
    this.attached.push(file);
    return this;
  }

  public withMain(main: string): SynthFiles {
    this._main = main;
    return this;
  }

  public get main(): string {
    return this._main;
  }

  public addAsAttachment(stepSynthInfo: SynthFiles): void {
    this.attached.push(stepSynthInfo.main);
    this.attached.push(...stepSynthInfo.attached);
  }

  public get attachedFiles(): string[] {
    return this.attached;
  }
}