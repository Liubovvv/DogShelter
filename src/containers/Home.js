import React from "react";
import {Greeting} from "../components/Greeting";
import {Image} from "../components/Image";

/*const url =< />
const images = [
    id: 1;
    src:url;
    alt:;
];*/
export const Home = () => {

    return (
        <div>
            <Greeting greeting="user" />
            <p>
                Home home
            </p>
            {/*<div className={'images'}>
                {images.map(image=>
                <Image
                    key={image.id}
                    {...image}
                />
                )}
            </div>*/}
        </div>
    );
}

