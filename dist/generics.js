"use strict";
// S = State
// T = Type
// K = Key
// V = Value
// E = Element
// Apenas convenções, mas pode usar igual ou qualquer outro.
// se fizer assim ele só poderá ser number ou string
// function useState<S extends number | string>() {
// se fizer assim fica padrão string
// function useState<S extends number | string = string>() {
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
// const newState = useState() - se não definir o generics ele aceita qualquer coisa
// se definir na chamada como abaixo ele será aquele tipo
var newState = useState();
newState.setState("123");
console.log(newState.getState());
