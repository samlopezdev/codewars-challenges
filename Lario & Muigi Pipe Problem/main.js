// Lario & Muigi Pipe Problem

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


// My Solution
function pipeFix(numbers){
    let numArr = []
    for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) 
    {
      numArr.push(i)
    }
    return numArr
}


// Other Solutions
function pipeFix(numbers){
    var min = numbers[0];
    var max = numbers[numbers.length - 1];
    var array = [];
    
    for(var i = min; i<=max; i++)
    {
      array.push(i);
    }
    
    return array;
}


// 2
function pipeFix(numbers){
    var first = numbers[0];
    var last = numbers[numbers.length-1];
    
    var arr = [];
    for(var i = first; i <= last; i++) {
      arr.push(i);
    }
    return arr;
}


// 3
let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);


// 4
function pipeFix(numbers) {
    return Array.from(
      {length: numbers[numbers.length - 1] - numbers[0] + 1},
      (_, i) => numbers[0] + i
    )
}