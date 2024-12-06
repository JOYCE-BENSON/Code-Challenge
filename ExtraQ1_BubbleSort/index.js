// index.js
const { bubbleSort } = require('./bubbleSort');
const { validateArray } = require('./arrayValidator');
const { formatOutput } = require('./outputFormatter');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processArray(input) {
    try {
        // Convert input string to array of numbers
        const arr = input.split(',').map(num => Number(num.trim()));
        validateArray(arr);
        
        const originalArray = [...arr];
        const sortedArray = bubbleSort([...arr]);
        
        return formatOutput(originalArray, sortedArray);
    } catch (error) {
        return error.message;
    }
}

console.log("Bubble Sort Implementation");
console.log("--------------------------");
console.log("Enter numbers separated by commas (e.g., 5,6,1,3,4,2)");

rl.question('Enter numbers: ', (input) => {
    const result = processArray(input);
    console.log(result);
    rl.close();
});