"use strict";
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
const temperatureCelsius = 25;
const temperatureFahrenheit = 77;
const convertedToFahrenheit = celsiusToFahrenheit(temperatureCelsius);
const convertedToCelsius = fahrenheitToCelsius(temperatureFahrenheit);
console.log(`${temperatureCelsius}°C is ${convertedToFahrenheit}°F`);
console.log(`${temperatureFahrenheit}°F is ${convertedToCelsius}°C`);
function percentage(part, whole) {
    return (part / whole) * 100;
}
const part = 50;
const whole = 100;
console.log(`${part} of ${whole} is ${percentage(part, whole)}%`);
function daysToWeeksAndDays(days) {
    const weeks = Math.floor(days / 7);
    const daysLeft = days % 7;
    return `${weeks} weeks and ${daysLeft} days`;
}
console.log(daysToWeeksAndDays(17));
function discount(price) {
    if (price > 100) {
        return price * 0.9;
    }
    return price * 0.95;
}
const price = 100;
console.log(discount(price));
function ageCategory(user_age) {
    if (user_age >= 0 && user_age <= 12) {
        return "Child";
    }
    if (user_age >= 13 && user_age <= 19) {
        return "Teenager";
    }
    return "Adult";
}
const user_age = 15;
console.log(ageCategory(user_age));
function temperatureCheck(temperature) {
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
const temperature = 15;
console.log(temperatureCheck(temperature));
function divisibleBy3Or5(num_) {
    if (num_ % 3 === 0 && num_ % 5 === 0) {
        return "Divisible by 3 and 5";
    }
    if (num_ % 3 === 0 || num_ % 5 === 0) {
        return "Divisible by 3 or 5";
    }
    return "Not divisible by 3 or 5";
}
const num_ = 10;
console.log(divisibleBy3Or5(num_));
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}
const year = 2000;
console.log(isLeapYear(year));
function dayOfTheWeek(day) {
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
const day = 3;
console.log(dayOfTheWeek(day));
function taxCalculator(units) {
    if (units > 100) {
        return units * 1.1;
    }
    if (units > 200) {
        return units * 1.15;
    }
    if (units > 500) {
        return units * 1.25;
    }
    return units;
}
const units = 100;
console.log(taxCalculator(units));
//# sourceMappingURL=assignment2.js.map