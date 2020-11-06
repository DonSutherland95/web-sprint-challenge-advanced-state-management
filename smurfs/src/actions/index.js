import axios from "axios"
export const FETCH_SMURF_DATA = "FETCH_SMURF_DATA";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS"
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE"
export const ADD_SMURF = "ADD_SMURF"



export const fetchSmurf = () =>{
    return (dispatch) =>{
        dispatch({type:FETCH_SMURF_DATA});

        axios
            .get("http://localhost:3333/smurfs")
            .then((res)=>{
                dispatch({type:FETCH_SMURF_SUCCESS, payload: res.data})
            })
            .catch((err)=>{
                dispatch({type:FETCH_SMURF_FAILURE, payload: err.message})
            })
            
    }
}
export const addSmurf = (newSmurf) =>{
    return (dispatch) =>{
        dispatch({type:FETCH_SMURF_DATA});

        axios
            .post("http://localhost:3333/smurfs", newSmurf)
            .then((res)=>{
                dispatch({type:ADD_SMURF, payload: res.data})
            })
            
    }
}
