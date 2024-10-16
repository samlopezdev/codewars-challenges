// Sort Array by String Length

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.




// My Solution
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
};



// Other Solutions
let sortByLength = arr => arr.sort((a,b) => a.length - b.length);



// 2
function sortByLength(array) {
    let sorted = [];
    
    for (let i = 0; true; i++) {
      for (let j = 0; j < array.length; j++) {
        let string = array[j];
        
        if (string.length === i) {
          sorted.push(string);
        }

        if (sorted.length === array.length) {
            return sorted;
        }
      }
    }
}