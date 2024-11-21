// Bumps In The Road

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead


// My Solution

// x -> string. Contains '_' or 'n'
// return -> 'Woohoo!' or 'Car Dead'. if number of 'n' greater than or equal to 15
function bump(x){
    // loop thru string(x) or count number of 'n'
    let count = 0
    for (const char of x) {
      if (char === 'n') count++
    }
    return count < 16 ? 'Woohoo!' : 'Car Dead'
} 
// console.log(bump("n"), "Woohoo!")
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead"))



// Other Solutions
const bump = x => x.split('n').length > 16 ? "Car Dead" : "Woohoo!"


// 2
const bump = x => x.split``.filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';


// 3
const bump = x => 
    [...x].filter(char => char === "n").length <= 15 ? "Woohoo!" : "Car Dead";


// 4
function bump(x){
    let sum1 = x.split('').filter(item => item === 'n').length;
    return sum1 <= 15 ? "Woohoo!" : "Car Dead";
}