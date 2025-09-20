// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string


// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"



// My Solution
function remove(s){
  return s.replace(/!/g, '') + '!'
}

// Other Solutions
const remove = (s) => s.replace(/!+/g, "") + "!";


// 2
function remove(string) {
  let newArr = string
    .split("")
    .filter((c) => c !== "!")
    .join("");
  return `${newArr}!`;
}