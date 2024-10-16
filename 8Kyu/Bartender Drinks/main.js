// L1: Bartender, Drinks!
// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".


// My Solution
function getDrinkByProfession(param) {
    param = param.toLowerCase();
    
    switch(param) {
      case "jabroni": return "Patron Tequila";
      case "school counselor": return "Anything with Alcohol";
      case "programmer": return "Hipster Craft Beer";
      case "bike gang member": return "Moonshine";
      case "politician": return	"Your tax dollars";
      case "rapper": return "Cristal";
      default: return "Beer";
    }
}


// Other Solutions
const drinks = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
  }
  
  const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"


// 2
function getDrinkByProfession(param){
    let map = new Map([
            ["jabroni", "Patron Tequila"],
            ["school counselor", "Anything with Alcohol"],
            ["programmer", "Hipster Craft Beer"],
            ["bike gang member", "Moonshine"],
            ["politician", "Your tax dollars"],
            ["rapper", "Cristal"]
            ]);
        
     let normal = param.toLowerCase();
     return map.has(normal) ? map.get(normal) : "Beer";
}


// 3
const getDrinkByProfession = str =>{
    let arr = ["Jabroni",	"Patron Tequila", "School Counselor", 
    "Anything with Alcohol", "Programmer",	"Hipster Craft Beer", 
    "Bike Gang Member",	"Moonshine", "Politician",	"Your tax dollars", 
    "Rapper", "Cristal", "any",	"Beer"];
    
    const arrLow = arr.map(e => e.toLowerCase());
    let strLow = str.toLowerCase();
    let ind = arrLow.indexOf(strLow);
    
    if (!arrLow.includes(strLow)){
      strLow = strLow.replace(strLow[0], strLow[0].toUpperCase());
      arr = arr.map(e => e == 'any' ? strLow : e);
      ind = 12;
    }
    
    return ind%2 == 0 ? arr[ind+1] : arr[ind-1];
      
}