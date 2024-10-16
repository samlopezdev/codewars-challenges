// Get The Mean of an Array

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


// My Solution
function getAverage(marks){
    let total = marks.reduce( (a, b) => a + b)
    return Math.floor(total / marks.length)
}


// Other Solutions
function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}


// 2
const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);


// 3
function getAverage(marks){
    var sum = 0;
    
    for (var i in marks)
      sum += marks[i];
    
    return parseInt(sum / marks.length);
}