// Difference of Cuboid Volumes

// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.


// My Solution
function findDifference(a, b) {
    return Math.abs(((a[0] * a[1]) * a[2]) - ((b[0] * b[1]) * b[2]))
}


// Other Solutions
function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}


// 2
function find_difference([a,b,c], [d,e,f]) {
    return Math.abs(a*b*c-d*e*f)
}


// 3
function find_difference(a, b) {
    var a3 = a[0]*a[1]*a[2]; //calculate volumes
    var b3 = b[0]*b[1]*b[2]; //calculate volumes
    if (a3>b3) { // if cube a > cube b = a - b (to get rid of negative numbers)
      return a3-b3;
    } else {
      return b3-+a3;
    }
}


// 4
function findDifference(a, b) {
    return Math.abs(a.reduce((a,b)=>a*b) - b.reduce((a,b)=> a*b))
}