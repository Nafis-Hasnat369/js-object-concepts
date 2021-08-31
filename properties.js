const bottle = { color: "yellow", hold: "water", price: 50, isCleaned: true };

//  how to get all property names / keys!
const keys = Object.keys(bottle);
// console.log(keys);

//  getting all values of an object!
const values = Object.values(bottle);
// console.log(values);

const pair = Object.entries(bottle);
// console.log(pair);

// Object.seal(bottle);

Object.freeze(bottle);
bottle.price = 100;
delete bottle.isCleaned;
console.log(bottle);