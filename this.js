// console.log(this);
const kibria = {
    id: 101,
    money: 5000,
    name: "RJ Kibria",
    treatDay: function (expense) {
        this.money = this.money - expense;
        console.log("Here 555", this);
        return this.money;
    }
};
const heroBalam = {
    id: 102,
    money: 6000,
    name: "Hero Balam",
};