// Is the String Uppercase?

// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

// My Solution
export const isUpperCase = (str: string): boolean => str === str.toUpperCase();

// 2
export const isUpperCase = (str: string) => !/[a-z]/.test(str);