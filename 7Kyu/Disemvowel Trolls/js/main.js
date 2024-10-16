// Disemvowel Trolls

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// My Solution:
function disemvowel(str) {
    return str.replace(/[aeiou]/ig, '');
}


// Other Solutions
let disemvowel = str => str.replace(/[aeiou]/gi,'')


// 2
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}



// 3
const disemvowel = (str) => {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	let newStr = '';
	for (let i = 0; i <= str.length; i++) {
		let char = str.charAt(i);
		if (vowels.indexOf(char) == -1) {
			newStr += char;
		}
	}
	return newStr;
}


// 4
function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(function(el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
}


//5
function disemvowel(str) {
    return str.replace(/[aeiouAEUIOU]/g, '');
}