// How good are you really? - Better Test Score?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!



// My Solution:
function betterThanAverage(classPoints, yourPoints) {
    let sum = 0
    classPoints.forEach(num => (sum += num))
    
    return yourPoints >= (sum / classPoints.length)
}



// Other Solutions:
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}




// 2
function betterThanAverage(classPoints, yourPoints) {
    const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
    const classAverage = classPointsSum / classPoints.length;
    const isBetter = yourPoints > classAverage;
    return isBetter;
}




// 3
function betterThanAverage(classPoints, yourPoints) {
    const allPoints = [yourPoints, ...classPoints];
    const average = allPoints.reduce((acc,val) => acc + val) / allPoints.length;
    
    return yourPoints > average; 
}



// 4
const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((sum, current) => sum + current, 0) / classPoints.length < yourPoints;