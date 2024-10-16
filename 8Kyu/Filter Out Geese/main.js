// Filter Out The Geese

// My Solution
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter( el => geese.indexOf(el) === -1)
};


// Other Solutions
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
};



// 2
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => geese.indexOf(bird) < 0 );
};


// 3
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
  var newArray = [];
    for (var i =0;i<birds.length;i++) {
    if (!geese.includes(birds[i])) {
      newArray.push(birds[i]);
    }
  
    
    }
  return newArray;
};


// 4
const GEESE = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
const gooseFilter = birds => birds.filter(bird => !GEESE.includes(bird));