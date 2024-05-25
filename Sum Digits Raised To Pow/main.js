// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
// 89 = 81 + 92 89=8 1 +9 2. The next number in having this property is 
// 135: See this property again: 
// 135 = 11 + 32 +53135=1 1+3 2 +5 3 
// Task
// We need a function to collect these numbers, that may receive two integers 
// 𝑎
// a, 
// 𝑏
// b that defines the range 
// [
// 𝑎
// ,
// 𝑏
// ]
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range 
// [
// 𝑎
// ,
// 𝑏
// ]
// [a,b] the function should output an empty list.


// Logical Solution
function sumDigPow(a, b) {
    let found = [];
    for(let i = a; i <= b; i++){
      if(i === i.toString().split('').reduce((a,n,i)=> a + n ** (i + 1), 0)){
        found.push(i);
      }
    }
    return found;
}

// Other Solutions
function sumDigPow(a, b) {
    var arr = [];
    for (var i = a; i <= b; i++) {
      var sum = 0;
      for (var j = 0; j <= String(i).length; j++) {
        sum += Math.pow(parseInt(String(i)[j]), j+1);  
        if (sum == i) arr.push(i);
      }
    }
    return arr;
}


// 2
function filterFunc(n) {
    return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
}
  
function *range(a, b) {
    for (var i = a; i <= b; ++i) yield i;
}
  
function sumDigPow(a, b) {
    return Array.from(range(a, b)).filter(filterFunc);
}


// 3
const EUREKAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89,135, 175, 518, 598, 1306, 1676, 2427, 2646798];

const sumDigPow = (a, b) => EUREKAS.filter( (n) => a <= n && n <= b );


// 4
function sumDigPow(a, b) {
    var resultArr = [];
    var tempString = [];
    var sum;
    
    for(var i = a; i < b; i++){
      sum = 0;
      tempString = ("" + i).split("");
      for(var j = 0; j < tempString.length; j++)
        sum += Math.pow(tempString[j], j+1);
      if(sum === i)
        resultArr.push(i);   
    }
    return resultArr;
}