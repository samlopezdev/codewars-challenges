// WeIrD StRiNg CaSe

// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"


// Logical Solution
function toWeirdCase(string){
    return string.split(' ').map(function(word){
      return word.split('').map(function(letter, index){
        return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
      }).join('');
    }).join(' ');
}

// Other Solutions
function toWeirdCaseCharacter(chr, index)
{
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word){
  return word.split("").map(toWeirdCaseCharacter).join("");
}

function toWeirdCase(string){
  return string.split(" ").map(toWeirdCaseWord).join(" ");
}


// 2
function toWeirdCase(string){
    var str = '';
    var counter = 0;
    
    for(var i = 0; i < string.length; i++) {
      if(string[i] === ' ') {
        str += ' ';
        counter = 0;
      } else if(counter % 2 === 0) {
        str += string[i].toUpperCase();
        counter++;
      } else if(counter % 2 !== 0) {
        str += string[i].toLowerCase();
        counter++;
      }
    }
    return str;
};


//3
function toWeirdCase(string){
    var weired = "";
    for (var index = 0, i = 0; i < string.length; i++) {                 
        weired += !(index % 2) ? 
              string[i].toUpperCase() :
              string[i].toLowerCase();              
              
        (string[i] == " ") ? 
          index = 0 : index++;           
    }
    return weired;
}


// 4
function toWeirdCase(string){
    var res = [];
    var k = 0;
    
    for (var i=0; i<string.length; i++){
       res.push( k%2==0 ? string[i].toUpperCase(): string[i].toLowerCase() );
       k++;
       if (string[i] == ' ') k=0;
    }
    return res.join("");
}
