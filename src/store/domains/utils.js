export const getNameOfImage = url => {
    let lowerCase = url.replace(/(https:\/\/images.dog.ceo\/breeds\/)/,"").replace(/\/.*/,"");

    return lowerCase.charAt(0).toUpperCase().concat(lowerCase.slice(1));
};