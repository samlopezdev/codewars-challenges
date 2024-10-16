// Switch / Case Bug Fixing
// Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

// V Current Code V
// function evalObject(value){
//     var result = 0;
//     switch(value.operation){
//       case'+': result = value.a + value.b;
//       case'-': result = value.a - value.b;
//       case'/': result = value.a / value.b;
//       case'*': result = value.a * value.b;
//       case'%': result = value.a % value.b;
//       case'^': result = Math.pow(value.a, value.b);
//     }
//     return result;
// }


// My Solution:
function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b;
        break;
      case'-': result = value.a - value.b;
        break;
      case'/': result = value.a / value.b;
        break;
      case'*': result = value.a * value.b;
        break;
      case'%': result = value.a % value.b;
        break;
      case'^': result = Math.pow(value.a, value.b);
        break;
    }
    return result;
}


// Other Solutions:
let ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
    '%': (a, b) => a % b,
    '^': Math.pow,
}
  
let evalObject = o => ops[o.operation](o.a, o.b)



// 2 Added the Return to each case instead of Break
function evalObject(value){
    switch(value.operation){
      case'+': return value.a + value.b;
      case'-': return value.a - value.b;
      case'/': return value.a / value.b;
      case'*': return value.a * value.b;
      case'%': return value.a % value.b;
      case'^': return Math.pow(value.a, value.b);
    }
}


// 3
const evalObject = v => eval(v.operation == '^' ? `Math.pow(${v.a}, ${v.b})` : `${v.a}${v.operation}${v.b}`)