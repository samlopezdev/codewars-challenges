// Count of Positives / Sum of Negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// My Solution
export function countPositivesSumNegatives(input: number[] | null): number[] {
  if (!input || !input.length) return [];

  let sum = 0,
      positiveNums = 0;

  for (const num of input) {
    num > 0 ? positiveNums++ : (sum += num);
  }

  return [positiveNums, sum];
}


// Other Solutions
export function countPositivesSumNegatives(input: any) {
  return input && input.length
    ? [
        input.filter((p: number) => p > 0).length,
        input
          .filter((n: number) => n < 0)
          .reduce((a: number, b: number) => a + b, 0),
      ]
    : [];
}


// 2
export function countPositivesSumNegatives(input: any) {
  let array = [];

  if (!Array.isArray(input) || !input.length) {
    return array;
  }

  let pos = 0;
  let neg = 0;

  for (const i of input)
    if (i > 0) pos++;
    else neg += i;

  array.push(pos);
  array.push(neg);

  return array;
}


// 3
export function countPositivesSumNegatives(input: any) {
  if (!Array.isArray(input) || input.length == 0) {
    return [];
  }
  let positiveNumber = 0;
  let sumNegativeNumber = 0;
  input.forEach((e: number) => {
    e > 0 ? ++positiveNumber : (positiveNumber += 0);
  });
  input.forEach((e: number) => {
    e < 0 ? (sumNegativeNumber += e) : (sumNegativeNumber += 0);
  });
  return [positiveNumber, sumNegativeNumber];
}