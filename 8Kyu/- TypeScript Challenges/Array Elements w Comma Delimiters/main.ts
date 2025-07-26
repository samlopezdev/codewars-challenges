// Array Elements w/ Comma Delimiter

// Input: Array of elements
// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays...


// My Solution
export const printArray = (array: any[]): string => array.join(",");


// Other Solutions
export const printArray = (array: any[]) => array.toString();


// 2
export function printArray<T>(array: T[]) {
  return array.join(",");
}


// 3
export function printArray(
  array: (boolean | number | string | object)[]
): string {
  if (typeof array === "object") {
    return Object.values(array).join(",");
  }
  return (array as any[])?.join(",");
}
