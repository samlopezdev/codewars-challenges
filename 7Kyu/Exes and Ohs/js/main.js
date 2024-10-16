// Exes and Ohs

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// Logical Solution
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}


// Other Solution
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


// 2
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}


//3
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}


// 4
function XO(str) {
    if(str=="" ||　str==null)return true;
    str = str.toLowerCase();
    var list = str.split(""); 
    var xNum = 0;
    var oNum = 0;
    for(var i=0;i<list.length;i++){
      if(list[i]==='x'){
        xNum++;
      }
       if(list[i]==='o'){
        oNum++;
      }
    }
    if(xNum===oNum)
      return true;
    return false;
}



// 5
function XO(str) {
    var sum = 0;
    for(var i = 0; i < str.length; i++){
      if(str[i].toLowerCase() == 'x') sum++;
      if(str[i].toLowerCase() == 'o') sum--;
    }
    return sum == 0;
}