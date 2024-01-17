// JS Training 5 - Basic Data Types (Object)

// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."


// My Solution:
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}


// Other Solutions:
const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;



// 2
function animal(obj){
    let {color,name,legs} = obj;
    return `This ${color} ${name} has ${legs} legs.`
}