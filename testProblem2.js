// test/testProblem2.js
const getLastCar = require('./problem2');
const inventory = require('./inventory');

const lastCar = getLastCar(inventory);
console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
