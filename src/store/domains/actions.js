import {getBreed, getBreedImage} from "configs";

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
    getBreed().then(res =>
        dispatch(setBreed(res)));
}
