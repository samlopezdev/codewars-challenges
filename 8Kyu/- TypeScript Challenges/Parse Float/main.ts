// Parse Float

// Write function parseFloat which takes an input and returns a number or null if conversion is not possible.
// s -> string. Possibly numbers and/or letters.
// return s if it can be converted to numbers, OR 'Nothing' if it can't

// My Solution
export function parseF(s: string): number | null {
  return isNaN(parseInt(s)) ? null : Number(s);
}

// Other Solutions
export function parseF(s: string): number | null {
  let float = parseFloat(s);

  return isNaN(float) ? null : float;
}

// 2
export function parseF(s: string): number | null {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}


// 3
export function parseF(s: string): number {
  return +s ? +s : s === "0" ? 0 : null;
}
