import { Construct } from './Construct';
import { ILinkable } from './ILinkable';
import { Type } from './Type';

export enum PickValueMethod {
  /**
   * For the first level of a list input, pick the first non-null element. The result is a scalar. It is an error if there is no non-null element.
   * Examples:
      - [null, x, null, y] -> x
      - [null, [null], null, y] -> [null]
      - [null, null, null] -> Runtime Error

      Intended use case: If-else pattern where the value comes either from a conditional step or from a default or fallback value. The conditional step(s) should be placed first in the list.
   */
  FIRST_NON_NULL = 'first_non_null',
  /**
   * For the first level of a list input, pick the single non-null element. The result is a scalar. It is an error if there is more than one non-null element.
   * Examples:
    - [null, x, null] -> x
    - [null, x, null, y] -> Runtime Error
    - [null, [null], null] -> [null]
    - [null, null, null] -> Runtime Error

    Intended use case: Switch type patterns where developer considers more than one active code path as a workflow error (possibly indicating an error in writing when condition expressions).
   */
  THE_ONLY_NON_NULL = 'the_only_non_null',
  /**
   * For the first level of a list input, pick all non-null values. The result is a list, which may be empty.
   * Examples:
    - [null, x, null] -> [x]
    - [x, null, y] -> [x, y]
    - [null, [x], [null]] -> [[x], [null]]
    - [null, null, null] -> []

    Intended use case: It is valid to have more than one source, but sources are conditional, so null sources (from skipped steps) should be filtered out.
   */
  ALL_NON_NULL = 'all_non_null',
}

export abstract class LinkableConstruct extends Construct implements ILinkable {
  private _links: ILinkable[] = [];
  private referencedIn: ILinkable[] = [];
  private _pickValueMethod: PickValueMethod | undefined;

  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  abstract get type(): Type;

  public get idAsReference(): string {
    return this.id;
    // throw new Error('Method not implemented.');
  }

  public linkTo(linkInput: ILinkable): this {
    if (linkInput.type != this.type) {
      throw new Error('Link type mismatch between ' + this.id + '(' + this.type + ') and ' + linkInput.id + '(' + linkInput.type + ')');
    }
    this._links.push(linkInput);
    linkInput.addReferencedIn(this);
    return this;
  }

  public pickValue(method: PickValueMethod): this {
    this._pickValueMethod = method;
    return this;
  }

  public get pickValueMethod(): PickValueMethod | undefined {
    return this._pickValueMethod;
  }

  get links(): ILinkable[] {
    return this._links;
  }

  public get linked(): boolean {
    return this._links.length > 0;
  }

  public get multiLinked(): boolean {
    return this._links.length > 1;
  }

  public addReferencedIn(link: ILinkable): void {
    this.referencedIn.push(link);
  }

  public get referenced(): boolean {
    return this.referencedIn.length > 0;
  }
}
