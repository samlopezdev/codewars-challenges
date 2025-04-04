// Descending Order

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321



// My Solution
function descendingOrder(n){
    const largestNumStr = n.toString()
                            .split('')
                            .sort( (a, b) => b - a)
                            .join('')
    
    return Number(largestNumStr)
}



// Other Solutions
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}


// 2
function descendingOrder(n) {
    return +n.toString().split('').sort().reverse().join('');
}


// 3
function descendingOrder(n){
    return +(n+'').split('').sort().reverse().join('')
}


// 4
function descendingOrder(n){
  
    n = [...n.toString()];
    
    return Number(
              n
              .sort()
              .reverse()
              .join('')
            );
}