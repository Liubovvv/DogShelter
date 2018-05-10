import actionTypes from './actionTypes'
import {getBreedList, getImage} from '../../resources';

export const getBreedImage = () => ({
    type: actionTypes.GET_IMAGES,
    payload: getImage(),
});

export const getBreed = () => ({
    type: actionTypes.GET_BREEDS,
    payload: getBreedList(),
});

export const loadData = () => dispatch => {
    dispatch(getBreedImage());
    dispatch(getBreed());
};
