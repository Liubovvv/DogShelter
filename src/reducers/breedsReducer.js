import actionTypes from 'store/domains/actionTypes'

const initialState = {
    ids: [],
    images: [],
    pendingIds: false,
    errorIds: null,
};

export default function breedsReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_IMAGES_FULFILLED:
            return {...state, pendingIds: false, images: action.payload.message};
        case actionTypes.GET_IMAGES_PENDING:
            return {...state, pendingIds: true};
        case actionTypes.GET_IMAGES_REJECTED:
            return {...state, pendingIds: false, errorIds: action.payload};

        case actionTypes.GET_BREEDS_FULFILLED:
            return {...state, pendingIds: false, ids: action.payload.message};
        case actionTypes.GET_BREEDS_PENDING:
            return {...state, pendingIds: true};
        case actionTypes.GET_BREEDS_REJECTED:
            return {...state, pendingIds: false, errorIds: action.payload};
        default:
            return state
    }
}