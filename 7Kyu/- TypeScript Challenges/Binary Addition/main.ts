// Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


// My Solution
export const addBinary = (a: number, b: number): string => (a + b).toString(2)


// Other Solutions
export function addBinary(a: number, b: number): string {
  return (a + b).toString(2);
}


// 2
export function addBinary(a: number, b: number): string {
  let sum = a + b;
  let binaryString = "";
  let isNegative = false;

  if (sum < 0) isNegative = true;
  if (sum === 0) return "0";

  sum = Math.abs(sum);

  while (sum > 0) {
    const remainder = sum % 2;
    binaryString = remainder.toString() + binaryString;
    sum = Math.floor(sum / 2);
  }

  return isNegative ? "-" + binaryString : binaryString;
}