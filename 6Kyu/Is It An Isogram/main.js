// Is It An Isogram?

// An isogram (also known as a "nonpattern word") is a logological term for a word or phrase without a repeating letter. It is also used by some to mean a word or phrase in which each letter appears the same number of times, not necessarily just once.

// You task is to write a method isogram? that takes a string argument and returns true if the string has the properties of being an isogram and false otherwise. Anything that is not a string is not an isogram (ints, nils, etc.)

// Properties:

// must be a string
// cannot be nil or empty
// each letter appears the same number of times (not necessarily just once)
// letter case is not important (= case insensitive)
// non-letter characters (e.g. hyphens) should be ignored


// My Solution
// str -> string of letters (uppercase & lowercase), spaces, and symbols.
// return -> boolean. True if each letter appears the same number of times.
function isIsogram(str) {

  if (typeof str !== 'string') return false
  
  str = str.toLowerCase()
  const map = {}
  
  for (const char of str) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    if (!alpha.includes(char)) continue
    map[char] ? map[char]++ : map[char] = 1 
  }
  
  const values = Object.values(map)
  return values.length > 1 ? values.every( n => n === values[0]) : false
}


// Other Solutions
function isIsogram(str) {
  if (typeof str !== 'string') return false;
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  const letterCounts = {};
  
  for (let char of str) {
    letterCounts[char] = (letterCounts[char] || 0) + 1;
  }
  
  const counts = Object.values(letterCounts);
  return counts.length > 0 && counts.every(count => count === counts[0]);
}

// 2
function isIsogram(str) {
  if (typeof str !== "string") return false;

  const counts = str
    .toLowerCase()
    .replace(/[^a-z]+/g, "")
    .split("")
    .reduce((a, b) => ((a[b] = (a[b] || 0) + 1), a), {});

  const unique = new Set(Object.values(counts));

  return unique.size === 1;
}


// 3
function isIsogram(str) {
  if (!str || typeof str !== "string") return false;
  const obj = {};
  str = str.toLowerCase();

  for (let s of str) {
    if (!/[a-z]/.test(s)) continue;
    obj[s] = (obj[s] || 0) + 1;
  }

  const values = Object.values(obj);
  if (values.length === 0) return false;

  return values.every((m) => m === values[0]);
}