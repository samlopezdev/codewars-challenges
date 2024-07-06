// Your Order, Please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


// My Solution
function order(words){
    let array = words.split(' ');
    let sortedArray = [];
    for(i = 0; i <= array.length; i++) 
    {
        for(j = 0; j < array.length; j++) 
        {
            if(array[j].indexOf(i) >= 0) 
            {
                sortedArray.push(array[j]);
            }
        }
    }
    return sortedArray.join(' ');
}


// Other Solutions
function order(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}



// 2
function order(words){
    return words && words.split(' ')
      .map(word => word.match(/\d/) + word)
      .sort()
      .map(word => word.slice(1))
      .join(' ');
}


// 3
function order(words) {
    const result = [];
    const chunks = words.split(' ');
    
    for (let i = 1; i < chunks.length + 1; i++) {
      result.push(chunks.find((chunk) => chunk.includes(i)));
    }
    
    return result.join(' ');
}


// 4
function order(str)
{
	str = str.split(" ");
	var index, result = new Array(str.length);
	for (var i in str)
	{
		index=str[i].match(/\d/);
		result[index-1]=str[i];
	}
	return result.join(" ");
}


// 5
function order(words) {
    // ...
    const holder = [];
  
    const newArr = words.split(" ");
  
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].includes(1)) holder[0] = newArr[i];
      if (newArr[i].includes(2)) holder[1] = newArr[i];
      if (newArr[i].includes(3)) holder[2] = newArr[i];
      if (newArr[i].includes(4)) holder[3] = newArr[i];
      if (newArr[i].includes(5)) holder[4] = newArr[i];
      if (newArr[i].includes(6)) holder[5] = newArr[i];
      if (newArr[i].includes(7)) holder[6] = newArr[i];
      if (newArr[i].includes(8)) holder[7] = newArr[i];
      if (newArr[i].includes(9)) holder[8] = newArr[i];
    }
    return holder.join(' ');
}