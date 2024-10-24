import { PickValueMethod } from './LinkableConstruct';
import { Type } from './Type';

export interface ILinkable {
  get id(): string;
  set id(newID: string);
  get type(): Type;

  get idAsReference(): string;

  linkTo(link: ILinkable): ILinkable;
  addReferencedIn(link: ILinkable): void;
  pickValue(method: PickValueMethod): ILinkable;

  get links(): ILinkable[];
  get linked(): boolean;
  get multiLinked(): boolean;
  get referenced(): boolean;
}
