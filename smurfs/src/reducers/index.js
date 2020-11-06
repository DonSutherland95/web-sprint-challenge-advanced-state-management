import {
    FETCH_SMURF_DATA,
    FETCH_SMURF_SUCCESS,
     ADD_SMURF
} from "../actions/index"

const initialState = {
    isLoading: false,
    smurfData: [],
}

export const reducer = (state=initialState, action )=>{
    switch(action.type){
        case FETCH_SMURF_DATA:
            return{
                ...state,
                isLoading: true,
            }
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isLoading:false,
                smurfData: action.payload
            }
        case ADD_SMURF:
            return{
                ...state,
                isLoading:false,
                smurfData: action.payload
            }
        default:
            return state;
    }
}