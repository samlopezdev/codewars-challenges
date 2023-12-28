// Find out whether the shape is a cube

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).





// My Solution:
let cubeChecker = function(volume, side){
    if (side === 0) {
      return false
    } else if (Math.sign(side) === -1) {
      return false
    } else {
      return Math.cbrt(volume) === side ? true : false
    }
}



// Other Solutions:
let cubeChecker = function(volume, side){
    return Math.pow(side, 3) === volume && side > 0;
}


// 2
var cubeChecker = function(v, s){
    return s > 0 && v == s * s * s
}


// 3
var cubeChecker = function(volume, side){
    if (side <= 0 || volume <= 0){
      return false;
    }else if(Math.pow(side,3)!==volume){
      return false;
    }else{
      return true;
    }
}



// 4
var cubeChecker = function(volume, side){
    return side > 0 && Math.pow(side, 3) === volume;
}


// 5
var cubeChecker = function(volume, side) {
    if (volume <= 0 && side <= 0) return false;
    return volume === Math.pow(side, 3);
}