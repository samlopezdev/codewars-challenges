// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 




// My Solution
function duplicateEncode(word){
//toLowerCase()
//split('')
//map => check indexes
//join()
  return word.toLowerCase()
          .split('')
          .map( (c, i, a) => a.indexOf(c) === a.lastIndexOf(c) ? '(' : ')')
          .join('')
}


// Other Solutions
function duplicateEncode(word){
   
    let unique='';
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}



// 2
function duplicateEncode(word) {
    let letters = word.toLowerCase().split('')
    return letters.map( (c, i) => letters
            .some( (x, j) => x === c && i !== j ) ? ')' : '(')
            .join('')
}