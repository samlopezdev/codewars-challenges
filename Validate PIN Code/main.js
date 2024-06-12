// Regex Validate PIN Code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


// Logical Solution
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}


// Other Solutions
function validatePIN (pin) {
    //return true or false
      var n = pin.length;
    
      if( n != 4 && n != 6)
            return false;
    
    for (var i in pin)
            if (pin[i] > '9' || pin[i] < '0')
                return false;
    return true;
}



// 2
function validatePIN (pin) {
    let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let count = 0;
    let pinArr = pin.split('');
    for (let i of pinArr) {
      if (num.includes(i)) {
        count += 1;
      } else {
        return false;
      }
    }
    return count == 4 || count == 6;
}



// 3
function validatePIN (pin) {
    if (pin.length === 4 || pin.length ===6) {
      return pin.split('').every((num) => !isNaN(parseInt(num)));
    }
    return false;
}


// 4
const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);