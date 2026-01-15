// Number of Decimal Digits

// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.


// My Solution
export const digits = (n: number) => String(n).length;


// Other Solutions
function digits(n: number) {
  return n.toString().split('').length
}

// 2
const digits = (n: number) => String(n).length;

// 3
const digits = (n: number) => (n < 10 ? 1 : digits(n / 10) + 1);