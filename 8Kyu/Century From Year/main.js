// // Century From Year
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28



// My Solution
function century(year) {
    return Math.ceil(year / 100)
}


// Other Solutions
const century = year => Math.ceil(year/100)


// 2
function century(year) {
    var century = 0;
    
    for(var i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
}


// 3
const century = year => year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;


// 4
function century(year) {
    if (year <= 100){
      return 1;
    }
  
    let cen = parseInt(year / 100);
    let rem = year % 100;
    
    return rem === 0 ? cen : cen + 1;
}