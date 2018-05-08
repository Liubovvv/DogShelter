import {getBreed, getBreedImage} from "configs";

export const setBreed = value => ({
    type: 'GET_BREEDS',
    value,
});

/*export const getImage = images => ({
    type: 'GET_IMAGES',
    images,
    });*/

export const loadData = () => dispatch => {
    getBreed().then(res =>
        dispatch(setBreed(res)));
}
