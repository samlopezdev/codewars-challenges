// Sorted? Yes? No? How?

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.



// Logical Solution
function isSortedAndHow(arr) {
    return arr.every( (x, i) => i == 0 || arr[i] >= arr[i - 1]) ? 'yes, ascending' :
            arr.every( (x, i) => i == 0 || arr[i] >= arr[i - 1] ? 'yes, descending' : 'no')
}


// Other Solutions
function isSortedAndHow() {
    let ascending = array.filter( (e, i, a) => e > a[i + 1]).length == 0
    let descending = array.filter( (e, i, a) => e < a[i + 1]).length == 0

    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
}


// 2
function isSortedAndHow(array) {
    if([...array].sort((a,b)=>a-b).join`` === array.join``) return "yes, ascending";
    if([...array].sort((a,b)=>b-a).join`` === array.join``) return "yes, descending";
    return "no";
}


// 3
function isSortedAndHow(array) {
    let ascend = 0;
    let desc = 0;  
    
    for(let i=0; i<array.length-1; i++){
      if(array[i] <= array[i+1]) ascend++;
      if(array[i] >= array[i+1]) desc++;
    }
    
    return ascend == array.length - 1 ? "yes, ascending" : 
            desc == array.length - 1 ? "yes, descending" : "no";
}