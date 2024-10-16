// Convert an Array of Strings to Array of Numbers

// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.



// My Solution
function toNumberArray(stringarray){
    return stringarray.map( num => Number(num))
}


// Other Solutions
function toNumberArray(stringarray) {
  return stringarray.map(parseFloat);
}



// 2
const toNumberArray = stringarray => stringarray.map(Number);


// 3
function toNumberArray(stringarray){
    return stringarray.map(e => +e);
}