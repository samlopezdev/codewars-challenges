// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My Solution
// str -> string of lowercase letters &/or spaces
// return -> number of vowels

export class Kata {
  static getCount(str: string): number {
    let vowels: string = "aeiou",
      count: number = 0;

    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) count++;
    }

    return count;
  }
}

// Other Solutions
export class Kata {
  static getCount(str: string) {
    let list = str.match(/[aeiou]/gi);
    return list ? list.length : 0;
  }
}

// 2
export class Kata {
  static getCount(str: string) {
    return [...str].filter((char) => "aeiou".includes(char)).length;
  }
}

// 3
export class Kata {
  static getCount(str: string) {
    return [...str].filter((ch) => "aeiou".includes(ch)).length;
  }
}

// 4
export class Kata {
  static getCount(str: string) {
    return str.replace(/[^aeiou]/gi, "").length;
  }
}
