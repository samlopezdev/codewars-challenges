// Is the String Uppercase?

// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


// My Solution
String.prototype.isUpperCase = function() {
    return this == this.toUpperCase()
}


// Other Solutions
String.prototype.isUpperCase = function(){
    if(this.toString() == this.toUpperCase()){
      return true;
    } else{
      return false;
    }
}


// 2
String.prototype.isUpperCase = function() {
    return this == this.toUpperCase() ? true : false;
}



// 3
String.prototype.isUpperCase = function() {
    let str = this.split('');
    for(let i = 0; i < str.length; i++){
      if(str[i] !== str[i].toUpperCase()) {
        return false;
      }
    }
    return true;
}