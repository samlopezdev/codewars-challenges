// My Solution
function replaceCommon(string: string, letter: string):string {
  const map: Record<string, number>= {};
  let [maxChar, highestCount] = ["", 0];

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

export { replaceCommon };