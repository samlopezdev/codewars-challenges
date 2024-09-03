// Email Address Obfuscator

// Many people choose to obfuscate their email address when displaying it on the Web. One common way of doing this is by substituting the @ and . characters for their literal equivalents in brackets.

// Example 1:

// user_name@example.com
// => user_name [at] example [dot] com
// Example 2:

// af5134@borchmore.edu
// => af5134 [at] borchmore [dot] edu
// Example 3:

// jim.kuback@ennerman-hatano.com
// => jim [dot] kuback [at] ennerman-hatano [dot] com
// Using the examples above as a guide, write a function that takes an email address string and returns the obfuscated version as a string that replaces the characters @ and . with [at] and [dot], respectively.

// Notes

// Input (email) will always be a string object. Your function should return a string.
// Change only the @ and . characters.
// Email addresses may contain more than one . character.
// Note the additional whitespace around the bracketed literals in the examples!


// My Solution
obfuscate = function(email) {
    return email.replace('@', ' [at] ').replaceAll('.', ' [dot] ')
}


// Other Solutions
const obfuscate = email => email.replace(/@/gi, " [at] ").replace(/\./gi, " [dot] ");


// 2
obfuscate = function(email) {
    email = email.replace(/\./g, ' [dot] '); 
    email = email.replace(/@/g, ' [at] '); 
    return email;
}


// 3
const obfuscate = email => email.replace(/[.@]/gi, m => ` [${ {'@':'at','.':'dot'}[m] }] `);


// 4
obfuscate = function(email) {
    return email.split('').map(item => (item !== '@') ? item === '.' ? item = ' [dot] ': item = item : item = ' [at] ').join('')
}