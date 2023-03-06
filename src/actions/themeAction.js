import { THEME_CHANGE } from "./types";


export const changeTheme = (theme)=>async(dispatch)=>{
    console.log("theme in action "+ theme)
    dispatch({
        type:THEME_CHANGE,
        payload:theme
    })
};