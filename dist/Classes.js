"use strict";
class UserAcount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    infoAccount() {
        console.log("Nome: " + this.name, "Idade:" + this.age);
    }
}
class UserDevel extends UserAcount {
    constructor(name, age, skillname) {
        super(name, age);
        this.skill = skillname;
    }
    infoUserDevel() {
        console.log("Skill:" + this.skill);
    }
    getSkillName() {
        console.log("--- Método getSkillName ---");
        return this.skill;
    }
    setAge(age) {
        this.age = age;
    }
}
const neto = new UserAcount("Chico Neto", 41);
console.log(neto);
neto.infoAccount();
const chico = new UserDevel("Francisco", 41, "JavaScript");
console.log(chico);
chico.infoAccount();
chico.infoUserDevel();
console.log(chico.getSkillName());
chico.setAge(80);
console.log(chico);
