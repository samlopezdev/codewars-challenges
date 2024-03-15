// Reduce But Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// My Solution
function grow(x){
    let total = x.reduce( (a, b) => a * b)
    return total
}



// Other Solutions
const grow = x => x.reduce( ( a, b) => a * b)


// 2
function grow(x){
    return x.reduce( (a, b)=> a * b, 1);
}


// 3
const grow=x=>eval(x.join("*"))



// 4
function grow(x){ 
    let counter = x[0] 
      for(let i=1; i<x.length; i++){
        counter = counter * x[i] 
      }
    return counter
}