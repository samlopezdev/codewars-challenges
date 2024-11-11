// Fibonacci Numbers

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Constraints:
// 0 <= n <= 30



// My Solution - Brute Force method
function fib(num) {
    let sequence = [0, 1]

    for (let i = 2; i <= num; i++) {
        let a = sequence[i - 1]
        let b = sequence[i - 2]

        sequence.push(a + b)
    }
    console.log(sequence.join(' '))
}

fib(10)



// Other Solutions - Recursion method
// const fib = function(n) {
//     if (n < 2) { return n }
//     return fib(n - 1) + fib(n - 2)
// };


// 2
const fib = function(n) {
    const fibNums = [
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,
        6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040,
        1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986,
        102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903
    ];

    return fibNums[n];
};


// 3
const fib = function(n) {
    const sqrt5 = Math.sqrt(5);
    const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n);
    return Math.round(fibN / sqrt5);
};