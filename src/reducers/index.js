import { combineReducers } from "redux";

import stateReducer from "./stateReducer";
import themeReducer from './themeReducer';

export default combineReducers({
    states:stateReducer,
    theme:themeReducer
});