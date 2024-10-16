// Dollars & Cents

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10



// Logical Solution:
function formatMoney(amount){
    return '$' + amount.toFixed(2);
}


// Other Solutions:
let formatMoney = (amount) => `$${amount.toFixed(2)}`



// 2
function formatMoney(amount){
    return '$' + amount + (amount % 1 === 0 ? ".00" : amount * 10 % 1 === 0 ? "0" : "")
}


// 3
function formatMoney(amount){
    var dollars = Math.floor(amount);
    var cents = (amount - dollars).toFixed(2).toString().substring(1);
    return "$" + dollars + cents;
}


// 4
function formatMoney(amount){
    if (amount.toString().indexOf('.') < 0){
      amount = amount + '.00';
    } else if (amount.toString().indexOf('.') === amount.toString().length - 2){
      amount = amount + '0';
    }
    return '$' + amount;
}


// 5
function formatMoney(amount){
    amount = amount.toString().split('');
    switch(amount.indexOf('.')){
      case -1:
        amount.push('.00');
        break;
      case amount.length - 2:
        amount.push('0');
    }
    amount.unshift('$');
    return amount.join('');
}