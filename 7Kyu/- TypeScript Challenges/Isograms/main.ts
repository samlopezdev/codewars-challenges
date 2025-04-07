// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// My Solution
export function isIsogram(str: string): boolean {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
  }
  return true;
}


// Other Solutions
export function isIsogram(str: string): boolean {
  return new Set(str.toLowerCase()).size === str.length;
}


// 2
export function isIsogram(str: string) {
  str = str.toLowerCase();
  const set = new Set(str);
  return set.size === str.length;
}


// 3
export const isIsogram = (str: string) =>
  new Set(str.toLowerCase()).size === str.length;
