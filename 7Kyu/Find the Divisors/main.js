//  Find the Divisors

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Examples:
// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"


// My Solution

// integer -> number > 1 (2 or higher)
// return -> array of nums that can divide integer evenly
function divisors(integer) {
    // create arr to hold divisors
    let divisors = []
    // loop count to integer
    for (let i = 2; i < integer; i++) {
      // push nums equally divisible to arr
      if (integer % i === 0) divisors.push(i)
    }
    // check for empty arr (prime number) & return
    return divisors.length > 0 ? divisors : `${integer} is prime`
}
// console.log( divisors(12), [2, 3, 4, 6]))
// console.log( divisors(13), "13 is prime"))


// Other Solutions
const divisors = (integer) => {
    const numberDivisors = []
    
     for (let i = 2; i < integer; i++)
       integer % i === 0 && numberDivisors.push(i)
     
     return numberDivisors.length ? numberDivisors : `${integer} is prime`
};


// 2
function divisors(integer) 
{
	var arr=[];
	var sqr=Math.sqrt(integer);

	var i=2;
	for(; i<=sqr; i++)
	{
		if(integer % i) continue;
		arr.push(i);
		arr.push(integer/i);
	}
	if(i-1 == sqr)
		arr.pop();
	
	return arr.length ? arr.sort(function (a,b){return a-b;}) : (integer+" is prime");
};