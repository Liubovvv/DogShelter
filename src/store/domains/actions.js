import actionTypes from './actionTypes'
import {getBreedList, getImage} from '../../resources';

export const setBreedImage = () => ({
    type: actionTypes.GET_IMAGES,
    payload: getImage(),
});

export const setBreed = () => ({
    type: actionTypes.GET_BREEDS,
    payload: getBreedList(),
});

export const loadData = () => dispatch => {
    dispatch(setBreedImage());
    dispatch(setBreed());
};
