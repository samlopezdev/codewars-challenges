// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"



// My Solution:
function bmi(weight, height) {
    let bmi = weight / (height ** 2)
    
    if (bmi <= 18.5) {
      return "Underweight"
    } else if (bmi <= 25) {
      return "Normal"
    } else if (bmi <= 30) {
      return "Overweight"
    } else {
      return "Obese"
    }
}




// Other Solutions:
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";





// 2
function bmi(weight, height) {
  
    var bmi  = weight/(height*height);
    
     return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
    
}




// 3
function bmi(weight, height) {
    let bmi = weight / (height * height);
    switch(true){
      case bmi <= 18.5:
        return "Underweight";
      case bmi <= 25.0:
        return "Normal";
      case bmi <= 30.0:
        return "Overweight";
      case bmi > 30:
        return "Obese";
     }
}



// 4
function bmi(weight, height) {
    const bmi = weight / (height * height);
    if(bmi <= 18.5) return "Underweight";
    if(bmi <= 25) return "Normal";
    if(bmi <= 30) return "Overweight";
    return "Obese";
}