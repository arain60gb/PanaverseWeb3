"use strict";
function sumOfEvenNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        const evenNumber = 2 * i;
        sum += evenNumber;
    }
    return sum;
}
const n = 5;
const res = sumOfEvenNumbers(n);
console.log(`Sum of the first ${n} even numbers is: ${res}`);
function printEvenNumbers(numbers) {
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}
const numbers_arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printEvenNumbers(numbers_arry);
function removeEvenNumbers(numbers) {
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] % 2 === 0) {
            numbers.splice(i, 1);
        }
    }
    console.log(numbers);
}
const numbers_arry1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removeEvenNumbers(numbers_arry1);
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}
const radius = 10;
const area_of_radius = calculateCircleArea(radius);
console.log(`Area of circle with radius ${radius}`);
console.log(area_of_radius);
function removeFailingGrades(grades) {
    for (let i = grades.length - 1; i >= 0; i--) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
        }
    }
    return grades;
}
const grades = [85, 42, 60, 30, 75, 90];
const gradesWithoutFailing = removeFailingGrades(grades);
console.log("Grades without failing grades:", gradesWithoutFailing);
function findLargestNumber(numbers) {
    let largestNumber = numbers[0];
    for (const number of numbers) {
        if (number > largestNumber) {
            largestNumber = number;
        }
    }
    return largestNumber;
}
const num_array = [10, 20, 30, 40, 50];
const largest_num = findLargestNumber(num_array);
console.log(largest_num);
//# sourceMappingURL=assignment4.js.map