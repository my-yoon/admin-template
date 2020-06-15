/**
 * Convert CamelCase format to kebab format
 * @param str A string what you want to convert to Kebab format.
 */
export const coverCamelCaseTokebab = (str: string) => {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}
