// Flick Switch

// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Notes
// "flick" will always be given in lowercase.
// A list may contain multiple flicks.
// Switch the boolean value on the same element as the flick itself.



// Most Logical:
function flickSwitch(arr){
    let returning = true;
      return arr.map( (v) => {
        return (v === "flick") ? returning = !returning : returning;
      })
}



// Other Solutions
function flickSwitch(arr){
    let flick = true
    
     return arr.map(item => item === 'flick'? flick = !flick: flick)
                
}



// 2
function flickSwitch(arr){
    let flag = true
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == 'flick'){
        flag == false ? flag = true : flag = false
      } 
      arr[i] = flag
    }
    return arr
}




//3
function flickSwitch(arr){
    return arr.reduce((a,c,i) => i==0?a.concat(c=='flick'?false:true):a.concat(c=='flick'?!a[a.length-1]:a[a.length-1]),[]);
}



//4
function flickSwitch(arr){
    let [ans, b123] = [[], true]
    for(let x of arr){
      if(x == "flick") b123 = !b123
      ans.push(b123)
    }
    return ans
}



//5
function flickSwitch(arr){
    let result =[];
    let value = true;
    for(a in arr){
     if(arr[a] === "flick" ){
       value = !value
     }
     result.push(value);
    }
    return result
    
}