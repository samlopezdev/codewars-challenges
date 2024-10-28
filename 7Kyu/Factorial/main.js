// Factorial

// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial



// My Solution
  
  // n -> number. always positive integer
  // return factorial number of n
  
  // 7 * 6 * 5 * 4 * 3 * 2 * 1
  // if 0 return 1
function factorial(n){
    let product = 1 
    for (let i = n; i >= 1; i--) {
      product *= i
    }
    return product
}


//Other Solutions
const factorial = n => n ? factorial(n - 1) * n : 1;



// 2
function factorial(n){
    let answer = 1;
    
    while (n > 0) {
      answer *= n;
      n--;
    }
    
    return answer;
}


// 3
function factorial(n){
    return n ? n * factorial(n-1) : 1;
}