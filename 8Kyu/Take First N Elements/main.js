// Take the First N Elements
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.


// My Solution
function take(arr, n) {
    return arr.slice(0, n)
}


// Other Solutions
const take = (arr, n) => arr.slice(0, n);


// 2
function take(arr, n) {
    return  arr.length<n ? arr.slice(): arr.slice(0,n)
}


// 3
function take(arr, n) {
    return arr.filter((elem, i) => i < n )
}


// 4
function take(arr, n) {
    let res = [];
    for (let i in arr) {
      if (i < n && i < arr.length) {
        res.push(arr[i]);
      }
    }
    return res;
}