// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



// My Solution

function getCount(str) {
    let letters = str.split('')
    let numOfVowels = 0
    for (let i = 0; i <= letters.length; i++) {
      if ( (letters[i] === 'a') ||
         (letters[i] === 'e') ||
         (letters[i] === 'i') ||
         (letters[i] === 'o') ||
         (letters[i] === 'u')) {
        numOfVowels += 1
      }
    }
    return numOfVowels
}



// Other Solutions
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}


// 2
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}


// 3
function getCount(str) {
    var vowelsCount = 0;
    for (index in str){
      switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      vowelsCount++;
      break;
      }   
    }
    return vowelsCount;
}


// 4
function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    return str.split('').filter(letter => {
      return vowels.includes(letter)? true : false;
    }).length;
}


// 5
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}