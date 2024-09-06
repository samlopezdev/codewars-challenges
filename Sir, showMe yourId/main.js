// Sir, showMe yourID

// There's a new security company in Paris, and they decided to give their employees an algorithm to make first name recognition faster. In the blink of an eye, they can now detect if a string is a first name, no matter if it is a one-word name or an hyphenated name. They're given this documentation with the algorithm:

// In France, you'll often find people with hyphenated first names. They're called "prénoms composés". There could be two, or even more words linked to form a new name, quite like jQuery function chaining ;). They're linked using the - symbol, like Marie-Joelle, Jean-Michel, Jean-Mouloud. Thanks to this algorithm, you can now recognize hyphenated names quicker than Flash ! (yeah, their employees know how to use jQuery. Don't ask me why)

// Your mission if you accept it, recreate the algorithm. Using the function showMe, which takes a yourID argument, you will check if the given argument is a name or not, by returning true or false.

// Note that

// String will either be a one-word first name, or an hyphenated first name , its words being linked by "-".
// Words can only start with an uppercase letter, and then lowercase letters (from a to z)
// Now is your time to help the guards !


// Logical Solution
function showMe(yourID) {
    if (typeof yourID !== 'string' || yourID.includes(' ')) 
      return false;
  
    const regex = /^[A-Z][a-z]+$/
  
    return yourID.split('-').every(name => regex.test(name))
}


// Other Solution
const showMe = yourID => /^[A-Z][a-z]+(\-[A-Z][a-z]+)*$/.test(yourID)


// 2
function showMe(yourID) {
    const regex = /^[a-zA-Z-]+$/;
   if (!regex.test(yourID)) {
       return false
   }
   if (yourID.startsWith('-') || yourID.endsWith('-')) {
       return false;
   }

   if (yourID.includes('--')) {
       return false;
   }

   // Разбиваем строку на слова
   const words = yourID.split('-');

   for (let word of words) {
       if (word.length < 2) {
           return false;
       }

       const firstChar = word.charAt(0);
       if (firstChar < 'A' || firstChar > 'Z') {
           return false;
       }

       const restOfWord = word.slice(1);
       const restOfWordRegex = /^[a-z]+$/;
       if (!restOfWordRegex.test(restOfWord)) {
           return false;
       }
   }

   return true;
}


// 3
function showMe(yourID) {

    let regex = /^([A-Z][a-z]+)(-[A-Z][a-z]+)*$/;
    return regex.test(yourID);
}