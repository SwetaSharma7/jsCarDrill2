// problem6.js
const inventory = require('./inventory');
function getBMWAndAudiCars(inventory) {
    const bmwAndAudiCars = inventory.filter(car => car.car_make === 'BMW' || car.car_make === 'Audi');
    return bmwAndAudiCars;
}

module.exports = getBMWAndAudiCars;
