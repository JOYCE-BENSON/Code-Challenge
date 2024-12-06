function validateSpeed(speed) {
    if (isNaN(speed) || speed < 0) {
        throw new Error("Invalid speed: Please enter a positive number");
    }
    return true;
}

module.exports = { validateSpeed };