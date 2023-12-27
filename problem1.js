// Problem 1.....
const inventory = require("./inventory");
const findCarById = (inventory, id) => {
    const car = inventory.find((car) => car.id === id);
    return car;
  };
  
  module.exports = findCarById;
  