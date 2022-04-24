"use strict";
// modifiers
// readonly - Permite apenas leitura da propriedade
// ? - Opcional
const ltou = {
    title: "The Last of BRA",
    description: "The best game of the World",
    genre: "Action",
    plataform: ["PS3", "PS4"],
    getSimilars: (title) => {
        console.log("The Games to " + title + ": Uncharted, A Plague Tale, Metro");
    },
};
// utilizado por causa do getSimilars opcional
if (ltou.getSimilars) {
    ltou.getSimilars(ltou.title);
}
console.log(ltou.title);
const elftbehind = {
    title: "The Last of US - Left Bahind",
    description: "You Play as Ellie before the original game",
    genre: "Action",
    plataform: ["PS3"],
    originalGame: ltou,
    newContent: ["3 Hours story", "new Characters"],
    getSimilars: (title) => {
        console.log("The Games to " + title);
    }
};
console.log(elftbehind.title);
class CreateGame {
    constructor(title, description, genre, plataform) {
        this.title = title,
            this.description = description,
            this.genre = genre;
        this.plataform = plataform;
    }
}
;
const newGame = {
    title: "Fifa 2022",
    description: "The play futebol of the World",
    genre: "Sports",
    plataform: ["PS3"],
};
console.log(newGame.title);
