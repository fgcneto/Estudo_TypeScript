"use strict";
// Readonly -> não permite alterar os campos diretamente, apenas através de function
const todo = {
    title: "Template Padrão",
    description: "Definir um template padrão para o menu principal",
    completed: false,
};
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updateTodo(todo, { completed: true });
console.log("Readonly");
console.log(todo);
console.log("Partial");
console.log(todo2);
const todo3 = {
    title: "Definir template html barra lateral",
    completed: false,
};
console.log("Pick");
console.log(todo3);
const todo4 = {
    title: "Create Model User",
    completed: false,
};
console.log("Omit");
console.log(todo4);
const typeRecord = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
};
console.log("Record");
console.log(typeRecord);
