// Data Reverse

// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]


// My Solution
function dataReverse(data) {
    // data -> array of whole nums.(1s & 0s)
    //return -> reversed bytes

    //   let byte1 = data.slice(0, 8)
    //   let byte2 = data.slice(8, 16)
    //   let byte3 = data.slice(16, 24)
    //   let byte4 = data.slice(24, 32)
    //   return byte4.concat(byte3,byte2,byte1) 
      let newArr = []
      for (let i = 0; i < data.length; i += 8) {
        newArr.unshift(...data.slice(i, i + 8))
      }
      return newArr
}   

// data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1
// data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]


// Other Solutions
const dataReverse = data => {

	const result = [];

	while(data.length){
		result.push(...data.splice(-8))
	}

	return result;
}


// 2
function dataReverse(data) {
    const reverseData = [];
  
    for (let i = data.length; i > 0; i -= 8) {
      const segment = data.slice(i - 8, i);
      reverseData.push(...segment);
    }
    return reverseData;
}


// 3
function dataReverse(data) {
    const result = []
    for(let i = data.length; i - 8 >= 0; i -= 8) {
      result.push(...data.slice(i - 8, i))
    }
    
    return result
}