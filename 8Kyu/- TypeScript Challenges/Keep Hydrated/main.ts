// Keep Hydrated

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5


// My Solution
export function litres(time: number): number {
  return Math.floor(0.5 * time);
}


// Other Solutions
export function litres(time: number): number {
  const rateOfConsumption: number = 0.5;
  return Math.floor(time * rateOfConsumption);
}


// 2
export function litres(time: number): number {
  return (time * 0.5) | 0;
}


// 3
export const litres = (time: number): number => Math.floor(time * 0.5);