// Reversed Sequence
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// My Solution
const reverseSeq = n => {
    let numsFromN = [];
    
    for (let i = n; i > 0; i--) 
    {
        numsFromN.push(i)
    }
    
    return numsFromN
};


// Other Solutions
const reverseSeq = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
};


// 2
const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
};


// 3
const reverseSeq = n => {
    let arr = [];
  
    while(n > 0) {
      arr.push(n);
      n--;
    }
    return arr;
};



// 4
const reverseSeq = n => {
    return Array.from({length: n}, (_,i)=> i+1).reverse()
};