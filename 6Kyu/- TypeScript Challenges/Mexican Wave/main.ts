// Mexican Wave

// Create a function that turns a string into a Mexican Wave. You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up.

// Rules
// 1.  The input string will always consist of lowercase letters and spaces, but may be empty, in which case you must return an empty array. 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Examples
// "hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// " s p a c e s " => [ " S p a c e s ", " s P a c e s ", " s p A c e s ", " s p a C e s ", " s p a c E s ", " s p a c e S "]

// My Solution
export function wave(str: string): Array<string> {
  const result: string[] = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
        result.push(
            str.substring(0, i) +
            str.charAt(i).toUpperCase() +
            str.substring(i + 1)
        );
    }
    
  }
  return result;
}


// Other Solutions
export function wave(str: string): Array<string> {
  var result: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result.push(replaceAt(str, i, str[i].toUpperCase()));
    }
  }
  return result;
}

function replaceAt(target: string, index: number, replacement: string) {
  return (
    target.substr(0, index) +
    replacement +
    target.substr(index + replacement.length)
  );
}


// 2
export function wave(str: string): Array<string> {
  const result: string[] = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    result.push(`${str.slice(0, i)}${str[i].toUpperCase()}${str.slice(i + 1)}`);
  }
  return result;
}


// 3
export function wave(str: string): Array<string> {
  if (!str) return [];
  const result: string[] = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return result;
}