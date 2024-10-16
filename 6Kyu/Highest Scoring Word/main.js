// Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


// Logical Solution
function high(x){
    let alphabets = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    
    let words = x.split(" ");
    let highestScore = 0;
    let highestScoreWord = "";
    
    for (let word of words) {
      let lettersSum = 0;
      
      for (let letter of word) {
        lettersSum += alphabets.indexOf(letter) + 1;
      }
      
      if (lettersSum > highestScore) {
        highestScore = lettersSum;
        highestScoreWord = word;
      }
    }
    
    return highestScoreWord;
}



// Other Solutions
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}


// 2
function high(x){
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    const words = x.split(' ')
    const scores = words.map(x => [...x].map(y => alpha.indexOf(y) + 1)).map(x => x.reduce((a,b) => a + b,0))
    
    return words[scores.indexOf(Math.max(...scores))]
}


// 3
const charToScore = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26 };


function high(x){
    const array = x.split(" ");
    const arrayOfScores = array.map(word => word.split("").reduce((score, char) => score + charToScore[char], 0))
    const indexOfResult = arrayOfScores.indexOf(Math.max(...arrayOfScores));
    return array[indexOfResult];
}



// 4
function high(x){
    console.log(x);
    return x
      .split(' ')
      .map(word => ({
        word,
        score: word
          .split('')
          .map(letter => letter.charCodeAt(0) - 96)
          .reduce((sum, current) => sum + current, 0)
      }))
      .sort((a, b) => a.score - b.score)
      .pop()
      .word;
}