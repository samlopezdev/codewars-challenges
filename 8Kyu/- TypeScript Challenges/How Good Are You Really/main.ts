// How Good Are You Really

// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// My Solution
export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  const avg = classPoints.reduce((a, b) => a + b) / classPoints.length;
  return yourPoints > avg;
}

// Other Solutions
export const betterThanAverage = (classPoints: number[], yourPoints: number) =>
  classPoints.reduce((acc, it) => acc + it, 0) / classPoints.length <=
  yourPoints;

// 2
export function betterThanAverage(classPoints: number[], yourPoints: number) {
  const average =
    classPoints.concat(yourPoints).reduce((prev, curr) => prev + curr) /
    (classPoints.length + 1);
  return yourPoints > average;
}

// 3
export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  const allPoints = [...classPoints, yourPoints];

  return (
    allPoints.reduce((current, total) => current + total, 0) /
      allPoints.length <
    yourPoints
  );
}
