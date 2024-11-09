// Highest Ranked Number in Array

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


// My Solution

//arr -> no empty arr. contains nums. no funny biz
// return num that appears most often. return larger num for ties.
function highestRank(arr){
    // map to keep track of how many times seen num
    // loop thru map keys, find one that appears most
    // if 2 nums appeared same num times, check for larger number
    
    let map = {},
        timesSeen = 0,
        mostOften = null
    
    for (const num of arr) {
      map[num] = map[num] + 1 || 1
    }
    
    for (const number in map) {
      if (map[number] >= timesSeen) {
        timesSeen = map[number]
        mostOften = number
      }  
    }
    return Number(mostOften)
}
// console.log( highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12)
// console.log( highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3)
// console.log( highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12)


// Other Solutions
function highestRank(arr){
    let obj = {};
    arr.forEach( elem => {
       if(obj[elem] === undefined)
         obj[elem] = 0;
       obj[elem]++;
    });

    let keys = Object.keys(obj),
        highest = 0, 
        key;
    keys.forEach( elem => {
       if(obj[elem] >= highest)
       {
          highest = obj[elem];
          key = elem;
       }
    })
    return parseInt(key);
}


// 2
const highestRank = arr =>
    arr.sort( (a, b) => arr.filter(val => val === b).length - arr.filter(val => val === a).length || b - a)[0];


// 3
function highestRank(arr) {
    var getNum = num => arr.filter(n => n === num).length;
    return arr.sort((a,b) => getNum(b) - getNum(a) || b - a)[0];
}


// 4
const highestRank = arr => {
    let nums = {};
    arr.forEach(el => {
        nums[el] ? nums[el]++ : nums[el] = 1
    })   
    return +Object.keys(nums).reduce((a, b) => nums[a] > nums[b] ? a : b);
}