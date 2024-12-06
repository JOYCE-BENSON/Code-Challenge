// outputFormatter.js
function formatOutput(original, sorted) {
    return `Original array: [${original.join(', ')}]
Sorted array: [${sorted.join(', ')}]`;
}

module.exports = { formatOutput };
