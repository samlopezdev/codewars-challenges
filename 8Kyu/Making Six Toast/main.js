// Making Six Toast

// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:

// 5 --> 1
// And in case of 12 you need 6 toasts less (but not -6):

// 12 --> 6

// My Solution
// num -> whole positive number.
// returned -> how many more toast is needed
function sixToast(num) {
  return num >= 6 ? num - 6 : 6 - num;
}

console.log(sixToast(3), 3);
console.log(sixToast(17), 11);

// Other Solutions
function sixToast(num) {
  return Math.abs(num - 6);
}

// 2
const sixToast = (n) => Math.abs(6 - n);

// 3
let sixToast = (num) => (num < 6 ? num % 6 : num - 6);
