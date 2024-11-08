//  Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.



// My Solution
const twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        let diff = target- nums[i]
        if(diff in map){
            return [ map[diff], i ]
        }
        map[ nums[i] ] = i
    }
};


// Other Solutions
const twoSum = function (numbers, targetSum) {
    const indexMap = new Map();
    for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
        const requiredNumber = targetSum - numbers[currentIndex];
        if (indexMap.has(requiredNumber)) {
            return [indexMap.get(requiredNumber), currentIndex];
        }
        indexMap.set(numbers[currentIndex], currentIndex);
    }
    return null;
};


// 2
var twoSum = function(nums, target) {
    // Create an object to store numbers and their corresponding indices
    let numToIndexMap = {};

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the difference between the target and the current number
        let diff = target - nums[i];

        // Check if the difference already exists in the object
        if (numToIndexMap.hasOwnProperty(diff)) {
            // If it exists, return the indices of the current number and the number that adds up to the target
            return [i, numToIndexMap[diff]];
        }

        // If it doesn't exist, add the current number and its index to the object
        numToIndexMap[nums[i]] = i;
    }

    // If no two numbers add up to the target, return null
    return null;
};