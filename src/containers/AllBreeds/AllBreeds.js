import React from "react";

import { Greeting } from 'components/Greeting/Greeting';
import { Image } from 'components/Image/Image';
import { List } from 'components/List/List';

export const AllBreeds = () => {
    return (
        <div>
            <h3>TWO IMAGES</h3>
            <div id={"two-images"}>
                {/*<Image {...dogImage} />
                <Image {...dogImage} />*/}
            </div>
            <h3>LIST OF ALl BREEDS</h3>
            <div className={'all-breeds-list'}>
                {/*<List breedsInfo={breedsInfo} />*/}
            </div>
        </div>
    );
};