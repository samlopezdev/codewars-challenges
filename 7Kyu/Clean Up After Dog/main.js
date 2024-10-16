// Clean Up After Your Dog

// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

// For example:

// bags = 2
// cap = 2
// x (or garden) =
// [[ _ , _ , _ , _ , _ , _ ],
//  [ _ , _ , _ , _ , @ , _ ],
//  [ @ , _ , _ , _ , _ , _ ]]



// My Solution
function crap(x, bags, cap){
    let garden = x.flat()
    let trash = 0
    
    for (let square in garden) {
      if (garden[square] === 'D') return "Dog!!"
      if (garden[square] === '@') trash++
    }
    
    return trash <= (bags * cap) ? 'Clean' : 'Cr@p'
}



// Other Solutions
function crap(x, bags, cap){
    var yard = x.reduce( (a, b) => a.concat(b) );
    return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
}



// 2
function crap(x, bags, cap){
  
    let crap = 0;
    
    for (let i = 0; i < x.length; i++){
     for (let j =0; j < x[i].length; j++){
       
       if(x[i][j] === 'D'){
         return 'Dog!!'
       }
       
       if (x[i][j] === '@'){
        crap++
      } 
     }
    }
    
    if (bags >= crap || cap >= crap){
      return 'Clean'
    }
    else{
      return 'Cr@p'
    }
    
}



// 3
const crap = (x, bags, cap) =>
    `${x}`.includes(`D`) ? `Dog!!` : `${x}`.split(`@`).length > bags * cap ? `Cr@p` : `Clean`;



// 4
function crap(x, bags, cap){
    let c = 0;
    for (let el of x){
      for (let elem of el){
        if (elem === "@") c++;
        if (elem === "D") return "Dog!!";
      }
    }
    return c <= bags * cap? "Clean" : "Cr@p"
}