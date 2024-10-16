// Cat & Dog Years

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// My Solution:
var humanYearsCatYearsDogYears = function(humanYears) { 
    if (humanYears === 1) {
        return [humanYears, 15, 15]
    
    } else if (humanYears === 2) {
        return [humanYears, 24, 24]
    
    } else if (humanYears >= 3) {
      let catYears = 24 + (humanYears - 2) * 4
      let dogYears = 24 + (humanYears - 2) * 5
        return [humanYears, catYears, dogYears]
    }
}



// Other Solutions:
var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}




// 2
const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;
    
    for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15;
        dogYears += 15;
      }
      else if (i === 2) {
        catYears += 9;
        dogYears += 9;
      }
      else {
        catYears += 4;
        dogYears += 5;
      }
    }
    return [humanYears,catYears,dogYears];
}



// 3
const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
    ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
]



// 4
function humanYearsCatYearsDogYears(humanYears) {
    switch (humanYears) {
      case 1:
        return [1, 15, 15]
      case 2:
        return [2, 24, 24];
      default:
        return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
    }
}


// 5
var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = humanYears < 2 ? 15 : humanYears < 3 ? 24 : (humanYears - 2) * 4 + 24
    let dogYears = humanYears < 2 ? 15 : humanYears < 3 ? 24 : (humanYears - 2) * 5 + 24
  return [humanYears,catYears,dogYears];
}