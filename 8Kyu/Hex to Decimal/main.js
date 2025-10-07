// Hex to Decimal

// Complete the function which converts hex number (given as a string) to a decimal number.


// My Solution
const hexToDec = (hexString) => parseInt(hexString, 16);


// Other Solutions
function hexToDec(hexString) {
  var htd = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  return hexString
    .toLowerCase()
    .split("")
    .reverse()
    .reduce((c, v, i) => (v === "-" ? -c : c + htd[v] * Math.pow(16, i)), 0);
}