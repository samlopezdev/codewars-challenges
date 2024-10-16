// Sort Numbers

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []


// My Solution
function solution(nums){
    return nums === null || nums === [] ? [] : nums.sort( (a,b) => a - b)
}


// Other Solutions
function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}

// 2
function solution(nums){
    return nums ? nums.sort((a,b)=>a-b) : []
}

// 3
let solution = (nums) => (nums || []).sort((a,b) => (a-b))


// 4
function solution(nums, n = nums === null ? [] : nums){
    return n.sort((a, b)=> a-b)
}