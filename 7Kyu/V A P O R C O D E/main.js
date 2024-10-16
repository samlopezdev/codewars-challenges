// V A P O R C O D E

// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

// Examples
// "Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
// "Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"



// My Solution
function vaporcode(string) {
    let capialized = string.split(' ').join('').toUpperCase()
    return capialized.split('').join('  ')
}


// Other Solutions
function vaporcode(string) {
    return string.toUpperCase().split(" ").join("").split("").join("  ");
}


// 2
function vaporcode(string) {
    return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ")
}


// 3
const vaporcode = string =>
    string.toUpperCase().match(/\S/g).join(`  `);


// 4
function vaporcode(string) {
    let arr = string.toUpperCase().split('')
    let noSpace = arr.filter(item => item !== ' ')
    let result = noSpace.join('  ')
    return result;
}


// 5
function vaporcode(string) {
    var arr=[];
    for (var i=0; i<string.length; ++i)
      if (string[i]!=' ')
        arr.push(string[i].toUpperCase());
    return arr.join('  ');
}