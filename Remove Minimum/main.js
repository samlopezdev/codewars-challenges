// Remove The Minimum

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


// Logical Solution
function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}


// Other Solutions
function removeSmallest(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}


// 2
const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));


// 3
function removeSmallest(numbers) {
    let copy = [...numbers]
    let smallest = Math.min(...numbers);
    let smallestIdx = numbers.indexOf(smallest)
    copy.splice(smallestIdx, 1)
    return copy
}


// 4
function removeSmallest(numbers) {
    let lowest = numbers.indexOf( Math.min(...numbers) )
    return numbers.slice( 0, lowest ).concat( numbers.slice( lowest + 1 ) )
}