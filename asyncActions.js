const redux = require('redux'); 
const createStore = redux.legacy_createStore;

// INITIAL STATE
const initialState = {
    loading: false,
    data: [],
    error: ""
}

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//ACTION CREATORS
const fetchUsersRequest = ()=>{
    return {
        type: FETCH_USERS_REQUEST
    }
};

const fetchUsersSuccess = (data)=>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: data
    }
}

const fetchUsersFailure = (error)=>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ""
            }    

        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                data: [],
                error: action.payload
            }      
    }
}

const store = createStore(reducer);