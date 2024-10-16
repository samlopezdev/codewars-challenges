// You Only Need One

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.


// My Solution
function check(a,x){
    return a.includes(x);
};


// Other Solutions
const check = (a,x) => a.includes(x);


// 2
function check(a,x){
    return a.indexOf(x) > -1;
};


// 3
const check = (a, x) =>
  a.some(val => val === x);


// 4
function check(a, x) {
    let res = []
    for (let i = 0; i < a.length; i++) {
      if (a[i] == x) {
        res.push(a[i])
      }  
    }
    return res.length ? true : false;
}