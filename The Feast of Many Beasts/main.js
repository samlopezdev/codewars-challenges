// The Feast of Many Beasts

// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


// My Solution
function feast(beast, dish) {
	return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}


// Other Solutions
function feast(beast, dish) {
    return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
}


// 2
function feast(beast, dish) {
    let word1 = beast.match(/^[\w]/gi).concat(beast.match(/[\w]$/gi)).join('');
    let word2 = dish.match(/^[\w]/gi).concat(dish.match(/[\w]$/gi)).join('');
    return word1 === word2;
}


// 3
function feast(beast, dish) {
    let beastFirstChar = beast.charAt(0);
    let beastLastChar = beast.charAt(beast.length - 1);
    let dishFirstChar = dish.charAt(0);
    let dishLastChar = dish.charAt(dish.length - 1);
    
    return beastFirstChar === dishFirstChar && beastLastChar === dishLastChar ? true : false;
}