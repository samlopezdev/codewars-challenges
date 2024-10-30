// Do I Get A Bonus?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).



// My Solution
function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`
}


// Other Solutions
const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;


// 2
function bonusTime(salary, bonus) {
    return '£' + salary * (bonus ? 10 : 1);
}


// 3
function bonusTime(salary, bonus) {
    return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`
}