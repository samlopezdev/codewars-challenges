// Logicl Drill - Traffic Light

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.


// My Solution
function updateLight(current) {
  
    switch (current) {
        case 'green':
          return 'yellow'
        case 'yellow':
          return 'red'
        default:
          return 'green'
    }
}


// Other Solutions
function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}



// 2
function updateLight(current) {
  
    if (current === 'green'){
      current = 'yellow'
    } else if (current === 'yellow') {
      current = 'red'
    } else if (current === 'red') {
      current = 'green'
    } else {}
  
  return current
}


// 3
const updateLight = current => {
    return {
      red: 'green',
      yellow: 'red',
      green: 'yellow'
    }[current];
}



// 4
function updateLight(current) {
    const states = ['green', 'yellow', 'red'];
    let nextStateIndex = (states.indexOf(current) + 1) % states.length;
    return states[nextStateIndex];
}