// Clothes Size Number Converter

// You have clothes international size as text (xs, s, xxl).
// Your goal is to return European number size as a number from that size.

// Notice that there is arbitrary amount of modifiers (x), excluding m size, and input can be any string.

// Linearity
// Base size for medium (m) is 38.
// (then, small (s) is 36, and large (l) is 40)

// The scale is linear; modifier x continues that by adding or subtracting 2 from resulting size.

// (For sizes where x modifier makes total size negative, treat that as OK, and return negative size)

// Invalid cases
// Function should handle wrong/invalid sizes.

// Valid input has any base size (s/m/l) and any amount of modifiers (x) before base size (like xxl).
// Notice that you cannot apply modifier for m size, consider that case as invalid!
// Anything else is disallowed and should be considered as invalid (None for Python, 0, false for Go, null for JavaScript).

// Invalid examples: xxx, sss, xm, other string

// Valid Examples
// xs: 34
// s: 36
// m: 38
// l: 40
// xl: 42


// Logical Solution
function sizeToNumber(size) {
    if (size == "s") return 36;
    if (size == "m") return 38;
    if (size == "l") return 40;
    const x = size.match(/x/g)?.length;
    if (/^x+s$/.test(size)) return 36 - (x * 2);
    if (/^x+l$/.test(size)) return 40 + (x * 2);
    return null
}


// Other Solutions
function sizeToNumber(size) {
  
    const bases = { s: 36, m: 38, l: 40 }
    ,      mods = { s: -2, m: 0, l: +2 }
    ,     match = size.match(/^(?=x*[sl]|m)(x*)([sml])$/);
  
    if (!match)
      return null;
    
    const [ , mod, base ] = match;
    
    return bases[base] + mod.length * mods[base];
  
}


// 2
function sizeToNumber(m) {
    if (!/^(([x]*[sl])|([m]))$/.test(m)) return null;
    let a = m.at(-1);
    if (a == "m") return 38;
    let b = a == "s" ? -1 : 1;
    return 38 + m.length * 2 * b;
}


// 3
function sizeToNumber(size) {
    const pattern = /^(x*)(s|m|l)$/;
  
    const match = size.match(pattern);
  
    if (!match) {
      return null;
    }
  
    const [, modifiers, baseSize] = match;
  
    if (baseSize === 'm' && modifiers.length > 0) {
      return null;
    }
  
    const modifiersCount = modifiers.length;
  
    if (baseSize === 's') {
      return 36 - 2 * modifiersCount;
    } else if (baseSize === 'l') {
      return 40 + 2 * modifiersCount;
    } else {
      return 38;
    }
}


// 4
function sizeToNumber(size) {
    const sizes = {
      "s": 36,
      "m": 38,
      "l": 40,
    }
    
    let modifiers = 0
    let intSize = ""
    
    // split string to count modifier and extract size
    for (const char of size.toLowerCase()) {
      if (char === "x") {modifiers++}
      else (intSize += char)
    }
    
    // check for invalid size string
    if (intSize !== "s" && intSize !== "m" && intSize !== "l") {return null}
    
    if (intSize === "m" && modifiers) {return null}
    
    const baseSize = sizes[intSize]
    
    if (modifiers) {
      if(intSize === "s") {return baseSize - (2 * modifiers)}
      else {return baseSize + (2 * modifiers)}
    }
    return baseSize
    
}