// Changing Letters

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.



// My Solution
// string -> sentece / phrase w/ spec char  
// return -> same str w/ vowels capitalized
function swap (string) {
    // declare vowels
    // check each letter if its a vowel ? UpperCase
    // join
    let vowels = 'aeiou'
    
    return string.split('')
      .map( letter => vowels.includes(letter.toLowerCase()) ? letter.toUpperCase() : letter)
      .join('')
  }  
// console.log( swap("HelloWorld!"), "HEllOWOrld!").
// console.log( swap("Friday"), "FrIdAy")


// Other Solutions
function swap(st){
    return st.replace(/[aeiou]/g, v => v.toUpperCase() )
}


// 2
const vowels = ["a", "e", "i", "o", "u"];
const swap = s => s.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).join('');


// 3
function swap(st){
    return st.split('')
    .map(elem =>  "aoeiu".includes(elem) ? elem.toUpperCase() : elem )
    .join('');
}