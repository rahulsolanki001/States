import {FETCH_STATES,FETCH_STATE_BY_SEARCH,FETCH_STATES_BY_REGION} from "../actions/types";

const initialState={
    states:[]
};

export default (state=initialState,action)=>{
    switch(action.type){
        case FETCH_STATES:
            return {
                ...state,
                states:action.payload
            }
        case FETCH_STATE_BY_SEARCH:
            return {
                states:action.payload
            }
        case FETCH_STATES_BY_REGION:
            return {
                ...state,
                states:action.payload
            }
         default:
            return state;
    }
}