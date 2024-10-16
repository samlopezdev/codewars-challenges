// Two to One
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



// Logical Solution
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


// Other Solutions
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}


// 2
const longest = (s1, s2) => s1.concat(s2)
    .split('')
    .sort()
    .filter((item, pos, self) => self.indexOf(item) == pos)
    .join('');


// 3
function longest(s1, s2) {
    let combined = s1.concat(s2);
    let toLowerCase = combined.toLowerCase();
    let split =toLowerCase.split('');
    let sorted = split.sort();
    let output = [];
  
    for (let element of sorted) 
       if (!output.includes(element)) {
        output.push(element)
       }
      return (output.join(''));
}


// 4
function longest(s1, s2) {
    let output = [];
    let combi = s1.concat(s2);
    let array = combi.split('').sort();
 
    for (let i = 0; i <= array.length; i++) {
        console.log(array[i]);//test
        if (!output.includes(array[i]) ) {
              output.push(array[i]);
        }
    }
    return output.join('');
}