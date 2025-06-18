// Disemvowel Trolls

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


// My Solution
export class Kata {
    static disemvowel(str: string): string {
      return str.replace(/[aeiou]/ig, "")
    }
}


// Other Solutions
export class Kata {
    static disemvowel(str: string) {
      var vowels: string = 'AEIOUaeiou';
      return str.split('').filter(v => !vowels.includes(v)).join('')
    }
}

// 2
export class Kata {
    static disemvowel(str : string) : string {
      return [...str]
              .filter(el => !'aoiueAOIUE'.includes(el))
              .join('')
    }
}