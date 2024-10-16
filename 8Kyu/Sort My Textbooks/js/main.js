// Sort My Textbooks

// HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

// The sorting should NOT be case sensitive


// Logical Solutions
function sorter(textbooks) {
    return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : 
                                    a.toLowerCase() < b.toLowerCase() ? -1  : 0)
}


// Other Solutions
const sorter = (textbooks) => textbooks
  .sort((a, b) => {
    const aa = a.toLowerCase()
    const bb = b.toLowerCase()
    if (aa > bb) return 1
    if (aa < bb) return -1
    return 0
});


// 2
function sorter(arr) {
    return arr.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
}



// 3
function sorter(textbooks) {
    let arr = [];
    
    let item = textbooks[0];
    for (let i = 0; i < textbooks.length - 1; i++) {
      for (let j = i + 1; j < textbooks.length; j++) {
        if (textbooks[i].toLowerCase() > textbooks[j].toLowerCase()) {
          item = textbooks[i];
          textbooks[i] = textbooks[j];
          textbooks[j] = item;
        }
      }
    }
    return textbooks;
}



// 4
function sorter(textbooks) {
    return textbooks.sort((a, b) => {
      const u = a.toUpperCase(), v = b.toUpperCase();
      return (u > v) - (u < v);
    });
}