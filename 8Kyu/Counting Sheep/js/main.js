// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

//     [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]

//   The correct answer would be 17.


// MOST LOGICAL SOLUTION:
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}




// OTHER SOLUTIONS:
function countSheeps(arrayOfSheep) {
    var num = 0;
    for(i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) {
        num += 1;
      }
    }
    return num;
}




// 2
function countSheeps(arrayOfSheep) {
    let num = 0;
    
    for(let i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
}




// 3
function countSheeps(sheep) {
    return sheep.filter(Boolean).length;
}



// 4
function countSheeps(arrayOfSheep) {
    var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
    return array;
}