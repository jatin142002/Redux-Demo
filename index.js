const redux = require('redux');  
const createStore = redux.legacy_createStore;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';


//-----> Action is a javascript object , which must have type as key and it has string value <-----------

// {
//     type: BUY_CAKE,
//     info: "First redux action"
// }

//------> Action maker is a function which return action <----------------

function buycake(){
    return {
        type: BUY_CAKE,
        info: "First redux action"
    }
}

function buyicecream(){
    return {
        type: BUY_ICECREAM,
        info: "Second redux action"
    }
}

//--> Reducers are the function which accepts state and action as an argument and returns the next state of the application 
//--->   (previousState , action) => newState

//----------> Initial State <--------------
const initialState = {
    numofCakes: 10,
    numofIceCreams: 10
}   

const reducer = (state = initialState, action)=>{

    switch(action.type)
    {
        case BUY_CAKE: return{
            numofCakes: state.numofCakes - 1,
            numofIceCreams: state.numofIceCreams
        }

        case BUY_ICECREAM: return{
            numofCakes: state.numofCakes - 1,
            numofIceCreams: state.numofIceCreams - 1
        }

        default: return state
    }
}

// Redux Store ---> One store for the entire application
// i) Holds application state
//ii) Allows access to state via getState()
//iii)Allows state to be updated via dispatch(action)
//iv)Registers listeners via subscribe(listener) 

const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(()=>console.log("Updated state", store.getState()));
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyicecream());
store.dispatch(buyicecream());
unsubscribe();