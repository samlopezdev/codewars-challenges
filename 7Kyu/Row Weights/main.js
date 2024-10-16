// Row Weights

// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.


// My Solution
function rowWeights(array){
    let evenSum = 0
    let oddSum = 0
    
    for (let i = 0; i < array.length; i++) {
      i % 2 === 0 ? evenSum += array[i] : oddSum += array[i]
    }
    return [evenSum, oddSum]
}



// Other Solutions
function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
}



// 2
function rowWeights(array){
    var arr = [0, 0];
    for (var i = 0; i < array.length; i++) {
      i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
}



//3
const rowWeights = arr => arr.reduce((a, w, i) => (a[i % 2] += w, a), [0, 0]);



// 4
function rowWeights(array){
    let result = [0,0]
    
    array.forEach((weight, index) => {
      index % 2 === 0
        ? result[0] += weight
        : result[1] += weight
    })
    
    return result
}