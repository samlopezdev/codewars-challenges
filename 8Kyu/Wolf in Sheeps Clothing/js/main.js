// A Wolf In Sheep's Clothing

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"


// Most Logical Solution:
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}



// Other Solutions
function warnTheSheep(queue) {
    let sheepIndex = queue.length - queue.indexOf('wolf') - 1;
    if (sheepIndex === 0)
        return 'Pls go away and stop eating my sheep';
    return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}



// 2
const warnTheSheep = a => (a = a.length - a.indexOf('wolf') - 1) ?
  `Oi! Sheep number ${a}! You are about to be eaten by a wolf!`:
  'Pls go away and stop eating my sheep';



// 3
function warnTheSheep(queue) {
    let {length} = queue;
    length--;
    if(queue[length] === 'wolf') return "Pls go away and stop eating my sheep";
    for(let i = length; i >= 0; i--){
      if(queue[i] === 'wolf'){
        return `Oi! Sheep number ${length-i}! You are about to be eaten by a wolf!`;
      }
    }
}




// 4
const warnTheSheep = (queue) => {
    const reversedArr = queue.reverse();
    const wolfIndex = reversedArr.indexOf("wolf");
  if (wolfIndex === 0 ) {
    return "Pls go away and stop eating my sheep"
  }
    return  `Oi! Sheep number ${wolfIndex}! You are about to be eaten by a wolf!`
}
