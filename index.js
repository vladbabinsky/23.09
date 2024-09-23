// 1. Create an array of four numbers. Change the value of the second number to 45.
//***************** TASK 1  ******************//
let numbers = [10, 20, 30, 40];
numbers[1] = 45;
console.log(`Task 1: ${numbers}`);
console.log('====================')
// 2. Create a script that returns the sum of all numbers in the array.
//***************** TASK 2  ******************//
let nums = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(`Task 2:${sum}`);
console.log('====================')
// 3. Create an array of 10 numbers and print each number using a for loop.
//***************** TASK 3  ******************//
let tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < tenNumbers.length; i++) {
    console.log(`Task 3: ${tenNumbers[i]}`);
}
console.log('====================')
// 4. Create an array of 15 numbers and print the maximum value.
//***************** TASK 4  ******************//
let list = [12, 45, 23, 56, 78, 90, 4, 3, 41, 14, 32, 50, 34, 7, 8];
let maxNumber = list[0];
for (let i = 1; i < list.length; i++) {
    if (list[i] > maxNumber) {
        maxNumber = list[i];
    }
}
console.log(`Task 4: ${maxNumber}`);
console.log('====================')
// 5. Create an array of 4 strings and print each string that has more than 7 characters.
//***************** TASK 5  ******************//
let strings = ["Hello", "This is a long string", "Short", "Another long string example"];
for (let str of strings) {
    if (str.length > 7) {
        console.log(`Task 5: ${str}`);
    }
}
console.log('====================')
// 6. Write a script that combines elements into a single string, separating them with a comma.
//***************** TASK 6  ******************//
let array = ["Apple", "Banana", "Cherry"];
let joinedString = array.join(", ");
console.log(`Task 6: ${joinedString}`);
console.log('====================')
// 7. Write code that toggles the case of each character in a string.
//***************** TASK 7  ******************//
let text = "Hello World";
let toggledText = '';
for (let char of text) {
    toggledText += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}
console.log(`Task 7: ${toggledText}`);
console.log('====================')
// 8. Write a script that prompts the user to enter data using `prompt` and stores it in an array.
//***************** TASK 8  ******************//
let userInputs = [];
for (let i = 0; i < 5; i++) {
    let input = prompt("Please enter a value:");
    userInputs.push(input);
}
console.log(`Task 8: ${userInputs}`);
console.log('====================')
