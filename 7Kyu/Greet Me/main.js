// Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"


// My Solution
const greet = (name) => {
  let fName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello ${fName}!`;
};


// Other Solutions
var greet = function (name) {
  return (
    "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!"
  );
};

// 2
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

var greet = function (name) {
  return "Hello " + name.capitalize() + "!";
};


// 3
var greet = function (name) {
  return "Hello " + name[0].toUpperCase() + name.slice(1).toLowerCase() + "!";
};