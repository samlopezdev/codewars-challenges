// Personalized Message 

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


// My Solution
function greet (name, owner) {
    return name === owner ? 'Hello boss' : 	'Hello guest';
}


// Other Solutions
function greet (name, owner) {
    return `Hello ${name==owner?'boss':'guest'}`
}


// 2
const greet = (name, owner) => name == owner? 'Hello boss': 'Hello guest'


// 3
function greet (name, owner) {
    const greetings = {
      [true] :'Hello boss',
      [false]:'Hello guest',
    }
    
    return greetings[name === owner]
}


// 4
function greet (name, owner) {
    if (name === owner) {
      return 'Hello boss';
    }
    return 'Hello guest';
}