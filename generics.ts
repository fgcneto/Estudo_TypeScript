// S -> State
// T -> Type
// K -> Key
// V -> Value
// E -> Element

// permite extender apenas (number ou string)
//  string = string -> define com padrão
 type numOrString = number | string;

 // também é possível utilizar typeAlias
 function useState<S extends numOrString>(){
//function useState<S extends number | string = string>(){

    let state: S;

    function getState(){
      return state;
    }

    function setState(newState: S){
      state = newState;
    }

    return { getState, setState }
}

// não permite alterar o estado/tipo de string
const newState = useState();
newState.setState("neto");
console.log(newState.getState());

newState.setState(123);
console.log(newState.getState());
console.log(typeof(newState.getState()));