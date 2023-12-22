// Ensure Question

// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"



// My Solution:
function ensureQuestion(s) {
    return s.includes('?') ? s : s.concat('?')
}

// Other Solutions:
const ensureQuestion = s => s.endsWith('?') ? s : s+'?'


// 2
function ensureQuestion(s) {
    return s.includes('?') ? s : `${s}?`
}


// 3
function ensureQuestion(s) {
    return s[s.length-1] === '?' ? s : `${s}?`
}


// 4
function ensureQuestion(s) {
    return s.slice(-1) === '?' ? s : s + '?'
}


// 5
const ensureQuestion = str => str.includes('?', -1) ? str : `${str}?`



// 6
function ensureQuestion(s) {
    if (s.includes('?')) {
      return s
    } else {
      return s.concat('?')
    }
}