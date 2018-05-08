export const text ='breed`s info';

export const images = [
    {
        id: 1,
        src: 'http://cdn.imgbb.ru/user/85/852641/6ad570e07c2bc0465f8b93a3ad9c6ef8.jpg',
        alt: 'AFFENPINSCHER'
    },
    {
        id: 2,
        src: 'https://store.dog.ceo/breeds/schipperke/n02104365_6498.jpg',
        alt: "schipperke"
    },
    {
        id: 3,
        /*src: 'https://store.dog.ceo/breeds/dingo/n02115641_7620.jpg',*/
        alt: "dingo"
    },
    {
        id: 4,
        /*src: 'https://store.dog.ceo/breeds/springer-english/n02102040_3610.jpg',*/
        alt: "springer-english"
    },
    {
        id: 5,
       /* src: 'https://store.dog.ceo/breeds/african/n02116738_2020.jpg',*/
        alt: "african"
    },
    {
        id: 6,
        /*src: 'https://store.dog.ceo/breeds/rottweiler/n02106550_1260.jpg',*/
        alt: "rottweilerl"
    },
    {
        id: 7,
        /*src: 'https://store.dog.ceo/breeds/germanshepherd/n02106662_27251.jpg',*/
        alt: "germanshepherd"
    },
    {
        id: 8,
        /*src: 'https://store.dog.ceo/breeds/sheepdog-english/n02105641_1966.jpg',*/
        alt: "sheepdog-english"
    },
    {
        id: 9,
        /*src: 'https://store.dog.ceo/breeds/pinscher-miniature/n02107312_6051.jpg',*/
        alt: "pinscher-miniature"
    },
    {
        id: 10,
        /*src: 'https://store.dog.ceo/breeds/bullterrier-staffordshire/n02093256_2748.jpg',*/
        alt: "bullterrier-staffordshire"
    }
];

export const breedsInfo = [
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
];

export const getBreed = () => new Promise(resolve => setTimeout(() => resolve(breedsInfo), 500));

export const getBreedImage = () => new Promise(resolve => setTimeout(() => resolve(images), 500));
