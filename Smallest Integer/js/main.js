// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345


class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
}



// Other Solutions


// 1

class SmallestIntegerFinder {
    findSmallestInt( $ ) {
      return Math.min(...$);
    }
}


// 2

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = Number.POSITIVE_INFINITY;
      args.forEach((value,index)=>{
         if(value < min) min = value;
      });
      return min;
    }
}


// 3

class SmallestIntegerFinder {
    findSmallestInt(args) {
      var lowest;
      for(var i in args){
        if(i==0){
          lowest = args[i];
        }
        else {
          if(lowest >= args[i]){
          lowest = args[i];
          }
        }
      }
      return lowest;
    }
}




// 4

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort((a,b)=>a-b)[0];
    }
  }