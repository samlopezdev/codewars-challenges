// Jaden Casing Strings

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


// My Solution

  // string -> 'long or short sentance'
  // return string with each word capitalized
String.prototype.toJadenCase = function () {
    // split -> arr
    // loop thru arr & capitalize first letter
    // join -> str
    
    return this.split(' ').map( word => word[0].toUpperCase() + word.slice(1)).join(' ')
};
  

// Other Solutions
String.prototype.toJadenCase = function () {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return this.split(' ').map(capitalizeFirstLetter).join(' ');
};


// 2
String.prototype.toJadenCase = function() {
    return this
      .split(" ")
      .map(i => i.replace(i[0], i[0].toUpperCase()))
      .join(" ");
};


// 3
String.prototype.toJadenCase = function () {
    var words = this.split(' ');
  
    for(var i = 0, wordsLen = words.length; i < wordsLen; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    return words.join(' ');
};