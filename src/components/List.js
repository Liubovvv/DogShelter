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
                    {...breed}
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