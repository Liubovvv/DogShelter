import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import {Image} from "./Image";
import { getRandomFooterImages } from '../store/domains/actions';
import { v4 } from 'uuid';


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
        const { numbers } = this.state;
        this.props.getRandomFooterImages(numbers);
    };

    render() {
        const {
            images
        } = this.props;
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <input type="text" value={this.numbers} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <input type="submit" value="Show" />
                    </div>
                    <div>
                        {images.map(image =>
                            <Image
                                key={v4()}
                                src={image}
                            />
                        )}
                    </div>
                </form>
            </div>
        );
    }
}



