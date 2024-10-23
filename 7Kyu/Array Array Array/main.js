// Array Array Array


// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].



// My Solution
function explode(x){
    if (typeof x[0] == 'string' && typeof x[1] == 'string') return 'Void!'
    
    let num = x.reduce( (a, b) => a + (typeof b == 'number' ? b : 0), 0)
  
    return num === 0 ? [] : new Array(num).fill(x)
}



// Other Solutions
function explode(x){
    let num = 0
    
    if (typeof x[0] == 'string' && typeof x[1] == 'string') return 'Void!'
    
    if (typeof x[0] == 'number') num += x[0]
    if (typeof x[1] == 'number') num += x[1]
  
    return num === 0 ? [] : new Array(num).fill(x)
}



// 2
function explode(x) {
    const isNumber = (val) => typeof val === 'number';
    const isString = (val) => typeof val === 'string';
    
    if (x.every(isString)) {
      return 'Void!';
    }
    
    return new Array(x.filter(isNumber).reduce((acc, el) => el + acc)).fill(x);
}



// 3
const explode = (arr) => {
    const numbersArr = arr.filter(x => !isNaN(x));
    const sum = numbersArr.reduce((x, y) => x + y, 0);
    return numbersArr.length ? [...Array(sum)].map(x => arr) : "Void!";
}