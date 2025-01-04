// Sum of Pairs

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined/Nothing (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.


// My Solution
function sumPairs(ints, s) {
    // map of numbers already seen
    const seenNums = {}
    
    // loop thru integer array
    for (const num of ints) {
      const diff = s - num
      // if 'diff' exists in seenNums, we have a match!
      if (seenNums[diff]) { return [diff , num] }
      // otherwise, set 'num' to true in the map
      else { seenNums[num] = true }
    }
    
    return undefined ;
}


// Other Solutions
function sum_pairs(ints, s) {
    let seen = new Set();
    for (let i of ints) {
      if (seen.has(s - i)) return [s - i, i];
      seen.add(i);
    }
}


// 2
let sum_pairs = function(ints, s) {
    set = new Set();
    
    for (let i of ints) {
      if (set.has(s - i)) {
        return [ s - i, i ];
      }
      
      set.add(i);
    }
}


// 3
const sum_pairs = (ints, s) => {
    const set = new Set();
    for (const elm of ints) {
      if (set.has(s - elm)) return [s - elm, elm];
      set.add(elm);
    }
};