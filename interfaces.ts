interface Game {
  title: string;
  description: string;
  readonly genre: string;
  plataform: string[];
  getSimilars?: (title: string) => void;
}

// modifiers
// readonly - Permite apenas leitura da propriedade
// ? - Opcional

const ltou: Game = {
  title: "The Last of BRA",
  description: "The best game of the World",
  genre: "Action",
  plataform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log("The Games to " + title +": Uncharted, A Plague Tale, Metro");
  },
};

// utilizado por causa do getSimilars opcional
if(ltou.getSimilars){
  ltou.getSimilars(ltou.title)
}

console.log(ltou.title);

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const elftbehind: DLC = {
  title: "The Last of US - Left Bahind",
  description: "You Play as Ellie before the original game",
  genre: "Action",
  plataform: ["PS3"],
  originalGame: ltou,
  newContent: ["3 Hours story", "new Characters"],
  getSimilars: (title: string) => {
    console.log("The Games to " + title);
  }
};
console.log(elftbehind.title);

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;
  plataform: string[];

  constructor(title: string, description:string, genre: string, plataform: string[]){
    this.title = title,
    this.description = description,
    this.genre = genre;
    this.plataform = plataform
  }
};

const newGame: CreateGame = {
  title: "Fifa 2022",
  description: "The play futebol of the World",
  genre: "Sports",
  plataform: ["PS3"],

};

console.log(newGame.title);