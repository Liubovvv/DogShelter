import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Flex, Box } from 'grid-styled';

import { FooterImage } from './ImagesBlock.style';

const ImagesBlock = props => {
    const{
        images,
    } = props;

    const number = images.length || 0;

    return(
        <Flex flexWrap="wrap" justifyContent="center">
            {
                images && images.length > 0 && images.map(
                    image => (
                        <Box key={v4()} width={[1/2, 1/2, 1/number]} my={2} px={[2, 3, 2]}>
                            <FooterImage
                                src={image}
                            />
                        </Box>
                    )
                )
            }
        </Flex>
    );
};

ImagesBlock.propTypes = {
    images: PropTypes.arrayOf( PropTypes.string ),
};

export default ImagesBlock;