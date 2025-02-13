// String Merge

// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"

// My Solution

// string1, string2 -> single word.
// letter -> one letter to split the words by

// return -> compined words at the first similiar letter
function stringMerge(string1, string2, letter) {
  // slice till first known letter?
  // find index of letter
  const index = (word) => word.indexOf(letter);

  return string1.slice(0, index(string1)) + string2.slice(index(string2));
}

// Other Solutions
const stringMerge = (string1, string2, letter) =>
  `${string1.split(letter, 1)}${string2.slice(string2.indexOf(letter))}`;

// 2
const stringMerge = (s1, s2, l) =>
  s1.slice(0, s1.indexOf(l)) + s2.slice(s2.indexOf(l));

// 3
const stringMerge = (str1, str2, l) =>
  str1.split(l, 1) + str2.substr(str2.indexOf(l));
