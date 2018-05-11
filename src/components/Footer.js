import React from 'react';
import { v4 } from 'uuid';

import { Image } from "./Image";

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



