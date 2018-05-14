import React from 'react';
import PropTypes from 'prop-types';

import {Text } from './Description.style';

export const Description = props => {
    const { text } = props;

    return (
        <Text>{text}</Text>
    );
};

Description.propTypes = {
    text: PropTypes.string
};