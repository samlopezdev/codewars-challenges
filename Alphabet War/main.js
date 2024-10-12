// Alphabet War

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!



// My Solution
function alphabetWar(fight) {
    let score = 0
    
    for (let letter of fight) {
      switch (letter) {
          case 'w': score += 4; break;
          case 'p': score += 3; break;
          case 'b': score += 2; break;
          case 's': score += 1; break;
          case 'm': score -= 4; break;
          case 'q': score -= 3; break;
          case 'd': score -= 2; break;
          case 'z': score -= 1; break;
      }
    }
    
    return score > 0 ? "Left side wins!" : score < 0 ? "Right side wins!" : "Let's fight again!"
}


// Other Solutions
function alphabetWar() {
    let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 }
    let result = fight.split('').reduce( (a, b) => a + ( map[b] || 0 ), 0)
    return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!"
}


// 2
function alphabetWar(fight) {
    var powers = {
      'w': 4,
      'p': 3,
      'b': 2,
      's': 1,
      'm': -4,
      'q': -3,
      'd': -2,
      'z': -1
    };
    
    var result = fight.split('').reduce( (total, char) => {
      if (powers.hasOwnProperty(char)) return total + powers[char];
      return total;
    }, 0);
    
    if (result > 0) return 'Left side wins!';
    if (result < 0) return 'Right side wins!';
    return 'Let\'s fight again!';
}


// 3
function alphabetWar(fight) {
    const score = [...fight].reduce((n, c) => n + "sbpw".indexOf(c) - "zdqm".indexOf(c), 0)
    return score === 0 ? "Let's fight again!" : `${score < 0 ? "Right" : "Left"} side wins!`
}


// 4
function alphabetWar(fight){
    const leftSide = {
       "w": 4,
       "p": 3,
       "b": 2,
       "s": 1
     };
   
     const rightSide = {
       "m": 4,
       "q": 3,
       "d": 2,
       "z": 1
     };
   
     let rightCount = 0;
     let leftCount = 0;
   
     for(let char of fight){
       
       if(char in leftSide){
          leftCount += leftSide[char];
       }
   
       if(char in rightSide){
          rightCount += rightSide[char];
       }
     }
   
       if (leftCount > rightCount) return "Left side wins!";
       if (leftCount < rightCount) return "Right side wins!"; 
       return "Let's fight again!";
}