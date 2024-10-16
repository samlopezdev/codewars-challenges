// Safen User Input Part 1 - htmlspecialchars

// Safen User Input Part I - htmlspecialchars
// You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

// Mission
// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;
// Good luck :D


// My Solution
function htmlspecialchars(formData) {
    return formData.split('').map( char => {
      if (char === '<') return '&lt;'
      if (char === '>') return '&gt;'
      if (char === '"') return '&quot;'
      if (char === '&') return '&amp;'
      else { return char }
    }).join('')
}


// Other Solutions
function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
                   .replace(/"/g, "&quot;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;");
}


// 2
function htmlspecialchars(formData) {
    const filter = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
    return formData.replace(/[<>"&]/g, char => filter[char]);
}


// 3
function htmlspecialchars(formData) {
    let str = '';
    for (let char of formData) {
      switch(char) {
          case '<':
            str += '&lt;';
            break;
          case '>':
            str += '&gt;';
            break;
          case '"':
            str += '&quot;';
            break;
          case '&':
            str += '&amp;';
            break;
          default: 
            str += char;
      }
    }
    
    return str;
}


// 4
function htmlspecialchars(formData) {
    const map = {'<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;'};
    return formData.replace(/./g, char => map[char] || char);
}