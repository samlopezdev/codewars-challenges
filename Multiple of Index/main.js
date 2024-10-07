// Multiple Of Index

// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]



// My Solution
function multipleOfIndex(array) {
    return array.filter( (num, i) => num == 0 || num % i == 0)
}


// Other Solutions
const multipleOfIndex = array =>
    array.filter((element, index) => element % index == 0 || element == 0)


// 2
function multipleOfIndex(array) {
    let res = []
    
    if(array[0] === 0){
      res.push(array[0])
    }
    
    for(let i = 1; i < array.length; i++){
      if(array[i] % i === 0){
        res.push(array[i])
      }
    }
    return res
}