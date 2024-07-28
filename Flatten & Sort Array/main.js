// Flatten & Sort An Array



// Logical Solutions
function flattenAndSort(array) {
    return [].concat(...array).sort((a,b) => a - b);
}


// Other Solutions
const flattenAndSort = (array) => array.flat().sort((a, b) => a-b);


// 2
function flattenAndSort(array) {
    var newArray = [];
    for(var i =0;i<array.length;i++)
    {
      for(var j=0;j<array[i].length;j++)
      {
        newArray.push(array[i][j]);
      }
    }
      
    return newArray.sort((a,b) =>  a-b);
}


// 3
function flattenAndSort(array) {
    let arr = []

    for (let i = 0; i < array.length; i++) {
        arr.push(...array[i])
    }

    return arr.sort((a,b) => a - b)
}


// 4
function flattenAndSort(array) {
    return flatten(array).sort((a, b) => a - b);
  }
  
  function flatten(array) {
    return array.reduce(function(acc, el) {
      return acc.concat(Array.isArray(el) ? flatten(el) : el);
    }, []);
}