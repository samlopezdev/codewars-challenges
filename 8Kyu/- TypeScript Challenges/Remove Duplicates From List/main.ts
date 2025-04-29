// Remove Duplicates From List

Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]


// My Solution
export const distinct = (a: number[]): number[] => {
  return [...new Set(a)]
}

// Other Solutions
export const distinct = (ﬂ: number[]) => [...new Set(ﬂ)]


// 2
export const distinct = (a: number[]): number[] => {
  return a.filter((e, i) => a.lastIndexOf(e) === i)
}


// 3
export const distinct = (a: number[]): number[] => {
    const resultArray: number[] = [];
    
    a.forEach(number => {
        if (resultArray.indexOf(number) === -1) {
            resultArray.push(number);
        }
    });

    return resultArray;
}

// 4
export const distinct = (arr: number[]): number[] => {
  return Array.from(new Set(arr));
}