export class Construct {

  public static createRoot(id: string): Construct {
    return new Construct(id);
  }

  private readonly _scope: Construct | undefined;
  private _id: string;
  private _nodes: Construct[] = [];

  // Overloaded constructors
  constructor(id: string);
  constructor(scope: Construct, id: string);
  constructor(scopeOrId: Construct | string, id?: string) {
    if (typeof scopeOrId === 'string') {
      // When only the `id` is provided, set `scope` as undefined
      this._scope = undefined;
      this._id = scopeOrId;
    } else {
      // When both `scope` and `id` are provided
      this._scope = scopeOrId;
      this._id = id!;
    }
    if (this._scope !== undefined && this._scope !== null) {
      this._scope.addNode(this);
    }
  }

  public addNode(node: Construct) {
    this._nodes.push(node);
  }

  public nodesOf(type: any): Construct[] {
    return this._nodes.filter(node => node instanceof type);
  }

  public get scope(): Construct | undefined {
    return this._scope;
  }

  public get id() {
    return this._id;
  }

  public set id(newID: string) {
    this._id = newID;
  }

}