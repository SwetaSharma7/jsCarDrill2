// problem5.js
const inventory = require('./inventory');
function getCarsOlderThan2000(inventory) {
    const olderCars = inventory.filter(car => car.car_year < 2000);
    return olderCars;
}

module.exports = getCarsOlderThan2000;
