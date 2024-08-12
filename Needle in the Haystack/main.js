// A Needle in the Haystack

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 


// My Solution
function findNeedle(haystack) {
    let index = haystack.indexOf('needle')
    return `found the needle at position ${index}`
}


// Other Solutions
function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}


// 2
const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;


// 3
function findNeedle(haystack) {
    let pos = haystack.findIndex( el => el === "needle");
    return 'found the needle at position ' + pos;
}


// 4
function findNeedle(array) {
    for (var i=0; i<array.length; i++){
      if (array[i] === 'needle')
        return 'found the needle at position ' + i;
    }
}