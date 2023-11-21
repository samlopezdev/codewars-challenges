
// Numbers To a Reversed Array

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example -> 35231 => [1,3,2,5,3]

// 1
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}



// 2
digitize = n => [...String(n)].map(Number).reverse()





// 3
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}


// 4
function digitize(n) {
    //code here
    let num = String(n);
    let newArray = [];
    
    for (let i=num.length-1; i>=0; i--) {
      let element = Number(num[i]);
      newArray.push(element); 
    }
    return newArray;
  }