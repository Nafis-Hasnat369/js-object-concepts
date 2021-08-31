// 1.using object literal
const student = { name: "Sakib All Hasan", job: "cricketer" };

// 2.constructor
const person = new Object();
// console.log(person);

// 3.
const human = Object.create(student);
// console.log(human.job);

// 4.Class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People("Manus", 12);
// console.log(peop);

// 5.function
function Manus(name) {
    this.name = name;
};
const man = new Manus("Kader");
console.log(man);