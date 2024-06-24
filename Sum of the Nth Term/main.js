// Sum of the Nth Term

Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

Series:1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +…
You will need to figure out the rule of the series to complete this.

Rules
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return "0.00".

You will only be given Natural Numbers as arguments.

Examples (Input --> Output)
n
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"



// Logical Solution
function SeriesSum(n) {
    for (let s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
}



// Other Solutions
function SeriesSum(n) {
    let sum = 0;
    for(let i = 0; i < n; i++) {
      sum += 1 / (3 * i + 1);
    }
    return sum.toFixed(2);
}


// 2
function SeriesSum(n)
{
  let s = 0;
  while(n) {
    s += 1/(1 + 3 * --n);
  }
  return s.toFixed(2);
}


// 3
const SeriesSum = (n, acc = 0) => {
    if (n === 0) return acc.toFixed(2);
    else return SeriesSum(n - 1, acc + 1/(3*n - 2));
}



// 4
function SeriesSum(n) {
  let result = 0;
  
  while (n > 0){
    n--;
    result += 1/(1+3*n);   
  }
  
  return result.toPrecision(3).toString(); 
}