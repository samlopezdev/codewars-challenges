// Welcome to the City

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!


// My Solution
function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}


// Other Solutions
const sayHello = ( name, city, state ) => `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`


// 2
function sayHello( name, city, state ) {
    let fullName = name.join(" ");  
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}


// 3
function sayHello( name, city, state ) {
    return `Hello, ${[...name].join(' ')}! Welcome to ${city}, ${state}!`
}