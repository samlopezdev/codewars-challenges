// Merge Overlapping Strings

// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.

// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"


// Logical Solution
function mergeStrings(str1, str2) {
    let overlap = ''

    for (let i = 0; i < str1.length; i++) {
        if (str2.startsWith(str1.slice(i))) {
            overlap = str1.slice(i)
            break;
        }
    }

    return str1 + str2.slice(overlap.length)
}


// Other Solutions
function mergeStrings(first, second){
    return (first + ' ' + second).replace(/(.*) \1/, '$1');
}


// 2
function mergeStrings(first, second){
    let count = 0;
    
    for (let i = 0; i < first.length; i++) {
      if (first[i] == second[count]) {
        count++;
      } else {
        count = 0;
        if (first[i] == second[count]) count++;
      }
    }
  
    return first + second.slice(count);
}


// 3
function mergeStrings(first, second) {
    for (let i = Math.min(first.length, second.length); i >= 0; i--)
      if (second.startsWith(first.slice(first.length - i)))
        return first + second.slice(i);
}


// 4
function mergeStrings(first, second){
    
    let firstSubString = ""
    let secondSubString = ""
    
    
    for (let i = 0; i < first.length; i++) {
      
      firstSubString = first.substring(i)
      secondSubString = second.substring(0, firstSubString.length)
      
      if (firstSubString == secondSubString) {
        return first.substring(0, i) + second
      }
    }
    return first + second
}