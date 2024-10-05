// Every nth array element. (Basic)

// Create a function (a method in Ruby, an extension method in C#) every which returns every nth element of an array.

// Usage
// With one argument, every(array) returns every element of the array.

// With two arguments, every(array, interval) it returns every intervalth element.

// With three arguments, every(array, interval, start_index) returns every intervalth element starting at index start_index.

// Examples
// every([0,1,2,3,4])     -> [0,1,2,3,4]
// every([0,1,2,3,4],1)   -> [0,1,2,3,4]
// every([0,1,2,3,4],2)   -> [0,2,4]
// every([0,1,2,3,4],3)   -> [0,3]
// every([0,1,2,3,4],3,1) -> [1,4]
// Notes
// Test cases:

// interval will always be a positive integer (but may be larger than the size of the array).
// start_index will always be within the bounds of the array.





// My Solution
function every(arr, interval = 1, start){
    return arr.slice(start).filter( (num, i) => i % interval === 0)
}


// Other Solutions
function every(arr, interval = 1, start = 0){
	return arr.slice(start).filter((a, i) => i % interval === 0)
}



// 2
function every(arr, interval, start){
    var result = [];
    for (var i = start || 0; i < arr.length; i += interval || 1) {
      result.push(arr[i]);
    }
    return result;
}



// 3
function every(arr, interval = 1, start = 0){
    const r = [];
    for (let i = start; i < arr.length; i += interval) {
      r.push(arr[i]);
    }
    return r;
}