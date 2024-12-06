// cylinderCalculator.js
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        // V = πr²h
        const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return Number(volume.toFixed(4));
    }
}

module.exports = Cylinder;
