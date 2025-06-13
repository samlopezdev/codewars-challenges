// Opposites Attract

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


// My Solution
export const loveFunc = (flower1: number, flower2: number): boolean => 
    (flower1 + flower2) % 2 === 1;


// Other Solutions
export function lovefunc(flower1: number, flower2: number): boolean {
  return flower1 % 2 != flower2 % 2;
}


// 2
export function lovefunc(flower1: number, flower2: number): boolean {
  const flower1Remainder = flower1 % 2;
  const flower2Remainder = flower2 % 2;
  return Boolean(flower1Remainder ^ flower2Remainder);
}


// 3
export function lovefunc(flower1: number, flower2: number): boolean {
  const firstNum: boolean = flower1 % 2 === 0;
  const secondNum: boolean = flower2 % 2 === 0;

  if (firstNum) {
    return firstNum && !secondNum;
  }

  return !firstNum && secondNum;
}