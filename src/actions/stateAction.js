import { FETCH_STATES,FETCH_STATES_BY_REGION,FETCH_STATE_BY_SEARCH } from "./types";

import axios from "axios";

export const fetchStates=()=>async(dispatch)=>{
    try{
        const res= await axios("https://rahul0405.pythonanywhere.com/api/states/")
        dispatch({
            type:FETCH_STATES,
            payload:res.data
        })
    }catch(err){
        console.log(err);
    }
    
};


export const fetchStatesByRegion=(region)=>async(dispatch)=>{
    try{
        if (region!=="All"){
            const res=await axios("https://rahul0405.pythonanywhere.com/api/states/")
            const filteredStates=await res.data.filter((state)=>{
                return state.region===region
            })
            dispatch({
                type:FETCH_STATES_BY_REGION,
                payload:filteredStates
            })
        }else{
            dispatch(fetchStates());
        }
       
       
    }catch(err){
        console.log(err);
    }
}

