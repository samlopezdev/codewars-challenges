// Find the Capitals

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]


// My Solution
var capitals = function (word) {
    let capIndex = []
    
    for (let i = 0; i < word.length; i++) 
    {
      
      if (word[i] === word[i].toUpperCase()) 
      {
        capIndexIndex.push(i)
      }
    }
    return capIndex
};



// Other Solutions
var capitals = function (word) {
    var caps = [];
      for(var i = 0; i < word.length; i++) {
      if(word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
};



// 2
const capitals = word => { return word.match(/[A-Z]/g).map( x => { return word.indexOf(x) }) }



// 3
var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};



// 4
const capitals = (word) => {
    const indexes = []
      for (let i = 0; i < word.length; i++) {
      const code = word.charCodeAt(i)
      if (code >= 65 && code <= 90) {
        indexes.push(i)
      }
    }
    
    return indexes
}