// Kata Example Twist

// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.


// My Solution
let websites = new Array(1000).fill('codewars')


// Other Solutions
let websites = []

for (let i = 0; i < 1000; i++) {
    websites.push('codewars')
}


// 2
let websites = [];
while (websites.length < 1000) websites.push("codewars")


// 3
let websites = Array.from({ length: 1000 }, () => 'codewars')