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
const normalGolam = {
    id: 103,
    money: 8000,
    name: "Normal Golam",
};
kibria.treatDay(100);
const heroTreatDay = kibria.treatDay.bind(heroBalam);
heroTreatDay(500);
heroTreatDay(300);
heroTreatDay(500);
kibria.treatDay(400);
const normalTreatDay = kibria.treatDay.bind(normalGolam);
normalTreatDay(500);