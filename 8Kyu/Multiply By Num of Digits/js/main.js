// Multiply By Number of Digits

// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3) == 15 // 3 * 5¹
// multiply(10) == 250 // 10 * 5²
// multiply(200) == 25000 // 200 * 5³
// multiply(0) == 0 // 0 * 5¹
// multiply(-3) == -15 // -3 * 5¹


// Logical Solution:
function multiply(number) {
    return number * Math.pow(5, Math.abs(number).toString().length);
}



// Other Solutions:
const multiply = num => num * 5 ** (Math.abs(num).toString()).length



// 2
function multiply(number){
    var x = "'" + number + "'"
    if (number >= 0){
    var a = x.length - 2
    }else if (number < 0){
    var a = x.length - 3
    }
    var b =  Math.pow(5, a)
    return number * b
}




// 3
function multiply(number){
    let numStr = number.toString().replace("-", "");
    return number* Math.pow(5,numStr.length)
}



// 4
function multiply(number) {
    return number * (5 ** String(Math.abs(number)).length);
}


// 5
function multiply(number){
    let power = number.toString().length;
    if(number < 0){
        power -= 1;
    }
    
    return number * (5 ** power);
}