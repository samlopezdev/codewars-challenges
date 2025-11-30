// Crash Override

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// Examples
// // These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'


// My Solution
// first & last-> string of lowercase & uppercase letters. Could also be a string of numbers, which needs to be stopped.
// return -> a string that represents persons name, or "Your name must start with a letter from A - Z." if names arent vaild.
function aliasGen(first, last){
  const firstLetter = first[0].toUpperCase()
  const lastLetter = last[0].toUpperCase()
  
  if (firstName[firstLetter] && surname[lastLetter]) {
    return firstName[firstLetter] + ' ' + surname[lastLetter]
  }
  else {
    return "Your name must start with a letter from A - Z."
  }
}


// Other Solutions
function aliasGen() {
  let fName = firstName[arguments[0][0].toUpperCase()];
  let sName = surname[arguments[1][0].toUpperCase()];
  return fName && sName
    ? `${fName} ${sName}`
    : `Your name must start with a letter from A - Z.`;
}


// 2
function aliasGen(first, last) {
  if (
    "0123456789".indexOf(first[0]) != -1 ||
    "0123456789".indexOf(last[0]) != -1
  ) {
    return "Your name must start with a letter from A - Z.";
  }
  first = first.toUpperCase();
  last = last.toUpperCase();
  return firstName[first[0]] + " " + surname[last[0]];
}


// 3
const aliasGen = (first, last) => {
  let charFirst = first[0].toUpperCase();
  let charLast = last[0].toUpperCase();
  if (Number(charFirst) || Number(charLast)) {
    return "Your name must start with a letter from A - Z.";
  } else return `${firstName[charFirst]} ${surname[charLast]}`;
};


// 4
const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);
const aliasGen = (fName, lName) => {
  return isValidName(fName) && isValidName(lName)
    ? `${firstName[initialCap(fName)]} ${surname[initialCap(lName)]}`
    : "Your name must start with a letter from A - Z.";
};