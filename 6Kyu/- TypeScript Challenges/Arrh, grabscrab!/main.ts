// Arrrh, grabscrab

// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

// For example:

// grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Should return ["sport", "ports"].

// Return matches in the same order as in the dictionary. Return an empty array if there are no matches.


// My Solution
export function grabscrab(anagram: string, dictionary: string[]): string[] {
  
    const sortedWord = [...anagram].sort().join("")
    
    return dictionary.filter( (word: string)  => [...word].sort().join("") === sortedWord)
}
// anagram -> string. One scrambled word. No spaces or symbols.
// dictionary -> array of strings. Each element is a word
  
// return -> array of strings that the anagram COULD be.


// Other Solutions
export const grabscrab = (anagram: string, dictionary: string[]): string[] =>
  dictionary.filter(
    (word) => ![...anagram].reduce((acc, c) => acc.replace(c, ""), word)
  );