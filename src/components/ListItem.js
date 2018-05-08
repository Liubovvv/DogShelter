import React from 'react';
import PropTypes from 'prop-types';
import { Description } from './Description';
import {Image} from './Image';

export const ListItem = props => {
    const {
        text,
        alt,
        src,
    } = props;
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