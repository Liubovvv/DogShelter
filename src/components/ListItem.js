import React from 'react';
import PropTypes from 'prop-types';
import { Description } from './Description';
import {Image} from './Image';

export const ListItem = props => {
    const {
        text,
        images
    } = props;
    return(
        <div>
            <Description text={text} />
            {images.map(image =>
                <Image
                    key={image.id}
                    {...image}
                />
            )}
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