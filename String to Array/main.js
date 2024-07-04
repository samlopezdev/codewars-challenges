// Convert a String to an Array

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


// My Solution
function stringToArray(string){
    return string.split(' ');
}


// Other Solutions
const stringToArray = string => string.split(' ');


// 2
function stringToArray(string){

    let newStr = "";
    let result = [];
    for (let i= 0; i < string.length; i++) {
        if (string[i]!==" "){
          newStr = newStr + string[i]
        }  
        else{
          result.push(newStr);
          newStr = "";
        }                            
    }
    result.push(newStr);
    return result;
}