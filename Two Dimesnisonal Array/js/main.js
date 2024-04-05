// Change Two Dimensional Array

// Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

// (You can mutate the input if you want, but it is a better practice to not mutate the input)

// Example:

// Input array

// [
//   [-1,  4, -5, -9,  3 ],
//   [ 6, -4, -7,  4, -5 ],
//   [ 3,  5,  0, -9, -1 ],
//   [ 1,  5, -7, -8, -9 ],
//   [-3,  2,  1, -5,  6 ]
// ]
// Output array

// [
//   [ 0,  4, -5, -9,  3 ],
//   [ 6,  0, -7,  4, -5 ],
//   [ 3,  5,  1, -9, -1 ],
//   [ 1,  5, -7,  0, -9 ],
//   [-3,  2,  1, -5,  1 ]
// ]



// My Solution
function matrix(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][i] < 0) {
          array[i][i] = 0
        }
      else if (array[i][i] >= 0) {
        array[i][i] = 1
      } 
    }
  return array
}



// Other Solutions
function matrix(array) {
    for (let i=0; i<array.length; i++) {
      array[i][i] = array[i][i] < 0 ? 0 : 1
    }
    return array;
}



// 2
const matrix = array =>
  array.map((val, idx) => val.map((v, i) => i === idx ? +(v >= 0) : v))


// 3
function matrix(array) {
    array.forEach((item, index) => {
      item[index] = item[index] < 0 ? 0 : 1
    })
    return array
}