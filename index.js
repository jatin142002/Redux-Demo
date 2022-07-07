const BUY_CAKE = 'BUY_CAKE';


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

//--> Reducers are the function which accepts state and action as an argument and returns the next state of the application 
//--->   (previousState , action) => newState

//----------> Initial State <--------------
const initialState = {
    numofCakes: 10
}   

const reducer = (state = initialState, action)=>{

    switch(action.type)
    {
        case BUY_CAKE: return{
            numofCakes: state.numofCakes - 1
        }

        default: return state
    }
}