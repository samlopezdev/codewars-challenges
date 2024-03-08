// Twice As Old

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.


// My Solution:
function twiceAsOld(dadYearsOld, sonYearsOld) {
    if (sonYearsOld * 2 >= dadYearsOld) {
      return sonYearsOld * 2 - dadYearsOld
    } else {
      return dadYearsOld - (sonYearsOld * 2)
    }
}


// Other Solutions:
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}


// 2
const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - sonYearsOld * 2)


// 3
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let calculation = (dadYearsOld - sonYearsOld) - sonYearsOld
    if(calculation < 0) {
      return calculation * -1
    } else {
      return calculation
    }
}


// 4
function twiceAsOld(a, b) {
    return a > (2* b) ? a - (2 * b) : (2 * b) - a;
}