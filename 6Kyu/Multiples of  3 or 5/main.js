// Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// My Solution
function solution(number) {
  if (number < 0) return 0;

  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 5 === 0 || i % 3 === 0) sum += i;
  }

  return sum;
}

// number -> whole positive or negative number.
// return -> the sum of the multiples

console.log(solution(23));
// multiples of 3 or 5. 3, 6, 9, 12, 15, 18, 21
// multiples of  5. 5, 10, (15), 20

// Other Solutions
function solution(number) {
  return number < 3
    ? 0
    : [...Array(number).keys()]
        .map((int) => (int % 3 === 0 || int % 5 === 0 ? int : 0))
        .reduce((a, b) => a + b);
}

// 2
function solution(number) {
  let sum3 = 0;
  let sum5 = 0;
  let i;
  for (i = 3; i < number; i += 3) {
    sum3 += i;
  }

  for (i = 5; i < number; i += 5) {
    if (i % 3 !== 0) {
      sum5 += i;
    }
  }
  return sum3 + sum5;
}

// 3
function solution(number) {
  return number < 1
    ? 0
    : [...new Array(number).keys()]
        .filter((n) => n % 3 == 0 || n % 5 == 0)
        .reduce((a, b) => a + b);
}

// 4
function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}
