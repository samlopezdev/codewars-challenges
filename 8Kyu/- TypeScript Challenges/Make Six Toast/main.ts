// Make Six Toast

// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
// 5 --> 1
// And in case of 12 you need 6 toasts less (but not -6):
// 12 --> 6


// My Solution
export function sixToast(num: number): number {
  return Math.abs(num - 6);
}

// Other Solutions
export const sixToast = (num: number): number => Math.abs(num - 6)


// 2
export const sixToast = ($: number): number => ($ > 6 ? $ - 6 : 6 - $);


// 3
export function sixToast(num: number): number {
  return num - 6 >= 0 ? num - 6 : 6 - num;
}
