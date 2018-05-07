import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from "./ListItem";

export const List = props => {
    const {breedsInfo} = props;
    return(
        <div>
            {breedsInfo.map( breed =>
                <ListItem
                    key={breed.id}
                    text={breed.text}
                    alt={breed.image.alt}
                    src={breed.image.src}
                />
            )}
        </div>
    );
};

List.propTypes = {
    breedsInfo: PropTypes.array,
};
List.defaultProps = {
    breedsInfo: [],
};