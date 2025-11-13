// The Most Common Letter

// Find the most common letter (not a space) in the given string (comprised of at least 3 lowercase words) and replace it with the given letter.

// If such letters are two or more, choose the one that appears earliest in the string.

// For example:

// ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
// ('real talk bro', 'n') => 'neal talk bno'
// ('great job go ahead', 'k') => 'grekt job go khekd'


// My Solution
function replaceCommon(string, letter) {
  // string -> string of letters and spaces.
  // letter -> string of a single letter.

  // return -> same string with the MOST COMMON character (not a space) replaced with the given letter

  const map = {};
  let maxChar = null,
    highestCount = 0;

    // count occurrences of each character
  for (const char of string) {
    if (char === " ") continue;
    map[char] ? map[char]++ : (map[char] = 1);
  }

  // find the character with the highest count
  for (const c in map) {
    if (map[c] > highestCount) {
      maxChar = c;
      highestCount = map[c];
    }
  }

  // replace all occurrences of the most common character with the given letter
  return string.replaceAll(maxChar, letter);
}


// Other Solutions
function replaceCommon(string, letter) {
  let counts = {};
  for (let char of string) {
    if (char !== ' ') {
      counts[char] = (counts[char] || 0) + 1;
    }
  }
  let maxCount = 0;
  let mostCommonChar = '';
  for (let char of string) {
    if (counts[char] > maxCount) {
      maxCount = counts[char];
      mostCommonChar = char;
    }
  }
  return string.split(mostCommonChar).join(letter);
}


// 2
function replaceCommon(string, letter) {
  const arr = [...string];
  const letters = [...new Set(arr.filter((i) => i !== " "))];
  let [commonLetter, count] = ["", 0];

  for (const item of letters) {
    const itemsNumber = arr.filter((x) => x === item).length;
    if (itemsNumber > count) [commonLetter, count] = [item, itemsNumber];
  }

  return string.replaceAll(commonLetter, letter);
}


// 3
function replaceCommon(str, letter) {
  var $ = Array.from(
    (x = [...new Set(str.replace(/ /g, "").split(""))]),
    (_) => str.split(_).length
  );
  return str.replace(new RegExp(x[$.indexOf(Math.max(...$))], "g"), letter);
}