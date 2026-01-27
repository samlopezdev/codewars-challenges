// If you can't sleep, just count sheep!

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// My Solution
// num -> whole number. Not going to be negative.
// return -> string. counting sheep
export function countSheep(num: number): string {
  let sheepCount: string = "";

  for (let i = 1; i <= num; i++) {
    sheepCount += `${i} sheep...`;
  }

  return sheepCount;
}

// Other Solutions
export function countSheep(num: number): string {
  return Array.from({ length: num }, (_, i) => `${i + 1} sheep...`).join("");
}

// 2
export function countSheep(num: number): string {
  let sheepString = "";
  let sheepCounter: number = 0;

  for (let i = 0; i < num; i++) {
    sheepCounter++;
    sheepString += sheepCounter + " sheep...";
  }
  return sheepString; // your code here
}