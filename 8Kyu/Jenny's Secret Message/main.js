// Jenny's Secret Message

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// My Solution
const greet = (name) =>
  name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;

// Other Solutions
function greet(name) {
  return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;
}

// 2
function greet(name) {
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

// 3
const greet = (name) => `Hello, ${name == "Johnny" ? "my love" : name}!`;
