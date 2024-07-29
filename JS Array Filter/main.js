// JavaScript Array Filter


// My Solution
function getEvenNumbers(numbersArray){
    return numbersArray.filter( num => num % 2 === 0)
}


// Other Solutions
const getEvenNumbers = numbersArray => numbersArray.filter(num => num % 2 == 0);


// 2
function getEvenNumbers(numbersArray){
    return numbersArray.filter( num => !(num % 2) )  // 0 is falsy
}


// 3
const isEven = n => typeof n == 'number' && n % 2 === 0;
const getEvenNumbers = arr => arr.filter(isEven);