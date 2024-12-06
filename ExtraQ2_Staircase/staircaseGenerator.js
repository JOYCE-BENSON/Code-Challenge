// staircaseGenerator.js
function generateStaircase(n) {
    if (n <= 0) return [];
    
    const staircase = [];
    for (let i = 1; i <= n; i++) {
        const hashes = '#'.repeat(i);
        staircase.push(hashes);
    }
    return staircase;
}

module.exports = { generateStaircase };
