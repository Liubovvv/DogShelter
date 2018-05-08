import React from 'react';
import PropTypes from 'prop-types';
import { Description } from "./Description";
import {Image} from "./Image";
import {breedsInfo} from "../configs";

export const ListItem = props => {
    const {
        text,
        alt,
        src,
    } = props;
    console.log(breedsInfo, "0101010100101001");
    return(
        <div>
            <Description text={text} />
            <Image alt={alt} src={src} />
        </div>
    );
};

ListItem.propTypes = {
    image: PropTypes.object,
    text: PropTypes.string,
};
ListItem.defaultProps = {
    image: {},
    text: '',
};