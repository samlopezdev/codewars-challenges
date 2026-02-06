// You Only Need One

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.

// My Solution
export const check = (a: (number | string)[], x: number | string): boolean => {
  return a.includes(x);
};

// Other Solutions
export const check = (a: (number | string)[], x: number | string): boolean =>
  a.indexOf(x) !== -1;

// 2
export const check = (a: (number | string)[], x: number | string): boolean => {
  return a.some((n) => n === x);
};