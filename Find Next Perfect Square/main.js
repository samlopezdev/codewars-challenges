// Find The Next Perfect Square

// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square


// My Solution
function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq)
    
    if (Number.isInteger(sqrt)) 
    {
      return (sqrt + 1) ** 2
    }
    
    else 
    {
      return -1
    }
}


// Other Solutions
function findNextSquare(sq) {
    return Math.sqrt( sq ) % 1 ? -1 : Math.pow( Math.sqrt( sq ) + 1, 2 );
}


// 2
function findNextSquare(sq) {
    var number = Math.sqrt(sq);
    
    if( Math.round( number ) === number ) {
      return Math.pow( ++number, 2 )
    }
    return -1;
}


// 3
function findNextSquare(sq) {
    var n = Math.sqrt(sq);
    return Number.isInteger( n ) ? ( n+1 ) * ( n+1 ) : -1
}


// 4
function findNextSquare(sq) {
    let r = Math.sqrt(sq)
    
    return r % 1 ? -1 : ++r * r
}