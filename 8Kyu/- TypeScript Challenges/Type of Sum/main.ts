// Type of Sum

// Return the type of the sum of the two arguments

// My Solution
// if there is a string return string,
// if there isn't a string return number
export function typeOfSum(a: any, b: any): string {
  if (typeof a === "string" || typeof b === "string") return "string";
  return "number";
}

// Other Solutions
export function typeOfSum(a: any, b: any): any {
  return typeof (a + b);
}

// 2
export function typeOfSum(a: any, b: any): string {
  return typeof (a + b) === "number" ? "number" : "string";
}

// 3
export function typeOfSum(a: any, b: any): string {
  if (typeof a === "string" || typeof b === "string") return "string";
  else return "number";
}
