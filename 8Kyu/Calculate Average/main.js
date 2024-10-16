// Calculate Average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// My Solution
function findAverage(array) {
    if (!array.length) return 0
    return array.reduce( (a, b) => a + b, 0) / array.length
}


// Other Solutions
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}


// 2
function find_average(array) {
    return array.length ? array.reduce((a, b) => a + b) / array.length : 0;
}


// 3
function findAverage(array){
    if (array == 0 || array == isNaN) {
        return 0
    } else {        
        let res = 0
        array.forEach(item => {
            res += item
        })
        return res / array.length
    }
}