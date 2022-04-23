"use strict";
// Boolean (true / false)
let isOpen;
isOpen = true;
// string ("foo", 'foo', `foo`)
let message;
message = `foo`;
message = `foo ${isOpen}`;
// number (int, float, hex, binary)
let total;
total = 0xf010;
total = 1;
total = 1.2;
// arrays
let itens;
itens = ["bola", 'carro', `moto`];
let numeros;
numeros = [1, 2, 3];
// tupla
let tupla;
tupla = ["neto", 41, true];
// Enum
var Colors;
(function (Colors) {
    Colors["write"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
Colors.black;
Colors.write;
// void
function logger() {
    console.log("qualque coisa");
}
// never - nunca irá retornar algo, como exemplo: exceptions
function error() {
    throw new Error("error");
}
// Object - tudo que não seja um tipo primitivo: string, arrays, boolean, number 
let objeto;
objeto = {
    id: "123",
    name: "neto"
};
// Type Inference
let mensagem = "mensagem definida";
window.addEventListener("click", (e) => {
    console.log(e.target);
});
