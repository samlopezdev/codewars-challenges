// Divide & Conquer

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.



// My Solution
function divCon(x){
    let numSum = 0
    let strSum = 0
    
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === 'string') strSum += Number(x[i])
      else { numSum += x[i] }
    }
    
    return numSum - strSum
}



// Other Solutions
function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}


// 2
function divCon(x){
    const strings = x.filter(n => typeof n === 'string')
    const nums = x.filter(n => typeof n === 'number')
    
    const strSum = strings.reduce((acc, str) => acc += +str, 0)
    const numSum = nums.reduce((acc, str) => acc += str, 0)
  
    return numSum - strSum
}


// 3
const divCon = x => x.reduce( (a, b) => a + (0 + b == b ? b : -+ b),0)


// 4
const divCon = x =>
    x.reduce((pre, val) => pre + (val === +val ? val : -val), 0);


// 5
function divCon(arr){
    let numTotal = 0;
    let strNumTotal = 0;

    for (const val of arr) {
        if (typeof val === "number") {
            numTotal += val;
        } else {
            strNumTotal += Number(val);
        }
    }

    return numTotal - strNumTotal;
}