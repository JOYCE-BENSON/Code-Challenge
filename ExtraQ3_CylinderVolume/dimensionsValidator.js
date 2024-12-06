// dimensionsValidator.js
function validateDimensions(radius, height) {
    if (isNaN(radius) || isNaN(height)) {
        throw new Error('Both radius and height must be numbers');
    }
    
    if (radius <= 0 || height <= 0) {
        throw new Error('Both radius and height must be positive numbers');
    }
    
    return true;
}

module.exports = { validateDimensions };
