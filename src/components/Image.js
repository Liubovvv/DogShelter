import React from "react";

export const Image = props => {
    const {src, alt} = props;

    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    );
};