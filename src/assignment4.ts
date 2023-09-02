// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
function sumOfEvenNumbers(n: number): number {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        const evenNumber = 2 * i;
        sum += evenNumber;
    }

    return sum;
}

const n = 5; // Change this to the desired number of even numbers
const res = sumOfEvenNumbers(n);

console.log(`Sum of the first ${n} even numbers is: ${res}`);


// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
function printEvenNumbers(numbers: number[]): void {
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }
}

const numbers_arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printEvenNumbers(numbers_arry);


// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones.
function removeEvenNumbers(numbers: number[]): void {
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (numbers[i] % 2 === 0) {
            numbers.splice(i, 1)
        }
    }

    console.log(numbers);
}

const numbers_arry1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removeEvenNumbers(numbers_arry1)

// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
}

const radius = 10;
const area_of_radius = calculateCircleArea(radius);
console.log(`Area of circle with radius ${radius}`)
console.log(area_of_radius);

// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
function removeFailingGrades(grades: number[]): number[] {
    for (let i = grades.length - 1; i >= 0; i--) {
        if (grades[i] < 50) {
            grades.splice(i, 1);
        }
    }
    return grades;
}

const grades: number[] = [85, 42, 60, 30, 75, 90]; // Example list of grades
const gradesWithoutFailing = removeFailingGrades(grades);

console.log("Grades without failing grades:", gradesWithoutFailing);

// Write a program that uses a function to find the largest element in an array of numbers.
function findLargestNumber(numbers: number[]): number {
    let largestNumber = numbers[0];

    for (const number of numbers) {
        if (number > largestNumber) {
            largestNumber = number;
        }
    }

    return largestNumber;
}

const num_array: number[] = [10,20,30,40,50];
const largest_num = findLargestNumber(num_array);
console.log(largest_num);


// Write a program that uses a function to find the largest element in an array of numbers.
function findLargestNumber(nums: number[]): number {
    let largestNumber = nums[0];

    for (const nums of numbers) {
        if (nums > largestNumber) {
            largestNumber = nums;
        }
    }

    return largestNumber;
}
const nums: number[] = [5, 2, 9, 1, 5, 6];
const largestNumber = findLargestNumber(nums);
console.log(`The largest number is: ${largestNumber}`);
