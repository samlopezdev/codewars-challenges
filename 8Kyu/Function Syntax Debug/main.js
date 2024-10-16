// Grasshopper - Function Syntax Debugging

// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

// function main [verb, noun]
//     return verb + noun
// }


// My Solution
function main (verb, noun) {
    return verb + noun
}


// Other Solutions
const main = (verb, noun) => verb + noun;


// 2
function main(verb, noun) {
    if(arguments.length > 1)
      return verb.trim() + ' ' + noun.trim();
}


// 3
const main = String.prototype.concat.bind('');


// 4
const main = (verb, noun) => {
    return typeof verb !== "string "&& typeof noun !== "string" ? "please provide a string" : `${verb}${noun}`;
}