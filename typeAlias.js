function logDetails(uid, phone) {
    console.log("Possui o id ${uid} e o Phone ${phone}");
}
function logInfo(uid, mobile) {
    console.log("Possui o id ${uid} e o Phone ${mobile}");
}
logDetails(123, 849887);
logDetails(123, "84987");
logInfo(123, 849887);
logInfo(123, "84987");
function renderPlataform(plataform) {
    return plataform;
}
// Irá dar um erro, porque não é do tipo especificado 
// O argumento do tipo '"ios"' não é atribuível ao parâmetro do tipo 'Plataform'.
//renderPlataform('ios')
renderPlataform("Windows");
