// Keep Hydrated!
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.


// My Solution:
function litres(time) {
    return Math.floor(time * .5)
}


// Other Solutions:
const litres = time => Math.floor(time * .5)



// 2
const litres = time => ~~(time * .5)


// 3
function litres(time) {
    return Math.floor(time/2)
}