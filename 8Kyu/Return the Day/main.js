// Return the Day


// My Solution
function whatday(num) { 
    switch(num) {
        case 1: return "Sunday"
        case 2: return "Monday"
        case 3: return "Tuesday"
        case 4: return "Wednesday"
        case 5: return "Thursday"
        case 6: return "Friday"
        case 7: return "Saturday"
        default: return "Wrong, please enter a number between 1 and 7"
    } 
}


// Other Solutions
function whatday(num) { 
    let days = {
      1: 'Sunday',
      2: 'Monday',
      3: 'Tuesday',
      4: 'Wednesday',
      5: 'Thursday',
      6: 'Friday',
      7: 'Saturday'
    }
    return days[ num ] || 'Wrong, please enter a number between 1 and 7';
}


// 2
function whatday(num) { 
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}



// 3
function whatday(num) { 
    var week = ["","Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    if (num >= 1 && num <= 7){return week[num]}
    else {return "Wrong, please enter a number between 1 and 7"}
}