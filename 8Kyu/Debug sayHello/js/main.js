// Grasshopper - Debug sayHello
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock


// My Solution
function sayHello(name) {
    return `Hello, ${name}`
}


// Other Solutions
const sayHello = name => `Hello, ${name}`


// 2
function sayHello (name) {
    return 'Hello, ' +  name;
}


// 3
function sayHello (name) {
    this.name = name;
    return ('Hello, ' + name);
}


// 4
function sayHello(name) {
    let hello1="Hello, Mr. Spock"
    let hello2="Hello, Captain Kirk"
    let hello3="Hello, Liutenant Uhura"
    let hello4="Hello, Dr. McCoy"
    let hello5="Hello, " + name
    if (name==='Mr. Spock'){
      return hello1
    }else if(name==='Captain Kirk'){
      return hello2
    }else if(name==='Liutenant Uhura'){
      return hello3
    }else if(name==='Dr.McCoy') {
      return hello4
    }else{
      return hello5
    }
}