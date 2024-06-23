// Detect Panagram

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// Logical Solution
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}


// Other Solutions
function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}


// 2
function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    
    for (var i = 0; i < 26; i++)
        
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    
        return true;
}


// 3
function isPangram(str){
    var alphabet = ['a', 'b', 'c', 'd', 'e',
                    'f', 'g', 'h', 'i', 'j',
                    'l', 'm', 'n', 'o', 'p',
                    'q', 'r', 's', 't', 'u',
                    'v', 'w', 'x', 'y', 'z'
                    ];
         str = str.toLowerCase();
         for (var i = 0; i < alphabet.length; i++) {
             if (str.indexOf(alphabet[i])<0) {
               return false;
             }
         }
         return true
}


// 4
function isPangram(string){
    let str = string.toLowerCase()
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    for (let i = 0; i < alpha.length; i++) {
      if (str.indexOf(alpha[i]) < 0) {
        return false
      }
    }
    return true
}