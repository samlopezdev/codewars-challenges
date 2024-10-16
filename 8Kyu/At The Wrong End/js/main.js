// My Head Is At The Wrong End


// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics


// My Solution:
function fixTheMeerkat(arr) {
    return arr.reverse()
}


// Other Solutions:
const fixTheMeerkat = ([tail, body, head]) => [head, body, tail]



// 2
function fixTheMeerkat(arr) {
    return [arr[2], arr[1], arr[0]];
}


// 3
function fixTheMeerkat(arr) {
    let tail = arr[0];
    arr[0] = arr[2];
    arr[2] = tail;
    return arr;
}



// 4
function fixTheMeerkat(arr) {
    let nArr = [];
    for(let i = arr.length-1; i >= 0; i--){
     nArr.push(arr[i]) 
    }
   return nArr;
}


// 5
function fixTheMeerkat(arr) {
    var end = arr.shift();
    var begin = arr.pop();
    arr.push(end);
    arr.unshift(begin);
    return arr;
}