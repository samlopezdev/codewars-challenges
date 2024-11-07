// Alternate Capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.



// My Solution
function capitalize(s){
    let even = s.split('').map( (e, i) => i % 2 === 0 ? e.toUpperCase() : e).join('')
    let odd = s.split('').map( (e, i) => i % 2 !== 0 ? e.toUpperCase() : e).join('')
    return [even, odd];
};



// Other Solutions
function capitalize(s){
    return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};


// 2
function capitalize(s){
    return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
            [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
}


// 3
const capitalize = s => {
    const arr = s.split('');
    let a = '', b = '';
    
    for (let i = 0; i < arr.length; i++) {
      if (i % 2) {
        a += arr[i];
        b += arr[i].toUpperCase();
      } else {
        a += arr[i].toUpperCase();
        b += arr[i];
      }
    }
    
    return [a, b];
};