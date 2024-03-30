// Array Plus Array 
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


// My Solution
function arrayPlusArray(arr1, arr2) {
    let sum1 = arr1.reduce( (a, b) => a + b)
    let sum2 = arr2.reduce( (a, b) => a + b)
    return sum1 + sum2
}


// Other Solutions
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}


// 2
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce( (a, b) => a + b) + arr2.reduce( (a, b) => a + b)
}



// 3
function arrayPlusArray(arr1, arr2) {
    function sumArray(arr){
        let sum = arr[0];
        for (i = 1; i < arr.length; i++){
            sum = sum + arr[i];
        }
        return sum;
    }
    return sumArray(arr1) + sumArray(arr2);
}



// 4
const arrayPlusArray = (...arrs) => [].concat(...arrs).reduce((a, b) => a + b, 0);


// 5
function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((a, b) => a + b)
}