export class Shortify {
  public static input(inputMap: { [key: string]: any }): { [key: string]: any } | string {
    // If the map only contains the type, we can simplify it
    if (Object.keys(inputMap).length === 1 && inputMap.type) {
      return inputMap.type;
    }

    // else if (this._type === Type.STRING_ARRAY) {
    //   const typeMap: { [key: string]: any } = {
    //     type: 'array',
    //     items: 'string',
    //   };

    // If the map contains an array type together with the items type , we can simplify it
    if (inputMap.type === 'array' && inputMap.items) {
      return `${inputMap.items}[]`;
    }

    return inputMap;
  }
}
