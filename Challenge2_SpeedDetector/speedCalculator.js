const SPEED_LIMIT = 70;
const KM_PER_POINT = 5;

function calculateDemeritPoints(speed) {
    if (speed <= SPEED_LIMIT) return 0;
    return Math.floor((speed - SPEED_LIMIT) / KM_PER_POINT);
}

module.exports = { calculateDemeritPoints, SPEED_LIMIT };