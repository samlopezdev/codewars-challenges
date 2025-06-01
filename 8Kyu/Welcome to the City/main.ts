// Welcome to the City

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// My Solution
// name -> array of 2 string elements. ['firstN', 'lastN']
// city -> string. Name of a city
// state -> string. Name of a state

// returned -> string that welcomes person. `Hello, firstN lastN! Welcome to City, State!`
export const sayHello = (
  name: string[],
  city: string,
  state: string
): string => {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
};


// Other Solutions
export const sayHello = (
  name: string[],
  city: string,
  state: string
): string => {
  let res = "";
  for (let i = 0; i < name.length; i++) {
    res = `${res} ${name[i]}`;
  }

  return `Hello,${res}! Welcome to ${city}, ${state}!`;
};


// 2
export function sayHello(name: string[], city: string, state: string): string {
  const fullName = name.join(" ");
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}