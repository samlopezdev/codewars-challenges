// Sort and Star

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


// My Solution
function twoSort(s) {
    let sorted = s.sort()[0].split('')
    
    for (let i = 0; i < sorted.length - 1; i++) 
    {
      sorted[i] += '***'
    }
    return sorted.join('')
}


// Other Solutions
function twoSort(s) {
    return s.sort()[0].split('').join('***');
}


// 2
const twoSort = s => [...s.sort()[0]].join('***');


// 3
function twoSort(s) {
    var last = s.sort()[0];
    var a = last[0];
    for(var i = 1; i < last.length; i++) {
      a += "***" + last[i];
    }
    return a;
}