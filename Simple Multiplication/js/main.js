//  Simple Multiplication

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


// My Solution
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}



// Other Solutions
const simpleMultiplication = number => number%2 ? number * 9 : number * 8


// 2
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}


// 3
function simpleMultiplication(value){
    
    if(value%2===0 ){
     return value *8
    }
    else{
    return value* 9;
    }    
}


// 4
function simpleMultiplication(number) {
    if (typeof number === 'number') {
      return number * (8 + number % 2);
    } else {
      console.log(arguments.callee.name + ': Invalid argument');
    }
}