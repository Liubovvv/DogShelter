import React from 'react';
import { v4 } from 'uuid';
import { Flex, Box } from 'grid-styled';

import { Image } from '../Image/Image';
import { ContentBlock } from '../ContentBlock/ContentBlock';
import ImagesCountInputBlock  from './ImagesInputBlock/ImagesInputBlock';
import ImagesBlock from './ImagesBlock/ImagesBlock';


export default class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            numbers: ''
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange = e =>
        this.setState({
            numbers: e.target.value
        });

    handleOnSubmit(e) {
        e.preventDefault();
        if (!this.state.numbers.trim() || !this.isValid(this.state.numbers)) {
            alert("Incorrect data. Enter from 3 to 5");
            return;
        }
        this.props.getRandomFooterImages(this.state.numbers);
    };

    isValid = value => {
        return value >= 3 && value <= 5;
    };

    render() {
        const {
            images
        } = this.props;

        return (
            <ContentBlock title ="Look at our dogs">
                <Flex flexWrap="wrap" justifyContent="center">
                    <Box width={[1, 1, images.length/2]} px={[3, 4]} mb={[3, 3, 4]}>
                        <ImagesCountInputBlock
                            numbers={this.state.numbers}
                            handleOnChange={this.handleOnChange}
                            handleOnSubmit={this.handleOnSubmit}
                        />
                    </Box>
                    <Box width={[1, 1, (images.length/2-1)/images.length/2]} px={[4, 5, 3]} mb={3}>
                        <ImagesBlock
                            numbers={this.state.numbers}
                            images={images}
                        />
                    </Box>
                </Flex>
            </ContentBlock>
        );
    }
}



