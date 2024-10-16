// Take a Ten Minute Walk

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


// Logical Solution
function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
    
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
    
    return dt === 10 && dx === 0 && dy === 0
}


// Other Solutions
function isValidWalk(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}


// 2
function isValidWalk(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;
    
    return walk.length === 10 && north === south && east === west;
}


// 3
function isValidWalk(walk) {
    if (walk.length !== 10)
      return false;
  
    var posX = 0, posY = 0, result;
    
    walk.forEach(function(item, index, array){
      switch (item.toLowerCase()) {
        case 'n':
          posX += 1;
          break;
        case 's':
          posX += -1;
          break;
        case 'e':
          posY += 1;
          break;
        case 'w':
          posY += -1;
          break;
      }
    });
    
    if (posX === 0 && posY === 0) 
      result = true;
    else 
      result = false;
  
    return result;  
}


// 4
function isValidWalk(walk) {
    if(walk.length === 10) {
      var ns = 0;
      var we = 0;
      
      walk.forEach(function(v,i,a) {
        if(v === 'n') { ns += 1; }
        if(v === 's') { ns -= 1; }
        if(v === 'w') { we += 1; }
        if(v === 'e') { we -= 1; }
      });
      
      if( ns === 0 && we === 0)
        return true
      else
        return false
    }  
    else
      return false
}