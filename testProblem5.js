// test/testProblem5.js
const getCarsOlderThan2000 = require('./problem5');
const inventory = require('./inventory');

const olderCars = getCarsOlderThan2000(inventory);
console.log(`Number of cars older than 2000: ${olderCars.length}`);
