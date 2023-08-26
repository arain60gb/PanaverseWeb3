"use strict";
function insertValueAtIndex(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = insertValueAtIndex(originalArray, 2, 10);
console.log(modifiedArray);
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(name, price, quantity) {
        const newItem = { name, price, quantity };
        this.items.push(newItem);
        this.printCart();
    }
    removeItem(index) {
        this.items.splice(index, 1);
        this.printCart();
    }
    updateQuantity(index, newQuantity) {
        this.items[index].quantity = newQuantity;
        this.printCart();
    }
    printCart() {
        console.log("Cart Contents:");
        this.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - Quantity: ${item.quantity} - Price: $${item.price}`);
        });
        console.log("------------------------------");
    }
}
const cart = new ShoppingCart();
cart.addItem("Apples", 0.5, 3);
cart.addItem("Bananas", 0.3, 2);
cart.addItem("Chocolates", 2, 1);
cart.removeItem(1);
cart.updateQuantity(0, 5);
let i = 1;
let results = '';
while (i <= 25) {
    results += i.toString() + ' ';
    i++;
}
console.log(results);
let j = 0;
let results2 = '';
while (j <= 10) {
    results2 += (2 * j).toString() + ' ';
    j++;
}
console.log(results2);
function factorial(num) {
    let result = 1;
    while (num > 1) {
        result *= num;
        num--;
    }
    return result;
}
console.log(factorial(5));
const numbers = [1, 2, -3, 4, -5, 6, -7, 8, -9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        numbers.splice(i, 1);
        i--;
    }
}
console.log(numbers);
function sumArray(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}
const arry = [1, 2, 3, 4, 5];
console.log(sumArray(arry));
function convertCelsiusToFahrenheit(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = (array[i] * 9 / 5) + 32;
        i++;
    }
    return array;
}
const arry2 = [10, 20, 30, 40, 50];
console.log(convertCelsiusToFahrenheit(arry2));
//# sourceMappingURL=assignment3.js.map