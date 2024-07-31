// Enumerable Magic - Does My List Include This?

// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.


// My Solution
function include(arr, item){
    return arr.includes(item)
}


// Other Solutions
const include = (arr, item) => arr.includes(item);


// 2
function include(arr, item) {
    return arr.indexOf(item) !== -1;
}

// 3
var include = (a, i) => a.indexOf(i) > -1;


// 4
function include(arr, item){
    return Boolean(~arr.indexOf(item));
}


// 5
function include(arr, item){
    return arr.some(n=>n===item);
}