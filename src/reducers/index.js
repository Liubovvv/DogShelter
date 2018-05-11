import { combineReducers } from "redux";

import breedsReducer from './breedsReducer';

const  index = combineReducers({
    breedsReducer: breedsReducer
});

export default index;

