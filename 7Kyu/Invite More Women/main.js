// Invite More Women

// King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

// To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.

// Arthur needs you to return true if he needs to invite more women or false if he is all set.

// Input/Output
// [input] integer array L ($a in PHP)
// An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

// 2 <= L.length <= 50

// [output] a boolean value

// true if Arthur need to invite more women, false otherwise.



// My Solution
// L -> list or array representing the genders of the party members. 1 = men, -1 = women
// return -> boolean. are there more women than men?
function inviteMoreWomen(list) {
  const women = list.filter( gender => gender === -1).length
  const men = list.filter( gender => gender === 1).length
  
  return men > women
}


// Other Solutions
function inviteMoreWomen(L) {
  return L.reduce((a, b) => a + b) > 0;
}


// 2
function inviteMoreWomen(L) {
  let sumWomen = 0;
  let sumMen = 0;
  for (let i = 0; i < L.length; i++) {
    if (L[i] === 1) {
      sumMen += 1;
    } else {
      sumWomen += 1;
    }
  }
  return sumWomen < sumMen;
}


// 3
function inviteMoreWomen(list) {
  let countMen = 0;
  let countWomen = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === -1) countWomen++;
    if (list[i] === 1) countMen++;
  }
  return countWomen < countMen;
}