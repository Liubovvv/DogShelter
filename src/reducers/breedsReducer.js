import {images} from "../configs";

const initialState = {
    ids: [],
    images: [],
};

export default function mainReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_BREEDS': {
            console.log(action, "action");
            return {...state, ids: action.value}
        }
            return {...state, breedsInfo: action.id };
        case 'GET_IMAGE':
            return {...state, images};
        default:
            return state
    }
}