// Holiday VII - Duty Free


// My Solution
function dutyFree(normPrice, discount, hol){
    let percent = discount / 100
    let saved = normPrice * percent
    return Math.trunc(hol / saved)
}



// Other Solutions
function dutyFree(normPrice, discount, hol){
    return(Math.floor(hol / normPrice / discount * 100))
}


// 2
function dutyFree(normPrice, discount, hol){
    var saving = normPrice * discount / 100;
    return Math.floor(hol / saving);
}


// 3
const dutyFree = (normPrice, discount, hol) =>
    hol / (normPrice * discount / 100) ^ 0;


// 4
function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice / (100 / discount)))
}