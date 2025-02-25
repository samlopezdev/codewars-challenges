// No Zeros For Heros: TypeScript

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

// My Solution
// number - whole number, positive
//return - number without ending in zero
export function noBoringZeros(n: number): number {
  let arr = String(n).split("");

  if (arr[arr.length - 1] === "0") {
    while (arr[arr.length - 1] === "0") arr.pop();
  }

  return Number(arr.join(""));
}

// Other Solutions
export function noBoringZeros(n: number): number {
  if (n === 0) return 0;
  let numString: string[] = String(n).split("");

  for (let i = numString.length - 1; i > 0; i--) {
    if (numString[i] === "0") {
      numString.pop();
    } else {
      return Number(numString.join(""));
    }
  }
  return 0;
}

// 2
export function noBoringZeros(n: number): number {
  if (n === 0) return 0;
  if (n % 10) {
    return n;
  } else {
    return noBoringZeros(n / 10);
  }
}
