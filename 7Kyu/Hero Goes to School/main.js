// Simple Fun #173: A Hero Go To The School

// Hero wants to go to his school by bus, and he has only 2$, but he wants to save as much as he can out of them.
// But he also can't be late to school, so he decided to play a game.
// Given the buses he can wait without being late, you should tell him which to take.

// Notes:
// Not all buses are going to Hero's school.

// There are two kinds of buses: "blue" -> which costs 2$, "red" -> which costs 1$ (cheaper, right?)

// Hero MUST take one of those buses, even if he will pay 2$.

// Hero should take the first bus that goes to his school and costs less than others, i.e. if he can take a red bus, he will take the first one, if he can't, he should take the first blue one.

// Example
// For busesColors = ["red","red","blue"], goingToSchool = [true, true, true], the result should be 0.

// Because the 0th bus is red and goes to his school.

// For busesColors = ["red","red","red","blue"], goingToSchool = [false, false, false, true], the result should be 3.

// Because only the 3rd bus goes to his school.


// My Solution

// busColors -> array of strings ['red', 'blue', 'red']
// goingToSchool -> array of booleans. Array correlates to busColors
// return -> index of cheapest bus to take
function whichBusToTake(busColors, goingToSchool) {
    // loop thru busColors array
    for (let i = 0; i < busColors.length; i++) {
      // check if there is a red bus going to his school
      if (busColors[i] === 'red' && goingToSchool[i]) return i
    }
    
    for (let i = 0; i < busColors.length; i++) {
      // check if there is a blue bus going to his school
      if (busColors[i] === 'blue' && goingToSchool[i]) return i
    }
}
// console.log(whichBusToTake(
//           ["red","red","blue"],
//           [true, true, true]),0))
  
// console.log( whichBusToTake(
//           ["blue","red","red","red","blue","red","blue"],
//           [true, false, false, false, true, true, false]),5) )


// Other Solutions
function whichBusToTake(busesColors, goingToSchool) {
    const index = (color) => busesColors.findIndex((c, i) => c == color && goingToSchool[i])
    return index('red') >= 0 ? index('red') : index('blue')
}


// 2
function whichBusToTake(bus, bool) {
    bus = bus.map((i, ind) => bool[ind] ? i : '')
    return bus.includes('red') ? bus.indexOf('red') : bus.indexOf('blue')
}