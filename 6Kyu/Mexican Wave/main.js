// Mexican Wave

// Your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


// My Solution

// str -> 'word or phrase' or ''
// return -> array w/every version of str w/ the NEXT letter capitalized
function wave(str){
    // need array w/ elements === str.length
    let waveArr = []
    
    //loop thru str letters, capitalize letter & store in array
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ')
        waveArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
    }
    return waveArr
}


// Other Solutions
function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}


// 2
function wave(str){
    let newArr = [];
    for (let i = 0; i < str.length; i++) {
      let copy = str.split('');
      if(copy[i] !== ' ') {
      copy[i] = copy[i].toUpperCase()
      newArr.push(copy.join(''))
      }
    }
    return newArr
}


// 3
function wave(s){
    // Code here
    let w=[]
    for(let i=0;i<s.length;i++){
      w.push(s.substring(0,i)+s.charAt(i).toUpperCase()+s.slice(i+1))
  
    }
    return w.filter(x=>x!=s);
}


// 4
function wave() {
    const str = wave.arguments[0].toLowerCase();
    const arr = [];
    for (let i = 0; i < str.length; i += 1) {
      if (str.charAt(i) !== ' ') {
        const cap = str.charAt(i).toUpperCase();
        const front = str.substr(0, i);
        const back = str.slice(i + 1);
        arr.push(front + cap + back);
      }
    }
    return arr;
}