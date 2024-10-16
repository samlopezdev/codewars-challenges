// No Zeros For Heros

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway


// My Solution
function noBoringZeros(n) {
    let arr = String(n).split('')
    
    if (arr[arr.length - 1] === '0') 
    {
      while (arr[arr.length - 1] === '0') arr.pop()
    }
    
    return Number(arr.join(''))
}


// Other Solutions
function noBoringZeros(n) {
    while( n % 10 == 0 && n != 0 ) { n / = 10;}
    return n;
}


// 2
function noBoringZeros(n) {
    return +`${n}`.replace(/0*$/, "");
}


// 3
const noBoringZeros = (n) => {
    if (n === 0) return 0;
    n = String(n).split('');
  
    for (let i = n.length - 1; i > 0; i--) {
      if (n[i] === '0') {
        n.pop();
      } else {
        return +n.join('');
      }
    }
};