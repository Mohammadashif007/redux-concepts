import { createStore } from "redux";

// store 
const store = createStore(reducer);

function reducer(state={amount: 1}, action){
    if(action.type === "increment"){
        return state.amount = {amount:state.amount + 1};
    }
    return state;
}

console.log(store.getState());
store.dispatch({type: "increment"})
console.log(store.getState());


