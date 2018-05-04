import React from "react";

export const Greeting = props => {
    const {greeting} = props;

    return (
        <div>
            Hello, {greeting}
        </div>
    );
};