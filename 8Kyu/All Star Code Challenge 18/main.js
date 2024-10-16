// All Star Code Challenge #18


// My Solution
function strCount(str, letter){  
    let count = 0

    for (let i = 0; i < str.length; i++) 
    {
      if (str[i] === letter) count++
    }

    return count
}


// Other Solutions
function strCount(str, letter){  
    return str.split(letter).length-1
}


// 2
function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
}


// 3
function strCount(str, letter) { 
    let count = 0;
    
    [...str].forEach(char => char == letter ? count++ : count);
    
    return count;
}