export const toCamelCase = (str: string) => 
  str.replace(/[_-](\w)/g, (_, c) => c.toUpperCase());