// Super Duper Easy

// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".


// My Solution
function problem(x){
    return typeof x === 'number' ? (x * 50) + 6 : "Error"
}


// Other Solution
function problem(x){
    if (typeof x != 'number') return "Error"
  
    return (x * 50) + 6
}


// 2
const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;


// 3
function problem(x){
    let sum = x * 50 + 6;
    if(x > 0 || x < 0 || x === 0)
    return sum
    else {
    return "Error"
  }
}



// 4
function problem(x){
  
    const solution = x * 50 + 6
    const error = "Error"
    
    const isNumber = value => {
      
    if ( typeof value !== 'number' )
      return false
    
    if ( value !== Number(value) ) 
      return false
    
    if ( value === Infinity || value === !Infinity ) 
      return false
    
    return true
      
    }
    
    return isNumber(x) ? solution : error
  
}