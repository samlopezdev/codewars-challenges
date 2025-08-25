// Methods of String Object - indexOf(), lastIndexOf(), search()

// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

// for example:

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1



// My Solution
// str -> string of lowercase english letters
// c -> string containing a single lowercase english letter.

// return -> a NUMBER. the gap between thr FIRST position of c and the LAST position
function firstToLast(str,c){
  const first = str.indexOf(c), last = str.lastIndexOf(c)
  
  return first === -1 ? first : last - first
}


// Other Solutions
function firstToLast(str, c) {
  return str.indexOf(c) < 0 ? -1 : str.lastIndexOf(c) - str.indexOf(c);
}

// 2
function firstToLast(str, c) {
  return str.lastIndexOf(c) - Math.max(0, str.indexOf(c));
}

// 3
const firstToLast = (str, c) =>
  str.search(c) < 0 ? -1 : str.lastIndexOf(c) - str.indexOf(c);