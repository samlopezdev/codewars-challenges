// Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".


// My Solution
function greet(name){
    return `Hello, ${name} how are you doing today?`
}


// Other Solutions:
const greet = name => `Hello, ${name} how are you doing today?`



// 2
function greet(name) {
    return "Hello, " + name + " how are you doing today?";
}


// 3
function greet(name){
    return "Hello, <name> how are you doing today?".replace("<name>", name);
}


// 3
function greet(name){
    let a= name.split("");
        let j=[];
           a[0]="Hello,"
           a[1]=name
           a[2]="how are you doing today?"
           j.push(a[0],a[1],a[2])
           return j.join(" ")
}



// 4
const greet = function(name){
    const arr = ['Hello,', name,'how', 'are', 'you', 'doing', 'today?']
    return arr.join(' ')
}