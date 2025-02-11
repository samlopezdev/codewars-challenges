// The Office I - Outed

// Your colleagues have been looking over your shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object ( meet ) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room ( boss ). Their score is worth double its face value (but they are still just one person!).

// My Solution
// meet -> object. 'name': number between 0 & 10
// boss -> string. name in meet object

function outed(meet, boss) {
  // total up & find average of ppls happiness (numbers).
  // boss' number is doubled
  let sum = 0;

  // loop thru meet values and count
  for (const person in meet) {
    if (person === boss) {
      sum += meet[person] * 2;
    } else {
      sum += meet[person];
    }
  }

  const numOfPeople = Object.entries(meet).length;

  return sum / numOfPeople <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

// console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'), 'Get Out Now!')

// Other Solutions
function outed(meet, boss) {
  let names = Object.keys(meet);
  let score = names.reduce((s, v) => s + meet[v], 0) + meet[boss];
  return score / names.length > 5 ? "Nice Work Champ!" : "Get Out Now!";
}

// 2
function outed(meet, boss) {
  let rating = Object.values(meet);
  let res = rating.reduce((a, b) => a + b, meet[boss]);
  res = res / rating.length;
  return res <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}

// 3
function outed(meet, boss) {
  const scores = Object.values(meet);
  const average = (scores.reduce((a, b) => a + b) + meet[boss]) / scores.length;
  return average <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
