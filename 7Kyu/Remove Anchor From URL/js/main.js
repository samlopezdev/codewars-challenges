// Remove Anchor From URL
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


// My Solution
function removeUrlAnchor(url){
    return url.split("#")[0]
}


// Other Solutions
const removeUrlAnchor = (url) => url.split("#")[0];


// 2
function removeUrlAnchor(url){
    let string = ""
    for(let i = 0; i < url.length; i++){
      if(url[i] === "#") { break }
      string += url[i]
    }
    return string 
}


// 3
function removeUrlAnchor(url) {
    var index = url.indexOf("#");
    return index == -1 ? url : url.substring(0, url.indexOf("#"));
}


// 4
function removeUrlAnchor(url) {
    return url.replace(/#.*/gi,"");
}