// The Office II - Boredom Score

// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'



// Logical Solution
function boredom(staff) {
    let departments = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        'pissing about': 25
    }

    let score = Object.keys(staff)
        .reduce( (a, b) => a + departments[staff[b]], 0)

    return score <= 80 ? 'kill me now' : 
            score < 100 && score > 80 ? 'i can handle this' :
            'party time!!'
}


// Other Solutions
function boredom(staff) {
    var teams = { 'accounts'      : 1,
                  'finance'       : 2 ,
                  'canteen'       : 10, 
                  'regulation'    : 3, 
                  'trading'      : 6, 
                  'change'        : 6,
                  'IS'            : 8,
                  'retail'        : 5,
                  'cleaning'      : 4,
                  'pissing about' : 25},
        score = Object.keys(staff)
                      .map(key=>teams[staff[key]])
                      .reduce((a,b) => a+b, 0);
                      
  return score <= 80 ? 'kill me now' : (score > 100 ? 'party time!!' : 'i can handle this');            
}


// 2
function boredom(staff){
  
    const score = {
      accounts        : 1,
      finance         : 2,
      canteen         : 10,
      regulation      : 3,
      trading         : 6,
      change          : 6,
      IS              : 8,
      retail          : 5,
      cleaning        : 4,
      'pissing about' : 25
    };
    
    const answer = ['kill me now', 'i can handle this', 'party time!!'];
    const s = Object.values(staff).map(x => score[x]).reduce((a,b) => a + b, 0);
    return answer[ s <= 80 ? 0 : s < 100 ? 1 : 2 ]
    
}


// 3
function boredom(staff){
    const scores = {
      accounts: 1,
      finance: 2,
      canteen: 10,
      regulation: 3,
      trading: 6,
      change: 6,
      IS: 8,
      retail: 5,
      cleaning: 4,
      "pissing about": 25,
    }
    
    const score = Object.values(staff).reduce((S,x) => S + scores[x],0)
    return  score <= 80 ? "kill me now" 
           :score < 100 ? "i can handle this"
           : "party time!!"
}