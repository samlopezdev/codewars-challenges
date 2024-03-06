// Friend Or Foe

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.


// My SOlution
function friend(friends){
    return friends.filter(name => name.length === 4)
}


// Other Solutions
const friend = friends => friends.filter(friend => friend.length == 4)



// 2
function friend(friends){
    var realFriends = [];
    for(i=0; i<friends.length; i++){
      if(friends[i].length == 4 && isNaN(friends[i])){
        realFriends.push(friends[i]);
      }
    }
    
    return realFriends
}


// 3
function friend(friends){
    let goodFriends = [];
    for(let i = 0; i < friends.length; i++){
      if (friends[i].length === 4){
        goodFriends.push(friends[i]);
      };
    };
    return goodFriends;
}