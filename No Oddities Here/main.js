// No Oddities Here

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.



// My Solution
function noOdds( values ){
    return values.filter( num => num % 2 === 0)
}



// Other Solutions
var noOdds = values => values.filter(x => x % 2 === 0);


// 2
var noOdds = values => values.filter(x => !(x % 2));


// 3
function noOdds(arr){
    let noOddArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0) {
        noOddArray.push(arr[i]);
      }
    }
    
    return noOddArray;
}