// Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.


// My Solution
function groupAnagrams(strs: string[]): string[][] {
    const map: object = {}

    for (const word of strs) {
        const sortedWord = word.split('').sort().join('')

        if (!map[sortedWord]) map[sortedWord] = []

        map[sortedWord].push(word)
    }

    return Object.values(map)
};


// Other Solutions
function groupAnagrams(strs: string[]): string[][] {
  const groupedAnagrams = new Map<string, string[]>();

  for (const str of strs) {
    // Sort the characters of the string to use as a grouping key
    // Ex: "eat" -> "aet", "tea" -> "aet", "tan" -> "ant"
    // We do it for each str in strs
    const sortedStr = str.split("").sort().join("");

    // If the map already has this sorted string as a key, push the word into its group
    if (groupedAnagrams.has(sortedStr)) {
      groupedAnagrams.get(sortedStr).push(str);
    } else {
      // Otherwise, create a new group for this key
      groupedAnagrams.set(sortedStr, [str]);
    }
  }

  // Convert the grouped anagrams from map values into an array of arrays
  return Array.from(groupedAnagrams.values());
}


// 2
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();

    for(let each of strs){
        const sortedEl = each.split('').sort().join('');
        if(map.has(sortedEl)){
            map.set(sortedEl, [...map.get(sortedEl), each].sort())
        } else {
            map.set(sortedEl, [each]);
        }
    }

    const result = [];
    for (const [key, value] of map.entries()) {
        result.push(value);
    }

    return result;  
};