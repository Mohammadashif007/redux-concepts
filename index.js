import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// action name 
const INC = 'increment'
const DEC = 'decrement'
const INC_BY_AMOUNT = 'incrementByPayload'

// store
const store = createStore(reducer, applyMiddleware(logger.default));

let history = [];


function reducer(state = { amount: 1 }, action) {
    if (action.type === INC) {
        return {amount:state.amount + 1};
    }

    if (action.type === DEC) {
        return {amount:state.amount - 1};
    }
    if (action.type === INC_BY_AMOUNT) {
        return {amount:state.amount + action.payload};
    }
    return state;
}

// store.subscribe(() => {
//     history.push(store.getState())
//     console.log(history);
// });

// action creator

function increment(){
    return { type: INC }
}
function decrement(){
    return { type: DEC }
}
function incrementByPayload(value){
    return { type: INC_BY_AMOUNT, payload: value }
}

setInterval(() => {
    store.dispatch(decrement());
}, 1000);
