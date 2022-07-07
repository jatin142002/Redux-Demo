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
