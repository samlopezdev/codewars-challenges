// Head, Tail, Init, and Last

// Haskell has some useful functions for dealing with lists:

// $ ghci
// GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
// Here's how I expect the functions to be called in your language:

// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]


// My Solution
export const head = (numArr: number[]): number => {
    return numArr[0]
  }
  
export const tail = (numArr: number[]): number[] => {
    return numArr.slice(1)
}
  
export const init = (numArr: number[]): number[] => {
    return numArr.slice(0, -1)
}
  
export const last = (numArr: number[]): number => {
    return numArr[numArr.length - 1]
}


// Other Solutions
export const head = (a: number[]): number => a[0]
export const tail = (a: number[]): number[] => a.slice(1)
export const init = (a: number[]): number[] => a.slice(0, -1)
export const last = (a: number[]): number => a[a.length - 1]


// 2
// export const last = (xs: number[]) => xs[xs.length - 1];
export const last = (xs: number[]) => xs.at(-1);
export const init = (xs: number[]) => xs.slice(0, -1);
export const head = ([x, ...xs]: number[]) => x;
export const tail = ([x, ...xs]: number[]) => xs;


// 3
export function head<T>(arr: T[]): T {
    return arr[0];
}
export function tail<T>(arr: T[]): T[] {
    const [head, ...tail] = arr;
    return tail;
}
export function init<T>(arr: T[]): T[] {
    return arr.slice(0, -1);
}
export function last<T>(arr: T[]): T {
    return arr.at(-1)!;
}