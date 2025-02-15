//Jewels & Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.



// My Solution
function numJewelsInStones(jewels, stones) {
    const map = {}
    let count = 0
    for (const jewel of jewels) {
        map[jewel] = true
    }

    for (const stone of stones) {
        if (map[stone]) {
            count++
        }
    }
    return count
}

console.log(numJewelsInStones("aA", "aAAbbbb"), '3')




// Other Solutions
let numJewelsInStones = function(jewels, stones) {
    const hashmap = new Map();
    let output = 0;
    
    for (let i = 0; i < jewels.length; i++) {
        const jewel = jewels[i];
        hashmap.set(jewel, i);
    }
    
    for (let i = 0; i < stones.length; i++) {
        const stone = stones[i];
        if(hashmap.has(stone)) output++;
    }
    
    return output;
};


// 2
let numJewelsInStones = (jewels, stones) => {
    const jewelSet=new Set(jewels)
    let count=0

    for (let stone of stones) {
        if (jewelSet.has(stone)) {
            count++
        }
    }

    return count
};
