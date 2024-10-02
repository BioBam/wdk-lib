export class Shortify {
  public static input(inputMap: { [key: string]: any }): { [key: string]: any } | string {

    // If the map contains an array type together with the items type,
    // we can simplify its type representation and remove the `items` key
    if (inputMap.type === 'array' && inputMap.items) {
      inputMap.type = `${inputMap.items}[]`;
      delete inputMap.items;
    }

    // If the map only contains the type, we can simplify it
    if (Object.keys(inputMap).length === 1 && inputMap.type) {
      return inputMap.type;
    }


    return inputMap;
  }
}
