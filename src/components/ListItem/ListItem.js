import React from 'react';
import PropTypes from 'prop-types';

import { Description } from '../Description/Description';
import { Image } from '../Image/Image';
import { ListItemWrapper } from './ListItem.style';
import { getNameOfImage } from 'store/domains/utils';

export const ListItem = props => {
    const {
        image
    } = props;
    const text = getNameOfImage(image);

    return(
        <ListItemWrapper>
            <Image src= {image} />
            <Description text={text} />
        </ListItemWrapper>
    );
};

ListItem.propTypes = {
    image: PropTypes.object
};
ListItem.defaultProps = {
    image: {},
    text: '',
};