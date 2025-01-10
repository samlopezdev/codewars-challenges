// Hello Name or World

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"


// My Solution

// name -> string. could be empty.
// return -> `hello name`. name is uppercased, and other letters are lowercassd
function hello(name) {
    if (!name) return "Hello, World!"
    
    const newName = name[0].toUpperCase() + name.slice(1).toLowerCase()
    return `Hello, ${newName}!`
}

// Other Solution
const hello = s =>
    `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;


// 2
function hello(name) {
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}


// 3
function hello(name) {
    if (!name) name = 'World';
  
    return `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase() + '!'}`;
}