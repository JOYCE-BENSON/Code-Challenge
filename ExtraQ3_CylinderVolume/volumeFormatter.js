// volumeFormatter.js
function formatVolume(radius, height, volume) {
    return `
Cylinder Properties:
------------------
Radius: ${radius} units
Height: ${height} units
Volume: ${volume} cubic units`;
}

module.exports = { formatVolume };
