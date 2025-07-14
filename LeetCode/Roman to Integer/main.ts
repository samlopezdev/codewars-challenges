// Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// My Solution
function romanToInt(s: string): number {
    // total variable?
    let total: number = 0
    // loop thru string
    for (let i = 0; i < s.length; i++) {
        // check which letter is in each index
        console.log(s[i])
        switch (true) {
            // add appropriate value to total
            // check if numeral is preceeded by V,X,L,C,D,M
            case s[i] === 'I' && s[i + 1] === 'V':
                total += 4
                i += 1
                break;

            case s[i] === 'I' && s[i + 1] === 'X':
                total += 9
                i += 1
                break;

            case s[i] === 'X' && s[i + 1] === 'L':
                total += 40
                i += 1
                break;

            case s[i] === 'X' && s[i + 1] === 'C':
                total += 90
                i += 1
                break;

            case s[i] === 'C' && s[i + 1] === 'D':
                total += 400
                i += 1
                break;

            case s[i] === 'C' && s[i + 1] === 'M':
                total += 900
                i += 1
                break;

            // Check for regular numerals
            case s[i] === 'I':
                total += 1
                break;
            case s[i] === 'V':
                total += 5
                break;
            case s[i] === 'X':
                total += 10
                break;
            case s[i] === 'L':
                total += 50
                break;
            case s[i] === 'C':
                total += 100
                break;
            case s[i] === 'D':
                total += 500
                break;
            case s[i] === 'M':
                total += 1000
                break;
            default: return 1337
        }
    }

    return total
};

// s -> string of roman numerals. 'IVXLCDM'
// returned -> roman numerals to its number


// Other Solutions
const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const integers = s.split("").map((c) => roman[c]);

  return integers.reduce(
    (acc, x, i) => (x < integers[i + 1] ? acc - x : acc + x),
    0
  );
};


// 2
function romanToInt(s: string): number {
    let result = 0;
    let prevValue = 0;
    const romanValues: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (let i = s.length - 1; i >= 0; i--) {
        const currValue = romanValues[s[i]];
        if (currValue < prevValue) {
            result -= currValue;
        } else {
            result += currValue;
        }
        prevValue = currValue;
    }
    return result;
};


// 3
function romanToInt(romans: string): number {
  const romanNumeralDict: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return romans
    .replace(/IV/g, "IIII")
    .replace(/IX/g, "VIIII")
    .replace(/XL/g, "XXXX")
    .replace(/XC/g, "LXXXX")
    .replace(/CD/g, "CCCC")
    .replace(/CM/g, "DCCCC")
    .split("")
    .map((roman) => romanNumeralDict[roman])
    .reduce((prev, current) => prev + current, 0);
};