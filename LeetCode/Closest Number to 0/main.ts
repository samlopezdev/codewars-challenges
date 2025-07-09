// Find the Closest Number to Zero

// Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

 

// Example 1:

// Input: nums = [-4,-2,1,4,8]
// Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.
// Example 2:

// Input: nums = [2,-1,1]
// Output: 1
// Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.
 

// Constraints:

// 1 <= n <= 1000
// -105 <= nums[i] <= 105


// My Solution
function findClosestNumber(nums: number[]): number {
    let closest: number = nums[0]

    for (const num of nums) {
        if (Math.abs(num) < Math.abs(closest)) {
            closest = num
        }
    }

    if (closest < 0 && nums.includes(Math.abs(closest))) {
        return Math.abs(closest)
    }

    return closest
};


// Other Solutions
function findClosestNumber(nums: number[]): number {
    return nums.reduce((closest, num) => {
        if (Math.abs(num) < Math.abs(closest)) {
            return num;
        } else if (Math.abs(num) === Math.abs(closest)) {
            return Math.max(closest, num);
        }
        return closest;
    });
}


// 2
function findClosestNumber(nums: number[]): number {
    let result = nums[0];

    for (let i=1; i < nums.length; i++) {

        if (Math.abs(nums[i]) < Math.abs(result)) {
            result = nums[i]
        }
        if (Math.abs(nums[i]) === Math.abs(result)) {
            result = result > nums[i] ?  result : nums[i];
        }
    }

    return result;
};


// 3
function findClosestNumber(nums: number[]): number {
  let clos = nums[0];

  for (let v of nums) {
    
    if (Math.abs(v) < Math.abs(clos)) {
      clos = v;
    } else if (Math.abs(v) === Math.abs(clos)) {
      clos = Math.max(clos, v);
    }
  }

  return clos;
}