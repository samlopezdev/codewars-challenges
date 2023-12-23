// Reversed Strings

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My Solution:
const solution = str => str.split('').reverse().join('')


// Other Solutions:
function solution(str){
    return str.split("").reverse().join("")
}


// 2
const solution = s => [...s].reverse().join('')


// 3
function solution(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
}


// 4
function solution(str){
    return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
}