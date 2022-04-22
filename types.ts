// Boolean (true / false)
let isOpen: boolean
isOpen = true

// string ("foo", 'foo', `foo`)
let message: string
message = `foo`
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xf010;
total = 1;
total = 1.2

// arrays
let itens: string[]
itens = ["bola", 'carro', `moto`]

let numeros: Array<number>
numeros = [1, 2, 3]

// tupla
let tupla: [string, number, boolean]
tupla = ["neto", 41, true]

// Enum
enum Colors {
  write = '#fff',
  black = '#000'
}

// void
function logger(): void {
  console.log("qualque coisa")
}

// null | underfined - não é aconselhável usar como tipo primitivo
 type bla = string | undefined

 // never - nunca irá retornar algo, como exemplo: exceptions
 function error(): never {
  throw new Error("error");
 }

 // Object - tudo que não seja um tipo primitivo: string, arrays, boolean, number 
 let objeto: object;
 objeto = {
   id: "123",
   name: "neto"
 }





