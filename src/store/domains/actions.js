import {getBreedDescription, getBreedImage} from "api";

export const setBreed = value => ({
    type: 'GET_BREEDS',
    value,
});

// export const getImage = () => ({
//
//         type: 'GET_IMAGE',
//         src
//     });

export const loadData = () => dispatch => {
    getBreedDescription().then(res =>
        dispatch(setBreed(res)));
}
