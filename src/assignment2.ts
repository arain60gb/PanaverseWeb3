// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

const temperatureCelsius: number = 25;
const temperatureFahrenheit: number = 77;

const convertedToFahrenheit: number = celsiusToFahrenheit(temperatureCelsius);
const convertedToCelsius: number = fahrenheitToCelsius(temperatureFahrenheit);

console.log(`${temperatureCelsius}°C is ${convertedToFahrenheit}°F`);
console.log(`${temperatureFahrenheit}°F is ${convertedToCelsius}°C`);

// Write a program that calculates the percentage.
function percentage(part: number, whole: number): number {
    return (part / whole) * 100;
}

const part: number = 50;
const whole: number = 100;

console.log(`${part} of ${whole} is ${percentage(part, whole)}%`);

// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
function daysToWeeksAndDays(days: number): string {
    const weeks: number = Math.floor(days / 7);
    const daysLeft: number = days % 7;

    return `${weeks} weeks and ${daysLeft} days`;
}
console.log(daysToWeeksAndDays(17));

// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
function discount(price: number): number {
    if (price > 100) {
        return price * 0.9;
    }
    return price * 0.95;
}

const price: number = 100;
console.log(discount(price));

// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
function  ageCategory(user_age: number): string {
    if (user_age >= 0 && user_age <= 12) {
        return "Child";
    }
    if (user_age >= 13 && user_age <= 19) {
        return "Teenager";
    }
    return "Adult";
}

const user_age: number = 15;
console.log(ageCategory(user_age));

// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
function temperatureCheck(temperature: number): string {
    if (temperature < 10) {
        return "It's cold outside, don't forget your jacket";
    }
    if (temperature < 20) {
        return "It's a bit chilly, bring a jacket";
    }
    if (temperature < 25) {
        return "It's a bit warm, but not too hot";
    }
    if (temperature < 30) {
        return "It's a bit hot, but not too warm";
    }
    if (temperature < 35) {
        return "It's a bit hot, you should take an umbrella";
    }
    if (temperature < 40) {
        return "It's a bit too hot, you should take an umbrella";
    }
    if (temperature < 45) {
        return "It's a bit too hot, you should take an umbrella";
    }
    if (temperature < 50) {
        return "It's a bit too hot, you should take an umbrella";
    }
    return "It's extremely hot, stay hydrated and indoors if possible";
}

const temperature: number = 15;
console.log(temperatureCheck(temperature));

// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
function divisibleBy3Or5(num_: number): string {
    if (num_ % 3 === 0 && num_ % 5 === 0) {
        return "Divisible by 3 and 5";
    }
    if (num_ % 3 === 0 || num_ % 5 === 0) {
        return "Divisible by 3 or 5";
    }
    return "Not divisible by 3 or 5";
}

const num_: number = 10;
console.log(divisibleBy3Or5(num_));

// Write a program that checks if the given year is leap year or not.
function isLeapYear(year: number): boolean {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }  return false;
        }  return true;
    }  return false;
}

const year: number = 2000;
console.log(isLeapYear(year));

// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
function dayOfTheWeek(day: number): string {
    if (day === 1) {
        return "Monday";
    }
    if (day === 2) {
        return "Tuesday";
    }
    if (day === 3) {
        return "Wednesday";
         }
    if (day === 4) {
        return "Thursday";
    }
    if (day === 5) {
        return "Friday";
    }
    if (day === 6) {
        return "Saturday";
    }
    return "Sunday";
}

const  day: number = 3;
console.log(dayOfTheWeek(day));

// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.
function taxCalculator(units: number): number {
    if (units > 100) {
        return units * 1.1;
    }
    if (units > 200) {
        return units * 1.15;
    }
    if (units  > 500) {
        return units * 1.25;
    }
    return units;
}

const units: number = 100;
console.log(taxCalculator(units));

// next