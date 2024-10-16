// Invert Values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.



// Logical Solution:
const invert = array => array.map(num => -num)



// Other Solutions:
function invert(array) {
    return array.map( x => x === 0 ? x : -x);
}



// 2
function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
}



// 3
function invert(array) {
    for(let i=0; i<array.length; i++){
      array[i] *= -1;
    }
     return array;
}