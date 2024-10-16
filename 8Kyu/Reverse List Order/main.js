// Reverse List Order

// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]


// My Solution
function reverseList(list) {
    return list.reverse();
}


// Other Solutions
const reverseList = list => list.reverse();


// 2
function reverseList(list) {
    var array = [];
    for (var i = list.length-1; i >= 0; i --){
      array.push(list[i]);
    }
    return array;
}


// 3
function reverseList(list) {
    const result=[];
    
    for (item of list) result.unshift(item);
    return result;
}