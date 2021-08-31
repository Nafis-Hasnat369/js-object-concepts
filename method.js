const student = {
    id: 101,
    money: 5000,
    name: "RJ Kibria",
    major: "Mathematics",
    isRish: false,
    subjects: ["english", "economics", "math 101", "calculas"],
    bestFriend: {
        name: "Kundu",
        major: "Mathematics"
    },
    takeExam: function () {
        console.log(this.name, "is taking Exam");
    },
    treatDay: function (expense, tips) {
        this.money = this.money - expense - tips;
        return this.money;
    }
};
kibria.takeExam();
const remaining1 = kibria.treatDay(900, 100);
const remaining2 = kibria.treatDay(500, 50);
console.log(remaining2);