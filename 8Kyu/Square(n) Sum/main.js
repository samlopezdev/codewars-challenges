// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9



// My Solution
function squareSum(numbers){
    return numbers.reduce( (a, b) => a + (b ** 2),0)
}


// Other Solutions
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
}


// 2
function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
}


// 3
function squareSum(numbers)
{ 
  var totalSum = 0;
  for (i=0;i<numbers.length;i++)
  {
    totalSum += Math.pow(numbers[i], 2);
  }
  return totalSum;
}


// 4
function squareSum(numbers) {
    return numbers.map(n => n ** 2).reduce((a, b) => a + b, 0);
}