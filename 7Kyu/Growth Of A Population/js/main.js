// Growth of A Population

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10



// Most Logical Solution
function nbYear(p0, percent, aug, p) {
    for (var years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}


// Other Solutions
const nbYear = (p0, percent, aug, p) => {
	let result = 0;
	percent /= 100;
	while (p0 < p) {
		p0 += Math.floor(p0 * percent + aug);
		result++;
	}
	return result;
}


// 2
const nbYear = (p0, percent, aug, p) => p0 < p ? true + nbYear(p0 + p0 * percent / 100 + aug | 0, percent, aug, p) : false 




// 3
function nbYear(p0, percent, aug, p) {
    let year = [];
    for (let i = 1; p0 < p; i++) {
        p0 = Math.floor(p0 + (p0 * (percent / 100) + aug));
        year.push(i);
    }
    return year.length;
}


// 4
function nbYear(p0, percent, aug, p) {
    let year = 0
 if (p0>=p) {
     return year
 }
 else {
     return (1+(nbYear(p0+Math.floor(p0*(percent/100))+aug,percent,aug,p)))
     
 }
}