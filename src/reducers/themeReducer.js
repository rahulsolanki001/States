import { THEME_CHANGE } from "@/actions/types";

const initialState={
    theme:"light"
};

export default (state=initialState,action)=>{
    switch(action.type){
        case THEME_CHANGE:
            return {
                theme:action.payload
            }
        default:
            return state;
    }
}