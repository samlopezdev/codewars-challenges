// Merge Strings Altrenately

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d



// My Solution : 32ms, Beats 98.24%
function mergeAlternately(word1: string, word2: string): string {
    let word1Length = word1.length, word2Length = word2.length, 
    idx1 = 0, idx2 = 0,
    result = ''

    while (idx1 < word1Length && idx2 < word2Length) {
        result += word1[idx1++]
        result += word2[idx2++]
    }

    while (idx1 < word1Length) {
        result += word1[idx1++]
    }

    while (idx2 < word2Length) {
        result += word2[idx2++]
    }

    return result
};
// word1 & word2 -> strings w/ char or letters. no spaces. Empty?
// returned -> word1 & word2 combined by alternating letters/characters

// console.log( mergeAlternately("bug", "hit"), "bhuigt")
// console.log( mergeAlternately("abcd", "pq"), "apbqcd")


// Other Solutions
function mergeAlternately(word1: string, word2: string): string {
    let response = "";

    for (let i = 0; i < Math.max(word1.length, word2.length); i++){
        if (i < word1.length) response += word1[i];
        if (i < word2.length) response += word2[i];
    }

    return response;
};


// 2
function mergeAlternately(word1: string, word2: string): string {
    let first = 0
    let second = 0
    let result = []
    while (first <= word1.length || second <= word2.length) {
         if (word1[first]) {
            result.push(word1[first])

        }
        if (word2[second]) {
            result.push(word2[second])

        }
        first++
        second++
    }

    return result.join('')
};


// 3
function mergeAlternately(word1: string, word2: string): string {
    const len = Math.max(word1.length, word2.length)

    let ans = ''

    for(let i = 0; i < len; i++){
        if(word1[i]){
            ans = ans + word1[i]
        }

        if(word2[i]){
            ans = ans + word2[i]
        }
    }

    return ans
};