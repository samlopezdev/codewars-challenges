// Drink About
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// My Solution
function peopleWithAgeDrink(old) {
    if (old >= 21) return 'drink whisky' //adults
    else if (old >= 18) return 'drink beer' //young adults
    else if (old >= 14) return 'drink coke' //teens
    else return 'drink toddy' //kids
};


// Other Solutions
const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"


// 2
const peopleWithAgeDrink = (age) => {
    switch (true) {
      case (age >= 21): return 'drink whisky'
      case (age >= 18): return 'drink beer'
      case (age >= 14): return 'drink coke'
      default: return 'drink toddy'
    }
};



// 3
function peopleWithAgeDrink(old) {
    if (old < 14) return 'drink toddy'
    if (old < 18) return 'drink coke'
    if (old < 21) return 'drink beer'
    return 'drink whisky';
};


// 4
const peopleWithAgeDrink = old => {
    const rules = [
      {age: 13, text: "drink toddy"},
      {age: 17, text: "drink coke"},
      {age: 18, text: "drink beer"},
      {age: 20, text: "drink beer"},
      {age: 30, text: "drink whisky"}
    ]
    return rules.filter(item => item.age >= old)[0].text
}



// 5
var peopleWithAgeDrink = function(old) {
  
    var result = '';
   
     if(old < 0){
        throw new Error("Age cant be negative.");
      return  0;
     }
  
    switch (true) {
        case old < 14:
            result = "drink toddy";
            break;
      case old < 18:
            result = "drink coke";
            break;
        case old < 21:
            result = "drink beer";
            break;
        default:
            result = "drink whisky";
            break;
    }
  
    return result;
};