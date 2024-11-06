// Regexp Basics - Is it a Digit?

// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.



// My Solution
String.prototype.digit = function() {
    return /^[0-9]$/.test(this)
}



// Other Solutions
String.prototype.digit = function() {
    return this.length === 1 && '0' <= this && this <= '9';
};



// 2
String.prototype.digit = function() {
    let regex = /^[0-9]$/;
    return regex.test(this);
};