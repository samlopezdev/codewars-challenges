// Classy Classes

// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

// My Solution
class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  get info() {
    return `${this.name}s age is ${this.age}`;
  }
}

// Other Solution
class Person {
  constructor(name, age) {
    this.info = `${name}s age is ${age}`;
  }
}

// 2
//accept a name as a string
//age as a number
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Define the info property using a getter
  get info() {
    return `${this.name}s age is ${this.age}`;
  }

  // Define the getInfo method
  getInfo() {
    return `${this.name}, ${this.age}`;
  }
}
