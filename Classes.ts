class UserAcount {
  private name: string; // não pode ser acessado de fora da classe
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  infoAccount(): void {
    console.log("Nome: "+ this.name, "Idade:" + this.age);
  }
}

class UserDevel extends UserAcount {
  readonly skill: string; // readonly: apenas lido

  constructor(name: string, age: number, skillname: string) {
    super(name, age)

    this.skill = skillname;
  }

  infoUserDevel(): void {
    console.log("Skill:" + this.skill);
  }

  getSkillName(){
    console.log("--- Método getSkillName ---")
    return this.skill;
  }

  setAge(age: number){
    this.age = age
  }
  
}

const neto = new UserAcount("Chico Neto", 41);
console.log(neto);
neto.infoAccount();

const chico = new UserDevel("Francisco", 41, "JavaScript")
console.log(chico)
chico.infoAccount();
chico.infoUserDevel();
console.log(chico.getSkillName());
chico.setAge(80);
console.log(chico);
