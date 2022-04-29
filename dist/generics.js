"use strict";
// S -> State
// T -> Type
// K -> Key
// V -> Value
// E -> Element
// também é possível utilizar typeAlias
function useState() {
    //function useState<S extends number | string = string>(){
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
// não permite alterar o estado/tipo de string
const newState = useState();
newState.setState("neto");
console.log(newState.getState());
newState.setState(123);
console.log(newState.getState());
console.log(typeof (newState.getState()));
