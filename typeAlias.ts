// Type Aliases com Union 
type Phone = number | string

function logDetails(uid: number, phone: number | string){
  console.log("Possui o id ${uid} e o Phone ${phone}");
}
function logInfo(uid: number, mobile: Phone){
  console.log("Possui o id ${uid} e o Phone ${mobile}");
}

logDetails(123, 849887);
logDetails(123, "84987");
logInfo(123, 849887);
logInfo(123, "84987");

type Plataform = "Windows" | "Mac OS" | "Linux"
function renderPlataform(plataform: Plataform){
  return plataform;
}
// Irá dar um erro, porque não é do tipo especificado 
// O argumento do tipo '"ios"' não é atribuível ao parâmetro do tipo 'Plataform'.
//renderPlataform('ios')
renderPlataform("Windows")

type AccountInfo = {
  id: number;
  name: string;
  email?: string; // Optional: irá definir email como string ou underfined
}

const account: AccountInfo = {
  id: 123,
  name: "neto",
  email: "qualqueremail@gmail.com"
}
const accountinfo: AccountInfo = {
  id: 123,
  name: "neto"
}

type Skill = {
  language: string;
  age: number;
};

const develSkil: Skill = {
  language: "python",
  age: 30
}

// Type Aliases com Intersection
type FullDevel = AccountInfo & Skill;

// obs.: a ordem de inserção não é relevante
const fullDevel: FullDevel = {
  id: 123,
  name: "neto",
  //email: "qualqueremail@gmail.com", // aqui também será opcional
  language: "python",
  age: 30
}
