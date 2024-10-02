import { Construct } from './Construct';
import { IMappable } from './IMappable';
import { Input } from './Input';
import { LinkableConstruct } from './LinkableConstruct';
import { Type } from './Type';

export class Output extends LinkableConstruct implements IMappable {

  static fromStepOutput(scope: Construct, linkedOutput: Output): Output {
    const newOutput = new Output(scope, linkedOutput.id, linkedOutput.type);
    newOutput.linkTo(linkedOutput);
    return newOutput;
  }

  // Static factory methods
  static file(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.FILE);
    return output;
  }

  static string(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.STRING);
    return output;
  }

  static bool(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.BOOLEAN);
    return output;
  }

  static integer(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.INT);
    return output;
  }

  static stringArray(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.STRING_ARRAY);
    return output;
  }

  static fileArray(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.FILE_ARRAY);
    return output;
  }

  static float(scope: Construct, id: string): Output {
    const output = new Output(scope, id, Type.FLOAT);
    return output;
  }

  /**
     * @internal
     */
  protected _type: Type;


  private _glob: string | null = null;


  constructor(scope: Construct, id: string, type: Type) {
    super(scope, id);
    this._type = type;
  }

  as(id: string): Output {
    this.id = id;
    return this;
  }

  // Instance methods
  get type(): Type {
    return this._type;
  }

  override get idAsReference(): string {
    if (this.scope === undefined) {
      throw new Error('Cannot get reference for root construct');
    }
    return `${this.scope.id}/${this.id}`;
  }

  toMap(): { [key: string]: any } {
    return {
      type: this.type.toString(),
    };
  }


  // Instance methods
  withGlob(glob: string): this {
    this._glob = glob;
    return this;
  }

  get yamlMap(): { [key: string]: any } {
    const map: { [key: string]: any } = {
      type: this.type.toString(),
    };

    if (this._glob !== null) {
      map.outputBinding = {
        glob: this._glob,
      };
    }

    return map;
  }

  globFromInputString(inputString: Input): this {
    return this.withGlob(`\$(inputs.${inputString.id})`);
  }

}
