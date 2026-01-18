// Short Long Short

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

// My Solution
export function shortLongShort(a: string, b: string) {
  return a.length > b.length ? b + a + b : a + b + a;
}

// Other Solution
export function shortLongShort(a: string, b: string) {
  let [short, long] = [a, b].sort((a, b) => a.length - b.length);
  return `${short}${long}${short}`;
}

// 2
export function shortLongShort(a: string, b: string) {
  const short = a.length < b.length ? a : b;
  const long = a.length < b.length ? b : a;
  return `${short}${long}${short}`;
}
