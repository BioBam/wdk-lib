import { Construct } from './Construct';
import { ILinkable } from './ILinkable';

export class LinkableConstruct extends Construct implements ILinkable {
  private _link: ILinkable | null = null;
  private referencedIn: ILinkable[] = [];

  constructor(scope: Construct, id: string) {
    super(scope, id);
  }

  public get idAsReference(): string {
    return this.id;
    // throw new Error('Method not implemented.');
  }

  public linkTo(linkInput: ILinkable): void {
    this._link = linkInput;
    linkInput.addReferencedIn(this);
  }

  public get link(): ILinkable {
    if (this._link === null) {
      throw new Error('Link not set');
    }
    return this._link;
  }

  public get linked(): boolean {
    return this._link !== null;
  }

  public addReferencedIn(link: ILinkable): void {
    this.referencedIn.push(link);
  }

  public get referenced(): boolean {
    return this.referencedIn.length > 0;
  }
}
