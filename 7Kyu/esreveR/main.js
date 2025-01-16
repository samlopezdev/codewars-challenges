// esreveR

// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

// (the dedicated builtin(s) functionalities are deactivated)

// My Solution
const reverse = function (array) {
  const reversed = [];

  array.forEach((element) => reversed.unshift(element));

  return reversed;
};

// Other Solution
const reverse = (arr) => {
  let result = [];
  for (let x of arr) result.unshift(x);
  return result;
};

// 2
var reverse = function (array) {
  let newarray = [];
  for (i in array) {
    newarray.unshift(array[i]);
  }
  return newarray;
};

// 3
reverse = function (arr) {
  const out = [];
  for (let $ = arr.length - 1; $ >= 0; $--) {
    out.push(arr[$]);
  }
  return out;
};
