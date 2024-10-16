// Simple Fun #384: Is Turing's Equation?

// You are given a string s. It's an equation such as "a+b=c", where a, b, c are numbers made up of the digits 0 to 9. This includes possible leading or trailing zeros. The equations will not contain any spaces.

// Your task is to determine whether s is a valid Turing equation. Return true or false, respectively, in Turing's interpretation, i.e. the numbers being read backwards.

// Still struggling to understand the task? Look at the following examples ;-)

// Examples
// For s = "73+42=16", the output should be true.

// 73 -> 37
// 42 -> 24
// 16 -> 61
// 37+24==61
// For s = "5+8=13", the output should be false.

// 5 -> 5
// 8 -> 8
// 13 -> 31
// 5+8!=31
// For s = "10+20=30", the output should be true.

// 10 -> 01 -> 1
// 20 -> 02 -> 2
// 30 -> 03 -> 3
// 1+2==3
// Note
// All the numbers a,b,c no more than 10 digits, excluding leading zeros(read backwards)

// s contains only digits, "+" and "=", "-","*" or "/" will not appear in the string.

// Happy Coding ^_^


// Logical Solution
function isTuringEquation(s){
    var [a,b,c]=[...s].reverse().join('').match(/\d+/g);
    return a-c===+b;
}


// Other Solutions
const isTuringEquation = s =>
    ![...s].reverse().join(``).split(/\D/).reduce((pre, val) => pre - val);


// 2
function isTuringEquation(s){
    const r = s.split(/[+=]+/).map(n=>(+n.split('').reverse().join('')));
    return r[0] + r[1] === r[2];
}


// 3
function isTuringEquation(s){
    const PARTS_RE = /(\d+)\+(\d+)=(\d+)/;
    const [_, strNum1, strNum2, strSum] = s.match(PARTS_RE);
    const num1 = Number(strNum1.split('').reverse().join(''));
    const num2 = Number(strNum2.split('').reverse().join(''));
    const sum = Number(strSum.split('').reverse().join(''));
    return ((num1 + num2) === sum);
}


// 4
function isTuringEquation(s){
    let array = s.split('')
    .reverse()
    .join('')
    .replace('=', '+')
    .split('+')
    .map(elem => parseInt(elem));
    let sum = array.reduce((prev, curr) => {
      return prev += curr;
    }, 0);
    return array[0] === sum - array[0];  
}


// 5
function isTuringEquation(s){
    const [a,b,c] = s.split(/[+=]+/).map(n=>(+n.split('').reverse().join('')));
    return a + b === c;
}