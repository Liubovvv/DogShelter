import {images} from "../configs";

const initialState = {
    ids: [],
    images: [],
};

export default function mainReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_BREEDS': {

            return {...state, ids: action.value}
        }
            //return {...state, breedsInfo: action.id };
        case 'GET_IMAGES':
            return {...state, images: action.images};
        default:
            return state
    }
}