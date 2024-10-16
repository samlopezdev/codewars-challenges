// Expressions Matter
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.



// Logical Solution
function expressionMatter(a, b, c) {
    return Math.max(
      a + b + c,
      a * b * c,
      a * (b + c),
      (a + b) * c,
      a + b * c,
      a * b + c,
    );
}


// Other Solutions
function expressionMatter(a, b, c) {
    return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
}


// 2
function expressionMatter(a, b, c) {
    let arr = [
      a + b + c,
      a * b * c,
      a * b + c,
      a + b * c,
      a * (b + c),
      (a + b) * c,
    ];
    let max = arr.sort( (a, b) => b - a );
    return max[0];
}


// 3
function expressionMatter(a, b, c) {
    let multi = a * b * c;
    let add = a + b + c;
    let addMulti = (a + b) * c;
    let multiAdd = a * (b + c);
    
    return Math.max(multi, add, addMulti, multiAdd);
    
}



// 4
function expressionMatter(a, b, c) {
  
    if(a==1 && b==1 && c==1){
      return 3;
    }
    
    if(a!=1 && b!=1 && c!=1){
      return a*b*c;
    }
    if(a==1 && b!=1 && c!=1){
      return (a+b)*c
    }
     if(a!=1 && b!=1 && c==1){
      return a*(b+c);
    }
   
    if(a!=1 && b==1 && c==1){
      return a*2;
    }
   
    if(a==1 && b==1 && c!=1){
      return c*2;
    }
   
    if(a==1 && b!=1 && c==1){
      if(a==c){
        return a+b+c;
      }
      if(a>c){
        return a*(b+c);
      }
      if(a<c){
        return (a+b)*c;
      }
    }
    
    if(a!=1 && b==1 && c!=1){
      if(a==c){
        return (a+b)*c;
      }
      if(a>c){
        return a*(b+c);
      }
      if(a<c){
        return (a+b)*c;
      }
    }
}