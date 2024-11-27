// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


// My Solution

//str -> word w/ uppercase / lowercase letters, ""
// return -> true or false. TRUE if no letter is repeated.
function isIsogram(str){
  // make str same casing, lowercase
  str = str.toLowerCase()
  // loop thru letters of str
  for (const letter of str) {
    // indexOf === lastIndexOf, checks if first letter instance is last letter instance
    if (str.indexOf(letter) !== str.lastIndexOf(letter)) return false
  }
  return true
}
console.log( isIsogram("Dermatoglyphics"), true)
console.log( isIsogram("isIsogram"), false)


// Logical Solution
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}


// Other Solutions
function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
}



// 2
function isIsogram(str) {
    str = str.toLowerCase()
    
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i), i + 1) >= 0) {
        return false
      }
    }
    
    return true
}



// 3
function isIsogram (str) {
    return !str || (str.length === new Set(str.toLowerCase()).size);
}



// 4
function isIsogram(str){
    //Create array from string and make it uppercased
    var arr = str.split('').map(function(el) {
      return el.toUpperCase();
    }); 
    //Test each value for duplicates.
    return arr.every(function(el) {
      return arr.indexOf(el) == arr.lastIndexOf(el);
    });
}
