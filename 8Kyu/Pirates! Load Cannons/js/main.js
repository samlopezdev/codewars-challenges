// Pirates!! Are the Cannons ready!??

// You are in battle against the royal navy.

// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!

// If they aren't ready: Shiver me timbers!

// Your gunners for each test case are 2, 3 or 4.

// When you check if they are ready their answers are in a dictionary and will either be: aye or nay

// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)

// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!




// Logical Solution
const cannonsReady = (gunners) => {
    return Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';
}



// Other Solutions
const cannonsReady = (gunners) => {
    for (var i in gunners) {
        if (gunners[i] == "nay") {
          return "Shiver me timbers!"
        }
    }
  return "Fire!"
}



// 2
const cannonsReady = (gunners) => {
    return Object.values(gunners).includes('nay')?'Shiver me timbers!':'Fire!';
}



// 3
const cannonsReady = a => Object.keys(a).every(g => a[g] === "aye") ? "Fire!" : "Shiver me timbers!";



// 4
const cannonsReady = (gunners) => {
    for(name in gunners)
      if(gunners[name] === 'nay')
        return 'Shiver me timbers!'
    return 'Fire!'
}