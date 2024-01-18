// JS Training 6 - Booleans & Conditionals

// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".


// My Solution:
function trueOrFalse(val){
    return val ? "true" : "false"
}



// Other Solutions:
function trueOrFalse(val){
    return Boolean(val).toString();
}




// 2
const trueOrFalse = Boolean;





// 3
function trueOrFalse(val){
    if (val == false  ||   val==null || val==undefined || val==NaN) { 
        return "false";
    }   
    
    else  {  return  "true";}
}