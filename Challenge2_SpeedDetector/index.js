const { validateSpeed } = require('./speedValidator');
const { calculateDemeritPoints } = require('./speedCalculator');
const { formatSpeedOutput } = require('./outputFormatter');
const readline = require('readline');

// Create interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processSpeed(speed) {
    try {
        validateSpeed(speed);
        const points = calculateDemeritPoints(speed);
        return formatSpeedOutput(speed, points);
    } catch (error) {
        return error.message;
    }
}

// Get user input and process it
console.log("Speed Detector");
console.log("--------------");
rl.question('Enter car speed (in km/h): ', (speed) => {
    const result = processSpeed(Number(speed));
    console.log(result);
    rl.close();
});

