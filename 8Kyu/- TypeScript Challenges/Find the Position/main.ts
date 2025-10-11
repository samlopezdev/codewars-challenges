// Find the Position

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"


// My Solution
export function position(letter: string): string {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alpha.indexOf(letter) + 1}`;
}


// Other Solutions
export function position(letter: string): string {
  return `Position of alphabet: ${"abcdefghijklmnopqrstuvwxyz".indexOf(letter) + 1}`;
}


// 2
export function position(letter: string): string {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}


// 3
export function position(letter: string): string {
  return `Position of alphabet: ${"abcdefghijklmnopqrstuvwxyz".search(letter) + 1}`;
}


// 4
export function position(letter: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === letter) {
      return `Position of alphabet: ${i + 1}`;
    }
  }
  return "";
}