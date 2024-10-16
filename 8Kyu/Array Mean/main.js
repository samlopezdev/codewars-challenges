// Array Mean
// Find the mean (average) of a list of numbers in an array.


// My Solution
var findAverage = function(nums){
    return nums.reduce((a, b) => a + b, 0) / nums.length;
}


// Other Solution
const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;


// 2
var findAverage = function (nums) {
    var sum = 0;

    for (num in nums) {
      sum += nums[num];
    }
    return sum / (nums.length);
}


// 3
var findAverage = function (nums) {
    return eval(nums.join('+'))/nums.length;
}