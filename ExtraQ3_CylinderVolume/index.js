// index.js
const Cylinder = require('./cylinderCalculator');
const { validateDimensions } = require('./dimensionsValidator');
const { formatVolume } = require('./volumeFormatter');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processCylinder(radius, height) {
    try {
        validateDimensions(radius, height);
        const cylinder = new Cylinder(Number(radius), Number(height));
        const volume = cylinder.getVolume();
        return formatVolume(radius, height, volume);
    } catch (error) {
        return error.message;
    }
}

console.log("Cylinder Volume Calculator");
console.log("------------------------");

const askRadius = () => {
    return new Promise((resolve) => {
        rl.question('Enter cylinder radius: ', resolve);
    });
};

const askHeight = () => {
    return new Promise((resolve) => {
        rl.question('Enter cylinder height: ', resolve);
    });
};

async function runCalculator() {
    try {
        const radius = await askRadius();
        const height = await askHeight();
        
        const result = processCylinder(radius, height);
        console.log(result);
    } catch (error) {
        console.log('An error occurred:', error.message);
    } finally {
        rl.close();
    }
}

runCalculator();