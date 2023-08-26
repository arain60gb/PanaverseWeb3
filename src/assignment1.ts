// Exercise 1:  Write a program that calculates the area of a rectangle.

function calculateRectangleArea(width: number, height: number): number {
  return width * height;
}

const width: number = 5;
const height: number = 10;
const area: number = calculateRectangleArea(width, height);

console.log(`The area of the rectangle with width ${width} and height ${height} is ${area}.`);

// Exercise 2: Write a program that takes input and calculates the volume of a cube.

function calculateCubeVolume(sideLength: number): number {
  return sideLength ** 3;
}

const sideLength: number = 5;
const volume: number = calculateCubeVolume(sideLength);

console.log(`The volume of the cube with side length ${sideLength} is ${volume}.`);

// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.

function checkNumberSign(number: number): string {
  if (number > 0) {
    return 'positive';
  } else if (number < 0) {
    return 'negative';
  } else {
    return 'zero';
  }
}

const  number: number = 5;
const sign: string = checkNumberSign(number);

console.log(`The number ${number} is ${sign}.`);

// Exercise 4:   Write a program that checks if a given number is even or odd.

function checkNumberEvenOdd(num: number): string {
  if (num % 2 === 0) {
      return 'even';
  } else {
      return 'odd';
  }
}

const num: number = 5;
const evenOdd: string = checkNumberEvenOdd(num);

console.log(`The number ${num} is ${evenOdd}.`);

// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.

function checkEligibility(age: number): string {
  if (age >= 18) {
    return 'Eligible';
  } else {
    return 'Not eligible';
  }
}

const age: number = 17;
const  eligibility: string = checkEligibility(age);

console.log(`The person is ${eligibility} to vote`);

// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)

function calculateExpression(expression: string): number {
  return eval(expression);
}

const expression: string = "((10 + 5) * 3 - 2) / (4 % 3) - 7";
const result: number = calculateExpression(expression);

console.log(`The result of the expression ${expression} is ${result}.`);


