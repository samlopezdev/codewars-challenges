// Find Maximum and Minimum Values of a List

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.


// My Solution
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}


// Other Solutions
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


// 2
var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}


// 3
var min = function(list){
    return Math.min.apply(null,list);
}

var max = function(list){
    return Math.max.apply(null,list);
}


// 4
const min = list => list.sort((a, b) => a - b)[0];

const max = list => list.sort((a, b) => b - a)[0];


// 5
var min = list => Math.min(...list),
    max = list => Math.max(...list)