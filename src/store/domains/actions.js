import actionTypes from './actionTypes'
import { getBreedList, getImage } from './api';

export const getBreedImage = () => ({
    type: actionTypes.GET_IMAGES,
    payload: getImage(),
});

export const getBreed = () => ({
    type: actionTypes.GET_BREEDS,
    payload: getBreedList(),
});

export const getRandomImages = num => ({
    type: actionTypes.GET_IMAGES,
    payload: getImage(num),
});

export const getRandomFooterImages = num => ({
    type: actionTypes.GET_FOOTER_IMAGES,
    payload: getImage(num),
});

export const loadData = num => dispatch => {
    dispatch(getRandomImages(num));
    dispatch(getBreed());
};
