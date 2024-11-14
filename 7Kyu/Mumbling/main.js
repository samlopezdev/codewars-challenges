//  Mumbling

// The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



// My Solution
// s -> string of uppercase & lowercase letters
// return -> first new letter capitalized. followed by duplicates up to the number of new letters
function accum(s) {
    // create empty string var
    let jibberish = []
    // loop thru s
    for (let i = 0; i < s.length; i++) {
      // push letter & duplicates- (if any) to string var (repeat)
      jibberish.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i))
    }
    return jibberish.join('-')
    
}
// console.log( accum("cwAt"), "C-Ww-Aaa-Tttt")
// console.log( accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")



// Other Solutions
function accum(s) {
	return s.split('')
            .map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i)))
            .join('-');
}