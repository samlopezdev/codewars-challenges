// How old will we be?

// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.



// My Solution:
function  calculateAge(birthYear, yearToCount) {
    let num = 0
    if (birthYear < yearToCount) {
      num = yearToCount - birthYear
      if (num === 1) {
        return `You are 1 year old.`
      }
      return `You are ${num} years old.`
    
    } else if (birthYear == yearToCount){
      return `You were born this very year!`
    
    } else {
      num = birthYear - yearToCount
      if (num === 1) {
        return `You will be born in 1 year.`
      }
      return `You will be born in ${num} years.`
    }
}


// Other Solutions:
function  calculateAge(m, n) {
	if(m == n) return 'You were born this very year!';
  var year = Math.abs(m-n) == 1 ? 'year' : 'years';
  if(m < n) return "You are "+(n-m)+' '+year+' old.';
  if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
}



// 2
let calculateAge = (b, c) => {
    r = c - b;
    switch(true) {
      case (r>1):    return "You are " + r + " years old."; break;
      case (r===1):  return "You are 1 year old."; break;
      case (r===0):  return "You were born this very year!"; break;
      case (r===-1): return "You will be born in 1 year."; break;
      case (r<-1):   return "You will be born in " + (-r) + " years."; break;
    }
}



// 3
function  calculateAge(a,b) {
    return a > b ? `You will be born in ${a-b} year ${a-b==1?"":"s"}.`:
           a < b ? `You are ${b-a} year${b-a==1?"":"s"} old.`:
           `You were born this very year!`
}



// 4
var calculateAge = (old, news) => {
    if ( old === news ) {
      return "You were born this very year!" 
    }else if ( news > old ) {
      return news - old === 1 ? "You are 1 year old." : `You are ${news - old} years old.`
    }else{
      return old - news === 1 ? "You will be born in 1 year." : `You will be born in ${old - news} years.`
    } 
}