Calculator: Coin Combination

// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickels ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]



// My Solution
function coinCombo (cents) {
    let coins = [1, 5, 10, 25]
    let combo = [0, 0, 0, 0]
    
    for (let i = 3; i >= 0 ; i--) {
      combo[i] = Math.floor(cents / coins[i])
      cents -= combo[i] * coins[i]
    }
    return combo
}



// Other Solutions
const coinCombo = cents => {
    return [25, 10, 5, 1].map(v => {
      let c = ~~(cents / v);
      cents -= (c * v);
      return c;
    }).reverse();
}



// 2
var coinCombo = function(cents) {
    let combo = [0, 0, 0, 0];
  
    if(cents >= 25) {
      combo[3] = Math.floor(cents / 25);
      cents -= combo[3] * 25;
    }
  
    if(cents < 25) {
      combo[2] = Math.floor(cents / 10);
      cents -= combo[2] * 10;
    }
  
    if(cents <= 9) {
      combo[1] = Math.floor(cents / 5);
      cents -= combo[1] * 5;
    }
  
    if(cents < 5) {
      combo[0] = Math.floor(cents);
    }
  
    return combo;
}


// 3
var coinCombo = function(cents) {
    let pennies = 0, nickels = 0, dimes = 0, quarters = 0;
  
    while (cents >= 25) {
      cents -= 25;
      quarters += 1;
    };
    while (cents >= 10) {
      cents -= 10;
      dimes += 1;
    }
    while (cents >= 5) {
      cents -= 5;
      nickels += 1
    }
    while (cents > 0) {
      cents -= 1;
      pennies += 1;
    }
    return [pennies, nickels, dimes, quarters]
}