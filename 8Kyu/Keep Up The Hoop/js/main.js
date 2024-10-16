// Keep Up The Hoop
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".


// My Solution
const hoopCount = n => n <= 10 ? `Great, now move on to tricks` : `Keep at it until you get it`


// Other Solutions
function hoopCount (n) {
    if(n < 10){ 
      return "Keep at it until you get it";
    }
    else { 
      return  "Great, now move on to tricks";
    }   
}


// 2
function hoopCount (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}



// 3
function hoopCount (n) {
    let times = n;
    let error = 'Invalid input';
    let congrats = 'Great, now move on to tricks';
    let encourage = 'Keep at it until you get it';
    if (times <= 9) {
      return encourage;
    } else if (times >= 10) {
      return congrats;
    } else {
    return error;
    }
}