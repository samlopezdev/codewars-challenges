// Gematria For All

// Gematria is an Assyro-Babylonian-Greek system of code and numerology later adopted into Jewish culture. The system assigns numerical value to a word or a phrase in the belief that words or phrases with identical numerical values bear some relation to each other or bear some relation to the number itself. While more commonly used on Hebrew words, there is also an English version.

// Each letter has a value and the gematrian value of a word or a phrase is the sum of those values. The code takes a word or an expression and returns the gematrian value of it.

// The calculation is case insensitive and counts no spaces.

// Example: The gematrian value of "love" is 20+50+700+5 = 775

// These are the values of the different letters:

// a=1, b=2, c=3, d=4, e=5, f=6, g=7, h=8, i=9, k=10, l=20, m=30, n=40, o=50, p=60, q=70, r=80, s=90, t=100, u=200, x=300, y=400, z=500, j=600, v=700, w=900


// My Solution
export function gematria(str: string): number {
  const gematria = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    k: 10,
    l: 20,
    m: 30,
    n: 40,
    o: 50,
    p: 60,
    q: 70,
    r: 80,
    s: 90,
    t: 100,
    u: 200,
    x: 300,
    y: 400,
    z: 500,
    j: 600,
    v: 700,
    w: 900,
    " ": 0,
  };
  return str
    .toLowerCase()
    .split("")
    .reduce((a, b) => a + gematria[b], 0);
}



// Other Solutions
export function gematria(str: string): number {
    const values = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 600, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
      200, 700, 900, 300, 400, 500,
    ];
  return str
    .toUpperCase()
    .split("")
    .filter((c) => /[a-zA-Z]/.test(c))
    .reduce((a, v) => a + values[v.charCodeAt(0) - 65], 0);
}


// 2
const letterValues: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 600,
  k: 10,
  l: 20,
  m: 30,
  n: 40,
  o: 50,
  p: 60,
  q: 70,
  r: 80,
  s: 90,
  t: 100,
  u: 200,
  v: 700,
  w: 900,
  x: 300,
  y: 400,
  z: 500,
};

export function gematria(str: string): number {
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, nextLetter) => acc + (letterValues[nextLetter] ?? 0), 0);
}