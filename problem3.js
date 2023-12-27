// problem3.js
const inventory = require('./inventory');
function sortCarModelsAlphabetically(inventory) {
    const sortedModels = inventory.map(car => car.car_model).sort();
    return sortedModels;
}

module.exports = sortCarModelsAlphabetically;
