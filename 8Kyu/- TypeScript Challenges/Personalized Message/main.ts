// Personalized Message

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'


// My Solution
export function greet(name: string, owner: string): string {
  return name === owner ? "Hello boss" : "Hello guest";
}


// Other Solution
export function greet(name: string, owner: string): string {
  return `Hello ${name === owner ? "boss" : "guest"}`;
}

// 2
export function greet(name: string, owner: string): string {
  switch (true) {
    case name === owner:
      return "Hello boss";
    case name !== owner:
      return "Hello guest";
    default:
      return name;
  }
}


// 3
export const greet = (name: string, owner: string): string =>
  "Hello " + (name === owner ? "boss" : "guest");
