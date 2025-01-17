// Camel Case Method

// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"

// My Solution
// string -> letters? spaces?
// return -> CamelCased string. no spaces. first letter of every word is capital
String.prototype.camelCase = function () {
  // split string by ' ' first
  // map over words.

  return this.split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join("");
};
console.log("say hello".camelCase(), "SayHello");
console.log("camel Case method".camelCase(), "CamelCaseMethod");

// Other Solutions
String.prototype.camelCase = function () {
  return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase());
};

// 2
String.prototype.camelCase = function () {
  if (typeof this !== "string" || !this.length) return "";

  return this.trim()
    .split(" ")
    .map((w) => `${w[0].toUpperCase()}${w.toLowerCase().slice(1)}`)
    .join("");
};

// 3
String.prototype.camelCase = function () {
  if (this.length === 0) {
    return "";
  }
  let arr = this.trim().split(" ");
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
  }
  return res;
};
