// problem2.js
const inventory = require('./inventory');
function getLastCar(inventory) {
    return inventory[inventory.length - 1];
}

module.exports = getLastCar;
