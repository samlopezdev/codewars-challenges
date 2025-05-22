// Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


// My Solution
  
// n -> whole positive number. 
// return -> n numbers rearanged from highest to lowest
export function descendingOrder(n: number): number {
    let numArr: string[] = n.toString().split('').sort()
    return +numArr.join('')
}

// Other Solutions
export function descendingOrder(n: number): number {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

// 2
export const descendingOrder = (n: number): number =>
  parseInt(`${n}`.split("").sort().reverse().join(""));


// 3
export function descendingOrder(n: number): number {
  const sNumber = n.toString().split("");

  return parseInt(
    sNumber
      .map((num) => parseInt(num))
      .sort((a, b) => b - a)
      .join("")
  );
}