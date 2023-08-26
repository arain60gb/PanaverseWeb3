// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

function insertValueAtIndex<T>(array: T[], index: number, value: T): T[] {
    array.splice(index, 0, value);
    return array;
}

// Example usage
const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = insertValueAtIndex(originalArray, 2, 10);

console.log(modifiedArray);

// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

class ShoppingCart {
    items: CartItem[] = [];

    addItem(name: string, price: number, quantity: number): void {
        const newItem: CartItem = { name, price, quantity };
        this.items.push(newItem);
        this.printCart();
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
        this.printCart();
    }

    updateQuantity(index: number, newQuantity: number): void {
        this.items[index].quantity = newQuantity;
        this.printCart();
    }

    printCart(): void {
        console.log("Cart Contents:");
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - Quantity: ${item.quantity} - Price: $${item.price}`);
        });
        console.log("------------------------------");
    }
}

// Example usage
const cart = new ShoppingCart();

cart.addItem("Apples", 0.5, 3);
cart.addItem("Bananas", 0.3, 2);
cart.addItem("Chocolates", 2, 1);

cart.removeItem(1);

cart.updateQuantity(0, 5);


// Write a program that uses a while loop to print the first 25 integers.

let i = 1;
let results = '';

while (i <= 25) {
    results += i.toString() + ' ';
    i++;
}

console.log(results);

// Write a program that uses a while loop to print the first 10 even numbers.

let j = 0;
let results2 = '';

while (j <= 10) {
    results2 += (2 * j).toString() + ' ';
    j++;
}

console.log(results2);

// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

function factorial(num: number): number {
    let result = 1;

    while (num > 1) {
        result *= num;
        num--;
    }

    return result;
}

// Example usage
console.log(factorial(5));

// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

const numbers = [1, 2, -3, 4, -5, 6, -7, 8, -9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1);
        i--;
    }
}

console.log(numbers);

// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

function sumArray(array: number[]): number {
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }

    return result;
}
const arry: number[] =  [1, 2, 3, 4, 5];

console.log(sumArray(arry));

// mplement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

function convertCelsiusToFahrenheit(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        array[i] = (array[i] * 9/5) + 32;
         i++;
    }
    return array;
}

const arry2: number[] = [10, 20, 30, 40, 50];

console.log(convertCelsiusToFahrenheit(arry2));