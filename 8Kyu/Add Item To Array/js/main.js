// Basic Training: Add Item To An Array

// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// var websites = [];


// My Solution:
websites.push('codewars')


// Other Solutions:

// websites.push("codewars");
// websites.unshift("codewars");
// websites.splice(0,0,"codewars");
// websites[0] = "codewars";
{ websites.length=1; websites.fill("codewars"); }




// 2
Array.prototype.codewarsCharCode = function (n) {
    return 99 +
    Math.min(12, n * 12) - 
    Math.min(11, Math.max(n - 1, 0) * 11) +
    Math.min( 1, Math.max(n - 2, 0) *  1) +
    Math.min(18, Math.max(n - 3, 0) * 18) -
    Math.min(22, Math.max(n - 4, 0) * 22) +
    Math.min(17, Math.max(n - 5, 0) * 17) +
    Math.min( 1, Math.max(n - 6, 0) *  1)
  }
  
  Array.prototype.codewarsString = function() {
    var i, result = '';
    for (i = 0; i < 8; i++) {
      result = result.slice(0, i) + String.fromCharCode(this.codewarsCharCode(i)) + result.slice(i);
    }
    return result;
  }
  
  Array.prototype.codewars = function () {
    var index, i;
    index = this.indexOf(this.codewarsString);
    if (index !== -1) {
      this.splice(0, index);
      this.splice(index - 1, this.length);
    } else {
      this.splice(0, this.length);
      this.push(this.codewarsString());
    }
  }
  
  websites.codewars()



// 3
var toAdd = "codewars";
if (websites.indexOf(toAdd) === -1) {
  websites.push(toAdd);
}



// 4
websites.splice(0, 1, "codewars")