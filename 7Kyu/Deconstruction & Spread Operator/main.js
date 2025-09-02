// Deconstuction & Spread Operator

// Create a function shuffleIt. The function accepts two or more parameters. The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

// Example:

// shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
// shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
// shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]


// My Solution
function shuffleIt(arr, ...others) {
  for (const [a, b] of others) {
    const first = arr[a],
      second = arr[b];

    arr[a] = second;
    arr[b] = first;
  }

  return arr;
}


// Other Solutions
const shuffleIt = (arr, ...swaps) => {
  swaps.forEach(([a, b]) => ([arr[a], arr[b]] = [arr[b], arr[a]]));
  return arr;
};


// 2
const shuffleIt = (arr, ...ex) => {
  for ([a, b] of ex) [arr[a], arr[b]] = [arr[b], arr[a]];
  return arr;
};


// 3
function shuffleIt(arr, ...exchanges) {
  exchanges.forEach(([i, j]) => ([arr[i], arr[j]] = [arr[j], arr[i]]));
  return arr;
}


// 4
function shuffleIt(arr, ...swaps) {
  swaps.forEach((swap) => {
    let [i, j] = swap;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  });
  return arr;
}
