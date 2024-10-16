// Will the hero survive?

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)


// Most logical Solution
const hero = (bullets, dragons) => bullets / 2 >= dragons ? true : false


// Other Solutions
function hero(bullets, dragons){
  
    if (bullets / 2 >= dragons) {
      return true
    } else {
      return false
    }
}


// 2
function hero(bullets, dragons){
    return bullets / 2 >= dragons
}