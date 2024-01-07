// Reverse Words

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"



// Most Logical Solution
function reverseWords(str) {
    return str.split(' ').map( function(word) {
      return word.split('').reverse().join('');
    }).join(' ');
}



// Other Solutions
function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}


// 2
function reverseWords(str) {
    let reversedWord = '';
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        reversedWord = str[i] + reversedWord;
      } else {
        reversedStr += reversedWord + ' ';
        reversedWord = '';
      }
    }
    return reversedStr + reversedWord;
}





// 3
function reverseWords(str) {
    return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
}




// 4
const reverseWords = input => input.split(" ").map(a => a.split("").reverse().join("")).join(" ");