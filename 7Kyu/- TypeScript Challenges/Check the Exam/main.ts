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
// arr1 -> array of letters (strings). Will either be "a", "b", "c", "d"
// arr2 -> array of correct letters
// return -> total of correct answers (number)
export function checkExam(array1: string[], array2: string[]): number {
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] === "") score + 0;
    else array1[i] === array2[i] ? (score += 4) : (score -= 1);
  }

  return score > 0 ? score : 0;
}

// Other Solutions
export function checkExam(array1: string[], array2: string[]): number {
  return Math.max(
    0,
    array2.reduce((a, b, i) => a + (b == "" ? 0 : b === array1[i] ? 4 : -1), 0)
  );
}


// 2
export function checkExam(array1: string[], array2: string[]): number {
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    score += array1[i] == array2[i] ? 4 : array2[i] == "" ? 0 : -1;
  }

  return score < 0 ? 0 : score;
}

// 3
export const checkExam = (arr1: string[], arr2: string[]): number =>
  Math.max(
    arr1.reduce(
      (sum, ans, i) => sum + (ans && arr2[i] ? (ans === arr2[i] ? 4 : -1) : 0),
      0
    ),
    0
  );

// 4
export function checkExam(array1: string[], array2: string[]): number {
  let score = 0;

  for (let i = 0; i < array1.length; i++) {
    switch (array2[i]) {
      case array1[i]: {
        score += 4;
        break;
      }
      case "": {
        break;
      }
      default: {
        score -= 1;
        break;
      }
    }
  }
  return score < 0 ? 0 : score;
}