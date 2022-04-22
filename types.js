// Boolean (true / false)
var isOpen;
isOpen = true;
// string ("foo", 'foo', `foo`)
var message;
message = "foo";
message = "foo ".concat(isOpen);
// number (int, float, hex, binary)
var total;
total = 0xf010;
total = 1;
total = 1.2;
// arrays
var itens;
itens = ["bola", 'carro', "moto"];
var numeros;
numeros = [1, 2, 3];
// tupla
var tupla;
tupla = ["neto", 41, true];
// Enum
var Colors;
(function (Colors) {
    Colors["write"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// void
function logger() {
    console.log("qualque coisa");
}
// never - nunca irá retornar algo, como exemplo: exceptions
function error() {
    throw new Error("error");
}
// Object - tudo que não seja um tipo primitivo: string, arrays, boolean, number 
var objeto;
objeto = {
    id: "123",
    name: "neto"
};
