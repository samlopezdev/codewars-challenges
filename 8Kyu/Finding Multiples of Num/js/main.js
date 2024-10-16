// Find Multiples of a Number

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.


// My Solution:
function findMultiples(integer, limit) {
    let mul = []
    
    for (let i = 1; i <= limit; i++) {
        if (i % integer === 0) {
        mul.push(i)
        }
    }
    
    return mul
}


// Other Solutions:
function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
}



// 2
function findMultiples(int,limit){
    return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
}



// 3
function findMultiples(int,limit){
    let multiples = [];
    for(let i = int; i <= limit; i += int){ multiples.push(i); }
    return multiples;
}


// 4
const findMultiples = ( int, limit ) => Array.from({ length: limit/int }, ( _, i ) => ( i + 1 ) * int );



// 5
var findMultiples = (integer, limit) => [...Array(Math.floor(limit / integer)+ 1).keys()].map(e=> e * integer).slice(1)