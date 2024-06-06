// Check the Exam

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

//     Correct answer    |    Student's answer   |   Result         
//  ---------------------|-----------------------|-----------
//  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0



// My Solution
function checkExam(array1, array2) {
    let result = 0
    
    for (let i = 0; i < array2.length; i++) {
      if (array1[i] === array2[i])
      {
        result += 4
      } 
      
      else if (array2[i] === "")
      {
        result += 0
      }  
  
      else 
      {
        result -= 1 
      }   
    }
    
    return result > 0 ? result : 0
}


// Other Solutions
function checkExam(array1, array2) {
    const reducer = (a, e, idx) => {
      if (e === "") {
        return a;  
      }
      
      if (e === array1[idx]) {
        return a += 4;
      }
      
      return --a;
    }
    const score = array2.reduce(reducer, 0);
    return score < 0 ? 0 : score;
}


// 2
function checkExam(array1, array2) {
    let counter = 0;
      for (i = 0; i < array2.length; i++) {
          switch (true) {
              case (array2[i] === ""):
                  counter = counter
                  break;
              case (array2[i] === array1[i]):
                  counter = counter + 4;
                  break;
              case (array2[i] !== array1[i]):
                  counter = counter - 1
                  break;
              default:
                  break;
          }
     }
      return counter >= 0 ? counter : 0
}



// 3
function checkExam(array1, array2) {
    var score = 0;
    
    for(var i = 0; i < array1.length; i++) {
      array1[i] === array2[i] && array1[i] != '' ? score+=4 : array1[i] !== array2[i] && array2[i] !== '' ? score-- : score+=0;
    }
    return score < 0 ? 0 : score;
}


// 4
function checkExam(arr1, arr2) {
    let result = arr2.reduce((c, el, i) => el.length ? (el == arr1[i] ? c+4 : c-1) : c, 0);
    return result < 0 ? 0 : result;
}