// Merge Two Sorted Lists

// You are given the heads of two sorted lists, list1 and list2.

// Merge the two lists into one sorted list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

function mergeSorted(list1, list2) {
    return list1.concat(list2).sort()
}

console.log( mergeSorted([1,2,3], [2,3,4]), [1,2,2,3,3,4])
console.log( mergeSorted([1,2,4], [1,3,4]), [1,1,2,3,4,4])
console.log( mergeSorted([], [0]), [0])