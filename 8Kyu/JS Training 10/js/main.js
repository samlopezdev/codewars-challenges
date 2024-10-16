//  JS Training 10 - Loop Statements / For

// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.



// My Solution:
function pickIt(arr){
    var odd=[],even=[];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i])
      } else {
        odd.push(arr[i])
      }
    }
    
    return [odd,even];
}



// Other Solutions:
function pickIt (arr) {
  
    let odd = []
    let even =[]
        
    for (var x of arr) {
        ((x % 2) ? odd : even).push(x)    
    }
        
    return [odd, even]
}



// 2
function pickIt(arr) {
    const oddEven = [[],[]];
    for (const e of arr)
      oddEven[~e&1].push(e);
    return oddEven; 
}



// 3
const pickIt = arr => [arr.filter(element => element % 2),arr.filter(element => !(element % 2))]




// 4
const pickIt = arr => {
    var odd =[];  var even=[];
    for (let i=0; i < arr.length; i++) {
      arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
    }
    return [odd,even];
}