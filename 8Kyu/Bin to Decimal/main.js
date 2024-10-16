// Bin to Decimal

// Complete the function which converts a binary number (given as a string) to a decimal number.

// My Solution
function binToDec(bin){
    return parseInt(bin,2);
}


// Other Solutions
const binToDec = bin => parseInt(bin,2);


// 2
const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);


// 3
function binToDec(bin){
    return bin.split("").reverse().map(function(a,b){return Number(a) * Math.pow(2,b)}).reduce(function(a,b){return a+b});
}


// 4
function binToDec(bin){
    return bin.split('')
      .reverse()
        .map((x,i)=>x==1?Math.pow(2,i):0)
          .reduce((a,b)=>a+b,0);
}