export class Construct {

  private readonly _scope: Construct | undefined;
  private _id: string;
  private _nodes: Construct[] = [];
  private _metadata: { [key: string]: any } = {};

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
      this._scope._addNode(this);
    }
  }

  /**
   * Add a node to this construct
   * @internal
   * @param node
   */
  public _addNode(node: Construct) {
    this._nodes.push(node);
  }

  /**
   * Find all nodes of a certain type
   * @internal
   * @param type
   * @returns
   */
  public _nodesOf(type: any): Construct[] {
    return this._nodes.filter(node => node instanceof type);
  }

  /**
   * Find the first node of a certain type
   * @internal
   * @param type
   * @returns
   */
  public _nodeOf(type: any): Construct | undefined {
    return this._nodes.filter(node => node instanceof type)[0];
  }

  /**
   * Return a direct child by id, or undefined
   * @internal
   * @param id Identifier of direct child
   * @returns the child if found, or undefined
   */
  public _tryFindChild(id: string): Construct | undefined {
    return this._nodes.filter(node => node.id == id)[0];
  }

  /**
   * The scope in which this construct is defined.
   */
  public get scope(): Construct | undefined {
    return this._scope;
  }

  /**
   * Unique identifier for the construct in it's scope.
   */
  public get id() {
    return this._id;
  }

  /**
   * set or update the id of this construct
   */
  public set id(newID: string) {
    this._id = newID;
  }

  /**
   * Add metadata to this construct
   * @param key The key of the metadata
   * @param value The value of the metadata
   */
  public addMetadata(key: string, value: any): void {
    this._metadata[key] = value;
  }

  /**
   * Get metadata for this construct
   * @returns An object containing all metadata entries
   */
  public get metadata(): { [key: string]: any } {
    return this._metadata;
  }

}