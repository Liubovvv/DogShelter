import React from 'react';
import PropTypes from 'prop-types';

import { getNameOfImage } from 'store/domains/utils';
import { Img } from "./Image.style";

export const Image = props => {
    const { src } = props;
    const alt = getNameOfImage(src);

    return (
        <div>
            <Img src={src} alt={alt} />
        </div>
    );
}
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}
