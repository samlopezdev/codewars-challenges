// String ends with..? 

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


// My Solution:
function solution(str, ending){
    return str.endsWith(ending);
}

// Other Solutions:
const solution = (str, ending) => str.endsWith(ending)


// 2
function solution(str, ending){
    if (typeof(str) != "string" || typeof(ending) != "string")
      throw "wrong type";
    if (ending.length>str.length)
      return false;
    return str.substr(str.length-ending.length, ending.length) == ending;
}



// 3
function solution(str, ending){
    return str.substr(-ending.length) == ending;
}


// 4
function solution(str, ending){
    return ending === str.substr(str.length - ending.length, str.length);
}