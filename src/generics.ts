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
function useState<S>() {
    let state: S

    function getState() {
        return state
    }

    function setState(newState: S) {
        state = newState
    }

    return { getState, setState }
}

// const newState = useState() - se não definir o generics ele aceita qualquer coisa
// se definir na chamada como abaixo ele será aquele tipo
const newState = useState<string>()
newState.setState("123")
console.log(newState.getState())