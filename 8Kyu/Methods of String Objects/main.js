// Methods of String Objects

// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

// for example:

// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]



// My Solution
function cutIt(arr) {
  let minLength = Math.min(...arr.map(str => str.length));
  return arr.map(str => str.slice(0, minLength));
}


// Other Solutions
function cutIt(arr) {
  let smallest = arr[0].length;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest) {
      smallest = arr[i].length;
    }
  }
  return arr.map( x => x.slice(0, smallest));
};


// 2
const cutIt = (arr) =>
  arr.map((val) => val.slice(0, Math.min(...arr.map((val) => val.length))));


// 3
function cutIt(arr) {
  let minl = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < minl) {
      minl = arr[i].length;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, minl);
  }
  return arr;
}