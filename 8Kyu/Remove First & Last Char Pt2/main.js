// Remove First and Last Character Part Two

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL


// Logical Solution
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
}


// Other Solutions
const array = (arr) => {
    arr = arr.split(',')
    arr.pop()
    arr.shift()
    return arr.join(' ') === '' ? null : arr.join(' ')
}


// 2
function array(arr){
    var data = arr.split(',');
    data.pop()
    data.shift();
    return data.length ? data.join(' ') : null;
}


// 3
function array(arr){
    arr = arr.split(',');
    
    if (arr.length < 3) {
      return null;
    }
  
    return arr.slice(1, arr.length - 1).join(' ');
}


// 4
function array(string) {
    const sequences = string.split(',');
    if (sequences.length < 3) {
      return null;
    }
    sequences.shift(); // Remove the first item
    sequences.pop(); // Remove the last item
    return sequences.join(' ');
}