// Total Amount Of Points

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


// Most Logical Solution:
function points(games) {
    let total = 0;
    games.map(game => {
      if (game[0] === game[2]) {
        total += 1;
      } else if (game[0] > game[2]) {
        total += 3;
      }
    });
    return total;
}


// Other Solutions:
const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)


// 2
function points(games) {
    // totalPoints will store the accumulated points
    let totalPoints = 0;
      
      // loop through the games array to get the scores
      for(i=0; i<games.length; i++) {
     
       // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
        let xScore = Number(games[i].charAt(0)); 
        let yScore = Number(games[i].charAt(2));
        
        // Add points depending on the values of xScore compared to yScore
        if (xScore > yScore) { totalPoints += 3; }
        if (xScore < yScore) { totalPoints += 0; }
        if (xScore === yScore) { totalPoints += 1; }
      }
      
      return totalPoints;
}


// 3
function points(games) {
    return games.reduce((current, element) => {
      let arraySplit = element.split(':');
      return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
    }, 0);
}


// 4
const points = games => games
  .map(str => str.split(':').map(Number))      // parse
  .map(([x, y]) => x > y ? 3 : x < y ? 0 : 1)  // determine points
  .reduce((sum, points) => sum + points, 0);   // sum points