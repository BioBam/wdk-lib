import { Type } from './Type';

export interface ILinkable {
  get id(): string;
  set id(newID: string);
  get type(): Type;

  get idAsReference(): string;

  linkTo(link: ILinkable): void;
  addReferencedIn(link: ILinkable): void;

  get link(): ILinkable;
  get linked(): boolean;
  get referenced(): boolean;
}
