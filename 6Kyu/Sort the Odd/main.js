// Sort the Odd
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


// My Solution
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}



// Other Solution
function sortArray(array) {
    var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
    return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
}



// 2
function sortArray(array) {
    var odds = [];
    //loop, if it's odd, push to odds array
    for (var i = 0; i < array.length; ++i) {
      if (array[i]%2 !== 0) {
        odds.push(array[i]);
      }
    }
    //sort odds from smallest to largest
    odds.sort(function(a,b){
      return a-b;
    });
    
    //loop through array, replace any odd values with sorted odd values
    for (var j = 0; j < array.length; ++j) {
      if (array[j]%2 !== 0) {
        array[j] = odds.shift();
      }
    }
    
   return array;
}


// 3
const sortArray = (array) => {
    const odds = [];
    const evens = [];
    const oddIndices = [];
    
    array.forEach((i, index) => {
      if (i % 2 !== 0) {
        odds.push(i);
        oddIndices.push(index);
      } else {
        evens.push(i);
      }
    });
  
    odds.sort((a, b) => a - b);
  
    oddIndices.forEach((index, i) => {
      array[index] = odds[i];
    });
  
    return array;
};



// 4
function sortArray(array) {
    var odd = array
      .filter(n => n % 2)
      .sort((a, b) => a - b);
      
    return array.map(n => n % 2 ? odd.shift() : n);
}
