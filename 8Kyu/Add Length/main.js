//  Add Length


// My Solution
function addLength(str) {
    let arr = []
    let words = str.split(' ')
    
    for (let i = 0; i < words.length; i++) {
      let wordLength = words[i].length
      
      arr.push(`${words[i]} ${wordLength}`)
    }
    
    return arr
}

// Other Solutions
function addLength(str){
    return str.split(" ").map(e => `${e} ${e.length}`);
}


// 2
function addLength(str){
    return str.split(" ").map( word => `${word} ${word.length}`)
}


// 3
function addLength(str) {
    var split = str.split(" ");
    var result = [];
     
    for (i = 0; i < split.length; ++i) {
      result.push(split[i] + " " + split[i].length);
    } 
    return result;  
}