// Max Numbers of Characters

// Given a string of characters, return the character that appears the most often.

// No String or Array Methods (well brute force it first, but then no methods)! 


//My Solution

//string -> 'Hello World!'
// return the most used chararacter -'l'>

function maxChar(string) {
	// Create a map to keep track of letters
	let map = {},
		count = 0,
		maxChar = null
	// Add letters to map
	for (const char of str) {
		charMap[char] = charMap[char] + 1 || 1
	}	
	// loop & find most freq
	for (const char in charMap) {
		if (charMap[char] > count) {
			count = charMap[char]
			maxChar = char
		}
	}

	return maxChar
}

console.log(maxChar('Bibbidi Bobbidi Boo!'), 'b')
