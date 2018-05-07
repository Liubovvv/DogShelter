import {combineReducers} from "redux";
import breedsReducer from './mainReducer';

const  index = combineReducers({
    mainReducer: breedsReducer
});

export default index;

