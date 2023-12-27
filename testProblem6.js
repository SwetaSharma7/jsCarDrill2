// test/testProblem6.js
const getBMWAndAudiCars = require('./problem6');
const inventory = require('./inventory');

const bmwAndAudiCars = getBMWAndAudiCars(inventory);
console.log(JSON.stringify(bmwAndAudiCars, null, 2));
