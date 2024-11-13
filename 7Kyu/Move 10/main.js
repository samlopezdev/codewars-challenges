// Move 10

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.



// Logical Solutions
function moveTen(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let move10 = 'klmnopqrstuvwxyzabcdefghij'
    return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)])
}


// 2
function moveTen(s){
    return s.split('').map(e => e.charCodeAt(0) + 10 > 122 
                                  ? String.fromCharCode(e.charCodeAt(0) - 16) 
                                  : String.fromCharCode(e.charCodeAt(0) + 10)).join('');
}



// 3
const moveTen = s =>
    s.replace(/./g, val => String.fromCharCode(97 + (val.charCodeAt() - 87 ) % 26));


// 4
function moveTen(s){
    const o = {
      a:"abcdefghijklmnopqrstuvwxyz",
      t:"klmnopqrstuvwxyzabcdefghij"                                                                
    }
    const translate = n => o.t[o.a.indexOf(n)]
    return s.replace(/[a-z]/gi, translate)
}


// 5
function moveTen(s){
    var ans='';
    for (var i=0; i<s.length; ++i)
      if (s[i].charCodeAt() + 10 > 'z'.charCodeAt())
        ans += String.fromCharCode(s[i].charCodeAt() - 16);
      else
        ans+=String.fromCharCode(s[i].charCodeAt()+10);
    return ans;
}