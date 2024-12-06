// inputValidator.js
function validateInput(n) {
    if (isNaN(n) || !Number.isInteger(Number(n))) {
        throw new Error('Input must be an integer');
    }
    
    if (n <= 0) {
        throw new Error('Number must be positive');
    }
    
    return true;
}

module.exports = { validateInput };
