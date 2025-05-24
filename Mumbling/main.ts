// Mumbling

// The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// My Solution
// s -> string of lowercase & uppercase letters. no numbers or punctuation
// return -> each letter separated by '-'. Letter should be repeated number of times as index
export function accum(s: string): string {
    return s.toLowerCase()
            .split('')
            .map( (letter, i) => letter.toUpperCase() + letter.repeat(i))
            .join('-')
}


// Other Solutions
export function accum(s: string): string {
  return [...s.toLowerCase()]
    .map((c, idx) => c.toUpperCase() + c.repeat(idx))
    .join("-");
}

// 2
export function accum(s: string): string {
  return s
    .split("")
    .map((char, index) => char.repeat(index + 1))
    .map((char) => char[0].toUpperCase() + char.substr(1).toLowerCase())
    .join("-");
}


// 3
export function accum(str: string): string {
  const arrOfStr: string[] = str.toLowerCase().split(``);

  return arrOfStr
    .map((elem, index) => elem.toUpperCase() + elem.repeat(index))
    .join(`-`);
}