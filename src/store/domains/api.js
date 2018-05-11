import apiClient from 'services/apiClient';

export const text ='breed`s info';

export const getBreedList = () =>
    apiClient.get('https://dog.ceo/api/breeds/list/all');

export const getImage = num =>
    apiClient.get(`https://dog.ceo/api/breeds/image/random/${num}`);