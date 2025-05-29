// Highest and Lowest

// Given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.



// My Solution
export class Kata {
  static highAndLow(numbers: string): string {
    const numArr = numbers.split(" ").map(Number);

    return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
  }
}


// Other Solutions
export class Kata {
  static highAndLow(numbers: string) {
    const max = Math.max(...numbers.split(" ").map((i) => +i));
    const min = Math.min(...numbers.split(" ").map((i) => +i));

    return `${max} ${min}`;
  }
}

// 2
export class Kata {
  static highAndLow(numbers: string) {
    let arr = numbers
      .split(" ")
      .map((x) => parseInt(x))
      .sort((a, b) => a - b);
    return `${arr[arr.length - 1]} ${arr[0]}`;
  }
}

// 3
export class Kata {
  static highAndLow(numbers: string) {
    let arr: number[] = numbers.split(" ").map(Number);
    let max: number = Math.max(...arr);
    let min: number = Math.min(...arr);
    return `${max} ${min}`;
  }
}

// 4
export class Kata {
  static highAndLow(numbers: string): string {
    const numArr = numbers.split(" ").map((n: string) => +n);

    return numArr.length === 1
      ? `${numArr[0]} ${numArr[0]}`
      : `${Math.max(...numArr)} ${Math.min(...numArr)}`;
  }
}