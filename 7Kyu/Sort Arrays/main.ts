// Sort Arrays

// Create a function that returns the elements of the input-array / list sorted in lexicographical order.

// My Solution
export const sortMe = (names: string[]): string[] => names.sort();

// Other Solution
export function sortMe (names: string[]): string[] {
  return names.sort()
}


// 2
export function sortMe(names: string[]): string[] {
  return names.sort((name1, name2) => name1.localeCompare(name2));
}