const findCarById = require('./problem1');
const inventory = require('./inventory');

const result = findCarById(inventory, 33);
console.log(`Car 33 is a ${result.car_year} ${result.car_make} ${result.car_model}`);
