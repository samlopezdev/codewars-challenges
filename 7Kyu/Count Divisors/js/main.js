// Count The Divisors of a Number

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.


// My Solution
function getDivisorsCnt(n){
    let result = []
    for (let i = 1; i <= n; i++) { 
        if (n % i == 0) { 
            result.push(i); 
        } 
    } 
    return result.length
}



// Other Solutions
function getDivisorsCnt(n){
    let count = 0;
    
      for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          count += 2;
        }
      }
    
      if (Math.sqrt(n) === parseInt(Math.sqrt(n))) {
        count--;
      }
    
      return count;
}




// 2
function getDivisorsCnt(n){
    let count = 0;
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
        count += 2;
        if (i * i === n) {
        count -= 1;
        }
        }
    }
    return count;
}


// 3
function getDivisorsCnt(n){
    var res=[], sqrt=Math.sqrt(n);
    for(let i=1; i<=sqrt; ++i){
      if(n%i==0){res.push(i); res.push(n/i);}
    }
    res = Array.from(new Set(res));
    return res.length;
}