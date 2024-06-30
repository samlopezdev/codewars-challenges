// Give Me a Diamond

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"


// Logical Solution
function diamond (n) {
    if (n <= 0 || n % 2 === 0) return null
    str = ''
    for (let i = 0; i < n; i++) { 
      let len = Math.abs((n-2*i-1)/2)
      str += ' '.repeat(len)
      str += '*'.repeat(n-2*len)
      str += '\n'
    }
    return str
}


// Other Solutions
function diamond(n){
    if (n < 0 || !(n % 2)) return null; 
    const middleIndex = Math.floor(n / 2);
    
    return Array.apply(null, {length: n})
        .map((el, index) => {
          const indentation = Math.abs(index - middleIndex);
          const numberOfAsterisks = n - indentation * 2;
          return Array(indentation + 1).join(' ') + Array(numberOfAsterisks + 1).join('*');
        })
        .join('\n') + '\n';
}


// 2
function diamond(n){
    if (n < 0 || n % 2 == 0) return null;
    for (var i = 0, diamond = ''; i < n; i++) {
      var stars = n - Math.abs(n - 2*i - 1);
      var spaces = (n - stars) / 2;
      while (spaces-- > 0) diamond += ' ';
      while (stars-- > 0) diamond += '*';
      diamond += '\n';
    }
    return diamond;
}



// 3
const diamond = n => {
    if(n < 1 || n % 2 === 0) return null;
  
    let output = '*'.repeat(n) + "\n";
  
    for(let i = n - 2; i > 0; i -= 2){
      const spaces = ' '.repeat((n - i) / 2);
      const stars = '*'.repeat(i);
      const newRow = spaces + stars + "\n";
        output = newRow + output + newRow;
    }
  
    return output;
}


// 4
function diamond(n) {
    let result = '';
    
    if (n < 0 || n % 2 === 0) return null
    
    for (let i = 0, stars = 1; i < n; i++) {
      result = result + `${' '.repeat(Math.abs(stars - n) / 2)}${'*'.repeat(stars)}\n`
      stars = (i < Math.floor(n / 2)) ? stars + 2 : stars - 2
    }
    
    return result
}