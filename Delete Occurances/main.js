// Delete Occurrences That Happen More Than N Times


// Logical Solution
function deleteNth(arr,x){
    var obj = {}
    return arr.filter(function(number){
      obj[number] = obj[number] ? obj[number] + 1 : 1
      return obj[number] <= x
    })
}


// Other Solutions
const deleteNth = (a, x) => {
    let m = {};
    return a.filter( v => (m[v] = m[v]+1||1) <= x );
}


// 2
function deleteNth(arr,n){
    new_arr = []
    arr.forEach((element) => {
      if (new_arr.filter(i => i === element).length < n){
        new_arr.push(element);
      }
    })
    return new_arr;
}



// 3
function deleteNth(arr,n){
    const numMap = new Map();
    
    return arr.filter((item) => {
      let countRepeat = numMap.get(item) || 0;
      
      if (countRepeat < n) {
        numMap.set(item, ++countRepeat);
        return item;
      }
    });
}


// 4
function deleteNth(arr,n){
    // ...
    let repeatCount = {}; // To track the frequency of a number in the array
    let result = []; // To construct the result list
    
    let i = 0;
    while (i < arr.length) {
  //     Checks if the number is in the tracking object
      if (repeatCount.hasOwnProperty(arr[i])) {
        if (repeatCount[arr[i]] < n) {
          repeatCount[arr[i]] += 1;
        } else {
          // Avoiding storing a number that has a passed the threshold frequency
          i++;
          continue;
        }
      } else {
        repeatCount[arr[i]] = 1;
      }
  //     Collect the number to the result array
      result.push(arr[i]);
      
      i++;
    }
    
    return result;
}