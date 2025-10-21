// Valid Parentheses

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// My Solution
export function validParentheses(parenStr: string): boolean {
  let countParPair = 0;

  for (const char of parenStr) {
    if (char === "(") {
      countParPair++;
    } else if (char === ")") countParPair--;
    if (countParPair < 0) {
      return false;
    }
  }
  return countParPair === 0;
}


// Other Solutions
export function validParentheses(parenStr: string): boolean {
  let i = 0;
  for (const c of parenStr) {
    if (c == "(") i++;
    if (c == ")") {
      i--;
      if (i < 0) return false;
    }
  }

  return i == 0;
}


// 2
export function validParentheses(parenStr: string): boolean {
  let count = 0;
  for (const c of parenStr) {
    if (c == "(") count += 1;
    else count -= 1;
    if (count < 0) return false;
  }
  return count == 0;
}


// 3
export function validParentheses(parenStr: string): boolean {
  const stack: string[] = [];
  for (const char of parenStr) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}   

// 4
export function validParentheses(parenStr: string): boolean {
  while (parenStr.includes("()")) {
    parenStr = parenStr.replace(/\(\)/g, "");
  }
  return parenStr.length === 0;
}