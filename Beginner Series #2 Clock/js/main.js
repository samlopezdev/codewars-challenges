// Beginner Series #2 Clock

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59


// My Solution
function past(h, m, s){
    let convertedHours = h * 3600000
    let convertedMinutes = m * 60000
    let convertedSeconds = s * 1000
    
    return convertedHours + convertedMinutes + convertedSeconds
}


// Other Solutions
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
}


// 2
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s)



// 3
function past(h, m, s){
    let milliseconds = 0;
    if (h >= 0 && h <= 23){
      milliseconds += (h * 3600000);
    };
    if (m >= 0 && m <= 59){
      milliseconds += (m * 60000);
    };
    if (s >= 0 && s <= 59){
      milliseconds += (s * 1000);
    };
    
    return milliseconds;
}



// 4
function past(h, m, s){
    return h * 3600000 + m * 60000  + s * 1000;
}



// 5
function past(h, m, s){
    const setTime = new Date().setHours(h, m, s);
    const midnight = new Date().setHours(0, 0, 0);
    
    return Math.round(setTime - midnight);
}