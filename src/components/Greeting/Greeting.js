import React from 'react';

import { Title } from './Greeting.style';

export const Greeting = props => {
    const {title} = props;
    return (
        <Title>
            {title}
        </Title>
    );
};