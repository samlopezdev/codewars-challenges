// up AND down

// You are given a string s made up of substring s(1), s(2), ..., s(n) separated by whitespaces. Example: "after be arrived two My so"

// Task
// Return a string t having the following property:

// length t(O) <= length t(1) >= length t(2) <= length t(3) >= length t(4) .... (P)

// where the t(i) are the substring of s; you must respect the following rule:

// at each step from left to right, you can only move either already consecutive strings or strings that became consecutive after a previous move. The number of moves should be minimum.

// Let us go with our example:
// The length of "after" is greater than the length of "be". Let us move them ->"be after arrived two My so"

// The length of "after" is smaller than the length of "arrived". Let us move them -> "be arrived after two My so"

// The length of "after" is greater than the length of "two" ->"be arrived two after My so"

// The length of "after" is greater than the length of "My". Good! Finally the length of "My" and "so" are the same, nothing to do. At the end of the process, the substrings s(i) verify:

// length s(0) <= length s(1) >= length s(2) <= length s(3) >= length (s4) <= length (s5)

// Hence given a string s of substrings s(i) the function arrange with the previous process should return a unique string t having the property (P).

// It is kind of roller coaster or up and down. When you have property (P), to make the result more "up and down" visible t(0), t(2), ... will be lower cases and the others upper cases.

// arrange("after be arrived two My so") should return "be ARRIVED two AFTER my SO"
// Notes:
// The string "My after be arrived so two" has the property (P) but can't be obtained by the described process so it won't be accepted as a result. The property (P) doesn't give unicity by itself.
// Process: go from left to right, move only consecutive strings when needed.
// For the first fixed tests the needed number of moves to get property (P) is given as a comment so that you can know if your process follows the rule.

// My Solution
// strng -> string of words separated by white spaces. Both lowercase & uppercase letters.
// return -> a new string where the words are re-arranged based on:
//   ( length t(O) <= length t(1) ) >= length t(2) <= length t(3) >= length t(4)
// and then every other word is capitolized, starting from the 0th index
// map every ODD one toUpperCase()
function arrange(strng) {
  strng = strng.split(" ");

  for (let i = 0; i < strng.length - 1; i++) {
    let current = strng[i],
      next = strng[i + 1];

    if (i % 2 === 0) {
      if (current.length > next.length) {
        strng[i] = next;
        strng[i + 1] = current;
      }
    } else {
      if (current.length < next.length) {
        strng[i] = next;
        strng[i + 1] = current;
      }
    }
  }

  return strng
    .map((str, i) => (i % 2 === 0 ? str.toLowerCase() : str.toUpperCase()))
    .join(" ");
}

// Other Solutions
function arrange(strng) {
  let arr = strng.split(" ");
  for (let i = 0; i < arr.length - 1; i++) {
    if (i % 2 === 0) {
      if (arr[i].length > arr[i + 1].length) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    } else {
      if (arr[i].length < arr[i + 1].length) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr
    .map((word, index) =>
      index % 2 === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .join(" ");
}

// 2
function arrange(str) {
  let words = str.split(" ");

  for (let d = 1, j = 0, i = 1; i < words.length; i++) {
    if (d * words[j].length > d * words[i].length) {
      [words[j], words[i]] = [words[i], words[j]];
    }

    j = i;
    d = -d;
  }

  return words
    .map((w, i) => w[i % 2 ? "toUpperCase" : "toLowerCase"]())
    .join(" ");
}

// 3
const arrange = (str) => {
  const words = str.split(" ");

  for (let i = 1; i < words.length; i++) {
    if (
      (i % 2 == 0 && words[i].length > words[i - 1].length) ||
      (i % 2 != 0 && words[i].length < words[i - 1].length)
    ) {
      const tmp = words[i];
      words[i] = words[i - 1];
      words[i - 1] = tmp;
    }
  }

  return words
    .map((w, i) => (i % 2 ? w.toUpperCase() : w.toLowerCase()))
    .join(" ");
};
