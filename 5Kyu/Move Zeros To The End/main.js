// Move Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"])
// returns[false,1,1,2,1,3,"a",0,0]

// My Solution
// arr -> array of anything (numbers, booleans, strings?). Could be empty.
// return -> same array, with any 0's moved to the end.
function moveZeros(arr) {
  const filterArr = arr.filter((val) => val !== 0);
  const numOfZeros = arr.filter((val) => val === 0).length;
  const zeroArr = new Array(numOfZeros).fill(0);
  return filterArr.concat(zeroArr);
}

console.log(
  moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
  [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
);

// Other Solutions
const moveZeros = (arr) => {
  const filtedList = arr.filter((num) => num !== 0);
  const zeroList = arr.filter((num) => num === 0);
  return filtedList.concat(zeroList);
};

// 2
const moveZeros = (arr) => {
  return [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)];
};

// 3
function moveZeros(arr) {
  return arr.sort((a, b) => (b === 0 ? -1 : 0));
}

// 4
const moveZeros = (arr) => {
  let result = arr.filter((c) => c !== 0);
  let count = arr.length - result.length;

  return result.concat(Array(count).fill(0));
};
