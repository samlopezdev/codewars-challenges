//  Shortest Word

// Given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



// My Solution
function findShort(s){
    const shortestWord = 
        s.split(" ")
        .reduce((a, b) => a.length <= b.length ? a : b)
    
        return shortestWord.length
}


// Other Solutions
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}


// 2
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;



// 3
function findShort(s){
    return s.split(' ').sort((a,b) => a.length - b.length)[0].length;
}


// 4
function findShort(s){
	var arr = s.split(' ');
	var smallest = arr[0];
	
    for (var i = 0; i < arr.length; i++) {
		if(arr[i].length < smallest.length){
			smallest = arr[i];
		}
	}
	return smallest.length;
}