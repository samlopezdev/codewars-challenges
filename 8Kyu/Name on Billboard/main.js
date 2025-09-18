// Name on Billboard

// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (always 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).


// My Solution
function billboard(name, price = 30) {
  return [...name].reduce((sum, letter) => sum + price, 0);
}



// Other Solutions
function billboard(name, price = 30) {
  let result = 0;

  for (let i = 0; i < name.length; i++) {
    result += price;
  }
  return result;
}


// 2
function billboard(name, price = 30) {
  return Math.imul(name.length, price);
} 


// 3
const billboard = (name, price = 30) => +(name.length / (1 / price));