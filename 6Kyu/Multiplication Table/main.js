// Multiplication Table



// Logical Solution
multiplicationTable = function(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
}


// Other Solutions
const multiplicationTable = n => {
    const res = [];
    for (let i = 1; i <= n; i++) {
      const row = [];
      for (let j = 1; j <= n; j++)
        row.push(i * j);
      res.push(row);
    }
    return res;
}


// 2
multiplicationTable = function(size) {
    var table = new Array;
    for(var y = 0; y < size; y++) {
      table.push([]);
      for(var x = 0; x < size; x++) {
        table[y].push((y + 1) * (x + 1));
      }
    }
    return table;
}



// 3
multiplicationTable = function(size) {
    const table = []
    for (let i =1 ; i <= size; i++) {
      let numbers = Array(size)
      .fill(1)
      .map((element, index)=>(element+index)*i)
      table.push(numbers)
    }
    return table
}