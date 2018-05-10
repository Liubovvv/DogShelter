import { createSelector } from 'reselect';

export const selectBreeds = state => state.breedsReducer.ids;
export const selectImages = state => state.breedsReducer.images;
export const selectFooterImages = state => state.breedsReducer.footerImages;

export const selectSomeBreeds = (num) => createSelector(
    [ selectBreeds ],
    (breeds) => breeds.slice(0, num)
);

export const selectRandomImages = (num) => createSelector(
    [ selectImages ],
    (images) => images.slice(0, num)
);