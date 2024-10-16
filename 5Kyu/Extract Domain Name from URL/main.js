// Extract The Domain Name from A URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"



// My Solution
function domainName(url){
	return url.replace("http://", "")
            .replace("https://", "")
            .replace("www.", "")
            .split('.')[0]
}


// Other Solutions
function domainName(url){
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0]
}


// 2
function domainName(url){
    if(url.indexOf('www')>-1) return url.split('.')[1]
    if(url.indexOf('//')>-1) return url.split('//')[1].split('.')[0]
    return url.split('.')[0]
}


// 3
function domainName(url) {
    return url
      .replace(/http[s]?:\/\//, "")
      .replace(/www./, "")
      .split(".")[0];
}


// 4
function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}