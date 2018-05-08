import {combineReducers} from "redux";
import breedsReducer from './breedsReducer';

const  index = combineReducers({
    mainReducer: breedsReducer
});

export default index;

