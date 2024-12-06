// arrayValidator.js
function validateArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    
    if (arr.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    if (!arr.every(num => typeof num === 'number')) {
        throw new Error('All elements must be numbers');
    }
    
    return true;
}

module.exports = { validateArray };