export interface IMappable {
  /**
   * Convert the object to a map representation following the CWL specification.
   */
  toMap(): { [key: string]: any };
}