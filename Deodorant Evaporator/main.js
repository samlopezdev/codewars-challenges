// Deodorant Evaporator
// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29
// Note:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.


// Logical Solution
function evaporator(content, evap_per_day, threshold){ 
    var days = 0;
    var gas = 100;
      while(gas >= threshold){
        gas -= gas * evap_per_day / 100;
        days++;
    }
      return days;
}


// Other Solutions
function evaporator(content, evap_per_day, threshold){ 
    threshold = threshold / 100
    evap_per_day = evap_per_day / 100
    return  Math.ceil(Math.log(threshold) / Math.log(1-evap_per_day))
}


// 2
function evaporator(content, evap_per_day, threshold){ 
    var byvol = content*(threshold/100);
    var result = content;
    var i = 0;
    while (result > byvol){
      result = result - (result*(evap_per_day/100));
      i++;
    }
    return i;
}


// 3
function evaporator(content, evap_per_day, threshold){ 
    let count = 0
    let contentLeft = content
    let contentPercent = 100
    
    while(contentPercent >= threshold) {
      contentLeft -= (evap_per_day * contentLeft / 100)
      contentPercent = contentLeft / content * 100
      count ++
    }
    return count
}


// 4
const evaporator = (content, evapPerDay, threshold) => {
    let day = 0;
    let total = 100;
    
    while (total > threshold) {
      day += 1;
      total -= total * evapPerDay / 100;
    }
    
    return day;
}