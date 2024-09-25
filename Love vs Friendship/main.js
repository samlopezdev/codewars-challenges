// Love vs Friendship

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.



// My Solution
function wordsToMarks(string){
    let total = 0
    for (let i = 0; i < string.length; i++) {
      total += string.charCodeAt(i) - 96
    }
    
    return total
}


// Other Solutions
const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)


//2
function wordsToMarks(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let marks = 0;
    string.split('').forEach((char) => {
      marks += alphabet.indexOf(char) + 1;
    });
    return marks;
}


//3
function wordsToMarks(str){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    return [...str].reduce((sum,letter)=> (sum += (alphabet.indexOf(letter) + 1),sum),0)
}


//4
function wordsToMarks(string) {
    let result = 0;
  let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }
  for(let i = 0; i < string.length; i++) {
    result += obj[string[i]]
  }
  return result;