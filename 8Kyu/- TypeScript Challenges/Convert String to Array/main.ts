// Convert a String to an Array

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// My Solution
export const stringToArray = (s: string) => s.split(" ");

// Other Solutions
export function stringToArray(s: string): string[] {
  return s.split(/\s/);
}

// 2
export function stringToArray(s: string): string[] {
  const str: string[] = [];
  	for(const w of s){
    str.push(w)
    }
    return str;
}