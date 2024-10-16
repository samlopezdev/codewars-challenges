// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



// Logical Solution:
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('')
}



// Other Solutions
function fakeBin(x) {
    return x.replace(/\d/g, d => d < 5 ? 0 : 1)
}



// 2
function fakeBin(str){
    let newStr = ""
    for(var i=0;i<str.length;i++) {
      if(Number(str[i])>=5) {
        newStr += "1"
      }
      else{
        newStr += "0"
      }
    }
    return newStr
}




// 3
function fakeBin(x){
    let result = '';
    for(let i = 0; i < x.length; i++){
      x[i] < 5 ? result += 0 : result += 1;
    }
    return result;
}



// 4
fakeBin = x => x.split('').map(e => e < 5 ? 0 : 1).join('')



// 5
function fakeBin(x){
    return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
}