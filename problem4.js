// problem4.js
const inventory = require('./inventory');
function getAllCarYears(inventory) {
    const carYears = inventory.map(car => car.car_year);
    return carYears;
}

module.exports = getAllCarYears;
