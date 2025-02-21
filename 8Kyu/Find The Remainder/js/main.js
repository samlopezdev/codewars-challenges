// Find The Remainder

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

// Examples:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)

// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)


// My Solution:
function remainder(n, m){
    let largerInt = Math.max(n, m)
    let smallInt = Math.min(n, m)
    return largerInt % smallInt
}


// Other Solutions
function remainder(a, b){
    return a > b ? a % b : b % a;
}




// 2
function remainder(a, b){
    if(b > a) {
        return b % a
    } else {
        return a % b
    }
}



// 3
function remainder(a, b){  
    return Math.max(a, b) % (Math.min(a, b) || NaN)
}



// 4
const remainder = (a, b) => Math.max(a, b) % Math.min(a, b)
