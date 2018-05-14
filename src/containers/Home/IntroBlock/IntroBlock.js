import React from 'react';
import { Flex, Box } from 'grid-styled';

import { Image } from 'components/Image/Image';
import { Description } from 'components/Description/Description';
import { ContentBlock } from  'components/ContentBlock/ContentBlock';

export const IntroBlock = props => {
    const{ title, image, text } = props;
    return(
        <ContentBlock title={title}>
            <Flex flexWrap="wrap">
                <Box with={[1,1/2]} p={2}>
                    <Image src={image} />
                </Box>
                <Box with={[1,1/2]} p={2}>
                    <Description text={text} />
                </Box>
            </Flex>
        </ContentBlock>
    );
};

