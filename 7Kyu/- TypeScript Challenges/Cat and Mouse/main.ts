// Cat and Mouse

// You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.

// You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:

// "C.....m" returns "Escaped!" <-- more than three characters between

// "C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump.

// My Solution
// x -> string of letters and symbols containing 'C', 'm', and '.'.
// return -> "Caught!" or "Escaped!" if the 'C' is 3 or less char away from 'm'
export function catMouse(x: string): string {
  return x.length < 5 ? "Caught!" : "Escaped!";
}

// Other Solutions
export function catMouse(x: string): string {
  return x.indexOf("C") + 4 >= x.indexOf("m") ? "Caught!" : "Escaped!";
}

// 2
export function catMouse(x: string): string {
  const res = x.match(/\.+/g)?.toString() || [];
  return res?.length > 3 ? "Escaped!" : "Caught!";
}

// 3
export function catMouse(x: string): string {
  return x.slice(1, -1).length <= 3 ? "Caught!" : "Escaped!";
}

// 4
export function catMouse(x: string): string {
  if (x.length <= 5) return "Caught!";

  return "Escaped!";
}