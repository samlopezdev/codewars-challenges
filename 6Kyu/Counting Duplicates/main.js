// Counting Duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// My Solution
// text => contains all cases, possible "", one word
// return num of repeating letters
function duplicateCount(text){
    // lowercase text
    let map = {},
          textLower = text.toLowerCase(),
          count = 0
    
    // map -> letters seen
    for (const letter of textLower) {
      map[letter] = map[letter] + 1 || 1
    }
    
    // loop thru map 
    for (const letter in map) {
      if (map[letter] > 1) count++
    }
    
    return count
}


// Other Solutions
function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}


// 2
function duplicateCount(text){
    return text.toLowerCase().split('')
                .filter((val, i, arr) => arr.indexOf(val) !== i && arr.lastIndexOf(val) === i).length;
}


// 3
function duplicateCount(text){
    let lower = text.toLowerCase();
    let count = 0;
    let used = [];
    
    lower.split('').forEach( (letter) => {
      if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
        count++;
        used.push(letter);
      }
    });
    
    return count;
}


// 4
function duplicateCount(text){
    return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size
}