import { PickValueMethod } from './LinkableConstruct';
import { Type } from './Type';

export interface ILinkable {

  /**
   * Access the identified of this construct.
   * @returns the identifier of the construct
   */
  get id(): string;
  set id(newID: string);

  get type(): Type;

  get idAsReference(): string;

  /**
   * Link this linkable construct to another one.
   *
   *
   * @param link
   */
  linkTo(link: ILinkable): ILinkable;

  /**
   * @internal
   * @param link
   */
  _addReferencedIn(link: ILinkable): void;


  /**
   * Set the PickValueMethod for this linkable if there are multiple sources linked to it.
   *
   * @example
   * myStepTool.input
   *           .linkTo(cdHit.clusterFile)
   *           .linkTo(inputFasta)
   *           .pickValue(PickValueMethod.FIRST_NON_NULL);
   *
   * @param method
   */
  pickValue(method: PickValueMethod): ILinkable;

  get links(): ILinkable[];
  get linked(): boolean;
  get multiLinked(): boolean;
  get referenced(): boolean;
}
