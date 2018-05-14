import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import { ListItem } from '../ListItem/ListItem';
import  { ListWrapper } from './List.style';

export const List = props => {
    const {breedsInfo} = props;

    return(
        <ListWrapper>
            {breedsInfo && breedsInfo.map( breed =>
                <ListItem
                    key={ v4() }
                    image={breed}
                />
            )}
        </ListWrapper>
    );
};

List.propTypes = {
    breedsInfo: PropTypes.array,
};
List.defaultProps = {
    breedsInfo: [],
};