import { CommandInputArraySchema, CommandInputEnumSchema, CommandInputRecordSchema, CommandOutputArraySchema, CommandOutputEnumSchema, CommandOutputRecordSchema, CWLType, stderr, stdin, stdout } from 'cwl-ts-auto';
import { Construct } from './Construct';
import { PickValueMethod } from './LinkableConstruct';


export type InputType = CWLType | stdin | CommandInputRecordSchema | CommandInputEnumSchema | CommandInputArraySchema | string;
export type InputTypeArray = (CWLType | CommandInputRecordSchema | CommandInputEnumSchema | CommandInputArraySchema | string)[];

export type OutputType = CWLType | stdout | stderr | CommandOutputRecordSchema | CommandOutputEnumSchema | CommandOutputArraySchema | string;
export type OutputTypeArray = (CWLType | CommandOutputRecordSchema | CommandOutputEnumSchema | CommandOutputArraySchema | string)[];

export interface ILinkable {

  /**
   * Access the identified of this construct.
   * @returns the identifier of the construct
   */
  get id(): string;
  set id(newID: string);

  tryFindChild(id: string): Construct | undefined ;

  get scope(): Construct | undefined;

  /**
   * @internal
   */
  get _type(): InputType | InputTypeArray;

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

  /**
   * @internal
   */
  _toCwlObject(): any;

  createMatchingScopeUpper(targetScope: Construct): ILinkable;

}
