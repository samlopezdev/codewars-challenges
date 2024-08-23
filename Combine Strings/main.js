// Grasshopper - Combine Strings

// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'



// My Solution
function combineNames(firstN, lastN) {
    return `${firstN} ${lastN}`
}


// Other Solutions
const combineNames = (a, b) => `${a} ${b}`;


// 2
function combineNames(firstName, lastName) {
    if(typeof firstName === 'string' && typeof lastName === 'string') {
      if(firstName !== '' && lastName !== '') {
        return firstName + ' ' + lastName;
      }
      else {
        return 'Sorry firstname or lastname cannot be blank'
      }
    }
    
    else {
      return 'firstName and lastName must be a string';
    }
    
}


// 3
function combineNames(first, last) {
    return first + " " + last;
}