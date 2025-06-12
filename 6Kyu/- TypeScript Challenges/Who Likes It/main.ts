// Who Likes It?

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"



// My Solution
export const likes = (a : string[]) : string => {
    switch (a.length) {
        case 0: 
          return "no one likes this"
        
        case 1: 
          return `${a[0]} likes this`
          
        case 2: 
          return `${a[0]} and ${a[1]} like this`
          
        case 3: 
          return `${a[0]}, ${a[1]} and ${a[2]} like this`
          
        default: 
          return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`
    }
}
  
// a -> array of strings(names). Uppecase, lowercase, no numbers or spaes. Could be empty.
// return -> string that says the names of people who like it.


// Other Solutions
export const likes = (a: string[]): string => {
  if (a.length == 0) {
    return "no one likes this";
  }

  if (a.length == 1) {
    return `${a[0]} likes this`;
  }

  if (a.length == 2) {
    return `${a[0]} and ${a[1]} like this`;
  }

  return `${a[0]}, ${a[1]} and ${
    a.length > 3 ? a.length - 2 + " others" : a[2]
  } like this`;
};


// 2
export const likes = (names: string[]): string => {
  if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  return "no one likes this";
};


// 3
export const likes = (names: string[]): string => {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)] as string;
};