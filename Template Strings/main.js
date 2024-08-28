// Template Strings

// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```
// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings


// My Solution
var templateStrings = function(noun, adjective) {
    return `${noun} are ${adjective}`
}


// Other Solutions
var TempleStrings = function(obj, feature) {
    let res = obj + ' ' + 'are' + ' ' + feature;
      return res;
}


// 2
var TempleStrings = function(obj, feature) {
    return obj + " are " + feature;
}