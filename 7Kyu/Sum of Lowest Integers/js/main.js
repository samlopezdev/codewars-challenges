// Sum of Two Lowest Positive Integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


// My Solution
function sumTwoSmallestNumbers(numbers) {  
    let sortedNums = numbers.sort( (a, b) => a - b)
    return sortedNums[0] + sortedNums[1]
}



// Other Solutions
function sumTwoSmallestNumbers(numbers){  
    numbers = numbers.sort(function(a, b){return a - b; });
    return numbers[0] + numbers[1];
}


// 2
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
}


// 3
const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y)



// 4
function sumTwoSmallestNumbers(numbers) {  

    const [a, b] = [...numbers].filter(e => e>= 0).sort((a,b) => a - b);
    
    return a + b;
    
}