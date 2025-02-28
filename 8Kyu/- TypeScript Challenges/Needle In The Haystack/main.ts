// Needle In The Haystack

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// My Solution
// haystack -> array of anything (strings, booleans, numbers...)
// find index of 'needle'
export function findNeedle(haystack: any[]): string {
  const index: number = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
}

// Other Solution
export function findNeedle(haystack: any[]): string {
  return "found the needle at position " + haystack.indexOf("needle");
}

// 2
export function findNeedle(haystack: any[]): string {
  const isNeedle = haystack.find((stuff) => stuff === "needle");
  const position = haystack.findIndex((stuff) => stuff === "needle");
  return isNeedle ? `found the needle at position ${position}` : "";
}
