// Do I Get a Bonus?

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with £

// My Solution
export class Kata {
  public static bonusTime(salary: number, bonus: boolean): string {
    return bonus ? String("£" + salary * 10) : String("£" + salary);
  }
}

// Other Solutions
export class Kata {
  public static bonusTime(salary: number, bonus: boolean): string {
    return `£${salary * (bonus ? 10 : 1)}`;
  }
}

// 2
export class Kata {
  public static bonusTime(salary: number, bonus: boolean): string {
    return bonus ? `£${salary * 10}` : `£${salary}`;
  }
}

// 3
export class Kata {
  public static bonusTime(salary: number, bonus: boolean): string {
    return `£${bonus ? salary * 10 : salary}`;
  }
}