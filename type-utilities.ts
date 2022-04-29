// ? -> campo opicional
// Partial -> define os campos opcionais apenas na criação do type
type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// Readonly -> não permite alterar os campos diretamente, apenas através de function
const todo: Readonly<Todo> = {
  title: "Template Padrão",
  description: "Definir um template padrão para o menu principal",
  completed: false,
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {...todo, ...fieldsToUpdate};
}

const todo2: Todo = updateTodo(todo, {completed: true})
console.log("Readonly");
console.log(todo);
console.log("Partial");
console.log(todo2);
//todo.completed = true; // 

// Pick

type todoPreview = Pick<Todo, "title" | "completed">

const todo3: todoPreview = {
  title: "Definir template html barra lateral",
  completed: false,
}
console.log("Pick");
console.log(todo3);

// Omit -> inverso do Pick
type todoPreviewOmit = Omit<Todo, "description">

const todo4: todoPreviewOmit ={
  title: "Create Model User",
  completed: false,
}

console.log("Omit")
console.log(todo4);

interface CatInfo {
  age: number;
  breed: string;
}
 
// Record
// constrói um tipo de objeto cujas chaves de propriedade são Keys e cujos valores de propriedade são Type.
//Este utilitário pode ser usado para mapear as propriedades de um tipo para outro tipo.

interface CatInfo {
  age: number;
  breed: string;
}
type CatName = "miffy" | "boris" | "mordred";
 
const typeRecord: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
console.log("Record")
console.log(typeRecord); 
