// Filter Method

// Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:
// {S:888, A:888, B:888, C:888, D:888, X:888}
// Grading rules:

// Grade S: Full marks(score=100)
// Grade A: score<100 and score>=90
// Grade B: score<90 and score>=80
// Grade C: score<80 and score>=60
// Grade D: score<60 and score>=0
// Grade X: score=-1(The cheating guy gets a score like that)
// Example
// countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
// countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
// countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}

// My Solution
function countGrade(scores) {
  const finalScores = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0,
  };

  for (const score of scores) {
    switch (true) {
      case score === 100:
        finalScores["S"] += 1;
        break;
      case score >= 90:
        finalScores["A"] += 1;
        break;
      case score >= 80:
        finalScores["B"] += 1;
        break;
      case score >= 60:
        finalScores["C"] += 1;
        break;
      case score >= 0:
        finalScores["D"] += 1;
        break;
      case score < 0:
        finalScores["X"] += 1;
        break;
    }
  }
  return finalScores;
}


// Other Solutions
function countGrade(scores) {
  return {
    S: scores.filter(function (x) {
      return x == 100;
    }).length,
    A: scores.filter(function (x) {
      return x < 100 && x >= 90;
    }).length,
    B: scores.filter(function (x) {
      return x < 90 && x >= 80;
    }).length,
    C: scores.filter(function (x) {
      return x < 80 && x >= 60;
    }).length,
    D: scores.filter(function (x) {
      return x < 60 && x >= 0;
    }).length,
    X: scores.filter(function (x) {
      return x == -1;
    }).length,
  };
}


// 2
function countGrade(scores) {
  return {
    S: scores.filter(x => x == 100).length,
    A: scores.filter(x => x < 100 && x >= 90).length,
    B: scores.filter(x => x < 90 && x >= 80).length,
    C: scores.filter(x => x < 80 && x >= 60).length,
    D: scores.filter(x => x < 60 && x >= 0).length,
    X: scores.filter(x => x == -1).length,
  };
}


// 3
function countGrade(scores) {
  const output = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
  for (const score of scores) {
    output.S += score >= 100;
    output.A += score >= 90 && score < 100;
    output.B += score >= 80 && score < 90;
    output.C += score >= 60 && score < 80;
    output.D += score >= 0 && score < 60;
    output.X += score < 0;
  }
  return output;
}
