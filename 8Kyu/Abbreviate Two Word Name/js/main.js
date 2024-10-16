// Abbreciate Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// My Solution
function abbrevName(name){
    let first = name.split(" ")[0][0].toUpperCase()
    let last = name.split(" ")[1][0].toUpperCase()
    return `${first}.${last}`
}



// Other Solutions
function abbrevName(name){
    let nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}


// 2
function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}


// 3
function abbrevName(name){
    return name.split(' ').map(el => el[0].toUpperCase()).join('.')
}



// 4
function abbrevName(name){
    return name
           .split(" ")
           .map((e) => e.slice(0,1).toUpperCase())
           .join(".");
 
}