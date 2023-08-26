"use strict";
function calculateRectangleArea(width, height) {
    return width * height;
}
const width = 5;
const height = 10;
const area = calculateRectangleArea(width, height);
console.log(`The area of the rectangle with width ${width} and height ${height} is ${area}.`);
function calculateCubeVolume(sideLength) {
    return sideLength ** 3;
}
const sideLength = 5;
const volume = calculateCubeVolume(sideLength);
console.log(`The volume of the cube with side length ${sideLength} is ${volume}.`);
function checkNumberSign(number) {
    if (number > 0) {
        return 'positive';
    }
    else if (number < 0) {
        return 'negative';
    }
    else {
        return 'zero';
    }
}
const number = 5;
const sign = checkNumberSign(number);
console.log(`The number ${number} is ${sign}.`);
function checkNumberEvenOdd(num) {
    if (num % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
const num = 5;
const evenOdd = checkNumberEvenOdd(num);
console.log(`The number ${num} is ${evenOdd}.`);
function checkEligibility(age) {
    if (age >= 18) {
        return 'Eligible';
    }
    else {
        return 'Not eligible';
    }
}
const age = 17;
const eligibility = checkEligibility(age);
console.log(`The person is ${eligibility} to vote`);
function calculateExpression(expression) {
    return eval(expression);
}
const expression = "((10 + 5) * 3 - 2) / (4 % 3) - 7";
const result = calculateExpression(expression);
console.log(`The result of the expression ${expression} is ${result}.`);
//# sourceMappingURL=assignment1.js.map