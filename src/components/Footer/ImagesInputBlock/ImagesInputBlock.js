import React from 'react';
import PropTypes from 'prop-types';

import { ImagesInput, FindButton } from './ImagesInputBlock.style';

const ImagesInputBlock = props => {
    const{
        numbers,
        handleOnSubmit,
        handleOnChange,
    } = props;

    return(
        <form onSubmit={handleOnSubmit}>
            <ImagesInput
                placeholder="Images input"
                type="text"
                value={numbers}
                onChange={handleOnChange}
            />
            <FindButton
                type="submit"
                value="Find"
            />
        </form>
    );
};

ImagesInputBlock.propTypes = {
    numbers: PropTypes.string.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired
};

export default ImagesInputBlock;