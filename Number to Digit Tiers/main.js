// Number to Digit Tiers

// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

// Examples
// 420 should return ["4", "42", "420"]
// 2017 should return ["2", "20", "201", "2017"]
// 2010 should return ["2", "20", "201", "2010"]
// 4020 should return ["4", "40", "402", "4020"]
// 80200 should return ["8", "80", "802", "8020", "80200"]
// PS: The input is guaranteed to be an integer in the range [0, 1000000]


// My Solution
function createArrayOfTiers(num) {
    let numArr = []
    let numStr = ""
    
    for (let i = 0; i < num.toString().length; i++) {
      numStr += num.toString()[i]
      numArr.push(numStr)
    }
    return numArr
}


// 2
function createArrayOfTiers(num) {
    let prev = '';
    return [...num + ''].map((value) => {
        return prev += value;
    });
}


// 3
const createArrayOfTiers = num => 
    String(num).split``.map((_, ind, arr) => arr.slice(0, ind +1).join``)


// 4
function createArrayOfTiers(num) {
    let prev = '';
    return num.toString().split('').map(el => {
      return prev += el
    })
}


// 5
function createArrayOfTiers(num) {
    let finalArray = [];
    let numtoStr = String(num);
      for (let i = 0; i < numtoStr.length; i++){
        finalArray.push(numtoStr.slice(0,i+1));
      }
      return finalArray;
}


// 6
function createArrayOfTiers(num) {
    let a = []
    for (let i = 0; i < String(num).length; i++) {
      a.push(String(num).substring(0,i+1))
    }
    return a
}