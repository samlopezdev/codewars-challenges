// JS Training 9 - Loop Statements (While & Do While)


// while judges the condition at the beginning before executing its code, so if the condition is false the code inside the while loop is never executed. In contrast, do..while always runs once, and then starts checking the condition after that.

// Complete function padIt, which accepts 2 parameters:

// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.


// Logical Solution
function padIt(str,n){
    while(n>0){
      if(n%2 === 0) {
        str = str + "*";
      }else{
        str = "*" + str;
      }
      n --;
    }
    return str;
}



// Other Solutions
function padIt(str, n) {
    while (n > 0) {
      str = n-- % 2 ? '*' + str : str + '*';
    }
    return str;
}




// 2
function padIt(str,n){
    let counter = 1;
    while(counter <= n){
      if(counter % 2 != 0) str = '*' + str;
      if(counter % 2 == 0) str += '*'
      counter++
    }
    return str
}




// 3
function padIt(str,n){
    while (n--) str=(n&1)==0?"*"+str:str+"*";
    return str
}



//4
const padIt = (str, n) => {
    let i = 0;
    while (i < n) {
      str = i % 2 === 0 ? `*${str}` : `${str}*`;
      i++;
    }
    return str;
};