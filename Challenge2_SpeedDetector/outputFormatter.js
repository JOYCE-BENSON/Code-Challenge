function formatSpeedOutput(speed, points) {
    if (speed <= 70) return "Ok";
    if (points >= 12) return "License suspended";
    return `Points: ${points}`;
}

module.exports = { formatSpeedOutput };