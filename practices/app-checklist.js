// Problem 1: Object with property!
const object = {
    name: "John Snow",
    age: 23,
    isMale: true,
    anotherObject: {
        name: "Robb Sturk",
        age: 32,
        isAWarrior: true
    },
    array: ["Yeanifer", true, 21],
    method: function () {
        return this.anotherObject.name + "is a male and that's " + this.isMale;
    }
};
// console.log(object.method());

// Problem 2: Template string (``), minimum 3 properties will be dynamic (nested object property, array second element, )

const templateString = `
Kings name: ${object.name}, he is ${object.anotherObject.age} and he is our ${object.array[1]} king.
`;
// console.log(templateString);

/*
    Problem 3: No parameter arrow function and that's gonna return 89!
*/
const arrow = _ => 89;
// console.log(arrow());

const single = x => x / 7;
const double = (x, y) => (x + y) / 2;
const multiline = (a, b) => {
    const x = a + 7;
    const y = b + 7;
    return x + y;
};

// console.log(multiline(21, 9));

// Problem 4: use map in an array and divide each element by 7

const array = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 80, 32, 54, 677, 23];
// console.log(array.map(x => x / 7));

array.forEach(x => {
    const a = x / 7;
    // return console.log(a);
});

const filtered = array.filter(x => x < 77);
// console.log(filtered);

const find = array.find(x => x / 7);
// console.log(find);

const [x, y, z] = ["first", "second", "third"];
console.log(y);