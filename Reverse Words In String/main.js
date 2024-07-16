// Reversing Words in a String

// My Solution
function reverse(string){
    return string.split(' ').reverse().join(' ');
}


// Other Solutions
function reverse(string){
    // validate input
    if (typeof(string) !== 'string') throw new Error('reverse: parameter is not a string!');
    // just use the dumb way out since it's jabbascripps
    return string.split(' ').reverse().join(' ');
}


// 2
const reverse = str => str.split(' ').reverse().join(' ');


// 3
function reverse(string) {
    return string.replace(/\s+/g, ' ').split(' ').reverse().join(' ');
}


// 4
function reverse(string){
    if(typeof string === 'string')
    {
      var result = '';
      string = string.split(' ');
      for(var i = string.length ; i > 0; i--)
          (i != 1 ?  (result = result + string[i - 1] + ' '):(result = result + string[i - 1]));
    }
    return result;
}