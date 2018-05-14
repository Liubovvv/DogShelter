import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './ContentBlock.style';
import { Greeting } from '../Greeting/Greeting';

export const ContentBlock =( { title, children }) => (
    <Wrapper>
        <Greeting title={title} />
        {children}
    </Wrapper>
);

ContentBlock.propTypes = {
    title: PropTypes.string,
    alt: PropTypes.element
};
