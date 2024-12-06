// index.js
const { generateStaircase } = require('./staircaseGenerator');
const { validateInput } = require('./inputValidator');
const { formatDisplay } = require('./displayFormatter');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processStaircase(n) {
    try {
        validateInput(n);
        const staircase = generateStaircase(Number(n));
        return formatDisplay(staircase);
    } catch (error) {
        return error.message;
    }
}

console.log("Staircase Generator");
console.log("------------------");

rl.question('Enter number of steps: ', (input) => {
    console.log('\nResult:\n');
    const result = processStaircase(input);
    console.log(result);
    rl.close();
});