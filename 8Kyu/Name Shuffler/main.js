// Name Shuffler

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


// My Solution
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
}


// Other Solution
const nameShuffler = str => str.split(' ').reverse().join(' ');


//2
function nameSuffle(str){
    var arr = str.split(" ");
    return arr[1] + ' ' + arr[0]
}


//3
function nameShuffler(str){
    [firstName, lastName] = str.split(" ");
    return `${lastName} ${firstName}`;
}


//4
const nameShuffler = str =>
    str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);