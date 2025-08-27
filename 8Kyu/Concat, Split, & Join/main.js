// Concat, Split, & Join

// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

// For example:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"



// My Solution
// string -> string of words(w/ capital letters and lowercase), spaces, symbols
// separator -> another string containing one character or symbol

// return -> the string with every LETTER separated by the separator 
function splitAndMerge(string, separator) {
  return string.split(" ")
                .map( word => word.split("").join(separator))
                .join(" ")
}


// Other Solutions
const splitAndMerge = (str, sp) =>
  str
    .split(" ")
    .map((item) => item.split("").join(sp))
    .join(" ");


// 2
function splitAndMerge(str, sp) {
  var words = str.split(" ");
  var arr = [];
  var res = [];
  for (i = 0; i < words.length; i++) {
    arr.push(words[i].split("").join(sp));
  }
  res = arr.join(" ");
  return res;
}


// 3
const splitAndMerge = (string, separator) =>
  string.replace(/\w(?=\S)/g, `$&` + separator);