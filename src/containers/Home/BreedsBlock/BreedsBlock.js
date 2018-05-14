import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

import { Flex, Box } from 'grid-styled';

import { ContentBlock } from 'components/ContentBlock/ContentBlock';
import { SeeMoreButton } from './BreedsBlock.style';
import { ListItem } from 'components/ListItem/ListItem';


class BreedsBlock extends React.Component {
    state = {
        hidden: true,
    };

    handleSeeMoreClick = event => {
        event.preventDefault();
        this.setState(({hidden}) => ({hidden: !hidden}));
    };

    render() {
        const {
            title,
            images,
            isImagesFetching,
        } = this.props;

        const {
            hidden
        } = this.state;

        const numbersOfImages = hidden ? 3 : images ? images.length : 0;

        return (
            <ContentBlock title={title}>
                <Flex flexWrap="wrap" justifyContent="center">
                    {
                        images && images.length > 0 && images.map(
                            (breedInfo, index) => {
                                return index < numbersOfImages ? (
                                    <Box key={v4()} width={[1, 1 / 3]} px={[5, 3, 4]} mb={2}>
                                        <ListItem
                                            image={breedInfo}
                                        />
                                    </Box>
                                ) : null;
                            }
                        )
                    }
                </Flex>
                {
                    !images && images.length === 0 ?
                        <p>No breeds</p>
                        :
                        (
                            <SeeMoreButton
                                type="button"
                                value={hidden ? "See More" : "Hide"}
                                onClick={this.handleSeeMoreClick}
                            />
                        )
                }
            </ContentBlock>
        );
    }
}

export default BreedsBlock;
