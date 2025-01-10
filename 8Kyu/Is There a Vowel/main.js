// Is There a Vowel In There?

// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


// My Solution
  
  // a -> array of numbers. always has number
  // return a string of that vowel. 'a'
function isVow(a){
    // loop thru array
    for (i = 0; i < a.length; i++) {
      switch (a[i]) {
          // check if element === charcode, replace w/ vowel
          case 97: a[i] = 'a'; break;
          case 101: a[i] = 'e'; break;
          case 105: a[i] = 'i'; break;
          case 111: a[i] = 'o'; break;
          case 117: a[i] = 'u'; break;
      }
    }
    
    return a
  }
  
  console.log( isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),
                      [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106])

// Other Solutions
const isVow = a =>{
    let map = {
      97: 'a',
      101: 'e',
      105: 'i',
      111: 'o',
      117: 'u',
    }
    return a.map( num => map[num] ? map[num] : num);
}


// 2
const isVow = a => a.map( x => 'aeiou'.includes( y = String.fromCharCode(x)) ? y : x)


// 3
function isVow(a){
    for (let i = 0, l = a.length; i < l; ++i)
    {
      let char = String.fromCharCode(a[i])
      if ('aeiou'.indexOf(char) !== -1)
      a[i] = char;
    }
    
    return a;
}