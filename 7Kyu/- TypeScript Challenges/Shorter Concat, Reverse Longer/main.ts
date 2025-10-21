// Shorter Concat, Reverse Longer

// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b


// My Solution
export function shorterReverseLonger(a: string, b: string): string {
  if (b.length > a.length) return a + [...b].reverse().join("") + a;
  else return b + [...a].reverse().join("") + b;
}


// Other Solutions
export function shorterReverseLonger(a: string, b: string): string {
  let shorter = b;
  let longer = a;

  if (a.length < b.length) {
    shorter = a;
    longer = b;
  }

  return shorter + longer.split("").reverse().join("") + shorter;
}


// 2
export function shorterReverseLonger(a: string, b: string): string {
  let long: string = a.length >= b.length ? a : b;
  let short :string = long === a ? b : a;

  return short.concat(long.split("").reverse().join("")).concat(short);
}


// 3
export function shorterReverseLonger(a: string, b: string): string {
  const [short, long] = a.length < b.length ? [a, b] : [b, a];
  let reverse = long.split("").reverse().join("");
  return short + reverse + short;
}