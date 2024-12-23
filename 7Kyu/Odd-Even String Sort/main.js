// Odd-Even String Sort

// Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

// Examples
// input:    "CodeWars" => "CdWr oeas"
//            ||||||||      |||| ||||
// indices:   01234567      0246 1357
// Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
// Odd indices are 1, 3, 5, 7, so the second group is "oeas".
// And the final string to return is "Cdwr oeas".

// Notes
// Tested strings are at least 8 characters long.



// My Solution

// str -> string. could include puncuation.
// return -> string of even & odd indecides separated by a space.
function sortMyString(str) {
    // create variables for even & odd strings
    const even = []
    const odd = []
    
    // loop thru characters in str
    for (let i = 0; i < str.length; i++) {
        // if index is even, push to even arr, else odd arr
        if (i % 2 == 0) even.push(str[i])
        else odd.push(str[i])
    }
      return `${even.join('')} ${odd.join('')}`;
}
// console.log(sortMyString("CodeWars"), "CdWr oeas"))


// Other Solutions
const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
}


// 2
function sortMyString(S) {
    let even = [], odd = [];
    S.split('').forEach((e, i) => { i % 2 === 0 ? even.push(e) : odd.push(e) })
    return `${even.join('')} ${odd.join('')}`;
}


// 3
function sortMyString(S) {
    const even = [...S].filter((v, i) => !(i % 2));
    const odd = [...S].filter((v, i) => i % 2);
    return [...even, " ", ...odd].join("");
}