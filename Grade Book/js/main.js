// Grasshopper - Grade Book

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.



// My Solution:
function getGrade (s1, s2, s3) {
    if ( (s1 + s2 + s3) / 3 >= 90) {
      return 'A'
    } else if ( (s1 + s2 + s3) / 3 >= 80) {
      return 'B'
    } else if ( (s1 + s2 + s3) / 3 >= 70) {
      return 'C'
    } else if ( (s1 + s2 + s3) / 3 >= 60) {
      return 'D'
    } else {
      return 'F'
    }
}



// Other Solutions:
function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D"
      else if (avg < 80) return "C"
      else if (avg < 90) return "B"
      else return "A"
}



// 2
function getGrade (s1, s2, s3) {
    let s = (s1 + s2 + s3) / 3
    return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}




// 3
function getGrade (s1, s2, s3) {
    let avg = (s1 + s2 + s3) / 3;
    switch(true) {
      case (avg >= 90):
        return 'A';
      case ( avg >= 80):
        return 'B';
      case ( avg >= 70):
        return 'C';
      case ( avg >= 60):
        return 'D'; 
      default:
        return 'F';   
    }
}




// 4
function getGrade (s1, s2, s3) {
    let pct = 0;
  
    for(let j=0; j < arguments.length; j++) {
        pct += arguments[j];
    }
  
    pct = pct/arguments.length;
  
    switch(true) {
        case (pct <= 100 && pct >= 90):
            return 'A'
            break;
        case (pct < 90 && pct >= 80):
            return 'B'
            break;
        case (pct < 80 && pct >= 70):
            return 'C'
            break;
        case (pct < 70 && pct >= 60):
            return 'D'
            break;
        case (pct < 60):
            return 'F'
            break;
        default:
            return null;
            break;
    }
}