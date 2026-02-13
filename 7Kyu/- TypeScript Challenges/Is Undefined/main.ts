// Is Undefined

// The function is supposed to check if the input is undefined, but it is not working correctly. Fix the code.


// My Solution
export const isUndefined = (value:any) => value === undefined;


// 2
export const isUndefined = (x:any) => typeof x === "undefined";


// 3
export const isUndefined = (value:any) => Object.is(value, undefined);
