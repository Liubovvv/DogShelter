import apiClient from 'services/apiClient';

export const text ='breed`s info';

export const images = [
    {
        id: 1,
        src: 'http://www.petmania.ie/images/default-source/dog/affenpinscher.png?sfvrsn=0',
        alt: 'AFFENPINSCHER'
    },
    {
        id: 2,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu08R57Fmn91BrtKOiF-uk6XgnKjQ5OR8QQa9fcQ2foNByxFm3',
        alt: "schipperke"
    },
    {
        id: 3,
        src: 'https://images.theconversation.com/files/150283/original/image-20161215-13648-1obq2n.JPG?ixlib=rb-1.1.0&rect=0%2C698%2C5184%2C2514&q=45&auto=format&w=1356&h=668&fit=crop',
        alt: "dingo"
    },
    {
        id: 4,
        src: 'https://a-z-animals.com/media/animals/images/original/english_springer_spaniel.jpg',
        alt: "springer-english"
    },
    {
        id: 5,
        src: 'http://ichef.bbci.co.uk/naturelibrary/images/ic/credit/640x395/a/af/african_wild_dog/african_wild_dog_1.jpg',
        alt: "african"
    },
    {
        id: 6,
        src: 'http://www.dogbreedslist.info/uploads/allimg/dog-pictures/Rottweiler-2.jpg',
        alt: "rottweilerl"
    },
    {
        id: 7,
        src: 'http://www.insidedogsworld.com/wp-content/uploads/2017/07/German-Shepherd-Standard-Coat-GSC-1000x575-1-1-1-1.jpg',
        alt: "germanshepherd"
    },
    {
        id: 8,
        src: 'http://cdn.akc.org/content/article-body-image/oes_hero.jpg',
        alt: "sheepdog-english"
    },
    {
        id: 9,
        src: 'https://www.pets4homes.co.uk/images/breeds/216/large/a90cd28b196e918c4998de2ede28b8ea.jpg',
        alt: "pinscher-miniature"
    },
    {
        id: 10,
        src: 'http://www.stafbul.com/foto/staffordshire-bull-terrier-0645b.jpg',
        alt: "bullterrier-staffordshire"
    }
];

/*export const breedsInfo = [
    {
        id: 1,
        text: 'AFFENPINSCHER',
        image: images[0]
    },
    {
        id: 2,
        text: "schipperke",
        image: images[1]
    },
    {
        id: 3,
        text: "dingo",
        image: images[2]
    },
    {
        id: 4,
        text: 'springer-english',
        image: images[3]
    },
    {
        id: 5,
        text: "african",
        image: images[4]
    },
    {
        id: 6,
        text: "rottweiler",
        image: images[5]
    },
    {
        id: 7,
        text: "germanshepherd",
        image: images[6]
    },
    {
        id: 8,
        text: "sheepdog-english",
        image: images[7]
    },
    {
        id: 9,
        text: "pinscher-miniature",
        image: images[8]
    },
    {
        id: 10,
        text: "bullterrier-staffordshire",
        image: images[9]
    }
];*/

//export const getBreed = () => new Promise(resolve => setTimeout(() => resolve(breedsInfo), 500));

//export const getBreedImage = () => new Promise(resolve => setTimeout(() => resolve(images), 500));

export const getBreedList = () =>
    apiClient.get('https://dog.ceo/api/breeds/list/all');

export const getImage = (num) =>
    apiClient.get(`https://dog.ceo/api/breeds/image/random${num}`);