import actionTypes from './actionTypes'

export const getAllBreeds = () => ({
    type: actionTypes.GET_BREEDS,
    payload: getRandomImages(8),
});

export const getRandomImages = num => ({
    type: actionTypes.GET_IMAGES,
    payload: getRandomImages(num),
});

export const getRandomFooterImages = num => ({
    type: actionTypes.GET_FOOTER_IMAGES,
    payload: getRandomImages(num),
});

export const loadData = num => dispatch => {
    dispatch(getRandomImages(num));
};
