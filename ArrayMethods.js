// join:
// Description: Combines all elements of an array into a string.
// Syntax: array.join(separator)

const fruits = ['apple', 'mango', 'banana', 'orange'];
console.log(fruits.join(' '));
console.log(fruits.join(','));

// flat:
// Description: Flattens a nested array by a specified depth.
// Syntax: array.flat(depth)

const nestedArray = [1,[2,[3,4]]];
console.log(nestedArray.flat(1));
console.log(nestedArray.flat(2));

// push:
// Description: Adds one or more elements to the end of an array.
// Syntax: array.push(element1, ..., elementN)

const number = [1,2,3,4];
console.log(number.push(6,7,8));

// indexOf:
// Description: Returns the first index at which a given element is found in the array.
// Syntax: array.indexOf(searchElement, fromIndex)

const numbers2 = [1,2,3,6,4,5,6,7];
console.log(numbers2.indexOf(5)); 

// lastIndexOf:
// Description: Returns the last index at which a given element is found in the array.
// Syntax: array.lastIndexOf(searchElement, fromIndex)

console.log(numbers2.lastIndexOf(6));

// includes:
// Description: Checks if an array includes a certain element.
// Syntax: array.includes(searchElement, fromIndex)

console.log(numbers2.includes(7));
console.log(numbers2.includes(10));

// reverse:
// Description: Reverses the elements of an array in place.
// Syntax: array.reverse()

console.log(numbers2.reverse());

// every:
// Description: Tests whether all elements in the array pass the provided function.
// Syntax: array.every(callback(element, index, array))

// shift:
// Description: Removes the first element from an array and returns that element.
// Syntax: array.shift()

console.log(numbers2.shift());
console.log(numbers2);

// splice:
// Description: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// Syntax: array.splice(start, deleteCount, item1, ..., itemN)

const num = [1,2,3,4,7,8,9];
num.splice(1,2,5,6,6,6,6);
console.log(num);

// find:
// Description: Returns the first element in the array that satisfies the provided testing function.
// Syntax: array.find(callback(element, index, array))
console.log("find method");
const fNum = [2,4,6,8,10,12,14,16,3,5,8,232435,9,1];
const res = fNum.find(fNum => fNum%2);
console.log(res);

// unshift:
// Description: Adds one or more elements to the beginning of an array.
// Syntax: array.unshift(element1, ..., elementN)

const numbers = [1, 2, 3];
console.log(numbers.unshift(4, 5, 6)); // this will print new length of the array.
console.log(numbers) // this will print modified array.

// findIndex:
// Description: Returns the index of the first element in the array that satisfies the provided testing function.
// Syntax: array.findIndex(callback(element, index, array))
console.log("findIndex");
const iNum = [1,2,3,4,5,6];
const iRes = iNum.findIndex(iNum => iNum === 4);
console.log(iRes);



// filter:
// Description: Creates a new array with all elements that pass the test implemented by the provided function.
// Syntax: array.filter(callback(element, index, array))
console.log("filter");
const fiNum = [1,2,3,4,5,6,7,8,9];
const fiRes = fiNum.filter(fiNum => fiNum % 2);
console.log(fiRes); 

// flat (again):
// Description: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Syntax: array.flat(depth)

// forEach:
// Description: Calls a function once for each element in the array, in order.
// Syntax: array.forEach(callback(element, index, array))
console.log("forEach");
const feNum = [1,2,3,4];
const feRes = feNum.forEach(num => console.log(num));
console.log(feRes);
// map:
// Description: Creates a new array with the results of calling a provided function on every element in the array.
// Syntax: array.map(callback(element, index, array))

const mapfun = [1,2,3,4,5,6,7,8,9];
result = mapfun.map(mapfun => mapfun*mapfun);
console.log(result);

// pop:
// Description: Removes the last element from an array and returns that element.
// Syntax: array.pop()

const n1 = [1,2,3,4,5,6,7];
console.log(n1.pop());

// reduce:
// Description: Applies a function against an accumulator and each element in the array to reduce it to a single value.
// Syntax: array.reduce(callback(accumulator, currentValue, index, array), initialValue)

// slice:
// Description: Returns a shallow copy of a portion of an array into a new array object.
// Syntax: array.slice(start, end)

console.log('slice');
const slNum = [1,2,3,4,5,6,7];
console.log(slNum.slice(1,4));

// some:
// Description: Tests whether at least one element in the array passes the provided function.
// Syntax: array.some(callback(element, index, array))
console.log("some");
const sNum = [1,2,3,4,5,6,7,8];
console.log(sNum.some(num => num  === 0));
console.log(sNum.some(num => num % 2 === 0));
