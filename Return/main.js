// Fundamentals: Return


// My Solution
function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return a ** b
}
    
function subt(a,b){
    return a - b
}


// Other Solutions
const add = (a, b) => a + b;
const subt = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const mod = (a, b) => a % b;
const exponent = (a, b) => a ** b;


// 2
const calc = {
    add:      (...arg) => arg.reduce((a, b) => a + b),
    multiply: (...arg) => arg.reduce((a, b) => a * b),
    divide:   (...arg) => arg.reduce((a, b) => a / b),
    mod:      (...arg) => arg.reduce((a, b) => a % b),
    exponent: (...arg) => arg.reduce((a, b) => a ** b),
    subt:     (...arg) => arg.reduce((a, b) => a - b),
  };
  
  const add = calc.add;
  const multiply = calc.multiply;
  const divide = calc.divide;
  const mod = calc.mod;
  const exponent = calc.exponent;
  const subt = calc.subt;